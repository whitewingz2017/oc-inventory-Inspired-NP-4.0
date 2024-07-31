import { inTrunk, trunkPlate } from "./Trunk";
import { GroundInventoryScan } from "./Drops";
import { hasEnoughOfItem } from "./Functions";

global.exports("getItemListNames", async() => {
    const orderedItems = [];
    const itemList = await RPC.execute('inventory:getItemList');

    Object.keys(itemList).forEach((itemName, index) => {
        const data = itemList[itemName];
        orderedItems.push({
            id: itemName,
            name: data.name
        });
    });

    return orderedItems;
});

global.exports("hasEnoughOfItem", async(Item: any, Amount: any, ShouldReturn: any, CheckQuality: any, Meta: any) => {
    // TODO
    let newMeta
    if(Meta === undefined){
        newMeta = {}
    }else{
        newMeta = Meta
    }
    return hasEnoughOfItem(Item, Amount, ShouldReturn, CheckQuality, newMeta)
    
})

global.exports("OpenInventory", async() => {
    ExecuteCommand('+inventory')
})

export let Delay = (ms:any) => new Promise(res => setTimeout(res, ms));

export async function loadAnimDict(dict: string) {
    while(!HasAnimDictLoaded(dict)) {
        RequestAnimDict(dict)
        await Delay(5)
    }
}

export async function updateInventory() {
    let cid = global.exports['isPed'].isPed('cid')
    console.log("UPDATE AND IS TRUNK?",inTrunk)
    const Inventory = await RPC.execute('inventory:getInventories',cid, IsPedInVehicle(PlayerPedId(), GetVehiclePedIsIn(PlayerPedId(), false), false), GetVehicleNumberPlateText(GetVehiclePedIsIn(PlayerPedId(), false)), inTrunk, trunkPlate)

    SendNUIMessage({
        Inventory: Inventory,
    })
}
