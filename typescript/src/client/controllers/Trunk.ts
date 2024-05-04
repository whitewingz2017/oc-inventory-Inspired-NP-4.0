import { Vector3 } from "../../shared/classes/vector";
import { Interface } from "../modules/interface";
import { updateInventory } from "./Exports";
import { giveItem } from "./Callbacks";

export let inTrunk = false
export let trunkPlate = null

export async function initTrunk(): Promise<void> {
    // console.log("MAINIT TRUNK")
    emit('interactions:toggle')
    const CalculateOffsets = (pEntity: any) => {
        const pDimensions = GetModelDimensions(GetEntityModel(pEntity))
        const pMinSize = pDimensions[0]
        const pMaxSize = pDimensions[1]
        const pOffset = GetOffsetFromEntityInWorldCoords(pEntity, pMaxSize[0] / 2, pMaxSize[1], 0)
        const pEngine = GetWorldPositionOfEntityBone(pEntity, GetEntityBoneIndexByName(pEntity, 'engine'))
        const pOverheat = GetWorldPositionOfEntityBone(pEntity, GetEntityBoneIndexByName(pEntity, 'overheat'))
        const EngineCoords = new Vector3(pEngine)
        const OverHeatCoords = new Vector3(pOverheat)

        const pEngineDistance = new Vector3(pOffset).getDistance(EngineCoords.x, EngineCoords.y, EngineCoords.z)
        const pOverheatDistance = new Vector3(pOffset).getDistance(OverHeatCoords.x, OverHeatCoords.y, OverHeatCoords.z)
        const pCalculate = Math.abs(pMaxSize[1] - pMinSize[1]) / 2
        if (pEngineDistance <= pCalculate || pOverheatDistance <= pCalculate) {
            return [
                GetOffsetFromEntityInWorldCoords(pEntity, 0, pMinSize[1] - 0.5, 0),
                false,
            ]
        }
        return [
            GetOffsetFromEntityInWorldCoords(pEntity, 0, pMaxSize[1] + 0.5, 0),
            true,
        ]
    }
    
    // let _0x25187c = {
    //     id: "open_compactor",
    //     label: "Open Compactor",
    //     eventSDK: "np-jobs:sanitation:openCompactor",
    //     parameters: []
    //   };
    //Give Items Function
    var _0x5b59c8 = {
        isEnabled: function () {
          return giveItem;
        },
        distance: {
          use: 2,
          draw: 3
        }
      };
    Interface.addPlayerInteraction("inventory_give", [{
        id: "inventory_give",
        label: "Give",
        eventSDK: "inventory:giveItem",
        parameters: {}
      }], _0x5b59c8);

    Interface.addVehicleInteraction("vehicle:engineBay", [
        {
            id: "vehicle_engine_bay",
            eventSDK: "vehicles:openEngineBay",
            label: "Open Engine Bay",
            parameters: {}
        }
    ], {
        distance: {
            draw: 8,
            use: 5
        },
        bone: "engine",
        isEnabled: function(pEntity) {
            var isDoorOpen = GetVehicleDoorAngleRatio(pEntity, 4) > 0.1;
            return isDoorOpen;
        },
        isToggled: true
    });
    // Interface.addVehicleInteraction("vehicle:engineBay", [
    //     {
    //         id: "vehicle_engine_bay",
    //         eventSDK: "vehicles:openEngineBay",
    //         label: "Open Engine Bay",
    //         parameters: {}
    //     }
    // ], {
    //     distance: {
    //         draw: 8,
    //         use: 5
    //     },
    //     bone: "trunk",
    //     isEnabled: function(pEntity) {
    //         var isDoorOpen = GetVehicleDoorAngleRatio(pEntity, 4) > 0.1;
    //         return isDoorOpen;
    //     },
    //     isToggled: false
    // });
    Interface.addVehicleInteraction('vehicle:trunk', [
        {
            id: 'trunk_veh',
            label: 'View Trunk',
            event: 'inventory:openTrunk',
            parameters: {}
        }
    ], {
        distance: {
            draw: 8,
            use: 3
        },
        isToggled: true,
        offset: (pEntity: any) => {
            const pModel = GetEntityModel(pEntity)
            const pDimensions = GetModelDimensions(pModel)
            const pMinSize = pDimensions[0]
            const pMaxSize = pDimensions[1]
            const pCalculate = [0, -pMaxSize[1] + pMaxSize[1] / 10, (pMaxSize[2] + pMinSize[2]) / 4]
            const pOffsets = CalculateOffsets(pEntity)
            let Calc1 = pCalculate[1]
            return (
                pOffsets[1] && (Calc1 = pMaxSize[1] - pMaxSize[1] / 10), [pCalculate[0], Calc1, pCalculate[2]]
            )
        },
        isEnabled: (pEntity: any) => {
            const LockState = GetVehicleDoorLockStatus(pEntity)
            const inVehicle = IsPedInAnyVehicle(PlayerPedId(), false)
            var isDoorOpen = GetVehicleDoorAngleRatio(pEntity, 5) > 0.1;
            // console.log("LOCK STATE", LockState,Number(LockState) !== Number(2),!inTrunk,!inVehicle, inVehicle,Number(LockState) !== Number(2) || !inVehicle)
            return Number(LockState) === Number(1) || !inVehicle
            // return true
        }
    })
    Interface.addVehicleInteraction('trunk-close', [
        {
            id: 'trunk-close',
            label: 'Close Trunk',
            event: 'inventory:closeTrunk',
            parameters: {}
        }
    ], {
        distance: {
            draw: 8,
            use: 3
        },
        isToggled: true,
        offset: (pEntity: any) => {
            const pModel = GetEntityModel(pEntity)
            const pDimensions = GetModelDimensions(pModel)
            const pMinSize = pDimensions[0]
            const pMaxSize = pDimensions[1]
            const pCalculate = [0, -pMaxSize[1] + pMaxSize[1] / 10, (pMaxSize[2] + pMinSize[2]) / 4]
            const pOffsets = CalculateOffsets(pEntity)
            let Calc1 = pCalculate[1]
            return (
                pOffsets[1] && (Calc1 = pMaxSize[1] - pMaxSize[1] / 10), [pCalculate[0], Calc1, pCalculate[2]]
            )
        },
        isEnabled: (pEntity: any) => {
            var isDoorOpen = GetVehicleDoorAngleRatio(pEntity, 5) > 0.1;
            return isDoorOpen
        }
    })
}

on('inventory:openTrunk', async(Parameters: any, Entity: any) => {
    const LockState = GetVehicleDoorLockStatus(Entity)
    let cid = global.exports['isPed'].isPed('cid')
    var _0x407527 = PlayerPedId();
    var _0x2350cc = new Vector3(GetOffsetFromEntityInWorldCoords(_0x407527, 0, 0.5, 0));
    var _0x460859 = new Vector3(GetEntityCoords(Entity));
    var Model = GetEntityModel(Entity);
    var AName = GetEntityArchetypeName(Entity);
    var Class = GetVehicleClass(Entity);
    var identifier = global.exports['rp-vehicles'].GetVehicleIdentifier(Entity)
    const pEngineDistance = _0x2350cc.getDistance(_0x460859.x, _0x460859.y, _0x460859.z)
    // console.log("FUCKING OPEN THE FUCKING TRUNK",LockState,pEngineDistance)
    // console.log("Model,AName, AName ?? Model",identifier,Class,AName, AName ?? Model)
    inTrunk = true
    // trunkPlate = GetVehicleNumberPlateText(Entity)
    trunkPlate = identifier + '::'+Class+'::'+ AName ?? Model
    // console.log("PARAM", Parameters, Entity)
    if(LockState === 2){
        return emit('DoLongHudText', 'The vehicle is locked.',2)
    }
    // Add checks for taskbar active ect.
   let data = {
        itemAction: 'openTrunk',
        Plate: trunkPlate,
    }
    // RPC.execute('inventory:additionalInventoriesClear')
    RPC.execute('inventory:additionalInventoriesAdd', data)
    const Inventory = await RPC.execute('inventory:getInventories',cid, IsPedInVehicle(PlayerPedId(), GetVehiclePedIsIn(PlayerPedId(), false), false), GetVehicleNumberPlateText(GetVehiclePedIsIn(PlayerPedId(), false)), inTrunk, trunkPlate)

    SendNUIMessage({
        Inventory: Inventory,
    })

    SendNUIMessage({
        show: true,
        PlayerData: {
            character: {
                id: global.exports['isPed'].isPed('cid'),
                name: global.exports['isPed'].isPed('fullname'),
                cash: 0,
                personalVehicle: 'Landstalker',
                home: '#23 No3 Alta Street',
                phone: '+1 (628) 123-4567',
            },
    
            settings: {
                holdToDrag: GetResourceKvpInt('inventory:holdToDrag'),
                shiftQuickMove: GetResourceKvpInt('inventory:shiftQuickMove')
            }
        }
    });
    
    updateInventory()
    global.exports.focusmanager.SetUIFocus(true, true)
})

export function trunkState() {
    inTrunk = false
}