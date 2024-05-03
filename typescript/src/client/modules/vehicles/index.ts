import { GetEntityStateValue } from "../../../shared/fivem/statebags";
import { Exports } from "../../../shared/fivem/exports";

export {
  GetFuelLevel,
  GetIdentifier,
  GetMetadata,
  HasKey,
  client_IsVinScratched as IsVinScratched,
  SwapSeat,
  client_TurnOffEngine as TurnOffEngine,
  client_TurnOnEngine as TurnOnEngine
};

function client_TurnOnEngine(pVehicle: any): void {
  Exports.Sync["rp-vehicles"].TurnOnEngine(pVehicle);
}

function client_TurnOffEngine(pVehicle: any): void {
  Exports.Sync["rp-vehicles"].TurnOffEngine(pVehicle);
}

function HasKey(pVehicle: any): boolean {
  return Exports.Sync["rp-vehicles"].HasVehicleKey(pVehicle);
}

function GetMetadata(pVehicle: any, pKey: string): any {
  const data = GetEntityStateValue(pVehicle, "data");
  return pKey ? (data == null ? undefined : data[pKey]) : data;
}

function GetIdentifier(pVehicle: any): any {
  return GetEntityStateValue(pVehicle, "vin");
}

function client_IsVinScratched(pVehicle: any): any {
  return GetEntityStateValue(pVehicle, "vinScratched");
}

function SwapSeat(pSeat: any, pVehicle: any): void {
  Exports.Sync["rp-vehicles"].SwapVehicleSeat(pSeat, pVehicle);
}

function GetFuelLevel(pVehicle: any): number {
    var _a;
    return (_a = GetMetadata(pVehicle, "fuel")) != null ? _a : 0;
}
