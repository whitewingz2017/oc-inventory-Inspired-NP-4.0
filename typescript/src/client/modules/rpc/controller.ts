import * as msgpack from '@msgpack/msgpack';
const TextEncoder = require('util').TextEncoder;
const TextDecoder = require('util').TextDecoder;
class RPCController {
  private functions: Map<string, Function> = new Map();
  private promises: Map<number, { resolve: Function; reject: Function }> = new Map();
  private resource: string = GetCurrentResourceName();
  private callIdentifier: number = 0;

  constructor() {
    //@ts-ignore
    RegisterNetEvent('rpc:request');
    //@ts-ignore
    RegisterNetEvent('rpc:response');

    onNet('rpc:request', this.handleRPCRequest.bind(this));
    onNet('rpc:response', this.handleRPCResponse.bind(this));
  }

  private triggerNetEvent(pEvent: string, ...params: any[]): void {
    const payload: any = params;

    if (payload.length < 5000) {
      TriggerServerEventInternal(pEvent, payload, payload.length);
    } else {
      TriggerLatentServerEventInternal(pEvent, payload, payload.length, 128000);
    }
  }

  private paramPacker(...params: any[]): any[] {
    return params.map((param) => ({ param }));
  }

  private paramUnpacker(params: any[]): any[] {
    return params.map((idx) => idx['param']);
  }

  public async rpcRegister(name: string, func: Function): Promise<void> {
    this.functions.set(name, func);
  }

  public async rpcExecute(name: string, ...params: any[]): Promise<any[]> {
    const callID = this.callIdentifier;
    this.callIdentifier++;

    const promise = new Promise<any[]>((resolve, reject) => {
      this.promises.set(callID, { resolve, reject });
    });

    this.triggerNetEvent('rpc:request', this.resource, name, callID, params, false);

    const clearPromise = new Promise<any[]>((resolve) => {
      setTimeout(() => {
        if (this.promises.has(callID)) {
          this.promises.delete(callID);
        }
        return resolve([]);
      }, 20000);
    });

    return await Promise.race([promise, clearPromise]);
  }

  private rpcResponse(origin: string, callID: number, response: any[], boolean: boolean): void {
    if (this.resource === origin && this.promises.has(callID)) {
      if (boolean) {
        response = this.paramUnpacker(response);
      }

      this.promises.get(callID).resolve(response);
      this.promises.delete(callID);
    }
  }

  private async rpcRequest(origin: string, name: string, callID: number, params: any[], boolean: boolean): Promise<void> {
    if (!this.functions.has(name)) {
      return;
    }

    const selectFunc = this.functions.get(name);
    let response;

    if (boolean) {
      params = this.paramUnpacker(params);
    }

    try {
      response = await selectFunc(...params);
    } catch (error) {
      emit('rpc:client:error', this.resource, origin, name, error.message);
    }

    if (typeof response === 'undefined') {
      response = [];
    } else {
      if (boolean) {
        response = this.paramPacker(response);
      }
    }

    this.triggerNetEvent('rpc:response', origin, callID, response, boolean);
  }

  private handleRPCRequest(origin: string, name: string, callID: number, params: any[], boolean: boolean): void {
    this.rpcRequest(origin, name, callID, params, boolean);
  }

  private handleRPCResponse(origin: string, callID: number, response: any[], boolean: boolean): void {
    this.rpcResponse(origin, callID, response, boolean);
  }
}

const rpcController = new RPCController();

const RPC = {
  register: rpcController.rpcRegister.bind(rpcController),
  execute: rpcController.rpcExecute.bind(rpcController),
};

export default RPC;