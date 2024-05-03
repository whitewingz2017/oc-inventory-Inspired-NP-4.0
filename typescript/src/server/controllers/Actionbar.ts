import { ConvertQuality } from "./Functions";

RPC.register('inventory:getActionbarItems', async (source: any, cid: number) => {
    const character = global.exports['qb-lib'].getCharacter(source);

    const items = await global.exports['oxmysql'].query_async('SELECT * FROM user_inventory2 WHERE name = @Name AND slot IN (1, 2, 3, 4, 5)', {
        '@Name': 'body-' + character.id,
    })

    const actionbarItems = Array(5).fill(null);

    items.forEach(item => {
        const slotIndex = item.slot - 1;
        actionbarItems[slotIndex] = item;
    });

    return actionbarItems;
});

RPC.register('inventory:getItemInActionbarSlot', async(source: any, slot: any, cid: number) => {
    const character = global.exports['qb-lib'].getCharacter(source);

    const items = await global.exports['oxmysql'].query_async('SELECT * FROM user_inventory2 WHERE name = @Name AND slot = @Slot', {
        '@Name': 'body-' + character.id,
        '@Slot': slot
    })
    const usedItems = {
        Info: {
            id: items[0].id,
            Item: items[0].item_id,
            itemId: items[0].item_id,
            amount: items.length,
            Amount: items.length,
            durability: ConvertQuality(items[0].item_id,items[0].creationDate),
            information: items[0].information,
            slot: items[0].slot,
        },
        ItemId: items[0].item_id
    }
    return usedItems
})