import { InventoryConfig } from "./Config";
import { findNextAvailableSlot } from "./Functions";
import { Inventory } from "./Inventory";
import { ItemList } from "./ItemList";
import { getDropInventories, getDataEntries, getDroppInventoriesName } from "./Inventory"
let DropIcon = {};

RegisterCommand('addItem', async(source, args) => {
    // console.log("POTA BOBO")
    console.log(args[0], args[1],JSON.stringify(args))
    let data = {
        Item : args[0],
        Amount: args[1],
    }
    addItem(source, data)
}, false)

RegisterCommand('delItem', async(source, args) => {
    console.log(args[0], args[1],JSON.stringify(args))
    let data = {
        Item : args[0],
        Amount: args[1],
    }
    removeItem(source, data)
}, false)

export async function addItem(source, data) {
    const character = global.exports['qb-lib'].getCharacter(source)
    let creationDate = Date.now()
    const foundItem = await global.exports.oxmysql.query_async('SELECT * FROM user_inventory2 WHERE name = @Name AND item_id = @ItemId', {
        ['@Name']: 'body-' + character.id,
        ['@ItemId']: data.Item
    });
    const toCheckWeight = await global.exports.oxmysql.query_async('SELECT * FROM user_inventory2 WHERE name = @Name', {
        ['@Name']: 'body-' + character.id
    });
    let totalWeight = await CheckInvWeight(toCheckWeight)
    
    if (foundItem[0]) {
        if(totalWeight !== InventoryConfig['PersonalInventory'].MaxWeight){
            if (ItemList[data.Item].stackable) {
                // console.log('Went past the ItemList[data.Item].stackable')
                for (let i = 0; i < data.Amount; i++) {
                    global.exports['oxmysql'].query_async('INSERT INTO user_inventory2 (item_id, name, slot, creationDate) VALUES (@ItemId, @Name, @Slot, @creationDate)', {
                        ['@ItemId']: data.Item,
                        ['@Name']: 'body-' + character.id,
                        ['@Slot']: foundItem[0].slot,
                        ['@creationDate']: creationDate
                    })
                }
                emitNet('inventory:sendNotification',Number(source), data.Item, data.Amount, 'Added')
            } else {
                for (let i = 0; i < data.Amount; i++) {
                    global.exports['oxmysql'].query_async('INSERT INTO user_inventory2 (item_id, name, slot, creationDate) VALUES (@ItemId, @Name, @Slot, @creationDate)', {
                        ['@ItemId']: data.Item,
                        ['@Name']: 'body-' + character.id,
                        ['@Slot']: await findNextAvailableSlot(source, 'body-' + character.id),
                        ['@creationDate']: creationDate
                    })
                }
                emitNet('inventory:sendNotification',source, data.Item, data.Amount, 'Added')
            }
        }else{
            if (ItemList[data.Item].stackable) {
                // console.log('Went past the ItemList[data.Item].stackable')
                for (let i = 0; i < data.Amount; i++) {
                    global.exports['oxmysql'].query_async('INSERT INTO user_inventory2 (item_id, name, slot, creationDate) VALUES (@ItemId, @Name, @Slot, @creationDate)', {
                        ['@ItemId']: data.Item,
                        ['@Name']: 'backpack-' + character.id,
                        ['@Slot']: foundItem[0].slot,
                        ['@creationDate']: creationDate
                    })
                }
                emitNet('inventory:sendNotification',Number(source), data.Item, data.Amount, 'Added')
            } else {
                for (let i = 0; i < data.Amount; i++) {
                    global.exports['oxmysql'].query_async('INSERT INTO user_inventory2 (item_id, name, slot, creationDate) VALUES (@ItemId, @Name, @Slot, @creationDate)', {
                        ['@ItemId']: data.Item,
                        ['@Name']: 'backpack-' + character.id,
                        ['@Slot']: await findNextAvailableSlot(source, 'backpack-' + character.id),
                        ['@creationDate']: creationDate
                    })
                }
                emitNet('inventory:sendNotification',source, data.Item, data.Amount, 'Added')
            }
        }
          
    } else {
        const Slot = await findNextAvailableSlot(source, 'body-' + character.id)

        for (let i = 0; i < data.Amount; i++) {
            if (ItemList[data.Item].stackable) {
                global.exports['oxmysql'].query_async('INSERT INTO user_inventory2 (item_id, name, slot, creationDate) VALUES (@ItemId, @Name, @Slot, @creationDate)', {
                    ['@ItemId']: data.Item,
                    ['@Name']: 'body-' + character.id,
                    ['@Slot']: Slot,
                    ['@creationDate']: creationDate
                })
                emitNet('inventory:sendNotification',source, data.Item, data.Amount, 'Added')
            } else {
                global.exports['oxmysql'].query_async('INSERT INTO user_inventory2 (item_id, name, slot, creationDate) VALUES (@ItemId, @Name, @Slot, @creationDate)', {
                    ['@ItemId']: data.Item,
                    ['@Name']: 'body-' + character.id,
                    ['@Slot']: await findNextAvailableSlot(source, 'body-' + character.id),
                    ['@creationDate']: creationDate
                })
                emitNet('inventory:sendNotification',source, data.Item, data.Amount, 'Added')
            }
        }
    }
}

export async function removeItem(source, data){
    const character = global.exports['qb-lib'].getCharacter(source)
    const foundItemInBody = await global.exports.oxmysql.query_async('SELECT * FROM user_inventory2 WHERE name = @Name AND item_id = @ItemId', {
        ['@Name']: 'body-' + character.id,
        ['@ItemId']: data.Item
    });
    const foundItemInBackpack = await global.exports.oxmysql.query_async('SELECT * FROM user_inventory2 WHERE name = @Name AND item_id = @ItemId', {
        ['@Name']: 'backpack-' + character.id,
        ['@ItemId']: data.Item
    });
    if (foundItemInBody[0] && foundItemInBackpack[0] === undefined) {
        const removeItem = await global.exports.oxmysql.query_async(`DELETE FROM user_inventory2 WHERE name = @Name AND item_id = @ItemId LIMIT ${data.Amount}`, {
            ['@Name']: 'body-' + character.id,
            ['@ItemId']: data.Item
        });
        if(removeItem.affectedRows === 1){
            emitNet('inventory:sendNotification',Number(source), data.Item, data.Amount, 'Removed')
        }
    }
    if (foundItemInBody[0] === undefined && foundItemInBackpack[0]) {
        const removeItem = await global.exports.oxmysql.query_async(`DELETE FROM user_inventory2 WHERE name = @Name AND item_id = @ItemId LIMIT ${data.Amount}`, {
            ['@Name']: 'backpack-' + character.id,
            ['@ItemId']: data.Item
        });
        if(removeItem.affectedRows === 1){
            emitNet('inventory:sendNotification',Number(source), data.Item, data.Amount, 'Removed')
        }
    }
    if (foundItemInBody[0] && foundItemInBackpack[0]) {
        const removeItem = await global.exports.oxmysql.query_async(`DELETE FROM user_inventory2 WHERE name = @Name AND item_id = @ItemId LIMIT ${data.Amount}`, {
            ['@Name']: 'body-' + character.id,
            ['@ItemId']: data.Item
        });
        if(removeItem.affectedRows === 1){
            emitNet('inventory:sendNotification',Number(source), data.Item, data.Amount, 'Removed')
        }
    }
}

RPC.register('inventory:addItem', async(source: any, data: any) => {
    const character = global.exports['qb-lib'].getCharacter(source)
    let creationDate = Date.now()
    const foundItem = await global.exports.oxmysql.query_async('SELECT * FROM user_inventory2 WHERE name = @Name AND item_id = @ItemId', {
        ['@Name']: 'body-' + character.id,
        ['@ItemId']: data.Item
    });
    const toCheckWeight = await global.exports.oxmysql.query_async('SELECT * FROM user_inventory2 WHERE name = @Name', {
        ['@Name']: 'body-' + character.id
    });
    let totalWeight = await CheckInvWeight(toCheckWeight)
    
    if (foundItem[0]) {
        if(totalWeight !== InventoryConfig['PersonalInventory'].MaxWeight){
            if (ItemList[data.Item].stackable) {
                // console.log('Went past the ItemList[data.Item].stackable')

                for (let i = 0; i < data.Amount; i++) {
                    global.exports['oxmysql'].query_async('INSERT INTO user_inventory2 (item_id, name, slot, creationDate) VALUES (@ItemId, @Name, @Slot, @creationDate)', {
                        ['@ItemId']: data.Item,
                        ['@Name']: 'body-' + character.id,
                        ['@Slot']: foundItem[0].slot,
                        ['@creationDate']: creationDate
                    })
                }
                // console.log("ADD ITEM")
                emitNet('inventory:sendNotification',Number(source), data.Item, data.Amount, 'Added')
            } else {
                for (let i = 0; i < data.Amount; i++) {
                    global.exports['oxmysql'].query_async('INSERT INTO user_inventory2 (item_id, name, slot, creationDate) VALUES (@ItemId, @Name, @Slot, @creationDate)', {
                        ['@ItemId']: data.Item,
                        ['@Name']: 'body-' + character.id,
                        ['@Slot']: await findNextAvailableSlot(source, 'body-' + character.id),
                        ['@creationDate']: creationDate
                    })
                }
                // console.log("ADD ITEM 2")
                emitNet('inventory:sendNotification',source, data.Item, data.Amount, 'Added')
            }
        }else{
            if (ItemList[data.Item].stackable) {
                // console.log('Went past the ItemList[data.Item].stackable')

                for (let i = 0; i < data.Amount; i++) {
                    global.exports['oxmysql'].query_async('INSERT INTO user_inventory2 (item_id, name, slot, creationDate) VALUES (@ItemId, @Name, @Slot, @creationDate)', {
                        ['@ItemId']: data.Item,
                        ['@Name']: 'backpack-' + character.id,
                        ['@Slot']: foundItem[0].slot,
                        ['@creationDate']: creationDate
                    })
                }
                // console.log("ADD ITEM")
                emitNet('inventory:sendNotification',Number(source), data.Item, data.Amount, 'Added')
            } else {
                for (let i = 0; i < data.Amount; i++) {
                    global.exports['oxmysql'].query_async('INSERT INTO user_inventory2 (item_id, name, slot, creationDate) VALUES (@ItemId, @Name, @Slot, @creationDate)', {
                        ['@ItemId']: data.Item,
                        ['@Name']: 'backpack-' + character.id,
                        ['@Slot']: await findNextAvailableSlot(source, 'backpack-' + character.id),
                        ['@creationDate']: creationDate
                    })
                }
                // console.log("ADD ITEM 2")
                emitNet('inventory:sendNotification',source, data.Item, data.Amount, 'Added')
            }
        }
    } else {
        const Slot = await findNextAvailableSlot(source, 'body-' + character.id)

        for (let i = 0; i < data.Amount; i++) {
            if (ItemList[data.Item].stackable) {
                global.exports['oxmysql'].query_async('INSERT INTO user_inventory2 (item_id, name, slot, creationDate) VALUES (@ItemId, @Name, @Slot, @creationDate)', {
                    ['@ItemId']: data.Item,
                    ['@Name']: 'body-' + character.id,
                    ['@Slot']: Slot,
                    ['@creationDate']: creationDate
                })
            } else {
                global.exports['oxmysql'].query_async('INSERT INTO user_inventory2 (item_id, name, slot, creationDate) VALUES (@ItemId, @Name, @Slot, @creationDate)', {
                    ['@ItemId']: data.Item,
                    ['@Name']: 'body-' + character.id,
                    ['@Slot']: await findNextAvailableSlot(source, 'body-' + character.id),
                    ['@creationDate']: creationDate
                })
            }
        }
    }
})

RPC.register('inventory:removeItem', async(source: any, data: any) => {
    removeItem(source, data)
})

// Todo:
// Add all weight checks.
// Make it so you can use an item in your backpack ? NoPixel has this.

RPC.register('inventory:dragItem', async (source: any, data: any, coords: any) => {
    console.log("toInventory", data.toInventory,JSON.stringify(data))
    console.log("fromInventory?",data.fromInventory)
    const toCheckWeight = await global.exports.oxmysql.query_async('SELECT * FROM user_inventory2 WHERE name = @Name', {
        ['@Name']: data.toInventory
    });
    const CheckFromItemWeight = await global.exports.oxmysql.query_async('SELECT * FROM user_inventory2 WHERE name = @Name AND item_id = @Item AND slot = @Slot', {
        ['@Name']: data.fromInventory,
        ['@Item']: data.itemId,
        ['@Slot']: data.fromSlot
    });

    const CheckToItemWeight = await global.exports.oxmysql.query_async('SELECT * FROM user_inventory2 WHERE name = @Name AND slot = @Slot', {
        ['@Name']: data.toInventory,
        ['@Slot']: data.toSlot
    });

    let totalWeight = await CheckInvWeight(toCheckWeight)
    let totalItemWeight = await CheckInvWeight(CheckFromItemWeight)
    let totalToItemWeightI = await CheckInvWeight(CheckToItemWeight)
    let invAndItemWeight = totalWeight + totalItemWeight
    // console.log("ANO TO",totalItemWeight,totalToItemWeightI,totalItemWeight !== totalToItemWeightI,totalWeight === InventoryConfig['PersonalInventory'].MaxWeight && data.toInventory.includes('body') || invAndItemWeight > InventoryConfig['PersonalInventory'].MaxWeight && data.toInventory.includes('body') && totalItemWeight !== totalToItemWeightI)
    // console.log("DRAG ITEMS IN SHIT", totalWeight,totalWeight === InventoryConfig['PersonalInventory'].MaxWeight)
    // console.log("SAME WEIGHT?",totalItemWeight === totalToItemWeightI,Number(totalItemWeight) !== Number(totalToItemWeightI))
    // console.log("totalItemWeight", totalItemWeight, 'OVERALL WEIGHT:',invAndItemWeight, data.fromInventory, data.toInventory)
    // console.log("CHECKING",data.toInventory !== data.fromInventory, totalWeight === InventoryConfig['Backpack'].MaxWeight && data.toInventory.includes('backpack'))
    // console.log("ON BACKPACK",totalWeight === InventoryConfig['Backpack'].MaxWeight && data.toInventory.includes('backpack') || invAndItemWeight > InventoryConfig['Backpack'].MaxWeight && data.toInventory.includes('backpack') && totalItemWeight !== totalToItemWeightI)
    // console.log(invAndItemWeight > InventoryConfig['PersonalInventory'].MaxWeight,invAndItemWeight > InventoryConfig['PersonalInventory'].MaxWeight, totalWeight === InventoryConfig['PersonalInventory'].MaxWeight)
    if(data.toInventory !== data.fromInventory && totalItemWeight !== totalToItemWeightI && totalWeight === InventoryConfig['PersonalInventory'].MaxWeight && data.toInventory.includes('body') || data.toInventory !== data.fromInventory && invAndItemWeight > InventoryConfig['PersonalInventory'].MaxWeight && data.toInventory.includes('body')){
        return
    }
    if(data.toInventory !== data.fromInventory && totalItemWeight !== totalToItemWeightI && totalWeight === InventoryConfig['Backpack'].MaxWeight && data.toInventory.includes('backpack') || data.toInventory !== data.fromInventory && invAndItemWeight > InventoryConfig['Backpack'].MaxWeight && data.toInventory.includes('backpack') && totalItemWeight !== totalToItemWeightI){
        return
    }
    // console.log('data.toSlot && data.toInventory',data.toSlot,data.toInventory)
    if (data.toSlot && data.toInventory) {
        if (data.toInventory.includes('pockets')) {
            if (!Inventory.Pockets.Slots[data.toSlot - 1].acceptedItems.includes(ItemList[data.itemId].name)) {
                return
            }
        }
        if (data.toInventory.includes('phone')) {
            const phoneSlot = Inventory.AdditionalInventories[0]
            if (!phoneSlot.acceptedItems[0].acceptedItems.includes(ItemList[data.itemId].name)) {
                return
            }
        }
        if (data.toInventory.includes('wallet')) {
            const WalletSlot = Inventory.AdditionalInventories[0]
            if (!WalletSlot.acceptedItems[0].acceptedItems.includes(ItemList[data.itemId].name)) {
                return
            }
        }

        let dropInventories = await getDropInventories()
        if(data.toInventory.includes('drop-') || data.toInventory.includes('hidden-') || dropInventories[data.toInventory]){
            let DataEntries = await getDataEntries()
            let targetName = 'drop-'+DataEntries
            let dropInv = await getDropInventories()
            let itemObject
            const result = await global.exports['oxmysql'].query_async('SELECT count(item_id) as amount, item_id, name, information, slot, dropped FROM user_inventory2 WHERE name = @name group by item_id', {
                '@name': targetName
            });
            DropIcon[targetName] = [];
            if (dropInv[targetName].used === false) {
                if(result.length === 0){
                    itemObject = ItemList[data.itemId].name
                }
             
                DropIcon[targetName].push(itemObject);
                dropInv[targetName] = {
                    position: {
                        x: coords[0],
                        y: coords[1],
                        z: coords[2]
                    },
                    count: result.length,
                    item: itemObject,
                    item_id: data.itemId,
                    name: targetName,
                    used: true,
                    lastUpdated: Date.now()
                }
                emitNet('Inventory:Drops:Create', -1, dropInv[targetName])
                emitNet("Inventory-Dropped-Addition", -1, dropInv[targetName])
            }else if (dropInv[targetName].used === true) {
                if(result.length === 0){
                    itemObject = ItemList[data.itemId].name
                }
                console.log("ONE MORE PUSH",data.itemId,ItemList[data.itemId].name, itemObject)
                DropIcon[targetName].push(ItemList[data.itemId].name);
                dropInv[targetName] = {
                    position: {
                        x: coords[0],
                        y: coords[1],
                        z: coords[2]
                    },
                    count: result.length,
                    name: targetName,
                    item: itemObject,
                    item_id: data.itemId,
                    used: true,
                    lastUpdated: Date.now()
                }
                emitNet('Inventory:Drops:Create', -1, dropInv[targetName])
                emitNet("Inventory-Dropped-Addition", -1, dropInv[targetName])
            }
        }

        const Item = await global.exports['oxmysql'].query_async('SELECT * FROM user_inventory2 WHERE slot = @Slot AND item_id = @ItemId AND name = @Name', {
            '@Slot': data.fromSlot,
            '@ItemId': data.itemId,
            '@Name': data.fromInventory
        });
       
        if (Item) {
            const OldItem = await global.exports['oxmysql'].query_async('SELECT * FROM user_inventory2 WHERE slot = @Slot AND name = @Name', {
                '@Slot': data.toSlot,
                '@Name': data.toInventory
            })
           
            if (OldItem[0]) {
                if (OldItem[0].item_id == data.itemId && invAndItemWeight < InventoryConfig[data.toInventory.includes('backpack') ? 'Backpack' : 'PersonalInventory'].MaxWeight || OldItem[0].item_id == data.itemId && data.fromInventory === data.toInventory) {
                   if (ItemList[data.itemId].stackable) {
                        await global.exports['oxmysql'].query_async('UPDATE user_inventory2 SET slot = @Slot, name = @Name WHERE slot = @oldSlot AND item_id = @ItemId', {
                            '@oldSlot': data.fromSlot,
                            '@Slot': data.toSlot,
                            '@Name': data.toInventory,
                            '@ItemId': data.itemId
                        })
                    }
                } else {
                    if (data.fromInventory.includes('pockets')) {
                        if (!Inventory.Pockets.Slots[data.fromSlot - 1].acceptedItems.includes(ItemList[OldItem[0].item_id].name)) {
                            return
                        }
                    }

                    // Todo:
                    // Check the weight of both invs if has enough weight swap them.. Fixed

                    const CheckToItemWeight = await global.exports.oxmysql.query_async('SELECT * FROM user_inventory2 WHERE name = @Name AND item_id = @Item AND slot = @Slot', {
                        ['@Name']: data.toInventory,
                        ['@Item']: OldItem[0].item_id,
                        ['@Slot']: data.toSlot
                    });

                    const CheckFromItemWeight = await global.exports.oxmysql.query_async('SELECT * FROM user_inventory2 WHERE name = @Name AND item_id = @Item AND slot = @Slot', {
                        ['@Name']: data.fromInventory,
                        ['@Item']: data.itemId,
                        ['@Slot']: data.fromSlot
                    });

                    const toCheckWeight = await global.exports.oxmysql.query_async('SELECT * FROM user_inventory2 WHERE name = @Name', {
                        ['@Name']: data.fromInventory
                    });
                    let currentBodyWeight = await CheckInvWeight(toCheckWeight)
                    let totalToItemWeight = await CheckInvWeight(CheckToItemWeight)
                
                    if(totalToItemWeight + (currentBodyWeight - totalItemWeight) > InventoryConfig['PersonalInventory'].MaxWeight && data.fromInventory.includes('body')){
                        
                        return
                    }
                    if(totalToItemWeight + (currentBodyWeight - totalItemWeight) > InventoryConfig['Backpack'].MaxWeight && data.fromInventory.includes('backpack')){
                        return
                    }
                    //To Fix | To Do
                    //Fix also the quality when swapping same items
                   
                    if(OldItem[0].item_id === data.itemId){

                        await global.exports['oxmysql'].query_async('UPDATE user_inventory2 SET slot = @Slot, name = @Name WHERE slot = @oldSlot AND item_id = @ItemId AND name = @toInv LIMIT 1', {
                            '@oldSlot': data.fromSlot,
                            '@Slot': data.toSlot,
                            '@toInv': data.fromInventory,
                            '@Name': data.toInventory,
                            '@ItemId': data.itemId
                        })
    
                        await global.exports['oxmysql'].query_async('UPDATE user_inventory2 SET slot = @Slot, name = @Name WHERE slot = @oldSlot AND item_id = @ItemId AND name = @toInv LIMIT 1', {
                            '@oldSlot': data.toSlot,
                            '@Slot': data.fromSlot,
                            '@toInv': data.toInventory,
                            '@Name': data.fromInventory,
                            '@ItemId': OldItem[0].item_id
                        })
                          
                        return
                    }
                    await global.exports['oxmysql'].query_async('UPDATE user_inventory2 SET slot = @Slot, name = @Name WHERE slot = @oldSlot AND item_id = @ItemId AND name = @toInv', {
                        '@oldSlot': data.fromSlot,
                        '@Slot': data.toSlot,
                        '@toInv': data.fromInventory,
                        '@Name': data.toInventory,
                        '@ItemId': data.itemId
                    })

                    await global.exports['oxmysql'].query_async('UPDATE user_inventory2 SET slot = @Slot, name = @Name WHERE slot = @oldSlot AND item_id = @ItemId AND name = @toInv', {
                        '@oldSlot': data.toSlot,
                        '@Slot': data.fromSlot,
                        '@toInv': data.toInventory,
                        '@Name': data.fromInventory,
                        '@ItemId': OldItem[0].item_id
                    })
                }
            } else {
                await global.exports['oxmysql'].query_async('UPDATE user_inventory2 SET slot = @Slot, name = @Name WHERE slot = @oldSlot AND item_id = @ItemId AND name = @oldName', {
                    '@oldSlot': data.fromSlot,
                    '@oldName': data.fromInventory,
                    '@Slot': data.toSlot,
                    '@Name': data.toInventory,
                    '@ItemId': data.itemId
                })
            }
        }
    }
})

RPC.register('inventory:splitItem', async(source: any, data: any) => {
    if (data.toInventory.includes('pockets')) {
        if (!Inventory.Pockets.Slots[data.toSlot - 1].acceptedItems.includes(ItemList[data.itemId].name)) {
            return
        }
    }
   
    const foundItem = await global.exports.oxmysql.query_async('SELECT * FROM user_inventory2 WHERE name = @Name AND slot = @Slot', {
        ['@Name']: data.toInventory,
        ['@Slot']: data.toSlot
    });

    const toCheckWeight = await global.exports.oxmysql.query_async('SELECT * FROM user_inventory2 WHERE name = @Name', {
        ['@Name']: data.toInventory
    });

    let totalWeight = await CheckInvWeight(toCheckWeight)
  
    if(Number(totalWeight) >= Number(InventoryConfig['Backpack'].MaxWeight) && data.toInventory.includes('backpack') || Number(totalWeight) >= Number(InventoryConfig['PersonalInventory'].MaxWeight) && data.toInventory.includes('body')) {
        return
    }
    if (foundItem[0] !== undefined) {

        if (ItemList[foundItem[0].item_id].name === data.itemId) {
            await global.exports['oxmysql'].query_async(`UPDATE user_inventory2 SET slot = @Slot, name = @Name WHERE slot = @oldSlot AND name = @oldName LIMIT ${data.amount}`, {
                '@oldSlot': data.fromSlot,
                '@Slot': data.toSlot,
                '@Name': data.toInventory,
                '@oldName': data.fromInventory
            })
        }
    } else {
        await global.exports['oxmysql'].query_async(`UPDATE user_inventory2 SET slot = @Slot, name = @Name WHERE slot = @oldSlot AND name = @oldName LIMIT ${data.amount}`, {
            '@oldSlot': data.fromSlot,
            '@Slot': data.toSlot,
            '@Name': data.toInventory,
            '@oldName': data.fromInventory
        })
    }
})

const equipSlots = {
    'id_card': 1,
    'phone': 2,
    'octablet': 3,
    'key': 4,
    'wallet': 5
}

RPC.register('inventory:equipItem', async(source: any, data: any, cid: number) => {
    const character = global.exports['qb-lib'].getCharacter(source)

    const foundItem = await global.exports.oxmysql.query_async('SELECT * FROM user_inventory2 WHERE name = @Name AND slot = @Slot', {
        ['@Name']: 'pockets-' + character.id,
        ['@Slot']: equipSlots[data.ItemId]
    });

    if (!foundItem[0]) {
        const Item = await global.exports.oxmysql.query_async('SELECT * FROM user_inventory2 WHERE name = @Name AND slot = @Slot', {
            ['@Name']: data.Inventory,
            ['@Slot']: data.Slot
        });

        if (Item[0]) {
            await global.exports['oxmysql'].query_async('UPDATE user_inventory2 SET slot = @Slot, name = @Name WHERE id = @Id', {
                '@Id': Item[0].id,
                '@Slot': equipSlots[data.ItemId],
                '@Name': 'pockets-' + character.id
            })    
        }
    }
})

RPC.register('inventory:unequipItem', async(source: any, data: any) => {
    const character = global.exports['qb-lib'].getCharacter(source)

    const foundItem = await global.exports.oxmysql.query_async('SELECT * FROM user_inventory2 WHERE name = @Name AND slot = @Slot', {
        ['@Name']: 'pockets-' + character.id,
        ['@Slot']: data.Slot
    });

    const newSlot = await findNextAvailableSlot(source, 'body-' + character.id)

    if (foundItem[0] && newSlot) {
        await global.exports['oxmysql'].query_async('UPDATE user_inventory2 SET slot = @Slot, name = @Name WHERE id = @Id', {
            '@Id': foundItem[0].id,
            '@Slot': newSlot,
            '@Name': 'body-' + character.id
        })    
    }
})

RPC.register('inventory:pickupObject', async(source: any, data: any) => {
    const character = global.exports['qb-lib'].getCharacter(source)

   // Define the query based on whether data.item_id is provided or not
    let query;
    let queryParams = {
        '@Name': data.name
    };

    if (data.item != null) {
        // If data.item_id is not null, include it in the query
        query = 'SELECT * FROM user_inventory2 WHERE item_id = @ItemId AND name = @Name';
        queryParams['@ItemId'] = data.item_id;
    } else {
        // If data.item_id is null or undefined, query based only on data.name
        query = 'SELECT * FROM user_inventory2 WHERE name = @Name';
    }

    // Fetch the items based on the query
    const items = await global.exports['oxmysql'].query_async(query, queryParams);

    // Determine the number of items found
    if (items.length > 0) {
        for (let item of items) {
            // Find a new available slot for each item
            const newSlot = await findNextAvailableSlot(source, 'body-' + character.id);

            if (newSlot) {
                // Update the item's slot and name
                await global.exports['oxmysql'].query_async(
                    'UPDATE user_inventory2 SET slot = @Slot, name = @Name WHERE id = @Id',
                    {
                        '@Id': item.id,
                        '@Slot': newSlot,
                        '@Name': 'body-' + character.id
                    }
                );
            }
        }
    }
    console.log("ITEM LENGTH CHECK",items.length)
    if(data.count === 0 || items.length === 0 || items.length === 1){
        emit('Inventory-deleteObject',data.name)
        emit('Inventory-deleteObject',data.name)
        emitNet("Inventory-Dropped-Remove", -1, [data.name])
    }
 
    console.log("Item", items)
})

onNet("Inventory-deleteObject", async(targetInventoryName) => {
    console.log("DELETE OBJECT SPAWN",targetInventoryName)
    delete DropIcon[targetInventoryName]
})

async function CheckInvWeight(Inv) {
    let totalWeight = 0;
   
    for (const item of Inv) {
        const itemWeight = ItemList[item.item_id].weight;
        totalWeight += itemWeight;
    }

    return totalWeight;
}

export function DroppedIcon(name) {
    return DropIcon[name]
}