import { Vector3 } from "../../shared/classes/vector";
import { Interface } from "../modules/interface";

export let inTrunk = false
export let trunkPlate = null

export async function initTrunk(): Promise<void> {
    // const CalculateOffsets = (pEntity: any) => {
    //     const pDimensions = GetModelDimensions(GetEntityModel(pEntity))
    //     const pMinSize = pDimensions[0]
    //     const pMaxSize = pDimensions[1]
    //     const pOffset = GetOffsetFromEntityInWorldCoords(pEntity, pMaxSize[0] / 2, pMaxSize[1], 0)
    //     const pEngine = GetWorldPositionOfEntityBone(pEntity, GetEntityBoneIndexByName(pEntity, 'engine'))
    //     const pOverheat = GetWorldPositionOfEntityBone(pEntity, GetEntityBoneIndexByName(pEntity, 'overheat'))
    //     const EngineCoords = new Vector3(pEngine)
    //     const OverHeatCoords = new Vector3(pOverheat)

    //     const pEngineDistance = new Vector3(pOffset).getDistance(EngineCoords.x, EngineCoords.y, EngineCoords.z)
    //     const pOverheatDistance = new Vector3(pOffset).getDistance(OverHeatCoords.x, OverHeatCoords.y, OverHeatCoords.z)
    //     const pCalculate = Math.abs(pMaxSize[1] - pMinSize[1]) / 2
    //     if (pEngineDistance <= pCalculate || pOverheatDistance <= pCalculate) {
    //         return [
    //             GetOffsetFromEntityInWorldCoords(pEntity, 0, pMinSize[1] - 0.5, 0),
    //             false,
    //         ]
    //     }
    //     return [
    //         GetOffsetFromEntityInWorldCoords(pEntity, 0, pMaxSize[1] + 0.5, 0),
    //         true,
    //     ]
    // }

    // Interface.addVehicleInteraction('trunk', [
    //     {
    //         id: 'trunk',
    //         label: 'View Trunk',
    //         event: 'inventory:openTrunk',
    //         parameters: {}
    //     }
    // ], {
    //     distance: {
    //         draw: 8,
    //         use: 3
    //     },
    //     isToggled: true,
    //     offset: (pEntity: any) => {
    //         const pModel = GetEntityModel(pEntity)
    //         const pDimensions = GetModelDimensions(pModel)
    //         const pMinSize = pDimensions[0]
    //         const pMaxSize = pDimensions[1]
    //         const pCalculate = [0, -pMaxSize[1] + pMaxSize[1] / 10, (pMaxSize[2] + pMinSize[2]) / 4]
    //         const pOffsets = CalculateOffsets(pEntity)
    //         let Calc1 = pCalculate[1]
    //         return (
    //             pOffsets[1] && (Calc1 = pMaxSize[1] - pMaxSize[1] / 10), [pCalculate[0], Calc1, pCalculate[2]]
    //         )
    //     },
    //     isEnabled: (pEntity: any) => {
    //         const LockState = GetVehicleDoorLockStatus(pEntity)
    //         const inVehicle = IsPedInAnyVehicle(PlayerPedId(), false)
    //         // return LockState !== 2 || !inTrunk || !inVehicle
    //         return false
    //     }
    // })
}

on('inventory:openTrunk', async(Parameters: any, Entity: any) => {
    inTrunk = true
    trunkPlate = GetVehicleNumberPlateText(Entity)

    // Add checks for taskbar active ect.
    RPC.execute('inventory:additionalInventoriesClear')
    const Inventory = await RPC.execute('inventory:getInventories', IsPedInVehicle(PlayerPedId(), GetVehiclePedIsIn(PlayerPedId(), false), false), GetVehicleNumberPlateText(GetVehiclePedIsIn(PlayerPedId(), false)), inTrunk, trunkPlate)

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

    global.exports.focusmanager.SetUIFocus(true, true)
})

export function trunkState() {
    inTrunk = false
}