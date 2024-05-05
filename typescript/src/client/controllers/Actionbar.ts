import { Delay, loadAnimDict } from "./Exports";
import { usedItem } from "./Functions";

let actionBarTimeout: any

global.exports['qb-keybinds'].registerKeyMapping('ActionBar', 'Inventory', 'Show actionbar', '+actionBar', '-actionBar', 'TAB')

async function getActionbarItems() {
    let cid = global.exports['isPed'].isPed('cid')
    const items = await RPC.execute('inventory:getActionbarItems',cid);

    SendNUIMessage({
        actionBarItems: items
    });
}

async function displayActionbar(state: any) {
    getActionbarItems()
    SendNUIMessage({
        event: 'inventory:toggleActionbar'
    });

    // global.exports.hud.sendAppEvent({
    //     showLargeIcons: state,
    //     displayAllForce: state,
    //     displayAllForceVehicle: state ? !!GetVehiclePedIsIn(PlayerPedId(), false) : false,
    //     displayRadioChannel: state
    // });
}

RegisterCommand('+actionBar', () => {
    console.log("FUCK U KBA ACTION BAR")
    displayActionbar(true);
}, false);

RegisterCommand('-actionBar', () => {
    displayActionbar(false);
}, false);

RegisterCommand('hideactionbar', () => {
    SendNUIMessage({
        event: 'inventory:toggleActionbar'
    });
}, false)

let actionbarTimeout = false
const actionBarSlots = [1, 2, 3, 4, 5];

actionBarSlots.forEach(slot => {
    global.exports['qb-keybinds'].registerKeyMapping('inventory', 'Inventory', `Actionbar Slot ${slot}`, `+useActionbar_${slot}`, '', slot, true);

    RegisterCommand(`+useActionbar_${slot}`, async () => {
        console.log(`[DEBUG] Inventory using actionbar slot ${slot}`);
        let cid = global.exports['isPed'].isPed('cid')
        const Item = await RPC.execute('inventory:getItemInActionbarSlot', slot,cid)
       
        console.log("ITEM USDE",Item,JSON.stringify(Item))
        if (Item.Info.Item && !actionbarTimeout) {
            emit('inventory:sendNotification', Item.Info.Item, 1, 'Used')
            usedItem(Item)
            actionbarTimeout = true

            setTimeout(() => {
                actionbarTimeout = false
            }, 2500)
        }

    }, false);
});

// let ammoTable = [];
// let armed = false;
// let cannotPullWeaponInAnimation = false;
// let CurrentSqlID = 0;
// let currentInformation:any = 0;
// let lastEquippedItemToRemove;
// let UNARMED_HASH:any = `WEAPON_UNARMED`;
// let unholsteringactive = false;
// let prevupdate = 0;
// let isActionBarDisabled = false;
// let shotRecently = false;
// let focusTaken = false;
// let lastUsedAmmo = GetSelectedPedWeapon(PlayerPedId());

// onNet('equipWeaponID', (hash, newInformation, sqlID, itemToRemove) => {

//     if(!global.exports['qb-propattach'].canPullWeaponHoldingEntity()) return;
//     if(cannotPullWeaponInAnimation) return;

//     cannotPullWeaponInAnimation = true
//     currentInformation = JSON.parse(newInformation)

//     if(currentInformation.cartridge === undefined){
//         currentInformation = "Scratched off data"
//     }else{
//         currentInformation = currentInformation.cartridge
//     }
//     emit('evidence:bulletInformation', currentInformation)

//     let dead = global.exports['ragdoll'].GetDeathStatus();
//     if(dead) return;

//     lastEquippedItemToRemove = itemToRemove

//     if(UNARMED_HASH === GetSelectedPedWeapon(PlayerPedId())){
//         armed = false
//     }

//     SetPlayerCanDoDriveBy(PlayerId(),false)

//     if(armed){
//         armed = false
//         emit('hud-display-item', Number(hash), 'Holster')
//         holster()
//     }else{
//         emit('hud-display-item', Number(hash), 'Equip')
//         unholster(Number(hash),true, JSON.parse(newInformation))
//     }

//     if(hash === "-72657034"){
//         RemoveAllPedWeapons(PlayerPedId(),hash)
//     }
   
//     SetPedAmmo(PlayerPedId(),  `WEAPON_FIREEXTINGUISHER`, 10000)
// 	SetPedAmmo(PlayerPedId(),  `WEAPON_PetrolCan`, 4500)
// 	SetPedAmmo(PlayerPedId(),  `WEAPON_STICKYBOMB`, 1)

//     SetPlayerCanDoDriveBy(PlayerId(),true)
   
// 	emit("qb-weapons:client:showWeaponFireRate", armed)
//     console.log('equipWeaponID SHIT')
// 	emit("qb-weapons:client:weaponEquiped", hash, newInformation, sqlID, itemToRemove, armed)
// 	emitNet("qb-weapons:weaponEquiped", hash, newInformation, sqlID, itemToRemove, armed)
// })


// async function holster(){
//     let ped = PlayerPedId();
//     unholsteringactive = true
//     let dick = "reaction@intimidation@1h"
//     let sex = "outro"
//     let myJob = global.exports['isPed'].isPed('myJob');
//     if(myJob === "police" || myJob === "doc" || myJob === "state" || myJob === "sheriff" || myJob === "ranger"){
//         // copholster()
//         await Delay(600)
//         unholsteringactive = false
//         cannotPullWeaponInAnimation = false
//         return
//     } 
//     prevupdate = 0
//     // updateAmmo()
//     let animLength = GetAnimDuration(dick, sex) * 1000
//     await loadAnimDict(dick)
//     TaskPlayAnim(ped, dick, sex, 1.0, 1.0, -1, 50, 0, false, false, false)
//     Delay(animLength - 2200)

//     SetCurrentPedWeapon(ped, UNARMED_HASH, true)
//     Delay(300)
//     RemoveAllPedWeapons(ped,false)
//     ClearPedTasks(ped)
//     Delay(800)
//     unholsteringactive = false
//     cannotPullWeaponInAnimation = false
// }

// function unholster(hash, a, info){

// }

// async function copholster(){
//     let dick = "reaction@intimidation@cop@unarmed"
//     let sex = "intro"
//     let ammoCount = 0
//      await loadAnimDict( dick ) 
  
//       let ped = PlayerPedId()
//       prevupdate = 0
//     //   updateAmmo()
  
//       TaskPlayAnim(ped, dick, sex, 10.0, 2.3, -1, 49, 1, false, false, false )
  
//       Delay(600)
//       SetCurrentPedWeapon(ped, UNARMED_HASH, true)
//       RemoveAllPedWeapons(ped,false)
//       ClearPedTasks(ped)
// }
// let lastUsedAmmoHash
// function updateAmmo(isForced) {
//     if(prevupdate > 0) return;

//     prevupdate = 5;
//     let ped = PlayerPedId();
//     let hash = GetSelectedPedWeapon(ped)
//     if(hash === UNARMED_HASH){
//         hash = lastUsedAmmoHash
//     }
//     lastUsedAmmoHash = hash
// 	let newammo = 0
// 	let ammoType = Citizen.InvokeNative(0x7FEAD38B326B9F74, ped, hash)

//     if (typeof ammoType === 'number') {
//         ammoTypeCheck(ammoType)

//         newammo = GetPedAmmoByType(ped, ammoType)

//         if(newammo === undefined) return;

//         if(isForced && newammo == 0) return;

// 		if(newammo > 150 && ammoType !== -899475295){
//             newammo = 150
//         }

// 		ammoTable[ammoType].ammo = newammo;


// 		emitNet("qb-weapons:updateAmmo",newammo,ammoType,ammoTable)
//     }
//     return newammo
// }

// function updateAmmoTable(newammo,ammoType) {
// 	let ped = PlayerPedId()
// 	let hash = GetSelectedPedWeapon(ped)
// 	if(hash === UNARMED_HASH){
//         updateAmmo(true)
// 		return
//     }
// 	emitNet("qb-weapons:updateAmmo",newammo,ammoType,ammoTable)
// }

// interface AmmoTypeInfo {
//     ammo: number;
//     type: number;
// }


// function ammoTypeCheck(atype: unknown): void {
//     // Check if `atype` is a number
//     if (typeof atype === 'number') {
//         const atypeKey = atype.toString();
//         // Check if `ammoTable[atypeKey]` is not defined (i.e., null or undefined)
//         if (!ammoTable[atypeKey]) {
//             // Initialize the entry in the table with default values
//             ammoTable[atypeKey] = {
//                 ammo: 0,
//                 type: atype,
//             };
//         }
//     }
// }
