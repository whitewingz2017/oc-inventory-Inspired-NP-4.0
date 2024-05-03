const createBlip = (pType: string, ...args: any[]): number => {
    switch (pType) {
      case "coord": {
        const [x, y, z] = args;
        return AddBlipForCoord(x, y, z);
      }
      case "area": {
        const [x, y, z, w, h] = args;
        return AddBlipForArea(x, y, z, w, h);
      }
      case "radius": {
        const [x, y, z, r] = args;
        return AddBlipForRadius(x, y, z, r);
      }
      case "pickup": {
        const [p] = args;
        return AddBlipForPickup(p);
      }
      case "entity": {
        const [e] = args;
        return AddBlipForEntity(e);
      }
      default: {
        console.error(new Error("Invalid Blip Type"));
        return 0;
      }
    }
  };
  
  const applyBlipSettings = (pBlip: number, pText?: string, pSprite?: number, pColor?: number, pAlpha?: number, pScale?: number, pRoute?: boolean, pShort?: boolean): void => {
    if (typeof pSprite === "number") SetBlipSprite(pBlip, pSprite);
    if (typeof pColor === "number") SetBlipColour(pBlip, pColor);
    if (typeof pAlpha === "number") SetBlipAlpha(pBlip, pAlpha);
    if (typeof pScale === "number") SetBlipScale(pBlip, pScale);
    if (typeof pRoute === "boolean") SetBlipRoute(pBlip, pRoute);
    if (typeof pShort === "boolean") SetBlipAsShortRange(pBlip, pShort);
    if (typeof pText === "string") {
      BeginTextCommandSetBlipName("STRING");
      AddTextComponentString(pText);
      EndTextCommandSetBlipName(pBlip);
    }
  };
  
  export const Hud = {
    createBlip,
    applyBlipSettings
  };