import { EncodeString, EncodePayload, DecodePayload, GenerateKey } from "../../../shared/anime";
import { Logger } from "../logger/logger";

// Private WeakMap instances
let _resource2 = new WeakMap<Controller, string>();
let _H2 = new WeakMap<Controller, string>();
let _I2 = new WeakMap<Controller, string>();
let _O2 = new WeakMap<Controller, string>();
let _ready2 = new WeakMap<Controller, boolean>();
let _count: any = new WeakMap<Controller, number>();
let _queue = new WeakMap<Controller, Array<{ type: string, event: string, metadata: any, args: any[] }>>();
let _pending2 = new WeakMap<Controller, Map<number, { resolve: (value?: unknown) => void, reject: (reason?: any) => void, timeout: NodeJS.Timeout }>>();

// Private WeakSet instances
let _onRaw = new WeakMap<Controller, (event: string, callback: (data: any) => void) => void>();
let _on2 = new WeakMap<Controller, (event: string, callback: (meta: any, args: any[]) => void) => void>();
let _emitRaw = new WeakMap<Controller, (event: string, ...args: any[]) => void>();
let _emit2 = new WeakMap<Controller, (event: string, ...args: any[]) => void>();
let _init2 = new WeakMap<Controller, () => Promise<void>>();

class Controller {
  constructor() {
    _onRaw.set(this, (event, callback) => { /* implementation */ });
    _on2.set(this, (event, callback) => { /* implementation */ });
    _emitRaw.set(this, (event, ...args) => { /* implementation */ });
    _emit2.set(this, (event, ...args) => { /* implementation */ });
    _init2.set(this, async () => { /* implementation */ });

    // Initializing private variables
    _resource2.set(this, GetCurrentResourceName());
    _H2.set(this, GenerateKey(64));
    _I2.set(this, GenerateKey(64));
    _O2.set(this, GenerateKey(64));
    _ready2.set(this, false);
    _count.set(this, 0);
    _queue.set(this, []);
    _pending2.set(this, new Map());

    // Registering NUI callback for initialization
    _onRaw.get(this)("__npx_sdk:init", _init2.get(this).bind(this));
  }

  async register(event: string, callback: (...args: any[]) => Promise<void>) {
    _on2.get(this)(`__nui_req:${event}`, async (meta, args) => {
      let response: any, success: boolean;
      const metadata = DecodePayload(meta, _I2.get(this));

      if (!metadata || !metadata.id || !metadata.resource) {
        return Logger.error(`[NUI] ${event} - Invalid metadata received`);
      }

      try {
        response = await callback(...args);
        success = true;
      } catch (e) {
        response = e.message;
        success = false;
      }

      _emit2.get(this)(`__nui_res:${metadata.resource}`, metadata.id, [success, response]);
    });
  }

  remove(event: string) {
    const hash = EncodeString(`__nui_req:${event}`, _H2.get(this));
    UnregisterRawNuiCallback(hash);
  }

  async execute(event: string, ...args: any[]) {
    let count = _count.get(this);
    const metadata = { id: ++count, resource: _resource2.get(this) };
    const promise = new Promise<void>((resolve, reject) => {
        let timeout;

        if (_ready2.get(this)) {
            timeout = setTimeout(() => reject(new Error(`RPC timed out | ${event}`)), 60000);
        } else {
            timeout = 0;
        }

        _pending2.get(this).set(metadata.id, { resolve, reject, timeout });
    });

    promise.finally(() => _pending2.get(this).delete(metadata.id));

    if (!_ready2.get(this)) {
      _queue.get(this).push({ type: "execute", event: `__nui_req:${event}`, metadata, args });
    } else {
      _emit2.get(this)(`__nui_req:${event}`, EncodePayload(metadata, _O2.get(this)), args);
    }

    return promise;
  }
}

// Adding the controller to the default export
export default Controller;