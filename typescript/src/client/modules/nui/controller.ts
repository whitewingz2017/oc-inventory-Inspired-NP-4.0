import { Logger } from '../logger/logger';
import { GenerateKey, EncodeBase64 } from '../../../shared/anime';

class Controller {
  private _resource?: string;
  private _H?: string;
  private _I?: string;
  private _O?: string;
  private _ready?: boolean;
  private _count?: number;
  private _queue?: any[]; // Replace 'any' with a more specific type
  private _processed?: any[]; // Replace 'any' with a more specific type
  private _pending?: Map<number, any>; // Replace 'any' with a more specific type

  constructor() {
    this._onRaw = this._onRaw.bind(this);
    this._on2 = this._on2.bind(this);
    this._emitRaw = this._emitRaw.bind(this);
    this._emit2 = this._emit2.bind(this);
    this._init2 = this._init2.bind(this);
    this.processQueue = this.processQueue.bind(this);
    this.processQueueItem = this.processQueueItem.bind(this);

    this._resource = 'inventory';
    this._H = GenerateKey(64);
    this._I = GenerateKey(64);
    this._O = GenerateKey(64);
    this._ready = false;
    this._count = 0;
    this._queue = [];
    this._pending = new Map();
    this._processed = [];

    this._onRaw('__npx_sdk:init', async(_: any) => {
      try {
        if (this._ready) {
          Logger.error('[NUI] SDK already initialized');
          return;
        }
  
        this._ready = true;
        this._on2(`__nui_res:${this._resource}`, (id: number, [success, response]: [boolean, any]) => {
          const pending = this._pending.get(id);
  
          if (!pending) {
            return Logger.error(`[NUI] Invalid response received`);
          }
  
          clearTimeout(pending.timeout);
  
          if (success) {
            pending.resolve(response);
          } else {
            pending.reject(response);
          }
        });
  
        this._emitRaw('__npx_sdk:ready', EncodeBase64(`${this._H}:${this._I}:${this._O}`));
        Logger.debug('[NUI] SDK initialized');
  
        await this.processQueue();
  
      } catch(e: any) {
        Logger.error(`[NUI FATAL CRASH] ${e.message}`);
      }
    });
  }
  async processQueueItem(index: number): Promise<void> {
    if (index >= this._queue.length || !!this._processed.find((item) => item.event === this._queue[index].event)) {
      // All items processed
      return;
    }

    this._processed.push({
      ...this._queue[index]
    })
  
    const item = this._queue[index];
  
    if (item.type === 'on') {
      this._on2(item.event, item.callback);
    } else if (item.type === 'emit') {
      await new Promise(resolve => setTimeout(resolve, 1000));
      this._emit2(item.event, ...item.args);
    } else if (item.type === 'execute') {
      const pending = this._pending.get(item.metadata.id);
  
      if (!pending) {
        Logger.error(`[RPC] ${item.event} - Failed to execute queued RPC call`);
      } else {
        pending.timeout = setTimeout(() => pending.reject(new Error(`RPC timed out | ${item.event}`)), 60000);
        await new Promise(resolve => setTimeout(resolve, 1000));
        this._emit2(item.event, item.metadata, item.args);
      }
    }
  
    // Process the next item
    await this.processQueueItem.call(this, index + 1);
  }
  
  async processQueue(): Promise<void> {
    await this.processQueueItem.call(this, 0);
  }
  
  async register(event: string, callback: Function): Promise<void> {
    this._on2(`__nui_req:${event}`, async (meta: any, args: any[]) => {
      let response, success;
      const metadata = meta[0];

      if (!metadata?.id || !metadata?.resource) {
        return Logger.error(`[NUI] ${event} - Invalid metadata received`);
      }

      try {
        response = await callback(meta[1]);
        success = true;
      } catch (e) {
        response = e.message;
        success = false;
      }

      this._emit2(`__nui_res:${metadata.resource}`, metadata.id, [success, response]);
    });
  }

  remove(event: string): void {
    const hash = `__nui_req:${event}`;
    UnregisterRawNuiCallback(hash);
  }

  async execute(event: string, ...args: any[]): Promise<any> {
    const metadata = { id: ++this._count, resource: this._resource };
    const promise = new Promise((resolve, reject) => {
      let timeout;

      if (this._ready) {
        timeout = setTimeout(() => reject(new Error(`RPC timed out | ${event}`)), 60000);
      } else {
        timeout = 0;
      }

      this._pending.set(metadata.id, { resolve, reject, timeout });
    });

    promise.finally(() => this._pending.delete(metadata.id));

    if (!this._ready) {
      this._queue.push({ type: 'execute', event: `__nui_req:${event}`, metadata, args });
    } else {
      this._emit2(`__nui_req:${event}`, metadata, ...args);
    }

    return promise;
  }

  // Other methods and event handlers...

  private _onRaw(event: any, callback: any): any {
    // Register your NUI callback function
    //@ts-ignore
    RegisterNuiCallback(`${event}`, (data, cb) => {
      // Handle NUI callback logic
      cb(true)

      return callback(data.args);
    });
/*     RegisterRawNuiCallback(event, (args: any, cb: any) => {
      // cb(true);
      return callback();
    }); */
  }

  private _on2(event: string, callback: any): void {
    if (this._ready) {
      const hash = event;
      this._onRaw(hash, callback);
    }

    this._queue.push({ type: 'on', event, callback });
  }

  private _emitRaw(event: string, ...args: any[]): void {
    SendNuiMessage(JSON.stringify({ event, args }, null));
  }

  private _emit2(event: string, ...args: any[]): void {
    if (this._ready) {
      const hash = event;
      this._emitRaw(hash, ...args);
    }

    this._queue.push({ type: 'emit', event, args });
  }

  private async _init2(): Promise<void> {
    if (this._ready) {
      Logger.error('[NUI] SDK already initialized');
      return;
    }

    this._ready = true;
    this._on2(`__nui_res:${this._resource}`, (id: number, [success, response]: [boolean, any]) => {
      const pending = this._pending.get(id);

      if (!pending) {
        return Logger.error(`[NUI] Invalid response received`);
      }

      clearTimeout(pending.timeout);

      if (success) {
        pending.resolve(response);
      } else {
        pending.reject(response);
      }
    });

    this._emitRaw('__npx_sdk:ready', EncodeBase64(`${this._H}:${this._I}:${this._O}`));
    Logger.debug('[NUI] SDK initialized');

    for (const item of this._queue) {
      if (item.type === 'on') {
        this._on2(item.event, item.callback);
      } else if (item.type === 'emit') {
        setTimeout(() => this._emit2(item.event, ...item.args), 1000);
      } else if (item.type === 'execute') {
        const pending = this._pending.get(item.metadata.id);

        if (!pending) {
          Logger.error(`[RPC] ${item.event} - Failed to execute queued RPC call`);
          continue;
        }

        pending.timeout = setTimeout(() => pending.reject(new Error(`RPC timed out | ${item.event}`)), 60000);
        setTimeout(() => this._emit2(item.event, item.metadata, item.args), 1000);
      }
    }
  }
}

export { Controller };
