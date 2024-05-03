
import { updateInventory } from "./Exports";

onNet('inventory:sendNotification', async(itemId: any, amount: any, action: any) => {
    updateInventory()
    SendNUIMessage({
        event: 'inventory:sendNotification',
        text: itemId,
        action: action,
        item: itemId,
        count: amount,
    })
})