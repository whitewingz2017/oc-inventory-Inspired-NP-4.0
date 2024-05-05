import { count } from "console";
import { Delay, loadAnimDict } from "./Exports";
import {TaskBarMinigame} from "../modules/minigames"
import { dropNames } from "./Inventory";
let ItemCallbacks = {}

const validWaterItem: Record<string, boolean> = {
    "oxygentank": true,
    "water": true,
    "poisonedwater": true,
    "vodka": true,
    "beer": true,
    "whiskey": true,
    "coffee": true,
    "fishtaco": true,
    "taco": true,
    "burrito": true,
    "churro": true,
    "hotdog": true,
    "greencow": true,
    "donut": true,
    "applepie": true,
    "eggsbacon": true,
    "icecream": true,
    "mshake": true,
    "winemilkshake": true,
    "sandwich": true,
    "customfooditem": true,
    "customwateritem": true,
    "customcoffeeitem": true,
    "poisonedsandwich": true,
    "hamburger": true,
    "cola": true,
    "jailfood": true,
    "gpattysupreme": true,
    "bzillablast": true,
    "quasar": true,
    "quirky": true,
    "luckycrunch": true,
    "fries": true,
    "slushy": true,
    "frappuccino": true,
    "latte": true,
    "cookie": true,
    "muffin": true,
    "chocolate": true,
    "softdrink": true,
    "franksmonster": true,
    "roostertea": true,
    "buddhamedalion": true,
    "buddhashovel": true,
    "gemanjicompass": true,
    "qdrpepper": true,
    "qfruity": true,
};

const sandwichItems: Record<string, boolean> = {
    "sandwich": true,
    "hamburger": true,
    "poisonedsandwich": true,
    "customfooditem": true,
    "panini": true,
    "qspam": true,
};

const waterItems: Record<string, boolean> = {
    "cola": true,
    "water": true,
    "poisonedwater": true,
    "customwateritem": true,
    "roostertea": true,
    "qdrpepper": true,
};

const waterItemsAttached: Record<string, boolean> = {
    "water": true,
    "poisonedwater": true,
    "cola": true,
    "vodka": true,
    "whiskey": true,
    "beer": true,
    "coffee": true,
    "sbcoffee": true,
    "softdrink": true,
    "fries": true,
    "roostertea": true,
    "customwateritem": true,
    "customcoffeeitem": true,
    "kdragonwater": true,
    "qdrpepper": true,
};

const deanworldFood: Record<string, boolean> = {
    "deanworldcorndog": true,
    "deanworldcottoncandy": true,
    "deanworldcaramelapple": true,
    "deanworldkettlecorn": true,
    "deanworldsoftpretzel": true,
};

const validDogModels: Record<string, boolean> = {
    "a_c_chop": true,
    "a_c_husky": true,
};

const customMarketItems: Record<string, boolean> = {
    "customfooditem": true,
    "customwateritem": true,
    "customcoffeeitem": true,
    "customjointitem": true,
    "custommerchitem": true,
};

interface ParachuteConfigItem {
    replace: string;
    tint: number;
}

const parachuteConfig: Record<string, ParachuteConfigItem> = {
    "-72657034": {
        replace: "p_parachute1_mp_s",
        tint: 6,
    },
    "airxchute": {
        replace: "p_parachute1_mp_dec",
        tint: 1,
    },
    "airbornechute": {
        replace: "p_parachute2_mp_dec",
        tint: 1,
    },
};


let LastUsedItem = 0;
let LastUsedItemId = "ciggy";
let justUsed = false;
let usedCounter = 0;
let lastCounter = 0;
let boxAttached = false;
let fixingvehicle = false;
let wheelChair = null;
let HeadBone = 0x796e;
const activeTasks: any = {};
let taskInProcess: any = false;
// let smoking = false;

onNet('inventory:phoneNumber', (number)=> {
    let PhoneNumber = number.Number
    SendNUIMessage({
        PlayerData: {
            character: {
                id: global.exports['isPed'].isPed('cid'),
                name: global.exports['isPed'].isPed('fullname'),
                cash: 0,
                personalVehicle: 'Landstalker',
                home: 'Little Seoul',
                phone: PhoneNumber,
            },
    
            settings: {
                holdToDrag: GetResourceKvpInt('inventory:holdToDrag'),
                shiftQuickMove: GetResourceKvpInt('inventory:shiftQuickMove')
            }
        }
    });
})

export async function usedItem(item) {
    let isWeapon = true;
    // console.log("ITEM USED HERE", JSON.stringify(item))
    // console.log("USED ITEMS",isNaN(item.ItemId),item.Info.durability, item,await getQuantity(item.ItemId))
    if(isNaN(item.ItemId)){
        isWeapon = false
    }
    if(item === undefined) return;
    const player = PlayerPedId();
    const currentVehicle = GetVehiclePedIsUsing(player)
    const quality = item.Info.durability
    if(Number(quality) < Number(1)){
        emit("DoLongHudText","Item is too worn.",2)
        if(isWeapon){
            emit('brokenWeapon')
        }
        return
    }
    LastUsedItem = item.id
    LastUsedItemId = item

    if(justUsed) {
        usedCounter = usedCounter + 1
        if(usedCounter > 10 && usedCounter > lastCounter+5) {
            lastCounter = usedCounter
            //report player for exploiting by using items in less than 500ms
            emit("DoLongHudText",`Tried using ${usedCounter} items in < 500ms`,2)
        }
        return
    }

    justUsed = true

    if(!hasEnoughOfItem(item.ItemId, 1, false, false, {})){
        emit('DoLongHudText','You don\'t appear to have this item on you?',2)
        justUsed = false
        usedCounter = 0
        lastCounter = 0
        return
    }
    // console.log("MOTHER FUCKER",parachuteConfig[item.ItemId])
    if(parachuteConfig[item.ItemId] && Number(item.Info.durability) > 0 && !IsPedInParachuteFreeFall(player) && !IsPedFalling(player) && (GetPedParachuteState(player) === -1 || GetPedParachuteState(player) === 0)){
        const pConf = parachuteConfig[item.ItemId];
        SetPlayerParachuteModelOverride(PlayerId(), pConf.replace)
        SetPedParachuteTintIndex(player, pConf.tint)
        SetPlayerReserveParachuteTintIndex(PlayerId(), pConf.tint)
        emit('equipWeaponID', '-72657034',item.Info.information, item.Info.id)
        RPC.execute('inventory:removeItem', item.Info)
        emit('hud:equipParachute')
        justUsed = false
        usedCounter = 0
        lastCounter = 0
        return
    }

    // if(!isValidUseCase(item.ItemId)){
    //     justUsed = false
    //     usedCounter = 0
    //     lastCounter = 0
    //     return
    // }

    if(item.ItemId === undefined){
        justUsed = false
        usedCounter = 0
        lastCounter = 0
        return
    }

    if(item.ItemId === "-1518444656"){ //gepard
        if(Number(item.Info.durability) > 0){
            const weaponInfo: Record<string, any> = JSON.parse(item.Info.information);
            weaponInfo.componentVariant = "1";
            const hiddenKeys: string[] = weaponInfo._hideKeys || [];
            hiddenKeys.push("componentVariant");
            weaponInfo._hideKeys = hiddenKeys;
            emit('equipWeaponID', '1649403952',JSON.stringify(weaponInfo), item.Info.id)
           
            setImmediate(async () => {
              console.log("SELECETED WEAPON",GetSelectedPedWeapon(PlayerPedId()))
                // while (GetSelectedPedWeapon(PlayerPedId()) !== 1649403952) {
                //     await Delay(100);
                // }  
               Delay(100)
               
                const weaponId = 1649403952;
            
                // Add weapon components to the player's weapon
                GiveWeaponComponentToPed(PlayerPedId(), weaponId, 0xF605986F); // Component 1
                GiveWeaponComponentToPed(PlayerPedId(), weaponId, 0xCDCEC991); // Component 2
                GiveWeaponComponentToPed(PlayerPedId(), weaponId, 0xF07EECC4); // Component 3
                GiveWeaponComponentToPed(PlayerPedId(), weaponId, 0xA3BCB36E); // Component 4
                console.log("EQUIPPED WEAPON")
            })
            
        }
        justUsed = false
        usedCounter = 0
        lastCounter = 0
        return
    }

    if(item.ItemId === "784503678"){
        if(Number(item.Info.durability) > 0){
            const weaponInfo: Record<string, any> = JSON.parse(item.Info.information);
            weaponInfo.componentVariant = "1";
            const hiddenKeys: string[] = weaponInfo._hideKeys || [];
            hiddenKeys.push("componentVariant");
            weaponInfo._hideKeys = hiddenKeys;
            emit('equipWeaponID', '-1834847097',JSON.stringify(weaponInfo), item.Info.id)
            setImmediate(async () => {
                console.log("SELECETED WEAPON",GetSelectedPedWeapon(PlayerPedId()))
                  // while (GetSelectedPedWeapon(PlayerPedId()) !== 1649403952) {
                  //     await Delay(100);
                  // }  
                 Delay(100)
                 GiveWeaponComponentToPed(PlayerPedId(), -1834847097, 0x47CF44AC)
                 SetPedWeaponTintIndex(PlayerPedId(), -1834847097, weaponInfo.weaponTint)
              })
        }
        justUsed = false
        usedCounter = 0
        lastCounter = 0
        Delay(2000)
        TriggerEvent("AttachWeapons")
        return
    }

    if(isWeapon){
        if (Number(item.Info.durability) > 0){
            emit('equipWeaponID', item.ItemId,item.Info.information, item.Info.id)
        }
        let curWeapon = item.ItemId
        emit('qb-actionbar:myWeapon', item.ItemId)
        justUsed = false
        // itemsused
        lastCounter = 0
        Delay(1500)
        emit('AttachWeapons')
        emit('qb-hud:armed', 100)
        return
    }

    if(item.ItemId === "smokegrenadeswat" || item.ItemId === "smokegrenadenpa"){
        if (Number(item.Info.durability) > 0){
            emit('equipWeaponID', -37975472,item.Info.information, item.Info.id)
        }
        justUsed = false
        usedCounter = 0
        lastCounter = 0
        return
    }
    Delay(800)
    let playerVeh = GetVehiclePedIsIn(player, false)
    if(!IsPedInAnyVehicle(player, false)){
        if(item.ItemId === "Suitcase"){
            emit('attach:suitcase')
        }
        if(item.ItemId === "Boombox"){
            TriggerEvent('attach:boombox')  
        }
        if(item.ItemId === "Box"){
            if(!boxAttached){
                emit('attach:box')
                boxAttached = true
            }else{
                emit('animation:carry', 'none')
                boxAttached = false
            }
        }
        if(item.ItemId === "DuffelBag"){
            emit('attach:blackDuffelBag')
        }
        if(item.ItemId === "MedicalBag"){
            emit('attach:medicalBag')
        }
        if(item.ItemId === "SecurityCase"){
            emit('attach:securityCase')
        }
        if(item.ItemId === "Toolbox"){
            TriggerEvent('attach:toolbox')
        }
        if(item.ItemId === "wheelchair"){
            let wheelchairCoords = GetEntityCoords(wheelChair)
            let playerCoords = GetEntityCoords(PlayerPedId())
            const distance = Math.sqrt(
                Math.pow(wheelchairCoords[0] - playerCoords[0], 2) +
                Math.pow(wheelchairCoords[1] - playerCoords[1], 2) +
                Math.pow(wheelchairCoords[2] - playerCoords[2], 2)
              );
            if(!DoesEntityExist(wheelChair)){
                let wheelChairModel = `npwheelchair`
                const randomDigit = Math.floor(Math.random() * 10);
                
                RequestModel(wheelChairModel)
                while (!HasModelLoaded(wheelChairModel)){
                    Delay(0)
                }
                let vCoords = GetEntityCoords(PlayerPedId())
                wheelChair = CreateVehicle(wheelChairModel, vCoords[0], vCoords[1], vCoords[2], GetEntityHeading(PlayerPedId()), true, false)
                SetVehicleOnGroundProperly(wheelChair)
                SetVehicleNumberPlateText(wheelChair, "PILLBOX"+ randomDigit)
                SetPedIntoVehicle(PlayerPedId(), wheelChair, -1)
                SetModelAsNoLongerNeeded(wheelChairModel)
                let wheelChairPlate = GetVehicleNumberPlateText(wheelChair)
            
                emitNet('garages:addJobPlate', wheelChairPlate)
                emit("keys:addNew", wheelChair, wheelChairPlate)
            }else if(DoesEntityExist(wheelChair) && distance < 3.0 && GetPedInVehicleSeat(wheelChair, -1) === 0){
                Sync.DeleteVehicle(wheelChair)
                wheelChair = null
            }else{
                emit("DoLongHudText","Too far away from the wheelchair or someon is sitting in it !",1)
            }
            
        }
    }
    let remove = false
    let removeId = null
    let itemreturn = false
    let drugitem = false
    let fooditem = false
    let drinkitem = false
    let healitem = false
    // let smoking

    if(ItemCallbacks[item.ItemId] && typeof(ItemCallbacks[item.ItemId]) === 'function'){
        let options = {remove: false}

        ItemCallbacks[item.ItemId](item.ItemId, item.Info, options)

        if(options.remove) remove = true;
    }

    if (item.ItemId === ""){

    }
    if (item.ItemId === "spikes"){
        emit('c_setSpike')
        remove = true
    }
    if (item.ItemId === "dice"){
        emit('RollDice:CheckIDClient', 'normal')
    }
    if (item.ItemId === "pdbadge"){
        emitNet('qb-poiceBadge:showBadge')
    }
    if (item.ItemId === "rollcash"){
        if(hasEnoughOfItem('rollcash', 1000, false, false, {})){
            let finished = exports['qb-taskbar'].taskBar(1000, '')
            if(finished === 100){
                RPC.execute('inventory:giveItem', 'dirtyband', 1)
            }
        }else{
            emit("DoLongHudText", "You need $1000 to start packing", 2)
        }
    }
    if (item.ItemId === "dirtyband"){
        if(hasEnoughOfItem('dirtyband', 1, false, false, {})){
            let finished = exports['qb-taskbar'].taskBar(1000, '')
            if(finished === 100){
                RPC.execute('inventory:giveItem', 'rollcash', 1000)
            }
        }else{
            emit("DoLongHudText", "You need $1000 to start packing", 2)
        }
    }
 
    if (item.ItemId === "joint" || item.ItemId === "weed5oz" || item.ItemId === "weedq" || item.ItemId === "beer" || item.ItemId === "vodka" || item.ItemId === "whiskey" || item.ItemId === "lsdtab" || item.ItemId === "customjoinitem"){
        drugitem = true
    }

    if (item.ItemId === "electronickit" || item.ItemId === "lockpick"){
        emitNet('robbery:triggerItemUsedServer',item.ItemId)
    }
    if (item.ItemId === "locksystem"){
        emitNet('robbery:triggerItemUsedServer',item.ItemId)
    }
    if (item.ItemId === "evidencebag"){
        emit('evidence:startCollect', item.ItemId, item.Info.slot)
        let itemInfo = item.Info.information
        if(itemInfo === '{}'){
            emit("DoLongHudText","Start collecting evidence!",1)
            emit("inventory:updateItem", item.ItemId, item.Info.slot, '{"used": "true"}')
            RPC.execute('inventory:updateItem',item.ItemId, item.Info.slot, '{"used": "true"}')
        }else{
            let dataDecoded = JSON.parse(itemInfo)
            if(dataDecoded.used){
                console.log('YOURE ALREADY COLLECTING EVIDENCE YOU STUPID FUCK')
            }
        }
    }
    if (item.ItemId === "lsdtab" || item.ItemId === "badlsdtab"){
        emit('animation:PlayAnimation', 'pill')
        let finished = exports['qb-taskbar'].taskBar(1000, 'Placing LSD Strip on 👅',false,false,playerVeh)
        if(finished === 100){
            emit("Evidence:StateSet",2,1200)
            TriggerEvent("Evidence:StateSet",24,1200)
            emit("fx:run", "lsd", 180, -1, (item.ItemId === "badlsdtab" ? true : false))
            remove = true
        }
    }

    if (item.ItemId === "lighter"){
        emit('animation:PlayAnimation','lighter')
        const coords = GetEntityCoords(PlayerPedId())
        const [ground, groundZ] = GetGroundZFor_3dCoord(coords[0],coords[1],coords[2],false)
        const finished = await global.exports['qb-taskbar'].taskBar.taskBar(1000, 'Starting Fire',false,false,playerVeh)
        if(finished === 100){
            if(hasEnoughOfItem(item.ItemId, 1, false, false, {})){
                emit('qb-weed:destroyPlant')
                setImmediate(async () => {
                    const fire = StartScriptFire(coords[0], coords[1], groundZ, Math.floor(Math.random() * 11) + 10, true)
                    emit('Evidence:StateSet', 14, 1600)
                    const endTime = GetGameTimer() + Math.floor(Math.random() * 5000) + 7500;
                    while (true) {
                        Delay(0)
                        if(GetGameTimer() >= endTime){
                            RemoveScriptFire(fire)
                            return
                        }
                    } 
                })
            }
        }
    }

    if (item.ItemId === "femaleseed"){
        emit('Evidence:StateSet',4,1600)
        emit('qb-weed:plantSeed', item.ItemId)
    }
    if (item.ItemId === "maleseed"){
        emit('Evidence:StateSet',4,1600)
        emit('qb-weed:plantSeed', item.ItemId)
    }
    if (item.ItemId === "highgrademaleseed"){
        emit('Evidence:StateSet',4,1600)
        emit('qb-weed:plantSeed', item.ItemId)
    }
    if (item.ItemId === "weedplant"){
        let parsedInfo = JSON.parse(item.Info.information)
        emit("qb-weed:placePlant",parsedInfo.Identifier,item.ItemId)
    }

    if (item.ItemId === "qualityscales"){
        if(hasEnoughOfItem('emptybaggies', 1, false, false, {}) && hasEnoughOfItem('smallbud', 1, false, false, {}) && hasEnoughOfItem('rollingpaper', 1, false, false, {})){
            // emit('')
            //craft shit here fuck
        }else if(hasEnoughOfItem('emptybaggies', 1, false, false, {}) && hasEnoughOfItem('smallbud', 1, false, false, {})){
            // emit('')
            //CreateCraftOption("weedbaggie", 80, true)
        }else if(hasEnoughOfItem('rollingpaper', 1, false, false, {}) && hasEnoughOfItem('smallbud', 1, false, false, {}) && hasEnoughOfItem('rollingpaper', 1, false, false, {})){
            // emit('')
            //CreateCraftOption("joint", 80, true)
        }else{
            emit('DoLongHudText', "You're missing something", 2)
        }
    }
    if (item.ItemId === "smallscales"){
        if(hasEnoughOfItem('rollingpaper', 1, false, false, {}) && hasEnoughOfItem('smallbud', 1, false, false, {})){
            // emit('')
             //CreateCraftOption("joint2", 80, true)
        }else{
            emit('DoLongHudText', "You're missing something", 2)
        }
    }

    if (item.ItemId === "joint" || item.ItemId === "joint2" || item.ItemId === "customjointitem"){
        const finished = await global.exports['qb-taskbar'].taskBar(2000, 'Smoking Joint',false,false,playerVeh)
       
        if(finished === 100) {
            
            remove = true
            let smoking: boolean = true;
            // Delay(200)
            const randomNumber = Math.floor(Math.random() * 100);
            const randomBigNumber = Math.floor(Math.random() * 600);
            if(randomNumber === 69){
                RPC.execute('inventory:giveItem', 'femaleseed', 1)
            }
            if(randomBigNumber === 69){
                RPC.execute('inventory:giveItem', 'maleseed', 1)
            }
            if(item.ItemId === "customjoinitem"){
                // proccessStressBloack()
            }
            let tickCount: number = 0;

            let lastTickTime: number = GetGameTimer();

            const tickInterval: number = 1000;
            const stopTickTimeout: number = 20;

            setTick(async () => {
                if (!smoking) {
                    return;
                }
                const currentTime: number = GetGameTimer();
                if (currentTime - lastTickTime >= tickInterval) {
                    tickCount += 1;
                    lastTickTime = currentTime;
                    // console.log("Tick function running, tick count:", tickCount);
                    SetPlayerMaxArmour(PlayerPedId(), 20)
                    SetPedArmour(PlayerPedId(), GetPedArmour(PlayerPedId()) + 1)
                    TriggerEvent("client:newStress", false, 100)
                    // processStressBlock()
                    if(tickCount === stopTickTimeout){
                        // console.log("Stopping ticking after 20 seconds");
                        smoking = false
                    }
                }
            });
            if(smoking){
                emit("animation:PlayAnimation","weed")
                emit("addiction:drugTaken", "weed")
                emit("Evidence:StateSet",3,600)
                emit("Evidence:StateSet",4,600)
                emit("stress:timed2",5000,"WORLD_HUMAN_SMOKING_POT")
            }
        }
    }
    if (item.ItemId === "sandwich" || item.ItemId === "hamburger"){
        AttachPropAndPlayAnimation("mp_player_inteat@burger", "mp_player_int_eat_burger", 49,6000,"Eating","ChangeHunger",true,item.ItemId,playerVeh)
        emit('qb-hud:ChangeHunger', 30)
    }
    if (item.ItemId === "taco" || item.ItemId === "burrito"){
        AttachPropAndPlayAnimation("mp_player_inteat@burger", "mp_player_int_eat_burger", 49,6000,"Eating","food:Taco",true,item.ItemId,playerVeh)
        emit('qb-hud:ChangeHunger', 30)
    }
    if (item.ItemId === "greencow" || item.ItemId === "franksmoster"){
        let fmMsg = item.ItemId === "greencow" ? 'Drink' : 'Shotgunning'
        let fmTimer = item.ItemId === "greencow" ? 6000 : 2000
        emit('hadenergy')
        emit('qb-hud:ChangeThirst', 20)
        AttachPropAndPlayAnimation("amb@world_human_drinking@coffee@male@idle_a", "idle_c", 49,fmTimer,fmMsg,"food:Condiment",true,item.ItemId,playerVeh)
    }
    if (item.ItemId === "donut"){
        TaskItem("mp_player_inteat@burger", "mp_player_int_eat_burger", 49, 5000, "Eating", "haddonut", true,item.ItemId,playerVeh, false, "", 0)
    }

    if(item.ItemId === "advlockpick"){
        emit("lockpick:event", "advlockpick")
        emit("inventory:DegenLastUsedItem", 3)
    }

    if (item.ItemId === "heavyammo"){
        const finished = await global.exports['qb-taskbar'].taskBar(5000, 'Reloading',false,false,playerVeh)
        if(finished === 100){
            emit("actionbar:ammo",1788949567,50,true)
            remove = true
        }
    }
    if (item.ItemId === "pistolammo"){
        const finished = await global.exports['qb-taskbar'].taskBar(2500, 'Reloading',false,false,playerVeh)
        if(finished === 100){
            emit("actionbar:ammo",1950175060,50,true)
            remove = true
        }
    }
    if (item.ItemId === "pistolammoPD"){
        const finished = await global.exports['qb-taskbar'].taskBar(2500, 'Reloading',false,false,playerVeh)
        if(finished === 100){
            emit("actionbar:ammo",1950175060,50,true)
            remove = true
        }
    }
    if (item.ItemId === "rifleammoPD"){
        const finished = await global.exports['qb-taskbar'].taskBar(5000, 'Reloading',false,false,playerVeh)
        if(finished === 100){
            emit("actionbar:ammo",218444191,50,true)
            remove = true
        }
    }
    if (item.ItemId === "shotgunammoPD"){
        const finished = await global.exports['qb-taskbar'].taskBar(5000, 'Reloading',false,false,playerVeh)
        if(finished === 100){
            emit("actionbar:ammo",218444191,50,true)
            remove = true
        }
    }
    if (item.ItemId === "subammoPD"){
        const finished = await global.exports['qb-taskbar'].taskBar(5000, 'Reloading',false,false,playerVeh)
        if(finished === 100){
            emit("actionbar:ammo",1820140472,50,true)
            remove = true
        }
    }
    if (item.ItemId === "flamethrowerammo"){
        const finished = await global.exports['qb-taskbar'].taskBar(20000, 'Reloading flamethrower',false,false,playerVeh)
        if(finished === 100){
            emit("actionbar:ammo",1970280428,15000,true)
            remove = true
        }
    }
    if (item.ItemId === "rifleammo"){
        const finished = await global.exports['qb-taskbar'].taskBar(5000, 'Reloading',false,false,playerVeh)
        if(finished === 100){
            emit("actionbar:ammo",218444191,50,true)
            remove = true
        }
    }
    if (item.ItemId === "sniperammo"){
        const finished = await global.exports['qb-taskbar'].taskBar(5000, 'Reloading',false,false,playerVeh)
        if(finished === 100){
            emit("actionbar:ammo",1285032059,25,true)
            remove = true
        }
    }
    if (item.ItemId === "huntingammo"){
        const finished = await global.exports['qb-taskbar'].taskBar(10000, 'Reloading',false,false,playerVeh)
        if(finished === 100){
            emit("actionbar:ammo",1285032059,10,true)
            remove = true
        }
    }
    if (item.ItemId === "shotgunammo"){
        const finished = await global.exports['qb-taskbar'].taskBar(5000, 'Reloading',false,false,playerVeh)
        if(finished === 100){
            emit("actionbar:ammo",-1878508229,50,true)
            remove = true
        }
    }
    if (item.ItemId === "subammo"){
        const finished = await global.exports['qb-taskbar'].taskBar(5000, 'Reloading',false,false,playerVeh)
        if(finished === 100){
            emit("actionbar:ammo",1820140472,50,true)
            remove = true
        }
    }
    if (item.ItemId === "nails"){
        const finished = await global.exports['qb-taskbar'].taskBar(5000, 'Reloading',false,false,playerVeh)
        if(finished === 100){
            emit("actionbar:ammo",965225813,50,true)
            remove = true
        }
    }
    if (item.ItemId === "paintballs"){
        const finished = await global.exports['qb-taskbar'].taskBar(5000, 'Reloading',false,false,playerVeh)
        if(finished === 100){
            emit("actionbar:ammo",1916856719,100,true)
            remove = true
        }
    }
    if (item.ItemId === "rubberslugs"){
        const finished = await global.exports['qb-taskbar'].taskBar(5000, 'Reloading',false,false,playerVeh)
        if(finished === 100){
            emit("actionbar:ammo",1517835987,10,true)
            remove = true
        }
    }
    if (item.ItemId === "taserammo"){
        const finished = await global.exports['qb-taskbar'].taskBar(2000, 'Reloading',false,false,playerVeh)
        if(finished === 100){
            emit("actionbar:ammo",-1575030772,3,true)
            remove = true
        }
    }
    if (item.ItemId === "armor" || item.ItemId === "pdarmor"){
        const finished = await global.exports['qb-taskbar'].taskBar(4500, 'Putting on Armor',false,false,playerVeh)
        if(finished === 100){
            StopAnimTask(PlayerPedId(), 'clothingshirt', 'try_shirt_positive_d', 1.0)
            SetPlayerMaxArmour(PlayerId(), 100)
            SetPedArmour( player, 100)
            emit("UseBodyArmor")
            remove = true
        }
    }
    if (item.ItemId === "bodybag"){
        const finished = await global.exports['qb-taskbar'].taskBar(4500, 'Putting on Armor',false,false,playerVeh)
        if(finished === 100){
            RPC.execute('inventory:addItem', { Item: 'humanhead', Amount: 1})
            RPC.execute('inventory:addItem', { Item: 'humantorso', Amount: 1})
            RPC.execute('inventory:addItem', { Item: 'humanarm', Amount: 2})
            RPC.execute('inventory:addItem', { Item: 'humanleg', Amount: 2})
            remove = true
        }
    }
    if (item.ItemId === "newaccountbox"){
        const finished = await global.exports['qb-taskbar'].taskBar(5000, 'Opening present',false,false,playerVeh)
        if(finished === 100){
            emitNet('loot:useItem', item.ItemId)
            remove = true
        }
    }
    if (item.ItemId === "housesafe"){
        if(hasEnoughOfItem('heavydutydrill',1, false, false, {})){
            emit("DoLongHudText", "Seems like you need something to get into this...", 2)
        }else{
            const finished = await global.exports['qb-taskbar'].taskBar(30000, 'Cracking Safe...',true,false,playerVeh)
            if(finished === 100){
                emitNet('loot:useItem', item.ItemId)
                remove = true
            }
        }
    }
    if (item.ItemId === "thermitecharge"){
        let playerCoords = GetEntityCoords(PlayerPedId())
        const efedistance = Math.sqrt(Math.pow(883.3817 - playerCoords[0], 2) +  Math.pow(-2257.784 - playerCoords[1], 2) + Math.pow(30.54 - playerCoords[2], 2));
        const fleeca = Math.sqrt(Math.pow(-2956.61 - playerCoords[0], 2) +  Math.pow(484.66 - playerCoords[1], 2) + Math.pow(15.67 - playerCoords[2], 2));
        const fleeca2 = Math.sqrt(Math.pow(1172.79 - playerCoords[0], 2) +  Math.pow(2712.62 - playerCoords[1], 2) + Math.pow(38.06 - playerCoords[2], 2));
        const efe3distance = Math.sqrt(Math.pow(883.07 - playerCoords[0], 2) +  Math.pow(-2294.91 - playerCoords[1], 2) + Math.pow(30.46 - playerCoords[2], 2));
        const efe2distance = Math.sqrt(Math.pow(880.4080 - playerCoords[0], 2) +  Math.pow(-2264.50 - playerCoords[1], 2) + Math.pow(32.441 - playerCoords[2], 2));

        console.log("efedistance", efedistance)
        if(efedistance < 2.0){
          emit("efe:firstdoor")
        }
        if(fleeca < 2.0){
            emit("fleeca:door")
        }
        if(fleeca2 < 2.0){
            TriggerEvent("fleeca2:door")
        }
        if(efe3distance < 2.0){
            TriggerEvent("efe:thirdoor")
        }
        if(efe2distance < 2.0){
            TriggerEvent("efe:secondoor")
        }
    }
    if (item.ItemId === "octablet"){
        let checkEquip = await RPC.execute('inventory:checkIfEquip', item.ItemId, item.Info.slot)
        console.log("USE THE TABLET",checkEquip)
        // if exports["qb-inventory"]:hasEnoughOfItem("vpnxj",1,false) then
        // TriggerEvent("rahe-boosting:client:openTablet")
    }
    if(item.ItemId === "trackerdisabler"){
        emit("boosting:antiPolice")
    }
    if(item.ItemId === "huntingbait"){
        emit("qb-hunting:usedBait")
    }
    if(item.ItemId === "huntingknife"){
        emit("qb-hunting:skinAnimal")
    }
    if(item.ItemId === "miningpickaxe"){
        emit("qb-start-mining")
    }
    if(item.ItemId === "inkedmoneybag"){
        emitNet('qb-inventory:checkduration', "inkedmoneybag", item.Info.slot)
    }
    if(item.ItemId === "binoculars"){
        emit("binoculars:Activate")
    }
    if(item.ItemId === "camera"){
        emit("camera:Activate")
    }
    if(item.ItemId === "megaphone"){
        emit("qb-usableprops:megaphone")
    }
    if(item.ItemId === "radio"){
        emit('radioGui')
    }
    if(item.ItemId === "civradio"){
        emit('radioGui')
    }
    if(item.ItemId === "repairkit"){
        emit('veh:repairing','inventoryName',item.Info.slot,item.ItemId)  
    }
    if(item.ItemId === "nitrous"){
        let currentVehicle = GetVehiclePedIsIn(player, false)
        if(currentVehicle === null || currentVehicle === 0){
            
        }else{
            let finished: number = 0;
            let cancelNos: boolean = false;
            
            let tickCount: number = 0;

            let lastTickTime: number = GetGameTimer();

            const tickInterval: number = 100;
            const stopTickTimeout: number = 20;
           
            if(finished !== 100 && !cancelNos){
                setTick(async () => {
                    const currentTime: number = GetGameTimer();
                    if (currentTime - lastTickTime >= tickInterval && !cancelNos) {
                        tickCount += 1;
                        lastTickTime = currentTime;
                        // console.log("Tick function running, tick count:", tickCount,GetEntitySpeed(GetVehiclePedIsIn(player, false)));
                        if (Number(GetEntitySpeed(GetVehiclePedIsIn(player, false))) > Number(11)){
                            // console.log("CANCEL NOS OR SHIT")
                            global.exports["qb-taskbar"].closeGuiFail()
                            cancelNos = true
                        }
                    }
                });
            }
            finished = await global.exports["qb-taskbar"].taskBar(20000,"Nitrous")
            if(finished === 100 && !cancelNos){
                emitNet('qb-vehicles:ApplyNitrous')
                remove = true
            }else{
                emit("DoLongHudText","You can't drive and hook up nos at the same time.",2)
            }
           
        }
    }
    if(item.ItemId === "lockpick") {
        emit("lockpick:event", "lockpick")
        emit("inventory:DegenLastUsedItem", 5)
        emit('houseRobberies:attempt')
    }
    if(item.ItemId === "umbrella"){
        emit("animation:PlayAnimation","umbrella")
    }
    if(item.ItemId === "ciggypack" || item.ItemId === "customciggyitem"){
        emit( "player:receiveItem","ciggy",1)
        emit("inventory:DegenLastUsedItem",8)
    }
    if(item.ItemId === "ciggy"){
        let finished = await global.exports["qb-taskbar"].taskBar(2000,"Lighting Up",false,false,playerVeh)
        if(finished === 100){
            emit("animation:PlayAnimation","smoke")
            remove = true
            let smoking: boolean = true;
            let tickCount: number = 0;

            let lastTickTime: number = GetGameTimer();

            const tickInterval: number = 1000;
            const stopTickTimeout: number = 40;

            setTick(async () => {
                if (!smoking) {
                    return;
                }
                const currentTime: number = GetGameTimer();
                if (currentTime - lastTickTime >= tickInterval) {
                    tickCount += 1;
                    lastTickTime = currentTime;
                    TriggerEvent("client:newStress", false, 25)
                    // processStressBlock()
                    if(tickCount === stopTickTimeout){
                        smoking = false
                    }
                }
            });

        }
    }
    if(item.ItemId === "cigar") {
        let finished = await global.exports["qb-taskbar"].taskBar(2000,"Lighting Up",false,false,playerVeh)
        if(finished === 100){
            emit("animation:PlayAnimation","cigar")
        }
    }
    if(item.ItemId === "oxygentank") {
        let finished = await global.exports["qb-taskbar"].taskBar(30000,"Oxygen Tank",false,false,playerVeh)
        if(finished === 100){
            emit("UseOxygenTank")
            remove = true
        }
    }
    if(item.ItemId === "bandage" || item.ItemId === "custombandageitem") {
        let customAnim = await RPC.execute('getCustomAnim:bandage')
        TaskItem(customAnim.animDict, customAnim.anim, customAnim.flag,customAnim.duration,customAnim.label,"healed:minors",true,item.ItemId,playerVeh, false, "", 0)
    }
    if(item.ItemId === "bandagelarge") {
        let customAnim = await RPC.execute('getCustomAnim:bandage')
        emit("inventory:DegenLastUsedItem", 33)
        TaskItem(customAnim.animDict, customAnim.anim, customAnim.flag,10000,customAnim.label,"healed:minors",false,item.ItemId,playerVeh, false, "", 0)
        setTimeout(() => {
            emit("healed:minors")
            setTimeout(() => {
                emit("healed:minors")
            }, 32000);
        }, 32000);
    }
    if(item.ItemId === "cocainbrick"){
        // let finished = await global.exports["qb-taskbar"].taskBar(2000,"Lighting Up",false,false,playerVeh)
        // let finished = TaskBarMinigame({difficulty: 3000, gap: 10, iterations: 1, useReverse: false})
    }
    if(item.ItemId === "cleaninggoods") {
        emit("clean:cleanvehicle")
    }
    if(item.ItemId === "idcard") {
        emitNet("police:showID",item.Info.information, GetEntityCoords(PlayerPedId()))   
    }
    if(item.ItemId === "adrenaline") {
        TaskItem("amb@world_human_clipboard@male@idle_a", "idle_c", 49,1000,"POG GAMING Adrenaline","inventory:adrenaline",true,item.ItemId,playerVeh, true, "", 0)
    }
    if(item.ItemId === "laxative") {
        remove = true
        setTimeout(() => {
            emit("animation:PlayAnimation","shit")
            setTimeout(() => {
                let PooingID = getRandomString(12)
                emitNet("fx:poo:start", PooingID)
                setTimeout(() => {
                    emit("animation:PlayAnimation","cancel")
                }, 10000);
            }, 2000);
        }, 30000);
    }
    if(item.ItemId === "1gcocaine" || item.ItemId === "coke5g") {
        emit("attachItemObjectnoanim","drugpackage01")
        emit("Evidence:StateSet",2,1200)
        emit("Evidence:StateSet",6,1200)
        TaskItem("anim@amb@nightclub@peds@", "missfbi3_party_snort_coke_b_male3", 49, 5000, "Coke Gaming", "hadcocaine", true,item.ItemId,playerVeh, true, "", 0)
    }
    if(item.ItemId === "nosballoon") {
        emit("Evidence:StateSet",2,1200)
        emit("Evidence:StateSet",6,1200)
        TaskItem("switch@trevor@trev_smoking_meth", "trev_smoking_meth_loop", 49, 5000, "Huffing Nos", "hadcrack", true,item.ItemId,playerVeh, true, "", 0)
    }
    if(item.ItemId === "treat") {
        let model = GetEntityModel(player)
        if(validDogModels[model]) {
            TaskItem("mp_player_inteat@burger", "mp_player_int_eat_burger", 49, 1200, "Treat Num's", "hadtreat", true,item.ItemId,playerVeh, true, "", 0)
        }
    }
    if(item.ItemId === "IFAK") {
        TaskItem("amb@world_human_clipboard@male@idle_a", "idle_c", 49,2000,"Applying IFAK","healed:useOxy",true,item.ItemId,playerVeh, true, "", 0)

    }

    if(item.ItemId === "cola" || item.ItemId === "water"){
        if (AttachPropAndPlayAnimation("amb@world_human_drinking@beer@female@idle_a", "idle_e", 49,4500,"Drink","ChangeThirst",true,item.ItemId,playerVeh)){
            emit('qb-hud:ChangeThirst', 15)
        }
    }
    if(item.ItemId === "coffee") {
        if (AttachPropAndPlayAnimation("amb@world_human_drinking@beer@female@idle_a", "idle_e", 49,4500,"Drink","ChangeThirst",true,item.ItemId,playerVeh)){
            let smoking: boolean = true;
            let tickCount: number = 0;

            let lastTickTime: number = GetGameTimer();

            const tickInterval: number = 1000;
            const stopTickTimeout: number = 40;

            setTick(async () => {
                if (!smoking) {
                    return;
                }
                const currentTime: number = GetGameTimer();
                if (currentTime - lastTickTime >= tickInterval) {
                    tickCount += 1;
                    lastTickTime = currentTime;
                    TriggerEvent("client:newStress", false, 25)
                    // processStressBlock()
                    if(tickCount === stopTickTimeout){
                        smoking = false
                    }
                }
            });
        }
    }
    if(item.ItemId === "softdrink") {
        if (AttachPropAndPlayAnimation("amb@world_human_drinking@beer@female@idle_a", "idle_e", 49,6000,"Drink","ChangeThirst",true,item.ItemId,playerVeh)){
            emit('qb-hud:ChangeThirst', 25)
            emit('thirstbuff')
        }
    }
    if(item.ItemId === "fries" || item.ItemId === "jailfood") {
        if (AttachPropAndPlayAnimation("mp_player_inteat@burger", "mp_player_int_eat_burger", 49,6000,"Eating","ChangeHunger",true,item.ItemId,playerVeh)) {
            emit('qb-hud:ChangeHunger', 30)
            emit('qb-buffs:swim_buff')
        }
    }
    if(item.ItemId === "aspirin") {
        emit("animation:PlayAnimation","pill")
        emit("healed:useOxy", true)
        emit("client:newStress", false, 7500)
        // processStressBlock()
        remove = true
    }
    if(item.ItemId === "oxy") {
        emit("animation:PlayAnimation","pill")
        emit("healed:useOxy", true)
        emit('healthregen')
        remove = true
    }
    if(item.ItemId === "copium") {
        let success = TaskItem("switch@trevor@trev_smoking_meth", "trev_smoking_meth_loop", 49, 10000, "Taking a hit of copium", "hadtreat", true,item.ItemId,playerVeh, true, "", 0)
        if (success) {
            SetPedToRagdoll(PlayerPedId(), 30000, 30000, 0, false, false, false)
        }
    }
    if(item.ItemId === "slushy") {
        AttachPropAndPlayAnimation("amb@world_human_drinking@beer@female@idle_a", "idle_e", 49, 6000,"Eating", "inv:slushy",true,item.ItemId,playerVeh)
    }
    if(item.ItemId === "jailfood") {
        AttachPropAndPlayAnimation("mp_player_inteat@burger", "mp_player_int_eat_burger", 49, 6000,"Eating", "inv:wellfed",true,item.ItemId,playerVeh)
    }
    if(item.ItemId === "jaildrink") {
        AttachPropAndPlayAnimation("amb@world_human_drinking@beer@female@idle_a", "idle_e", 49, 6000,"Drinking", "inv:fruitslushy",true,item.ItemId,playerVeh)
    }
    if(item.ItemId === "watch") {
        emit("ToggleCompass")
    }
    if(item.ItemId === "harness") {
        let veh = GetVehiclePedIsIn(player, false)
        let driver = GetPedInVehicleSeat(veh, -1)
        if (PlayerPedId() == driver){
            emit("vehicleMod:useHarnessItem")
            remove = true
        }
    }
    if(item.ItemId === "mask"){
        TriggerEvent("facewear:adjust", 4, false)
        remove = true
    }
    if(item.ItemId === "hat"){
        TriggerEvent("facewear:adjust", 6, false)
        remove = true
    }
    if(item.ItemId === "glasses"){
        TriggerEvent("facewear:adjust", 2, false)
        remove = true
    }
    if(item.ItemId === "notepad"){
        // notepadUsed()
    }
    if(item.ItemId === "notepad"){
        // notepadPageUsed(passedItemInfo)
    }
    if(item.ItemId === "racingusb1"){
        if (item.Info.information === '{}'){
            let valid = await global.exports['qb-applications'].KeyboardInput({
                header: 'Racing USB',
                rows: [
                    {
                        id: 0,
                        txt: 'Racing Name'
                    }
                ]
            })
            if(valid) {
                let alias = {
                    [`Alias:${valid[1].input}`]: valid[1].input
                };
                
                emitNet("server-item-update-metadata", "inventoryName", item.Info.slot, item.ItemId, alias)
                emit('DoLongHudText', 'You racing alias has been set to: '+ valid[1].input, 1);
            }
        }else{
            emit('DoLongHudText', 'You can not change your racing alias', 2);
        }
    }
    if(remove) {
        RPC.execute('inventory:removeItem',{ Item: item.ItemId, Amount: 1})
    }
    setTimeout(() => {
        usedCounter = 0
        justUsed = false
    }, 500);
   
}

onNet('apartments:stash', async () => {
    let cid = global.exports['isPed'].isPed('cid')
    let data = {
        itemAction: 'apartment::stash'
    }
    // RPC.execute('inventory:additionalInventoriesClear')
    RPC.execute('inventory:additionalInventoriesAdd', data)
    const Inventory = await RPC.execute('inventory:getInventories',cid, IsPedInVehicle(PlayerPedId(), GetVehiclePedIsIn(PlayerPedId(), false), false), GetVehicleNumberPlateText(GetVehiclePedIsIn(PlayerPedId(), false)), false, GetEntityCoords(PlayerPedId()), false)
    if(Inventory){
        let dropNamesx = Inventory.PrimarySecondaryInventory
        let dropName = dropNames
        SendNUIMessage({
            Inventory: Inventory,
        })
    
        SendNUIMessage({
            show: true,
            PlayerData: {
                character: {
                    id: global.exports['isPed'].isPed('cid'),
                    name: global.exports['isPed'].isPed('fullname'),
                    cash: 0,
                    personalVehicle: 'Landstalker',
                    home: 'Little Seoul',
                    phone: global.exports['isPed'].isPed('phonenumbers'),
                },
        
                settings: {
                    holdToDrag: GetResourceKvpInt('inventory:holdToDrag'),
                    shiftQuickMove: GetResourceKvpInt('inventory:shiftQuickMove')
                }
            }
        });
        global.exports.focusmanager.SetUIFocus(true, true)
    }
    // setTimeout(() => {
    //     RPC.execute('inventory:additionalInventoriesAdd', data)
    // }, 1000); 
    
    global.exports.focusmanager.SetUIFocus(true, true)
})

onNet('qb-base:playerSpawned', ()=> {
    RPC.execute('inventory:characterSpawned')
})

RegisterCommand('checkers', ()=>{
    console.log("global.exports['isPed'].isPed('phoneNumber')",global.exports['isPed'].isPed('phonenumbers'))
    RPC.execute('inventory:characterSpawned')
    setTimeout(() => {
        console.log("global.exports['isPed'].isPed('phoneNumber') 222",global.exports['isPed'].isPed('phonenumbers'))
    }, 2000);
}, false)

export async function hasEnoughOfItem(itemId, amount, shouldReturnText, checkQuality, metaInformation){
    if(shouldReturnText === undefined) shouldReturnText = true;
    if(itemId === undefined || itemId === 0 || amount === undefined || amount === 0){
        if(shouldReturnText) emit('DoLongHudText','I dont seem to have ' + itemId + ' in my packets.',2);
        return false
    }
    amount = Number(amount)
    let slot = 0
    let found = false
    const itemQuantity = await getQuantity(itemId)
    if(itemQuantity >= amount) return true;
    return false
}

export async function getQuantity(itemId){
    const countQuantity = await RPC.execute('getQuantity', itemId)
    return countQuantity
}

export async function AttachPropAndPlayAnimation(dictionary,animation,typeAnim,timer,message,func,remove,itemid,vehicle){
    if(itemid === "hamburger" || itemid === "bzillablast" || itemid === "gpattysupreme" || itemid === "luckycrunch" || itemid == "quasar" || itemid === "questionablemeatburger"){
        emit("attachItem", "hamburger")
    }else if(sandwichItems[itemid]){
        TriggerEvent("attachItem", "sandwich")
    }else if(itemid === "donut" || itemid === "applepie"){
        
    }else if(itemid === "hamburger" || itemid === "hamburger"){
        
    }else if(waterItemsAttached[itemid]){
        emit( "attachItem", itemid === "poisonedwater" || itemid === "kdragonwater" || itemid === "customwateritem" ? "water" : itemid)
    }else if(itemid === "drink1" || itemid === "drink2" || itemid === "drink3" || itemid === "drink4" || itemid === "drink5" || itemid === "drink6" || itemid === "drink7" || itemid === "drink8" || itemid === "drink9" || itemid === "drink10" || itemid === "absinthe" || itemid === "moonshine"){
        emit("attachItem", "shotglass")
    }else if(itemid === "fishtaco" || itemid === "taco"){
        emit("attachItem", "taco")
    }else if(itemid === "greencow" || itemid === "franksmonster"){
        emit("attachItem", "energydrink")
    }else if(itemid === "slushy"){
        emit("attachItem", "cup")
    }else if(itemid === "blue_rare_steak" || itemid === "rare_steak" || itemid === "medium_rare_steak" || itemid === "medium_steak" || itemid === "medium_well_steak" || itemid === "well_done_steak"){
        emit("attachItem", "steak")
    }

    let success = await TaskItem(dictionary, animation, typeAnim, timer, message, func, remove, itemid,vehicle,false, "", 0)
    emit("destroyProp")
    return success
}

async function TaskItem(dictionary,animation,typeAnim,timer,message,func,remove,itemid,playerVeh,itemreturn,itemreturnid,quality){
    await loadAnimDict( dictionary )
    TaskPlayAnim( PlayerPedId(), dictionary, animation, 8.0, 1.0, -1, typeAnim, 0, false, false, false )
    const Timer = Number(timer)
    if(Timer > 0){
        const finished = await global.exports['qb-taskbar'].taskBar(timer, message,false,false,playerVeh)
        if(finished === 100 || Timer === 0){
           
            emit(func, quality ? quality : -1, itemid)
            if(remove){
                RPC.execute('inventory:removeItem',{ Item: itemid, Amount: 1})
            }
            if(itemreturn){
                RPC.execute('inventory:addItem', { Item: itemreturnid, Amount: 1})
            }
            emitNet('player:itemTaskCompleted', itemid, Timer)
            ClearPedSecondaryTask(PlayerPedId())
            return true
        }else{
            ClearPedSecondaryTask(PlayerPedId())
            return false
            
        }
    }else{
        emit(func, quality ? quality : -1, itemid)
        ClearPedSecondaryTask(PlayerPedId())
        return true
    }
}

export function getRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';

    // Generate a random string of the specified length
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }

    return randomString;
}
