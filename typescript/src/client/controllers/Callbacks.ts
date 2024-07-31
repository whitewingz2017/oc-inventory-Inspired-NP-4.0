import { dropName } from "./Inventory"
import { NUI } from "../modules/nui"
import { inTrunk, trunkPlate, trunkState } from "./Trunk"
import { usedItem } from "./Functions"

export let giveItem = false;

NUI.register('closeInventory', async(data: any, cb: any) => {
    global.exports.focusmanager.SetUIFocus(false, false)
    let cid = global.exports['isPed'].isPed('cid')
    if (dropName() != 'none') {
        emitNet('server-inventory-close', cid, dropName());
    }
    trunkState()
})

NUI.register('updateSettings', async(data: any, cb: any) => {
    SetResourceKvpInt('inventory:holdToDrag', data.holdToDrag ? 1 : 0)
    SetResourceKvpInt('inventory:shiftQuickMove', data.shiftQuickMove ? 1 : 0)
})

NUI.register('itemDrag', async(data: any, cb: any) => {
    let cid = global.exports['isPed'].isPed('cid')
    let coords = GetEntityCoords(PlayerPedId())
    RPC.execute('inventory:dragItem', data, coords)

    // setTimeout(async() => {
    //     const Inventory = await RPC.execute('inventory:getInventories',cid, IsPedInVehicle(PlayerPedId(), GetVehiclePedIsIn(PlayerPedId(), false), false), GetVehicleNumberPlateText(GetVehiclePedIsIn(PlayerPedId(), false)), inTrunk, trunkPlate)
    //     SendNUIMessage({Inventory: Inventory})
    // }, 100)
})

NUI.register('itemSplit', async(data: any, cb: any) => {
    let cid = global.exports['isPed'].isPed('cid')
    RPC.execute('inventory:splitItem', data)

    setTimeout(async() => {
        const Inventory = await RPC.execute('inventory:getInventories',cid, IsPedInVehicle(PlayerPedId(), GetVehiclePedIsIn(PlayerPedId(), false), false), GetVehicleNumberPlateText(GetVehiclePedIsIn(PlayerPedId(), false)), inTrunk, trunkPlate)
    
        SendNUIMessage({Inventory: Inventory})
    }, 100)
})

NUI.register('equipItem', async(data: any, cb: any) => {
    let cid = global.exports['isPed'].isPed('cid')
    RPC.execute('inventory:equipItem', data,cid)

    setTimeout(async() => {
        const Inventory = await RPC.execute('inventory:getInventories',cid, IsPedInVehicle(PlayerPedId(), GetVehiclePedIsIn(PlayerPedId(), false), false), GetVehicleNumberPlateText(GetVehiclePedIsIn(PlayerPedId(), false)), inTrunk, trunkPlate)
    
        SendNUIMessage({Inventory: Inventory})
    }, 100)
})

NUI.register('unequipItem', async(data: any, cb: any) => {
    let cid = global.exports['isPed'].isPed('cid')
    RPC.execute('inventory:unequipItem', data)

    setTimeout(async() => {
        const Inventory = await RPC.execute('inventory:getInventories',cid, IsPedInVehicle(PlayerPedId(), GetVehiclePedIsIn(PlayerPedId(), false), false), GetVehicleNumberPlateText(GetVehiclePedIsIn(PlayerPedId(), false)), inTrunk, trunkPlate)
    
        SendNUIMessage({Inventory: Inventory})
    }, 100)
})

NUI.register('useItem', async(data: any, cb: any) => {
    emit('inventory:sendNotification', data.ItemId, 1, 'Used')
    usedItem(data)
})

NUI.register('openItem', async(data: any, cb: any) => {
    let cid = global.exports['isPed'].isPed('cid')
    let open = await RPC.execute('inventory:additionalInventoriesAdd', data)
    const Inventory = await RPC.execute('inventory:getInventories',cid, IsPedInVehicle(PlayerPedId(), GetVehiclePedIsIn(PlayerPedId(), false), false), GetVehicleNumberPlateText(GetVehiclePedIsIn(PlayerPedId(), false)), inTrunk, trunkPlate)
    SendNUIMessage({
        Inventory: Inventory,
    })
})

NUI.register('giveItem', async(data: any, cb: any) => {
    giveItem = true
})