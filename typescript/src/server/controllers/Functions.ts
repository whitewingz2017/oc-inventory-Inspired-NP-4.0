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
            return true
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

RPC.register('inventory:characterSpawned', async (source) => {
    const character = global.exports['qb-lib'].getCharacter(source);
    const result = await global.exports.oxmysql.query_async('SELECT * FROM user_inventory2 WHERE item_id = @item_id AND name = @Name', {
        '@item_id': 'simcard',
        '@Name': 'simcard-'+character.id
    });
    let number = JSON.parse(result[0].information)
    emitNet('updatePhoneNumber',source, number.Number)
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

export async function GenerateInformation(item: any) {
    if (item === "simcard") {
        // Query the database for the item information
        const result = await global.exports.oxmysql.query_async('SELECT * FROM user_inventory2 WHERE item_id = @item_id', {
            '@item_id': item,
        });

        // Iterate over the result set (in case there are multiple items with the same item_id)
        let phoneNumber;
        let isNumberUnique = false;
        while (!isNumberUnique) {
            // Generate a new phone number with prefix 639
            phoneNumber = generatePhoneNumberWithPrefix(639);

            // Iterate over the result set and compare phone numbers
            isNumberUnique = true;
            for (const row of result) {
                // Parse the information property
                const info = JSON.parse(row.information);

                // Compare the generated phone number with the number from the information
                if (info && info.Number === phoneNumber) {
                    isNumberUnique = false;
                    break; // Exit the loop as soon as a match is found
                }
            }
        }

        // Create a valid JSON string for the information
        let infoString = JSON.stringify({ Number: phoneNumber });

        // Return the JSON string
        return infoString;
    }
}


/**
 * Generates a phone number starting with the specified prefix.
 * The total length of the phone number should be 10 digits.
 *
 * @param prefix - The desired prefix (e.g., 639).
 * @returns A phone number starting with the specified prefix.
 */
function generatePhoneNumberWithPrefix(prefix: number): number {
    // Calculate the number of digits needed to reach 10 digits in total
    const remainingDigitsCount = 10 - prefix.toString().length;

    // Generate a random number with the remaining digits
    const remainingDigits = randomInt(
        Math.pow(10, remainingDigitsCount - 1), // Minimum value with the correct number of digits
        Math.pow(10, remainingDigitsCount) // Maximum value (exclusive) with the correct number of digits
    );

    // Combine the prefix and the remaining random digits to form the phone number
    const phoneNumber = parseInt(prefix.toString() + remainingDigits.toString());

    return phoneNumber;
}

/**
 * Generates a random integer within the given range [min, max).
 *
 * @param min - The minimum value of the range (inclusive).
 * @param max - The maximum value of the range (exclusive).
 * @returns A random integer within the specified range.
 */
function randomInt(min: number, max: number): number {
    // Ensure that the range is valid
    if (min >= max) {
        throw new Error('Invalid range: min must be less than max');
    }

    // Generate a random float between 0 and 1, scale it to the range, and use Math.floor to get an integer
    return Math.floor(Math.random() * (max - min) + min);
}

//Clean Inventory Removed 0 Quality Items
setImmediate(async () => {
    const result = await global.exports.oxmysql.query_async('SELECT * FROM user_inventory2');
    for (const row of result) {
        let quality = ConvertQuality(row.item_id,row.creationDate)
        if(quality === 0){
            await global.exports.oxmysql.query_async(`DELETE FROM user_inventory2 WHERE id = @ID AND item_id = @ItemId`, {
                ['@ID']: row.id,
                ['@ItemId']: row.item_id
            });
        }
    }
})