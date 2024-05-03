import { InventoryConfig } from "./Config";
import { calculateInventoryWeight, getInventory, getInventoryAccepted } from "./Functions";

export let AdditionalInventories = {};
let inventoryClose = false;
let lastAction = "";

on('inventory:Close', (source) => {
    lastAction = "";
})

RPC.register('inventory:additionalInventoriesClear', async (source: any) => {
    const character = global.exports['qb-lib'].getCharacter(source);
    AdditionalInventories[character.id] = [];
});

RPC.register('inventory:additionalInventoriesAdd', async (source: any, data: any) => {
    const character = global.exports['qb-lib'].getCharacter(source);
    let invAdd: any = {}
   
    const result = await global.exports['oxmysql'].query_async('SELECT id FROM user_inventory2 WHERE name = @name AND item_id = @item AND slot = @slot', {
        '@name': data.isSideSlot ? 'pockets-'+character.id : data.fromInventory,
        '@item': data.ItemId,
        '@slot': data.slot
    });
    
    let openItem = data.ItemId + result[0].id
    if(openItem === lastAction){
        return
    }
    lastAction = data.itemAction
    // console.log("name",data.isSideSlot ? 'pockets-'+character.id : data.fromInventory)
    // console.log("itemid",data.ItemId)
    // console.log("slot",data.slot)
    // console.log("FUCKING RESULT:", JSON.stringify(data))
    if (data.itemAction === "openSimSlot"){
        AdditionalInventories[character.id] = [];
        invAdd = {
            name: 'phone-1',
            InvName: 'Mobile Phone',
            ConfigName: 'Simcard'
        }
    }else if(data.itemAction === "openWallet"){
        AdditionalInventories[character.id] = [];
        invAdd = {
            name: 'wallet-1',
            InvName: 'Wallet',
            ConfigName: 'Wallet'
        }
    }
    if (!Array.isArray(AdditionalInventories[character.id])) {
        AdditionalInventories[character.id] = [];
    }
    AdditionalInventories[character.id].push({
        id: AdditionalInventories[character.id].length + 1,
        name: 'phone-'+result[0].id,
        inventoryName: invAdd.InvName,
        ConfigName: invAdd.ConfigName,
        MaxWeight: invAdd.MaxWeight,
        Slots: invAdd.Slots
    });
});

export async function getAdditionalInventories(source: any) {
    const character = global.exports['qb-lib'].getCharacter(source);
    const AddedInventory = []

    AdditionalInventories[character.id].map(async (data: any) => {
        // console.log('AdditionalInventories data', JSON.stringify(data))
        AddedInventory.push({
            id: data.id,
            name: data.name,
            maxWeight: InventoryConfig[data.ConfigName].MaxWeight ? InventoryConfig[data.ConfigName].MaxWeight : 100,
            Weight: await calculateInventoryWeight(data.name),
            InventoryOpened: true,
            inventoryName: data.inventoryName,
            slots: await getInventory(data.name, InventoryConfig[data.ConfigName].Slots, false, InventoryConfig[data.ConfigName].acceptedItems),
            acceptedItems: await getInventoryAccepted(data.ConfigName, InventoryConfig[data.ConfigName].Slots, InventoryConfig[data.ConfigName].acceptedItems)
        })
    })
    // console.log("AddedInventory",AddedInventory,JSON.stringify(AddedInventory))
    return AddedInventory
}