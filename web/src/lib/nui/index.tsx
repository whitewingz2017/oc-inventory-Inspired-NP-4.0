//@ts-ignore
import * as CryptoJS from 'crypto-js';

const GenerateKey = (_0x515a6f: number = 128): string => {
  return CryptoJS.lib.WordArray.random(_0x515a6f / 8).toString();
};

const EncodeAES = (_0x1398e1: string, _0x29e95c: string): string => {
  if (typeof _0x1398e1 !== 'string' || typeof _0x29e95c !== 'string') {
    return '';
  }
  return CryptoJS.AES.encrypt(_0x1398e1, _0x29e95c).toString();
};

const DecodeAES = (_0x1929f3: string, _0x595e48: string): string => {
  if (typeof _0x1929f3 !== 'string' || typeof _0x595e48 !== 'string') {
    return '';
  }
  return CryptoJS.AES.decrypt(_0x1929f3, _0x595e48).toString(CryptoJS.enc.Utf8);
};

const EncodeBase64 = (_0x4cf655: string): string => {
  if (typeof _0x4cf655 !== 'string') {
    return '';
  }
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(_0x4cf655));
};

const DecodeBase64 = (_0x1005f1: string): string => {
  if (typeof _0x1005f1 !== 'string') {
    return '';
  }
  return CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(_0x1005f1));
};

const HashHMACMD5 = (_0x298b7b: string, _0x186768: string): string => {
  return EncodeBase64(CryptoJS.HmacMD5(_0x298b7b, _0x186768).toString());
};

const StringCache: { [key: string]: string } = {};

const EncodeString = (_0xb0ce4b: string, _0x411fc3: string = GenerateKey()): string => {
  if (StringCache[_0xb0ce4b] === undefined) {
    StringCache[_0xb0ce4b] = HashHMACMD5(_0xb0ce4b, _0x411fc3);
  }
  return StringCache[_0xb0ce4b];
};

const EncodePayload = (_0x59e2cd: any, _0x1990df: string = GenerateKey()): string | undefined => {
  try {
    return EncodeAES(JSON.stringify(_0x59e2cd), _0x1990df);
  } catch (_0x23c422) {
    console.error('Failed to encode payload');
    return undefined;
  }
};

const DecodePayload = (_0x27fdd1: string, _0x4115fb: string = GenerateKey()): any | undefined => {
  try {
    return JSON.parse(DecodeAES(_0x27fdd1, _0x4115fb));
  } catch (_0x3b7e55) {
    console.error('Failed to decode payload');
    return undefined;
  }
};

const Logger = {
  warning: (_0x39cbbc: string, ..._0x37d6b5: any[]): void => {
    console.log('[WARNING] ' + _0x39cbbc, ..._0x37d6b5);
  },
  log: (_0x14d957: string, ..._0x3478bb: any[]): void => {
    return;
  },
  debug: (_0x4dea82: string, ..._0x50c8a0: any[]): void => {
    return;
  },
  error: (_0x4e2777: string, ..._0x381846: any[]): void => {
    return;
  },
};

class Controller {
  private _resource: string;
  private _devEnv2!: boolean;
  private _H!: string;
  private _I!: string;
  private _O!: string;
  private _ready: boolean;
  private _count: number;
  private _queue: any[];
  private _events: Map<string, Function>;
  private _pending: Map<number, { resolve: Function; reject: Function; timeout: number }>;

  constructor() {
    this._onRaw = this._onRaw.bind(this);
    this._on = this._on.bind(this);
    this._emitRaw = this._emitRaw.bind(this);
    this._emit = this._emit.bind(this);
    this._init = this._init.bind(this);

    this._resource = 'inventory';
    this._ready = false;
    this._count = 0;
    this._queue = [];
    this._events = new Map();
    this._pending = new Map();

    this._emitRaw('__npx_sdk:init');
    this._onRaw('__npx_sdk:ready', this._init);

    window.addEventListener('message', async ({ data: _0x503c00 }: { data: any }) => {
      const { event: _0x4626b2, args: _0x386130 } = _0x503c00;

      if (!_0x4626b2) {
        return;
      }

      const _0xc7dc39 = this._events?.get(_0x4626b2);

      if (!_0xc7dc39) {
        return;
      }

      _0xc7dc39(..._0x386130);
    });
  }

  private async _onRaw(_0x1c1e9e: string, _0x1b95ee: Function): Promise<void> {
    this._events?.set(_0x1c1e9e, _0x1b95ee);
  }

  private async _on(_0x7dcd8c: string, _0x3c6c6a: Function): Promise<void> {
    if (this._ready) {
      const _0x2bb275 = _0x7dcd8c;
      this._onRaw(_0x2bb275, _0x3c6c6a);
    } else {
      this._queue?.push({
        type: 'on',
        event: _0x7dcd8c,
        callback: _0x3c6c6a,
      });
    }
  }

  private async _emitRaw(_0x1204fc: string, ..._0x571c0c: any[]): Promise<void> {
    fetch('https://' + this._resource + '/' + _0x1204fc, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ args: _0x571c0c }),
    });
  }

  private async _emit(_0x58a2a0: string, ..._0xe8d720: any[]): Promise<void> {
    if (this._ready) {
      const _0xd5e443 = _0x58a2a0;
      this._emitRaw(_0xd5e443, ..._0xe8d720);
    } else {
      this._queue?.push({
        type: 'emit',
        event: _0x58a2a0,
        args: _0xe8d720,
      });
    }
  }

  private async _init(_0x5ccd2f: string): Promise<void> {
    if (this._ready) {
      Logger.error('[NUI] SDK already initialized');
      return;
    }

    const _0x503b57 = DecodeBase64(_0x5ccd2f);
    const _0xceac8d = _0x503b57?.split(':').filter((_0xca5d39) => _0xca5d39.length > 0);

    if (!_0xceac8d || _0xceac8d.length === 0) {
      Logger.error('SDK NUI handlers failed to initialize');
      return;
    }

    this._H = _0xceac8d[0];
    this._I = _0xceac8d[2];
    this._O = _0xceac8d[1];
    this._ready = true;

    this._on('__nui_res:' + this._resource, (_0x1442a2: string, [_0x47f05d, _0x174be2]: any[]) => {
      const _0x4d37f3 = this._pending?.get(+_0x1442a2);

      if (!_0x4d37f3) {
        return Logger.error('[NUI] Invalid response received');
      }

      clearTimeout(_0x4d37f3.timeout);

      _0x47f05d ? _0x4d37f3.resolve(_0x174be2) : _0x4d37f3.reject(_0x174be2);
    });

    for (const _0x1d36b9 of this._queue) {
      if (_0x1d36b9.type === 'on') {
        this._on(_0x1d36b9.event, _0x1d36b9.callback);
      } else {
        if (_0x1d36b9.type === 'emit') {
          this._emit(_0x1d36b9.event, ..._0x1d36b9.args);
        } else {
          if (_0x1d36b9.type === 'execute') {
            const _0x183cf2 = this._pending?.get(_0x1d36b9.metadata.id);

            if (!_0x183cf2) {
              Logger.error('[RPC] ' + _0x1d36b9.event + ' - Failed to execute queued RPC call');
              continue;
            }

            _0x183cf2.timeout = +setTimeout(() =>
              _0x183cf2.reject(
                new Error('NUI execute timed out | ' + _0x1d36b9.event)
              ),
              60000
            );

            this._emit(_0x1d36b9.event, _0x1d36b9.metadata, _0x1d36b9.args);
          }
        }
      }
    }
  }

  public async register(_0xc553a1: string, _0x1998dd: Function): Promise<void> {
    this._on('__nui_req:' + _0xc553a1, async (_0x1e8145: any, _0x1e070d: any[]) => {
      let _0x30bd05, _0x361373;
      const _0x2414e4 = _0x1e8145;

      if (!_0x2414e4?.id || !_0x2414e4?.resource) {
        return Logger.error('[NUI] ' + _0xc553a1 + ' - Invalid metadata received');
      }

      try {
        _0x30bd05 = await _0x1998dd(..._0x1e070d);
        _0x361373 = true;
      } catch (_0x49cde2: any) {
        _0x30bd05 = _0x49cde2.message;
        _0x361373 = false;
      }

      this._emit('__nui_res:' + _0x2414e4.resource, _0x2414e4.id, [_0x361373, _0x30bd05]);
    });
  }

  public async execute(_0x32deff: string, ..._0x18f64a: any[]): Promise<any> {
    const _0x182b33 = {
      id: ++this._count!,
      resource: this._resource!,
    };

    const _0x3133ad = _0x18f64a[_0x18f64a.length - 1];
    const _0x58583b = typeof _0x3133ad === 'object' && _0x3133ad?.mockupData;

    if (!this._devEnv2 && _0x58583b) {
      _0x18f64a.splice(_0x18f64a.length - 1, 1);
    } else {
      if (this._devEnv2 && _0x58583b) {
        const _0x3307f0 = (_0x3133ad?.delay != null) ? _0x3133ad.delay : 0;

        if (_0x3307f0 > 0) {
          await new Promise((_0x71d2b8) => setTimeout(_0x71d2b8, _0x3307f0));
        }

        return _0x3133ad?.mockupData ?? null;
      }
    }

    const _0x5a8f09 = new Promise<void>((_0x129294, _0x13e489) => {
      let _0x2cb590;

      if (this._ready) {
        _0x2cb590 = +setTimeout(
          () => _0x13e489(new Error('RPC timed out | ' + _0x32deff)),
          60000
        );
      } else {
        _0x2cb590 = 0;
      }

      this._pending?.set(_0x182b33.id, {
        resolve: _0x129294,
        reject: _0x13e489,
        timeout: _0x2cb590,
      });
    });

    _0x5a8f09.finally(() =>
      this._pending?.delete(_0x182b33.id)
    );

    if (!this._ready) {
      this._queue?.push({
        type: 'execute',
        event: '__nui_req:' + _0x32deff,
        metadata: _0x182b33,
        args: _0x18f64a,
      });
    } else {
      this._emit('__nui_req:' + _0x32deff, _0x182b33, ..._0x18f64a);
    }

    return _0x5a8f09;
  }
}

export const NUI = new Controller();