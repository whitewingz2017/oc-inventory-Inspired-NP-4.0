import { inTrunk, trunkPlate } from "./Trunk";
import { GroundInventoryScan } from "./Drops";
import { updateInventory } from "./Exports";
let DroppedInventories = [];
let DrawInventories = [];
let NearInventories = [];
let dropNames

onNet('Inventory-Dropped-Addition', (object) => {
    DroppedInventories.push(object);
    NearInventories.push(object);
    DrawInventories.push(object);
})

RegisterCommand('+inventory', async() => {
    // Add checks for taskbar active ect.
    let cid = global.exports['isPed'].isPed('cid')
    let isDrop = GroundInventoryScan();
    
    RPC.execute('inventory:additionalInventoriesClear')
    RPC.execute('addDrop-Inventory',GetEntityCoords(PlayerPedId()),isDrop)
    const Inventory = await RPC.execute('inventory:getInventories',cid, IsPedInVehicle(PlayerPedId(), GetVehiclePedIsIn(PlayerPedId(), false), false), GetVehicleNumberPlateText(GetVehiclePedIsIn(PlayerPedId(), false)), false, GetEntityCoords(PlayerPedId()), isDrop)
    if(Inventory){
        let dropNamesx = Inventory.PrimarySecondaryInventory
        dropNames = dropNamesx.inventoryName
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
    }
  
}, false)

RegisterCommand('-inventory', async() => {}, false)

global.exports['qb-keybinds'].registerKeyMapping('inventory', 'Inventory', 'Open Inventory', '+inventory', '-inventory', 'K', true);

onNet('inventory:addItem', async(data: any) => {
    emit('inventory:sendNotification', data.Item, data.Amount, 'Added')
    RPC.execute('inventory:addItem', data)
})

onNet('inventory:updates', ()=>{
    updateInventory()
})

// RegisterCommand('addItem', async(source, args) => {
//     // console.log("POTA BOBO")
//     console.log(args[0], args[1],JSON.stringify(args))
//     let data = {
//         Item : args[0],
//         Amount: args[1],
//     }
//     emit('inventory:addItem',data)
// }, false)

RegisterCommand('pushadditionalinventory', async() => {
    let cid = global.exports['isPed'].isPed('cid')
    RPC.execute('inventory:additionalInventoriesAdd', {
        Name: 'Mobile Phone',
        ConfigName: 'Phone'
    })

    const Inventory = await RPC.execute('inventory:getInventories',cid, IsPedInVehicle(PlayerPedId(), GetVehiclePedIsIn(PlayerPedId(), false), false), GetVehicleNumberPlateText(GetVehiclePedIsIn(PlayerPedId(), false)), inTrunk, trunkPlate)

    SendNUIMessage({
        Inventory: Inventory,
    })
}, false)

export function dropName() {
    return dropNames
}
