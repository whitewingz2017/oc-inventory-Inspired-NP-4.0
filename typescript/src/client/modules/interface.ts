import { MathUtils } from "../../shared/math";

const AddPeekEntryByModel = (pModels: string[], pData: any, pOptions: any): void => {
    globalThis.exports["np-interact"].AddPeekEntryByModel(pModels, pData, pOptions);
  };
  
  const AddPeekEntryByPolyTarget = (pEvent: string, pData: any, pOptions: any): void => {
    globalThis.exports["np-interact"].AddPeekEntryByPolyTarget(pEvent, pData, pOptions);
  };
  
  const AddPeekEntryByFlag = (pFlags: string[], pData: any, pOptions: any): void => {
    globalThis.exports["np-interact"].AddPeekEntryByFlag(pFlags, pData, pOptions);
  };
  
  const AddPeekEntryByType = (pType: string, pData: any, pOptions: any): void => {
    globalThis.exports["np-interact"].AddPeekEntryByEntityType(pType, pData, pOptions);
  };
  
  const AddInteraction = (id: string, coords: { x: number; y: number; z: number }, options: any, context: any): void => {
    const data = {
      id,
      coords: [coords.x, coords.y, coords.z],
      options,
      context,
    };
    globalThis.exports["interactions"].AddInteraction(data);
  };
  
  const AddInteractionByModel = (id: string, models: string[], options: any, context: any): void => {
    const data = {
      id,
      options,
      context,
    };
    globalThis.exports["interactions"].AddInteractionByModel(models, data);
  };
  
  const AddPlayerInteraction = (id: string, options: any, context: any): void => {
    const data = {
      id,
      options,
      context,
    };
    data.context.isPlayer = true;
    globalThis.exports["interactions"].AddPedInteraction(data);
  };
  
  const AddPedInteraction = (id: string, options: any, context: any): void => {
    const data = {
      id,
      options,
      context,
    };
    globalThis.exports["interactions"].AddPedInteraction(data);
  };
  
  const AddVehicleInteraction = (id: string, options: any, context: any): void => {
    const data = {
      id,
      options,
      context,
    };
    globalThis.exports["interactions"].AddVehicleInteraction(data);
  };
  
  const RemoveInteraction = (id: string): void => {
    globalThis.exports["interactions"].RemoveInteraction(id);
  };
  
  const RemoveVehicleInteraction = (id: string): void => {
    globalThis.exports["interactions"].RemoveVehicleInteraction(id);
  };
  
  const RemovePedInteraction = (id: string): void => {
    globalThis.exports["interactions"].RemovePedInteraction(id);
  };
  
  const client_Taskbar = (pLength: number, pName: string, pRunCheck = false, pDistCheck: { distance: number; entity: number } | null = null, pKeepWeapon = true, pVehicle: any = null): Promise<void> => {
    return new Promise((resolve) => {
      globalThis.exports["qb-taskbar"].taskBar(
        pLength,
        pName,
        pRunCheck,
        pKeepWeapon,
        pVehicle,
        false,
        resolve,
        pDistCheck == null ? undefined : pDistCheck.distance,
        pDistCheck == null ? undefined : pDistCheck.entity
      );
    });
  };
  
  const client_DoPhoneConfirmation = (pTitle: string, pText: string, pIcon: string, pTimeout: number): Promise<void> => {
    return new Promise((resolve) => {
      globalThis.exports["oc-phone"].DoPhoneConfirmation(pTitle, pText, pIcon, resolve, pTimeout);
    });
  };
  
  const DoPhoneNotification = (pTitle: string, pBody: string, pForced = true, pApp = "home-screen"): void => {
    globalThis.exports["rp-ui"].SendUIMessage({
      source: "rp-nui",
      app: "phone",
      data: {
        action: "notification",
        target_app: pApp,
        title: pTitle,
        body: pBody,
        show_even_if_app_active: pForced,
      },
    });
  };
  
  const DrawTextJS = (x: number, y: number, text: string, color: number[], scale: number, font: number | null, justification = 0, outline = true): void => {
    SetTextColour(color[0], color[1], color[2], color[3]);
    if (outline) {
      SetTextOutline();
    }
    SetTextScale(0, scale);
    SetTextFont(font != null ? font : 0);
    SetTextJustification(justification);
    if (justification === 2) SetTextWrap(0, 0.575);
    SetTextEntry("STRING");
    AddTextComponentString(text != null ? text : "Dummy text");
    EndTextCommandDisplayText(x, y);
  };
  
  const DrawTextBox = (
    coords: { x: number; y: number; z: number },
    distance: number,
    text: string,
    color: number[],
    font = 4,
    outline = true,
    background?: { width: number; height: number; color: number[] }
  ): void => {
    SetDrawOrigin(coords.x, coords.y, coords.z, 0);
    const scale = Math.max(MathUtils.MathUtils().getMapRange([0, 10], [0.4, 0.25], distance), 0.1);
    DrawTextJS(0, 0, text, color, scale, font, 0, outline);
    if (background) {
      DrawRect(
        2e-3,
        background.height / 2,
        background.width,
        background.height,
        background.color[0],
        background.color[1],
        background.color[2],
        background.color[3]
      );
    }
    ClearDrawOrigin();
  };
  
  const OpenCustomContact = (contactInfo: any, entity: number, dialogue: any, progression: boolean): void => {
    globalThis.exports["contacts"].open(contactInfo, entity, dialogue, progression, true);
  };
  
  export const Interface = {
    addPeekEntryByModel: AddPeekEntryByModel,
    addPeekEntryByTarget: AddPeekEntryByPolyTarget,
    addPeekEntryByFlag: AddPeekEntryByFlag,
    addPeekEntryByType: AddPeekEntryByType,
    addInteraction: AddInteraction,
    addInteractionByModel: AddInteractionByModel,
    addPlayerInteraction: AddPlayerInteraction,
    addPedInteraction: AddPedInteraction,
    addVehicleInteraction: AddVehicleInteraction,
    removeInteraction: RemoveInteraction,
    removePlayerInteraction: RemovePedInteraction,
    removePedInteraction: RemovePedInteraction,
    removeVehicleInteraction: RemoveVehicleInteraction,
    taskBar: client_Taskbar,
    phoneConfirmation: client_DoPhoneConfirmation,
    phoneNotification: DoPhoneNotification,
    drawText: DrawTextJS,
    drawText3D: DrawTextBox,
    customContact: OpenCustomContact,
  };