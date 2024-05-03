import { addItem } from "./Actions";
import { InventoryConfig } from "./Config";
import { ItemList } from "./ItemList";

export async function getItemInSlot(source: any, Inventory: any, slot: any) {
    const Item = await getItem(source, Inventory, slot);
    if (Item && Item.length > 0) {
        return {
            id: Item[0].id,
            itemId: Item[0].item_id,
            Item: Item[0].item_id,
            durability: ConvertQuality(Item[0].item_id,Item[0].creationDate),
            amount: Item.length,
            Amount: Item.length,
            information: Item[0].information,
            slot: Item[0].slot
        };
    } else {
        return null;
    }
}

async function getItem(source: any, Inventory: any, slot: any) {
    const itemData = await global.exports.oxmysql.query_async('SELECT * FROM user_inventory2 WHERE name = @Name AND slot = @Slot', {
        ['@Name']: Inventory,
        ['@Slot']: slot
    });
    return itemData;
}

// Todo:
// If the slot is above the item slots in the config then return cant find slot..
// Check inventory weight


export async function findNextAvailableSlot(source: any, Inventory: any) {
    const itemData = await global.exports.oxmysql.query_async('SELECT MAX(slot) AS maxSlot FROM user_inventory2 WHERE name = @Name', {
        '@Name': Inventory,
    });

    const highestSlot = itemData.length > 0 ? itemData[0].maxSlot : 0;

    for (let slot = 1; slot <= highestSlot + 1; slot++) {
        const slotCheck = await global.exports.oxmysql.query_async('SELECT COUNT(*) AS count FROM user_inventory2 WHERE name = @Name AND slot = @Slot', {
            '@Name': Inventory,
            '@Slot': slot
        });

        if (slot > 15) {
            // emitNet('DoLongHudText', source, 'No available slots.', 2)
            return
        }

        if (slotCheck[0].count === 0) {
            return slot;
        }
    }

    return '[ERROR] NO AVAILABLE SLOTS';
}

export async function calculateInventoryWeight(Inventory: any) {
    const itemData = await global.exports.oxmysql.query_async('SELECT * FROM user_inventory2 WHERE name = @Name', {
        ['@Name']: Inventory,
    });

    let totalWeight = 0;

    for (const item of itemData) {
        totalWeight += ItemList[item.item_id].weight;
    }

    return totalWeight;
}

function checkIfHotbar(id: number) {
    if (id >= 1 && id <= 5) {
        return true;
    } else {
        return false;
    }
}

export async function getInventory(savedName: any, Slots: any, checkHotbar: any, Item: any) {
    const Inventory = []
    for (let i = 0; i < Slots; i++) {
        Inventory.push({
            id: i + 1,
            hotBar: checkHotbar ? checkIfHotbar(i + 1) : false,
            item: await getItemInSlot(source, savedName, i + 1),
            acceptedItems: Item
        })
    }

    return Inventory
}

export async function getInventoryAccepted(configName: any, Slots: any, Item: any) {
    const Inventory = []
    for (let i = 0; i < Slots; i++) {
        Inventory.push({
            acceptedItems: Item,
        })
    }

    return Inventory
}

RPC.register('inventory:giveItem', (source, item, amount) => {
    const data = {
        Item: item,
        Amount: amount
    }
    addItem(source, data)
})

RPC.register('inventory:updateItem', async (source, item, slot, data) => {
    const character = global.exports['qb-lib'].getCharacter(source)
    const foundItemInBody = await global.exports.oxmysql.query_async('SELECT * FROM user_inventory2 WHERE name = @Name AND item_id = @ItemId AND slot = @Slot', {
        ['@Name']: 'body-' + character.id,
        ['@ItemId']: item,
        ['@Slot']: slot
    });
    const foundItemInBackpack = await global.exports.oxmysql.query_async('SELECT * FROM user_inventory2 WHERE name = @Name AND item_id = @ItemId AND slot = @Slot', {
        ['@Name']: 'backpack-' + character.id,
        ['@ItemId']: item,
        ['@Slot']: slot
    });
    if (foundItemInBody[0] && foundItemInBackpack[0] === undefined) {
        let affected = await global.exports.oxmysql.query_async(`UPDATE user_inventory2 SET information='${data}' WHERE item_id='${item}' and name='body-${character.id}' and slot='${slot}`);
        emitNet('inventory:updates', Number(source))
    }
    if (foundItemInBody[0] === undefined && foundItemInBackpack[0]) {
        let affected = await  global.exports.oxmysql.query_async(`UPDATE user_inventory2 SET information='${data}' WHERE item_id='${item}' and name='backpack-${character.id}' and slot='${slot}`);
        emitNet('inventory:updates', Number(source))
    }
})

const equipSlots = {
    'id_card': 1,
    'phone': 2,
    'octablet': 3,
    'key': 4,
    'wallet': 5
}

RPC.register('inventory:checkIfEquip', async (source, item, slot) => {
    const character = global.exports['qb-lib'].getCharacter(source)
    if(item === "octablet" || item === "phone" || item === "id_card" || item === "key" || item === "wallet"){
        const foundItem = await global.exports.oxmysql.query_async('SELECT * FROM user_inventory2 WHERE name = @Name AND slot = @Slot', {
            ['@Name']: 'pockets-' + character.id,
            ['@Slot']: equipSlots[item]
        });
        if(foundItem[0]){
            return true
        }
        return false
    }
})

RPC.register('getObject', (source, object) => {
    if(object.toString() === "Cash"){
        return "bkr_prop_money_wrapped_01"
    }else if(object.toString() === "Sandwich"){
        return "prop_sandwich_01"
    }else if(object.toString() === "Water"){
        return "prop_ld_flow_bottle"
    }else if(object.toString() === "Hotdog"){
        return 'prop_cs_hotdog_01'
    }else if(object.toString() === "Tablet"){
        return 'prop_cs_tablet'
    }else if(object.toString() === "Radio"){
        return 'prop_cs_hand_radio'
    }else if(object.toString() === "Knife"){
        return 'prop_cs_walkie_talkie'
    }else if(object.toString() === "Heist_bag"){
        return 'prop_cs_heist_bag_02'
    }else if(object.toString() === "Rental"){
        return 'prop_cs_cashenvelope'
    }else{
        return 'prop_paper_bag_01'
    }
})

RPC.register('getQuantity', async (source, itemId) => {
    const character = global.exports['qb-lib'].getCharacter(source);

    const countCheck = await global.exports.oxmysql.query_async('SELECT COUNT(*) AS count FROM user_inventory2 WHERE name = @Name AND item_id = @item_id', {
        '@Name': 'body-'+character.id,
        '@item_id': itemId
    });
    const countCheck2 = await global.exports.oxmysql.query_async('SELECT COUNT(*) AS count FROM user_inventory2 WHERE name = @Name AND item_id = @item_id', {
        '@Name': 'backpack-'+character.id,
        '@item_id': itemId
    });

    const CountItem = countCheck[0].count + countCheck2[0].count;

    return CountItem
})

RPC.register('getCustomAnim:bandage', (source) => {
    const data = {
        animDict: "items@clear@custom_anim",
        anim: "bandage",
        flag: 49,
        duration: 10000,
        label: "Healing",
        health: 10
    }
    return data
})

const TimeAllowed: number = 1000 * 60 * 40320; // 28 days

export function ConvertQuality(itemID: string, creationDate: string): number {
    let StartDate: number = new Date(creationDate).getTime();
    let DecayRate: number = ItemList[itemID].decayrate;
    let TimeExtra: number = TimeAllowed * DecayRate;
    let percentDone: number = 100 - Math.ceil(((Date.now() - StartDate) / TimeExtra) * 100);

    if (DecayRate === 0.0) {
        percentDone = 100;
    }

    if (percentDone < 0) {
        percentDone = 0;
    }

    return percentDone;
}
