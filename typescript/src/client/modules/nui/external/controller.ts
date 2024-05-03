import { Exports } from "../../../../shared/fivem/exports";
import { Utils } from "../../../../shared/utils";

class Controller {
    private _resource3: string | undefined;
    private _ready3: boolean | undefined;
    private _registeredEvents: Map<string, Function> = new Map();

    constructor(resourceName: string) {
      this._resource3 = resourceName;
      this._ready3 = false;
  
      const currentResourceName = GetCurrentResourceName();
  
      on("onResourceStop", (resourceName2) => {
        if (resourceName2 === currentResourceName) {
          for (const [event, callback] of this._registeredEvents.entries()) {
            Exports.Sync[this._resource3].removeNuiEvent(event);
          }
        }
      });
  
      on("onResourceStart", async (resourceName2) => {
        if (resourceName2 === this._resource3) {
          await Utils.waitForCondition(() => GetResourceState(this._resource3) === "started", 1e4);
  
          if (this._ready3) {
            for (const [event, callback] of this._registeredEvents.entries()) {
              Exports.Sync[this._resource3].removeNuiEvent(event);
              this.register(event, callback);
            }
          }
  
          this._ready3 = true;
        }
  
        if (resourceName2 === currentResourceName) {
          await Utils.waitForCondition(() => GetResourceState(this._resource3) === "started", 1e4);
          this._ready3 = true;
        }
      });
    }
  
    async execute(event: string, ...args: any[]) {
      return await Exports.Async[this._resource3].sendNuiEvent(event, args);
    }
  
    async register(event: string, callback: Function) {
      await Utils.waitForCondition(() => this._ready3, 1e4);
  
      const result = Exports.Sync[this._resource3].registerNuiEvent(event, callback);
  
      if (result) {
        this._registeredEvents.set(event, callback);
      }
    }
  }

    export default Controller;