import { loadAnimDict } from "./Exports";

const Drops = []
let DropItemid = {};
let DroppedInventories = [];
let DrawInventories = [];
let NearInventories = [];

onNet('Inventory:Drops:Create', (object) => {
    DroppedInventories.push(object);
    NearInventories.push(object);
    DrawInventories.push(object);
    if(object.count === 0){
        createOneDrop(object,object.name,object.position, object.item)
    }else{
        clearObject(object.name)
        setTimeout(() => {
            createMultiDrop(object,object.name,object.position, null)
        }, 500);
      
    }
    
})

onNet('Inventory:scanGround', () => {
    console.log("SCANNING GROUND HERE")
})


onNet('Inventory-Dropped-Remove', (sentIndexName) => {
    ClearCache(sentIndexName);
    clearObject(sentIndexName[0])
});



export function GroundInventoryScan() {
    let cid = global.exports['isPed'].isPed('cid')
    let row = DroppedInventories.find(ScanClose);
    if (row) {
        emitNet('server-inventory-open', GetEntityCoords(PlayerPedId()), cid, '1', row.name);
        let data = {
            isTrue: true,
            name: row.name,
            count: row.count
        }
        return data
    } else {
        emitNet('server-inventory-open', GetEntityCoords(PlayerPedId()), cid, '3', 'create');
        let data = {
            isTrue: false,
            name: null,
            count: 0
        }
        return data
      
    }
}

function ScanClose(row) {
    let playerPos = GetEntityCoords(PlayerPedId());
    let targetPos = row.position;
    let distancec = GetDistanceBetweenCoords(playerPos[0], playerPos[1], playerPos[2], targetPos.x, targetPos.y, targetPos.z, false);
    return distancec < 1.0;
}


function CacheInventories() {
    DrawInventories = NearInventories.filter(DrawMarkers);
}

setInterval(CacheInventories, 1000);

function DrawMarkers(row) {
    let playerPos = GetEntityCoords(PlayerPedId());
    let targetPos = row.position;
    let distanceb = GetDistanceBetweenCoords(playerPos[0], playerPos[1], playerPos[2], targetPos.x, targetPos.y, targetPos.z, false);
    let checkDistance = 12;
    if (IsPedInAnyVehicle(PlayerPedId(), false)) {
        checkDistance = 25;
    }

    return distanceb < checkDistance;
}

let debug = true;

function ClearCache(sentIndexName) {
    let foundIndex = -1;
    let i = 0;
    for (let Row in DroppedInventories) {
        if (DroppedInventories[Row].name == sentIndexName) {
            foundIndex = i;
            break;
        }
        i++;
    }
    if (foundIndex > -1) {
        DroppedInventories.splice(foundIndex, 1);
    }

    foundIndex = -1;
    i = 0;
    for (let Row in DrawInventories) {
        if (DrawInventories[Row].name == sentIndexName) {
            foundIndex = i;
            break;
        }
        i++;
    }
    if (foundIndex > -1) {
        DrawInventories.splice(foundIndex, 1);
    }

    foundIndex = -1;
    i = 0;
    for (let Row in NearInventories) {
        if (NearInventories[Row].name == sentIndexName) {
            foundIndex = i;
            break;
        }
        i++;
    }

    if (foundIndex > -1) {
        NearInventories.splice(foundIndex, 1);
    }
}

const createOneDrop = async (item,name,coords, props) => {
    let object = await RPC.execute('getObject',props)
    DropItemid[name] = [];
    const box = CreateObject(GetHashKey(object), coords.x, coords.y, coords.z, false, false, false)
   
    PlaceObjectOnGroundProperly(box)
    FreezeEntityPosition(box, true)
    SetEntityCollision(box, false, false)
    DropItemid[name].push(box);
    let  _0x22fda5 = GetEntityCoords(box);
    // console.log('_0x22fda5',_0x22fda5,_0x22fda5[0])
    global.exports['interactions'].AddInteraction({
        id: "pickup_object_"+box,
        coords: [_0x22fda5[0], _0x22fda5[1], _0x22fda5[2]],
        options: [{
          id: "pickup_object_"+box,
          label: "Pickup",
          icon: "comment",
          event: "inventory:pickupObject",
          parameters: {
            entity:box,
            dropId:box,
            item: item
          }
        }],
        context: {
          distance: {
            draw: 2,
            use: 2
          }
        }
      })
}

const createMultiDrop = (item, name, coords, props) => {
    let object = 'prop_paper_bag_01'
    DropItemid[name] = [];
 
    const box = CreateObject(GetHashKey(object), coords.x, coords.y, coords.z - 0.8, false, false, false)
    SetEntityAsMissionEntity(box, true, true);
    FreezeEntityPosition(box, true)
    SetEntityCollision(box, false, false)
    PlaceObjectOnGroundProperly(box)
    DropItemid[name].push(box);
    let  _0x22fwda5w = GetEntityCoords(box);
    global.exports['interactions'].AddInteraction({
        id: "pickup_object_"+box,
        coords: [_0x22fwda5w[0], _0x22fwda5w[1], _0x22fwda5w[2]],
        options: [{
          id: "pickup_object_"+box,
          label: "Pickup",
          icon: "comment",
          event: "inventory:pickupObject",
          parameters: {
            entity:box,
            dropId:box,
            item: item
          }
        }],
        context: {
          distance: {
            draw: 2,
            use: 2
          }
        }
      })
}

const clearObject = (name) => {
    let dropId = DropItemid[name]
    DeleteObject(dropId[0])
    globalThis.exports.interactions.RemoveInteraction(`pickup_object_${dropId[0]}`);
}

const deleteObject = (id) => {

}

onNet('inventory:pickupObject', (data) => {
    RPC.execute('inventory:pickupObject', data.item)
    emit('inventory:pickupAnimation')
})

on('inventory:pickupAnimation', async () => {
    await loadAnimDict("pickup_object")
    TaskPlayAnim(PlayerPedId(), "pickup_object","pickup_low",8, 1, -1.0, 48, 0.0, false, false, false)
    setTimeout(() => {
        ClearPedSecondaryTask(PlayerPedId())
        ClearPedTasks(PlayerPedId())
    }, 1000);
   
})
// for pickup in vehicle
// await loadAnimDict("anim@amb@nightclub@mini@drinking@drinking_shots@ped_d@normal")
// let _0x371704 = "anim@amb@nightclub@mini@drinking@drinking_shots@ped_d@normal";
// TaskPlayAnim(PlayerPedId(), _0x371704, "pickup", 8, -8, -1, 48, 0, false, false, false);

