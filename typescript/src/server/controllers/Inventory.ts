import { DroppedIcon } from './Actions';
import { AdditionalInventories, getAdditionalInventories } from './AdditionalInventories'
import { InventoryConfig } from './Config'
import { calculateInventoryWeight, getInventory, getItemInSlot } from './Functions'
export let Inventory: any = [] 
let DataEntries = 0;
let DroppedInventories = [];
let InUseInventories = [];
const DROPPED_ITEM_KEEP_ALIVE = 1000 * 60 * 15;
// Log a message to indicate the server side.
let Key
let NewDroppedName
function clean() {
    // console.log("CLEANING SHIT")
    for (let Row in DroppedInventories) {
        // console.log("THIS TEST HERE")
        if (new Date(DroppedInventories[Row].lastUpdated + DROPPED_ITEM_KEEP_ALIVE).getTime() < Date.now() && DroppedInventories[Row].used && !InUseInventories[DroppedInventories[Row].name]) {
            // console.log("CAN THIS DELETE")
            emitNet("Inventory-Dropped-Remove", -1, [DroppedInventories[Row].name])
            delete DroppedInventories[Row];
        }
    }
}

setInterval(clean, 2000)

// Register the RPC function to handle adding drop inventories.
RPC.register('addDrop-Inventory', (pSource, coords, isDrop) => {
    // console.log("DROPP INV")
    // Increment the DataEntries counter.
    if(!isDrop.isTrue){
        DataEntries++;
        Key = "" + DataEntries + "";
        NewDroppedName = 'drop-' + Key;
    }else{
        Key = "" + DataEntries + "";
        NewDroppedName = isDrop.name
    }
   
   
    DroppedInventories[NewDroppedName] = {
        position: {
            x: coords[0],
            y: coords[1],
            z: coords[2]
        },
        count: isDrop.isTrue ? isDrop.count : isDrop.count,
        name: NewDroppedName,
        used: isDrop.isTrue ? true : false,
        lastUpdated: Date.now()
    };
    let invD = DroppedInventories[NewDroppedName]
    // console.log("COUNT INV", NewDroppedName,invD)
    // console.log("OPEN TARGET 3",DroppedInventories[NewDroppedName],DataEntries)
    // console.log("ITEM OBJECT",DroppedIcon(NewDroppedName))
});

// Define an interval (in milliseconds)
const interval = 2000; // 2 seconds

// Create a counter to track time
let lastTime = Date.now();

// Define the checking function
const checking = () => {
    // Get the current time
    const currentTime = Date.now();

    // Check if the time elapsed since the last run is greater than or equal to the interval
    if (currentTime - lastTime >= interval) {
        // Execute your code here
        // console.log("DROP INV", JSON.stringify(DroppedInventories));

        // Update the lastTime to the current time
        lastTime = currentTime;
    }
}

// Set the checking function to run on every tick
setTick(checking);


// setInterval(() => {
//     console.log("HELLO INVTERBAL", DroppedInventories)
// }, 3000)

RPC.register('inventory:getInventories', async(source: any, cid: number, inVehicle: any, licensePlate: any, isTrunk: any, TrunkPlate: any, coords: any, isDrop: boolean) => {
    const character = global.exports['qb-lib'].getCharacter(source)
    Inventory = {
        // Make the clothing and pockets slots generate like backpack and personalinv.
        // Pass the weight and max weight and do it on the UI.
        ClothingSlots: [
            {
                id: 'hat',
                item: null,
                acceptedItems: [
                    'hat'
                ]
            },
            {
                id: 'mask',
                item: null,
                acceptedItems: [
                    'mask'
                ]
            },
            {
                id: 'glasses',
                item: null,
                acceptedItems: [
                    'glasses'
                ]
            },
            {
                id: 'armor',
                item: null,
                acceptedItems: [
                    'armorplate'
                ]
            },
            {
                id: 'bag',
                item: null,
                acceptedItems: [
                    'bag'
                ]
            }
        ],

        Pockets: {
            name: 'pockets-' + character.id,
            Slots: [
                {
                    id: 1,
                    icon: 'idcard',
                    item: await getItemInSlot(source, 'pockets-' + character.id, 1),
                    acceptedItems: [
                        'ID Card'
                    ]
                },
                {
                    id: 2,
                    icon: 'phone',
                    // item: {
                    //     itemId: 'phone',
                    //     durability: 1,
                    // },
                    item: await getItemInSlot(source, 'pockets-' + character.id, 2),
                    acceptedItems: [
                        'Mobile Phone'
                    ]
                },
                {
                    id: 3,
                    icon: 'tablet',
                    item: await getItemInSlot(source, 'pockets-' + character.id, 3),
                    acceptedItems: [
                        'OneCity Tablet'
                    ]
                },
                {
                    id: 4,
                    icon: 'key',
                    item: await getItemInSlot(source, 'pockets-' + character.id, 4),
                    acceptedItems: [
                        'housekey'
                    ]
                },
                {
                    id: 5,
                    icon: 'wallet',
                    item: await getItemInSlot(source, 'pockets-' + character.id, 5),
                    acceptedItems: [
                        'Wallet'
                    ]
                }
            ]
        },

        PersonalInventory: {
            maxWeight: InventoryConfig.PersonalInventory.MaxWeight,
            Weight: await calculateInventoryWeight('body-' + character.id),
            inventoryName: 'body-' + character.id,
            slots: await getInventory('body-' + character.id, InventoryConfig.PersonalInventory.Slots, true, null)
        },

        PersonalBackpack: {
            maxWeight: InventoryConfig.Backpack.MaxWeight,
            Weight: await calculateInventoryWeight('backpack-' + character.id),
            inventoryName: 'backpack-' + character.id,
            slots: await getInventory('backpack-' + character.id, InventoryConfig.Backpack.Slots, false, null)
        },

        AdditionalInventories: await getAdditionalInventories(source)
        
    }
    let dropItem = false
    if (!inVehicle) {
        Inventory.PrimarySecondaryInventory = {
            maxWeight: 150,
            Weight: await calculateInventoryWeight(NewDroppedName),
            inventoryName: NewDroppedName,
            inventoryLabel: 'Ground',
            slots: await getInventory(NewDroppedName, InventoryConfig.Drop.Slots, false, null)
        }
    }

    if (inVehicle && !isTrunk) {
        Inventory.PrimarySecondaryInventory = {
            maxWeight: 150,
            Weight: await calculateInventoryWeight('glovebox::' + licensePlate),
            inventoryName: 'glovebox::' + licensePlate,
            inventoryLabel: 'Glovebox',
            slots: await getInventory('glovebox::' + licensePlate, InventoryConfig.Glovebox.Slots, false, null)
        }
    }

    if (isTrunk) {
        Inventory.PrimarySecondaryInventory = {
            maxWeight: InventoryConfig.Trunk.MaxWeight,
            Weight: await calculateInventoryWeight('trunk::' + TrunkPlate),
            inventoryName: 'trunk::' + TrunkPlate,
            inventoryLabel: 'Trunk',
            slots: await getInventory('trunk::' + TrunkPlate, InventoryConfig.Trunk.Slots, false, null)
        }
    }
    return Inventory
})

onNet("server-inventory-close", async(player, targetInventoryName) => {
    let src = source
    //line 647
    // console.log("CLOSE INVENTORY",targetInventoryName)
    if (targetInventoryName.startsWith("Trunk"))
        emitNet("toggle-animation", src, false);
    InUseInventories = InUseInventories.filter(item => item != player);
   
    if (targetInventoryName.indexOf("drop") > -1 && DroppedInventories[targetInventoryName]) {
        // console.log("IS IT GOING HERE",DroppedInventories[targetInventoryName].used)
        if (DroppedInventories[targetInventoryName].used === false) {
            delete DroppedInventories[targetInventoryName];
        } else {
          const result = await global.exports['oxmysql'].query_async('SELECT count(item_id) as amount, item_id, name, information, slot, dropped FROM user_inventory2 WHERE name = @name group by item_id', {
                '@name': targetInventoryName
            });
            // console.log("result.length",result.length,DroppedInventories[targetInventoryName])
            if (result.length == 0 && DroppedInventories[targetInventoryName]) {
                delete DroppedInventories[targetInventoryName];
                emit('Inventory-deleteObject',targetInventoryName)
                emitNet("Inventory-Dropped-Remove", -1, [targetInventoryName])
            }
        }
    }
    emit("server-request-update-src", player, source)
    emit('inventory:Close', src)
});

export async function getDropInventories() {
    return DroppedInventories
}

export async function getDataEntries() {
    return DataEntries
}

export async function getDroppInventoriesName(name){
    return DroppedInventories[name]
}