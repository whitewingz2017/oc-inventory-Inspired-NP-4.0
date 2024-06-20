import { InventoryConfig } from "./Config";
import { calculateInventoryWeight, getInventory, getInventoryAccepted, getItemInSlot } from "./Functions";

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

    // console.log("SHIT",data.fromInventory !== undefined || data.fromInventory !== null ? extractNumber(data.fromInventory) : 'untest')
    // console.log("FROM SHIT SLOT",data.isSideSlot,data.isSideSlot ? 'pockets-'+character.id : extractNumber(data.fromInventory))
    // let openItem = data.ItemId + result[0].id
    if(data.itemAction === lastAction){
        return
    }
    lastAction = data.itemAction
    // console.log("OPEN ITEM SHIT", data.fromInventory,data.fromInventory === null ? character.id : extractNumber(data.fromInventory))
    // console.log("name",data.isSideSlot ? 'pockets-'+character.id : data.fromInventory)
    // console.log("itemid",data.ItemId)
    // console.log("slot",data.slot)
    // console.log("FUCKING RESULT:", JSON.stringify(data))
    if (data.itemAction === "openSimSlot"){
        let customCid = data.fromInventory === null ? character.id : extractNumber(data.fromInventory)
        invAdd = {
            name: 'simcard-'+ customCid,
            InvName: 'Mobile Phone',
            ConfigName: 'Simcard'
        }
    }else if(data.itemAction === "openWallet"){
        let customCid = data.fromInventory === null ? character.id : extractNumber(data.fromInventory)
        invAdd = {
            name: data.ItemId+'::'+result[0].id+'::'+customCid,
            InvName: 'Wallet',
            ConfigName: 'Wallet'
        }
    }else if(data.itemAction === "apartment::stash"){
        invAdd = {
            name: 'apartment-'+character.id,
            InvName: 'Stash',
            ConfigName: 'ApartmentStash'
        }
    }else if(data.itemAction === "openTrunk"){
        invAdd = {
            name: 'trunk-' + data.Plate,
            InvName: 'Trunk',
            ConfigName: 'Trunk'
        }
    }else if(data.itemAction === "robPlayer"){
        AdditionalInventories[character.id] = [];
        AdditionalInventories[character.id].push({
            id: AdditionalInventories[character.id].length + 1,
            name: 'pockets-'+data.cid,
            inventoryName: 'Pockets',
            ConfigName: 'Pockets',
            MaxWeight: InventoryConfig['Pockets'].MaxWeight,
            Slots: [
                {
                    id: 1,
                    icon: 'idcard',
                    item: await getItemInSlot(source, 'pockets-' + data.cid, 1),
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
                    item: await getItemInSlot(source, 'pockets-' + data.cid, 2),
                    acceptedItems: [
                        'Mobile Phone'
                    ]
                },
                {
                    id: 3,
                    icon: 'tablet',
                    item: await getItemInSlot(source, 'pockets-' + data.cid, 3),
                    acceptedItems: [
                        'OC Tablet'
                    ]
                },
                {
                    id: 4,
                    icon: 'key',
                    item: await getItemInSlot(source, 'pockets-' + data.cid, 4),
                    acceptedItems: [
                        'housekey'
                    ]
                },
                {
                    id: 5,
                    icon: 'wallet',
                    item: await getItemInSlot(source, 'pockets-' + data.cid, 5),
                    acceptedItems: [
                        'Wallet'
                    ]
                }
            ]
        });
        AdditionalInventories[character.id].push({
            id: AdditionalInventories[character.id].length + 1,
            name: 'backpack-'+data.cid,
            inventoryName: 'Backpack',
            ConfigName: 'Backpack',
            MaxWeight: InventoryConfig['Backpack'].MaxWeight,
            Slots: InventoryConfig['Backpack'].Slots
        });

        AdditionalInventories[character.id].push({
            id: AdditionalInventories[character.id].length + 1,
            name: 'body-'+data.cid,
            inventoryName: 'Body',
            ConfigName: 'PersonalInventory',
            MaxWeight: InventoryConfig['PersonalInventory'].MaxWeight,
            Slots: InventoryConfig['PersonalInventory'].Slots
        });

    }

    console.log('invAdd.InvName',invAdd.InvName)
    if (!Array.isArray(AdditionalInventories[character.id])) {
        AdditionalInventories[character.id] = [];
    }
    AdditionalInventories[character.id].push({
        id: AdditionalInventories[character.id].length + 1,
        name: invAdd.name,
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
    return AddedInventory
}

function extractNumber(inputString: string): number | null {
    // Split the input string by the hyphen ('-')
    const parts = inputString.split('-');
    
    // The last part should be the number as a string
    const numberString = parts[parts.length - 1];
    
    // Convert the number string to a number
    const number = parseInt(numberString, 10);
    
    // Check if the conversion was successful and return the number or null
    return isNaN(number) ? null : number;
}