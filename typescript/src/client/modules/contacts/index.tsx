import { Exports } from "../../../shared/fivem/exports";

export const Contacts = {
    RegisterAction: (contactId, action, handler) => {
      return Exports.Sync["contacts"].RegisterAction(contactId, action, handler);
    }
  };