import { Utils } from '../../../shared/utils';
import Hashing from '../../../shared/hashing'; // Assuming the module path for 'Hashing'
import * as msgpack from '@msgpack/msgpack';

function msgpack_pack(obj: any): Uint8Array {
    return msgpack.encode(obj);
}

function msgpack_unpack(data: Uint8Array): any {
    return msgpack.decode(data);
}


class Controller {
  private _hashing: any;

  constructor() {
    const ResourceName = GetCurrentResourceName();
    const convarId = Utils.getStringHash(`__npx_sdk:${ResourceName}:token`);
    const token = GetConvar(convarId, "");

    this._hashing = new Hashing(token, "0xB21A8464"); // Replace with actual token value
  }

  on(event: string, callback: (...args: any[]) => void): void {
    const hash = this._hashing.hashString(event);
    on(hash, callback);
  }

  onNet(event: string, callback: (...args: any[]) => void): void {
    const hash = this._hashing.hashString(event);
    onNet(hash, callback);

    const hashCompressed = this._hashing.hashString(`${event}-c`);
    onNet(hashCompressed, (payload: any) => {
      const decompressed: any = Utils.inflate(payload, () => {});
      const unpacked = msgpack_unpack(decompressed);
      return callback(...unpacked);
    });
  }

  emit(event: string, ...args: any[]): void {
    const hash = this._hashing.hashString(event);
    emit(hash, ...args);
  }

  emitNet(event: string, ...args: any[]): void {
    let payload: any = msgpack_pack(args);
    let byteLength = payload.length;
    const hash = this._hashing.hashString(event);

    if (byteLength < 16000) {
      TriggerServerEventInternal(hash, payload, payload.length);
    } else {
      TriggerLatentServerEventInternal(hash, payload, payload.length, 128000);
    }
  }
}

export default Controller;
