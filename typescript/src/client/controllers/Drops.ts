import { loadAnimDict } from "./Exports";

const Drops = []
let DropItemid = {};
let DroppedInventories = [];
let DrawInventories = [];
let NearInventories = [];

console.log("SET THIS DROP IS WORKING?")
onNet('Inventory:Drops:Create', (object) => {
    console.log("IM CREATING DROPS HERE", object, JSON.stringify(object.position))
    DroppedInventories.push(object);
    NearInventories.push(object);
    DrawInventories.push(object);
    if(object.count === 0){
        console.log("CREATE ONCE FOR ITEMS")
        createOneDrop(object,object.name,object.position, object.item)
    }else{
        clearObject(object.name)
        setTimeout(() => {
            createMultiDrop(object,object.name,object.position, null)
        }, 500);
      
        console.log("CREATE ONCE BUT FOR MULTIPLE ITEMS")
    }
    
})

onNet('Inventory:scanGround', () => {
    console.log("SCANNING GROUND HERE")
})


onNet('Inventory-Dropped-Remove', (sentIndexName) => {
    console.log("INVENTORY DROP REMOVED",sentIndexName, sentIndexName[0])
    ClearCache(sentIndexName);
    clearObject(sentIndexName[0])
});


export function GroundInventoryScan() {
    let cid = global.exports['isPed'].isPed('cid')
    console.log("DroppedInventories",DroppedInventories)
    let row = DroppedInventories.find(ScanClose);
    // console.log("CLOSE DISTANCE INV",row,DroppedInventories)
    // console.log("SCAN CLOSE SHIT",ScanClose)
    if (row) {
        console.log("row.name",row.name, row.count)
        emitNet('server-inventory-open', GetEntityCoords(PlayerPedId()), cid, '1', row.name);
        let data = {
            isTrue: true,
            name: row.name,
            count: row.count
        }
        return data
    } else {
        console.log("CREATE DROP")
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
    // console.log("SHIT THIS IS SCAN CLOSE")
    let playerPos = GetEntityCoords(PlayerPedId());
    let targetPos = row.position;
    let distancec = GetDistanceBetweenCoords(playerPos[0], playerPos[1], playerPos[2], targetPos.x, targetPos.y, targetPos.z, false);
    // console.log("DISTANCE", distancec, row)
    return distancec < 1.0;
}

function drawMarkersUI() {
    for (let Row in DrawInventories) {
        let dropId = DropItemid[DrawInventories[Row].name]
        let x = DrawInventories[Row].position.x
        let y = DrawInventories[Row].position.y
        let z = DrawInventories[Row].position.z - 0.8
        // let coords = {DrawInventories[Row].position.x, DrawInventories[Row].position.y, DrawInventories[Row].position.z}
        // let  _0x22fda5 = GetEntityCoords(dropId[0]);
        // global.exports['interactions'].AddInteraction({
        //     id: "pickup_object_"+dropId[0],
        //     coords: _0x22fda5,
        //     options: [{
        //       id: "pickup_object_"+dropId[0],
        //       label: "Pickup",
        //       icon: "comment",
        //       event: "inventory:pickupObject",
        //       parameters: {
        //         entity:dropId[0],
        //         dropId:dropId[0]
        //       }
        //     }],
        //     context: {
        //       distance: {
        //         draw: 5,
        //         use: 1.0
        //       },
        //       isEnabled: true
        //     }
        //   })
        // exports['interactions']:AddInteraction({
        //     id = "rental_vendor",
        //     coords = {-761.05, -1061.28, 10.94 + 2},
        //     options = {{
        //       id= "rental_vendor",
        //       label= "Talk",
        //       icon= "comment",
        //       event = "qb-carrent:menu",
        //       parameters= {}
        //     }},
        //     context= {
        //       flag= {"isNPC"},
        //       npcId= "rental_vendor",
        //       distance= {
        //         draw= 7,
        //         use= 1.2
        //       },
        //       isEnabled = function(pEntity, pContext) return true end
        //     }
        //   })
    //    let  _0x22fda5 = GetEntityCoords(dropId);
    //    console.log("COORDS",GetEntityCoords(dropId))
    // console.log("ENTITY",dropId[0])
    //       var _0x23ec95 = {
    //         id: `pickup_${dropId}`,
    //         isEnabled: true,
    //         canInteract: true,
    //         coords: [x,y,z+1],
    //         options: {
    //             id: `pickup_${dropId}`,
    //             label: "Pickup",
    //             icon: "comment",
    //             event: "inventory:pickupObject",
    //             parameters: {
    //               entity:dropId,
    //               dropId:dropId
    //             }
    //           },
    //         context: {
    //             flag: [""],
    //             distance: {
    //               draw: 5,
    //               use: 1.0
    //             },
    //             isEnabled: true,
    //             skipLos: true
    //           },
              
    //       };
    //       const _0x514bd7 = _0x23ec95;
    //       globalThis.exports.interactions.AddInteraction(_0x514bd7);
        //   global.exports['interactions'].AddInteraction(`pickup_${dropId}`, {x,y,z}, [{
        //     id: "pickup_object",
        //     label: "Pickup",
        //     eventSDK: "inventory:pickupObject",
        //     parameters: {
        //       entity: dropId,
        //       dropId: dropId
        //     },
        //     context: {
        //         distance: {
        //             use: 2,
        //             draw: 2
        //         },
        //         isEnabled: true
        //       }
        //   }], {
        //     flag: [""],
        //     isEnabled: function () {
        //       return !IsPedInAnyVehicle(PlayerPedId(), false);
        //     },
        //     context: {
        //         distance: {
        //             use: 2,
        //             draw: 2
        //         },
        //         isEnabled: true
        //       }
        //   });
        // console.log("ROW",DrawInventories[Row].name)
        // DrawMarker(
        //     20,
        //     DrawInventories[Row].position.x,
        //     DrawInventories[Row].position.y,
        //     DrawInventories[Row].position.z - 0.8,
        //     0,
        //     0,
        //     0,
        //     0,
        //     0,
        //     0,
        //     0.35,
        //     0.5,
        //     0.15,
        //     252,
        //     255,
        //     255,
        //     91,
        //     false,
        //     false,
        //     0,
        //     false,
        //     null,
        //     null,
        //     false,
        // );
    }
}

setTick(drawMarkersUI);

function CacheInventories() {
    // console.log("ANO TONG CACHE")
    DrawInventories = NearInventories.filter(DrawMarkers);
}

setInterval(CacheInventories, 1000);

function DrawMarkers(row) {
    // console.log("CHECKING",row)
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
    console.log("CLEAR CACHE 2")
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
        console.log("FUCKING FOUND INDEX",foundIndex,NearInventories)
        NearInventories.splice(foundIndex, 1);
    }
}

const createOneDrop = async (item,name,coords, props) => {
    let object = await RPC.execute('getObject',props)
    console.log("CREATE ONE DROP", object)
    DropItemid[name] = [];
 
    const box = CreateObject(GetHashKey(object), coords.x, coords.y, coords.z, false, false, false)
   
    PlaceObjectOnGroundProperly(box)
    FreezeEntityPosition(box, true)
    SetEntityCollision(box, false, false)
    DropItemid[name].push(box);
    let  _0x22fda5 = GetEntityCoords(box);
    console.log('_0x22fda5',_0x22fda5,_0x22fda5[0])
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
    console.log("TESTING PICKUP", JSON.stringify(data))
    RPC.execute('inventory:pickupObject', data.item)
    emit('inventory:pickupAnimation')
})

on('inventory:pickupAnimation', async () => {
    console.log("GOING HERE TO ANIM")
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


// const shit = () => {
//     console.log("SHIT TEST")
// }

// setTick(shit)

// setInterval(() => {
//     console.log("ITEM ID", DropItemid)
// }, 2000)