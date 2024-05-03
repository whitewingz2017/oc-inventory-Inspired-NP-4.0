// Define the Sync namespace
namespace Sync {
    // Define the RequestSyncExecution function
    export function RequestSyncExecution(native: string, entity: number, ...args: any[]): void {
        if (DoesEntityExist(entity)) {
            TriggerServerEvent(
                'sync:request',
                GetInvokingResource(),
                native,
                GetPlayerServerId(NetworkGetEntityOwner(entity)),
                NetworkGetNetworkIdFromEntity(entity),
                ...args
            );
        }
    }

    // Define the DeleteVehicle function
    export function DeleteVehicle(vehicle: number): void {
        if (NetworkHasControlOfEntity(vehicle)) {
            DeleteVehicle(vehicle);
        } else {
            RequestSyncExecution('DeleteVehicle', vehicle);
        }
    }

    // Define the DeleteEntity function
    export function DeleteEntity(entity: number): void {
        if (NetworkHasControlOfEntity(entity)) {
            DeleteEntity(entity);
        } else {
            RequestSyncExecution('DeleteEntity', entity);
        }
    }

    // Define the DeletePed function
    export function DeletePed(ped: number): void {
        if (NetworkHasControlOfEntity(ped)) {
            DeletePed(ped);
        } else {
            RequestSyncExecution('DeletePed', ped);
        }
    }

    // Define the DeleteObject function
    export function DeleteObject(object: number): void {
        if (NetworkHasControlOfEntity(object)) {
            DeleteObject(object);
        } else {
            RequestSyncExecution('DeleteObject', object);
        }
    }

    // Define the SetVehicleFuelLevel function
    export function SetVehicleFuelLevel(vehicle: number, level: number): void {
        if (NetworkHasControlOfEntity(vehicle)) {
            SetVehicleFuelLevel(vehicle, level);
        } else {
            RequestSyncExecution('SetVehicleFuelLevel', vehicle, level);
        }
    }

    // Define the SetVehicleTyreBurst function
    export function SetVehicleTyreBurst(vehicle: number, index: number, onRim: boolean, p3: boolean): void {
        if (NetworkHasControlOfEntity(vehicle)) {
            SetVehicleTyreBurst(vehicle, index, onRim, p3);
        } else {
            RequestSyncExecution('SetVehicleTyreBurst', vehicle, index, onRim, p3);
        }
    }

    // Define the SetVehicleDoorShut function
    export function SetVehicleDoorShut(vehicle: number, doorIndex: number, closeInstantly: boolean): void {
        if (NetworkHasControlOfEntity(vehicle)) {
            SetVehicleDoorShut(vehicle, doorIndex, closeInstantly);
        } else {
            RequestSyncExecution('SetVehicleDoorShut', vehicle, doorIndex, closeInstantly);
        }
    }

    // Define the SetVehicleDoorOpen function
    export function SetVehicleDoorOpen(vehicle: number, doorIndex: number, loose: boolean, openInstantly: boolean): void {
        if (NetworkHasControlOfEntity(vehicle)) {
            SetVehicleDoorOpen(vehicle, doorIndex, loose, openInstantly);
        } else {
            RequestSyncExecution('SetVehicleDoorOpen', vehicle, doorIndex, loose, openInstantly);
        }
    }

    // Define the SetVehicleDoorBroken function
    export function SetVehicleDoorBroken(vehicle: number, doorIndex: number, deleteDoor: boolean): void {
        if (NetworkHasControlOfEntity(vehicle)) {
            SetVehicleDoorBroken(vehicle, doorIndex, deleteDoor);
        } else {
            RequestSyncExecution('SetVehicleDoorBroken', vehicle, doorIndex, deleteDoor);
        }
    }

    // Define the SetVehicleEngineOn function
    export function SetVehicleEngineOn(vehicle: number, value: boolean, instantly: boolean, noAutoTurnOn: boolean): void {
        if (NetworkHasControlOfEntity(vehicle)) {
            SetVehicleEngineOn(vehicle, value, instantly, noAutoTurnOn);
        } else {
            RequestSyncExecution('SetVehicleEngineOn', vehicle, value, instantly, noAutoTurnOn);
        }
    }

    // Define the SetVehicleUndriveable function
    export function SetVehicleUndriveable(vehicle: number, toggle: boolean): void {
        if (NetworkHasControlOfEntity(vehicle)) {
            SetVehicleUndriveable(vehicle, toggle);
        } else {
            RequestSyncExecution('SetVehicleUndriveable', vehicle, toggle);
        }
    }

    // Define the SetVehicleHandbrake function
    export function SetVehicleHandbrake(vehicle: number, toggle: boolean): void {
        if (NetworkHasControlOfEntity(vehicle)) {
            SetVehicleHandbrake(vehicle, toggle);
        } else {
            RequestSyncExecution('SetVehicleHandbrake', vehicle, toggle);
        }
    }

    // Define the DecorSetFloat function
    export function DecorSetFloat(entity: number, propertyName: string, value: number): void {
        if (NetworkHasControlOfEntity(entity)) {
            DecorSetFloat(entity, propertyName, value);
        } else {
            RequestSyncExecution('DecorSetFloat', entity, propertyName, value);
        }
    }

    // Define the DecorSetBool function
    export function DecorSetBool(entity: number, propertyName: string, value: boolean): void {
        if (NetworkHasControlOfEntity(entity)) {
            DecorSetBool(entity, propertyName, value);
        } else {
            RequestSyncExecution('DecorSetBool', entity, propertyName, value);
        }
    }

    // Define the DecorSetInt function
    export function DecorSetInt(entity: number, propertyName: string, value: number): void {
        if (NetworkHasControlOfEntity(entity)) {
            DecorSetInt(entity, propertyName, value);
        } else {
            RequestSyncExecution('DecorSetInt', entity, propertyName, value);
        }
    }

    // Define the DetachEntity function
    export function DetachEntity(entity: number, p1: boolean, collision: boolean): void {
        if (NetworkHasControlOfEntity(entity)) {
            DetachEntity(entity, p1, collision);
        } else {
            RequestSyncExecution('DetachEntity', entity, p1, collision);
        }
    }

    // Define the SetEntityCoords function
    export function SetEntityCoords(entity: number, xPos: number, yPos: number, zPos: number, xAxis: boolean, yAxis: boolean, zAxis: boolean, clearArea: boolean): void {
        if (NetworkHasControlOfEntity(entity)) {
            SetEntityCoords(entity, xPos, yPos, zPos, xAxis, yAxis, zAxis, clearArea);
        } else {
            RequestSyncExecution('SetEntityCoords', entity, xPos, yPos, zPos, xAxis, yAxis, zAxis, clearArea);
        }
    }

    // Define the SetEntityHeading function
    export function SetEntityHeading(entity: number, heading: number): void {
        if (NetworkHasControlOfEntity(entity)) {
            SetEntityHeading(entity, heading);
        } else {
            RequestSyncExecution('SetEntityHeading', entity, heading);
        }
    }

    // Define the FreezeEntityPosition function
    export function FreezeEntityPosition(entity: number, freeze: boolean): void {
        if (NetworkHasControlOfEntity(entity)) {
            FreezeEntityPosition(entity, freeze);
        } else {
            RequestSyncExecution('FreezeEntityPosition', entity, freeze);
        }
    }

    // Define the SetVehicleDoorsLocked function
    export function SetVehicleDoorsLocked(entity: number, status: number): void {
        if (NetworkHasControlOfEntity(entity)) {
            SetVehicleDoorsLocked(entity, status);
        } else {
            RequestSyncExecution('SetVehicleDoorsLocked', entity, status);
        }
    }

    // Define the NetworkExplodeVehicle function
    export function NetworkExplodeVehicle(vehicle: number, isAudible: boolean, isInvisible: boolean, p3: boolean): void {
        if (NetworkHasControlOfEntity(vehicle)) {
            NetworkExplodeVehicle(vehicle, isAudible, isInvisible, p3);
        } else {
            RequestSyncExecution('NetworkExplodeVehicle', vehicle, isAudible, isInvisible, p3);
        }
    }

    // Define the SetBoatAnchor function
    export function SetBoatAnchor(vehicle: number, state: boolean): void {
        if (NetworkHasControlOfEntity(vehicle)) {
            SetBoatAnchor(vehicle, state);
        } else {
            RequestSyncExecution('SetBoatAnchor', vehicle, state);
        }
    }

    // Define the SetBoatFrozenWhenAnchored function
    export function SetBoatFrozenWhenAnchored(vehicle: number, state: boolean): void {
        if (NetworkHasControlOfEntity(vehicle)) {
            SetBoatFrozenWhenAnchored(vehicle, state);
        } else {
            RequestSyncExecution('SetBoatFrozenWhenAnchored', vehicle, state);
        }
    }

    // Define the SetForcedBoatLocationWhenAnchored function
    export function SetForcedBoatLocationWhenAnchored(vehicle: number, state: boolean): void {
        if (NetworkHasControlOfEntity(vehicle)) {
            SetForcedBoatLocationWhenAnchored(vehicle, state);
        } else {
            RequestSyncExecution('SetForcedBoatLocationWhenAnchored', vehicle, state);
        }
    }

    // Define the SetVehicleOnGroundProperly function
    export function SetVehicleOnGroundProperly(vehicle: number): void {
        if (NetworkHasControlOfEntity(vehicle)) {
            SetVehicleOnGroundProperly(vehicle);
        } else {
            RequestSyncExecution('SetVehicleOnGroundProperly', vehicle);
        }
    }

    // Define the SetVehicleTyreFixed function
    export function SetVehicleTyreFixed(vehicle: number, index: number): void {
        if (NetworkHasControlOfEntity(vehicle)) {
            SetVehicleTyreFixed(vehicle, index);
        } else {
            RequestSyncExecution('SetVehicleTyreFixed', vehicle, index);
        }
    }

    // Define the SetVehicleEngineHealth function
    export function SetVehicleEngineHealth(vehicle: number, health: number): void {
        if (NetworkHasControlOfEntity(vehicle)) {
            SetVehicleEngineHealth(vehicle, health);
        } else {
            RequestSyncExecution('SetVehicleEngineHealth', vehicle, health);
        }
    }

    // Define the SetVehicleBodyHealth function
    export function SetVehicleBodyHealth(vehicle: number, health: number): void {
        if (NetworkHasControlOfEntity(vehicle)) {
            SetVehicleBodyHealth(vehicle, health);
        } else {
            RequestSyncExecution('SetVehicleBodyHealth', vehicle, health);
        }
    }

    // Define the SetVehicleDeformationFixed function
    export function SetVehicleDeformationFixed(vehicle: number): void {
        if (NetworkHasControlOfEntity(vehicle)) {
            SetVehicleDeformationFixed(vehicle);
        } else {
            RequestSyncExecution('SetVehicleDeformationFixed', vehicle);
        }
    }

    // Define the SetVehicleFixed function
    export function SetVehicleFixed(vehicle: number): void {
        if (NetworkHasControlOfEntity(vehicle)) {
            SetVehicleFixed(vehicle);
        } else {
            RequestSyncExecution('SetVehicleFixed', vehicle);
        }
    }

    // Define the SetEntityAsNoLongerNeeded function
    export function SetEntityAsNoLongerNeeded(entity: number): void {
        if (NetworkHasControlOfEntity(entity)) {
            SetEntityAsNoLongerNeeded(entity);
        } else {
            RequestSyncExecution('SetEntityAsNoLongerNeeded', entity);
        }
    }

    // Define the SetPedKeepTask function
    export function SetPedKeepTask(ped: number, keepTask: boolean): void {
        if (NetworkHasControlOfEntity(ped)) {
            SetPedKeepTask(ped, keepTask);
        } else {
            RequestSyncExecution('SetPedKeepTask', ped, keepTask);
        }
    }

    // Define the SetVehicleMods function
    export function SetVehicleMods(vehicle: number, mods: any): void {
        if (NetworkHasControlOfEntity(vehicle)) {
            global.exports['rp-vehicles'].SetVehicleMods(vehicle, mods);
        } else {
            RequestSyncExecution('SetVehicleMods', vehicle, mods);
        }
    }

    // Define the SetVehicleAppearance function
    export function SetVehicleAppearance(vehicle: number, appearance: any): void {
        if (NetworkHasControlOfEntity(vehicle)) {
            global.exports['rp-vehicles'].SetVehicleAppearance(vehicle, appearance);
        } else {
            RequestSyncExecution('SetVehicleAppearance', vehicle, appearance);
        }
    }

    // Define the SetVehicleTyresCanBurst function
    export function SetVehicleTyresCanBurst(vehicle: number, enabled: boolean): void {
        if (NetworkHasControlOfEntity(vehicle)) {
            SetVehicleTyresCanBurst(vehicle, enabled);
        } else {
            RequestSyncExecution('SetVehicleTyresCanBurst', vehicle, enabled);
        }
    }
}
