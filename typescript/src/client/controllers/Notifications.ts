
import { updateInventory } from "./Exports";
let update = false;
onNet('inventory:sendNotification', async(itemId: any, amount: any, action: any) => {
    if(!update){
        updateInventory()
        SendNUIMessage({
            event: 'inventory:sendNotification',
            text: itemId,
            action: action,
            item: itemId,
            count: amount,
        })
        update = true;
        setTimeout(() => {
            update = false;
        }, 1000);
    }
})