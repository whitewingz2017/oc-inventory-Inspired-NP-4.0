import { Exports } from "../../../../shared/fivem/exports";
import { NUI } from "..";

class RegisterDefault {
    constructor() {
      const sendNuiEvent = async (event: string, args: any[]) => {
        return await NUI.execute(event, ...args);
      };
      Exports.Async("sendNuiEvent", sendNuiEvent);
  
      const registerNuiEvent = (event: string, callback: Function) => {
        NUI.register(event, callback);
        return true;
      };
      Exports.Sync("registerNuiEvent", registerNuiEvent);
  
      const removeNuiEvent = (event: string) => {
        NUI.remove(event);
      };
      Exports.Sync("removeNuiEvent", removeNuiEvent);
    }
  }
  
  export default RegisterDefault;