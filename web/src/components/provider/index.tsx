import { createContext, createSignal, useContext } from "solid-js"
import { createStore } from "solid-js/store";

const InventoryContext = createContext({});

export function App(props: any) {
    const [show, setShow] = createSignal<boolean>(false);
    const [displayActionbar, setDisplayActionBar] = createSignal<boolean>(false);
    const [showingHelpMenu, setShowingHelpMenu] = createSignal<boolean>(false);
    const [showingSettingsMenu, setShowingSettingsMenu] = createSignal<boolean>(false);

    const [hoveringWound, setHoveringWound] = createSignal<boolean>(false);
    const [woundPosition, setWoundPosition] = createSignal<string>('right')

    const [searchedItem, setSearchedItem] = createSignal<string>('')

    const [activeSlot, setActiveSlot] = createSignal<number>(0)

    const [activeInventory, setActiveInventory] = createSignal<string>('');

    const [draggingItem, setDraggingItem] = createStore<any>({
        isDragging: false,
        Item: []
    });
    

    const [actionbarItems, setActionbarItems] = createStore<any>([
        {
            item_id: 'water'
        },
        {
            item_id: 'octablet'
        },
        {},
        {},
        {},
    ])

    const [splittingItem, setSplittingItem] = createSignal<boolean>(false);
    const [movingSplitItem, setMovingSplitItem] = createSignal<boolean>(false);

    const [Notifications, SetNotfications] = createStore<any>([])

    const [hoveringItem, setHoveringItem] = createStore<any>({
        show: false,
        showingOptions: false,
        frozenPosition: false,
        personalInventory: false,
        canUse: false,

        Information: {
            Name: '',
            Weight: 0,
            Description: '',
            Durability: 0
        }
    })

    function createImage(Item: any){
        return `https://whitewingz2017.github.io/rprpmap/dev/images/inventory/icon/${Item}.png`
    }

    const [itemList, setItemList] = createStore<any>({
        '2578778090': {
            name: 'Knife',
            description: 'Big man ting lets go on glide and shank them possios',
            stackable: false,
            image: createImage('knife'),
            weight: 7.0,
            context: {
                useItem: true,
            }
        },
        'phone': {
            name: 'Mobile Phone',
            description: 'Just a phone',
            stackable: false,
            image: createImage('phone_1'),
            weight: 7.0,
            context: {
                useItem: true,
                equipItem: true,
                openItem: 'Open Sim Slot',
                action: 'openSimSlot'
            }
        },
        'id_card': {
            name: 'ID Card',
            description: 'WOT DA FOOK',
            stackable: false,
            image: createImage('np_idcard'),
            weight: 1.0,
            context: {
                useItem: true,
                equipItem: true,
            }
        },
        'octablet': {
            name: 'OneCity Tablet',
            description: 'Tablet',
            stackable: false,
            image: createImage('np_tablet'),
            weight: 1.0,
            context: {
                useItem: true,
                equipItem: true,
            }
        },
        'wallet': {
            name: 'Wallet',
            description: 'Wallet',
            stackable: false,
            image: createImage('np_wallet'),
            weight: 1.0,
            context: {
                equipItem: true,
                openItem: 'Open Wallet',
                action: 'openWallet'
            }
        },
        'water': {
            name: 'Water',
            description: 'U Thirsty Mate??',
            stackable: true,
            image: createImage('water'),
            weight: 0.1,
            context: {
                useItem: true,
            }
        },
        'cash': {
            name: 'Cash',
            description: 'Cash Money',
            stackable: true,
            image: createImage('np_cash'),
            weight: 0.001,
            context: {
                useItem: false,
            }
        },
        'hotdog': {
            name: 'Hot Dog',
            description: 'HOT DOG????????',
            stackable: true,
            image: createImage('hotdog'),
            weight: 0.1,
            context: {
                useItem: true,
            }
        },
        'simcard': {
            name: 'Sim Card',
            description: '',
            stackable: false,
            image: createImage('np_simcard'),
            weight: 0.02,
            context: {
                useItem: true,
                equipItem: true,
            }
        },
        'mobilephone': {
            name: 'Mobile Phone',
            description: 'Just a phone',
            stackable: false,
            image: createImage('phone_1'),
            weight: 7.0,
            context: {
                useItem: true,
                equipItem: true,
                openItem: 'Open Sim Slot',
                action: 'openSimSlot'
            }
        },
        'sandwich': {
            name: 'Sandwich',
            description: 'Hungry????????',
            stackable: true,
            image: createImage('sandwich'),
            weight: 0.2,
            context: {
                useItem: true,
            }
        },
        'computer': {
            name: 'Computer',
            description: 'Use to hacking and crypto',
            stackable: true,
            image: createImage('pc'),
            weight: 10.0,
            context: {
                useItem: true,
            }
        },
        'notebook': {
            name: 'Notebook',
            description: 'Diary?',
            stackable: true,
            image: createImage('notebook'),
            weight: 0.3,
            context: {
                useItem: true,
            }
        },
        //Aids
        'bandage': {
            name: 'Bandage',
            description: 'Bandage?',
            stackable: true,
            image: createImage('bandage_1'),
            weight: 0.2,
            context: {
                useItem: true,
            }
        },
        'bandage2': {
            name: 'Bandage',
            description: 'Bandage?',
            stackable: true,
            image: createImage('bandage_2'),
            weight: 0.3,
            context: {
                useItem: true,
            }
        },
        'bandage3': {
            name: 'Bandage',
            description: 'Bandage?',
            stackable: true,
            image: createImage('bandage_3'),
            weight: 0.3,
            context: {
                useItem: true,
            }
        },
        'bandage4': {
            name: 'Bandage',
            description: 'Bandage?',
            stackable: true,
            image: createImage('bandage_4'),
            weight: 0.3,
            context: {
                useItem: true,
            }
        },
        //Access
        'barrel': {
            name: 'Barrel',
            description: 'Storage?',
            stackable: true,
            image: createImage('barrel'),
            weight: 3.0,
            context: {
                useItem: true,
            }
        },
        //Custom  Weapon
        '728397530': {
            name: 'Flamethrower',
            description: 'BULLET BAW BAW GRRRR',
            stackable: false,
            image: createImage('np_flamethrower'),
            weight: 35.0,
            context: {
                useItem: true,
            }
        },
        'flamethrowerammo': {
            name: 'Flamethrower Canister',
            description: '',
            stackable: true,
            image: createImage('np_flamethrower_ammo'),
            weight: 5.0,
            weapon: false,
            context: {
                useItem: true,
            }
        },
        'flamethrowerpart1': {
            name: 'Flamethrower Part',
            description: '',
            stackable: false,
            image: createImage('np_flamethrower_part1'),
            weight: 5.0,
            weapon: false,
            context: {}
        },
        'flamethrowerpart2': {
            name: 'Flamethrower Part',
            description: '',
            stackable: false,
            image: createImage('np_flamethrower_part2'),
            weight: 5.0,
            weapon: false,
            context: {}
        },
        'flamethrowerpart3': {
            name: 'Flamethrower Part',
            description: '',
            stackable: false,
            image: createImage('np_flamethrower_part3'),
            weight: 5.0,
            weapon: false,
            context: {}
        },
        'flamethrowerpart4': {
            name: 'Flamethrower Part',
            description: '',
            stackable: false,
            image: createImage('np_flamethrower_part4'),
            weight: 5.0,
            weapon: false,
            context: {}
        },
        'flamethrowerpart5': {
            name: 'Flamethrower Part',
            description: '',
            stackable: false,
            image: createImage('np_flamethrower_part5'),
            weight: 5.0,
            weapon: false,
            context: {}
        },
        'flamethrowerpart6': {
            name: 'Flamethrower Part',
            description: '',
            stackable: false,
            image: createImage('np_flamethrower_part6'),
            weight: 5.0,
            weapon: false,
            context: {}
        },
        // Paintball Gun
        '-2009644972': {
            name: 'Paintball Gun',
            description: '',
            stackable: false,
            image: createImage('np_paintballgun'),
            weight: 5.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        '784503678': {
            name: 'Karambit',
            description: '',
            stackable: false,
            image: createImage('np_karambit'),
            weight: 5.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // 1 shot Gun
        '727643628': {
            name: 'Tranquilizer Gun',
            description: '',
            stackable: false,
            image: createImage('np_tranq'),
            weight: 5.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // Rail Gun
        '1834241177': {
            name: 'EMP Gun',
            description: 'Government (PD/EMS/DOC) Issued Equipment',
            stackable: false,
            image: createImage('np_empgun'),
            weight: 5.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
            //Brick
        '1064738331': {
            name: 'Brick',
            description: 'Government (PD/EMS/DOC) Issued Equipment',
            stackable: false,
            image: createImage('np_brick'),
            weight: 5.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        '-828058162': {
            name: 'Stolen Shoes',
            information: 'These are not yours, bro.',
            stackable: false,
            image: createImage('np_stolenshoes'),
            weight: 2.0,
            weapon: false,
            context: {
                useItem: true,
            }
        },
        // weapon_ltl
        '218362403': {
            name: 'Rubber Slug Shotgun',
            information: 'PD and DOC Issued LTL Weapon',
            stackable: false,
            image: createImage('np_lessthanlethal'),
            weight: 25.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        'rubberslugpd': {
            name: 'Rubber Slug Shotgun (Short Life)',
            information: 'PD and DOC Issued LTL Weapon',
            stackable: false,
            image: createImage('np_lessthanlethal'),
            weight: 25.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // weapon_shiv
        '-262696221': {
            name: 'Prison Shiv',
            information: '',
            stackable: false,
            image: createImage('np_shiv'),
            weight: 3.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // weapon_pistol
    
        // weapon_browning
        '148457251': {
            name: 'Browning Hi-Power',
            information: '',
            stackable: false,
            image: createImage('np_browning'),
            weight: 6.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // weapon_dp9 (it's called dp9, just rock with it)
        '-2012211169': {
            name: 'Diamondback DB9',
            information: '',
            stackable: false,
            image: createImage('np_DB9'),
            weight: 25.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        '-1746263880': {
            name: 'Colt Python',
            information: '',
            stackable: false,
            image: createImage('np_colt'),
            weight: 11.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // weapon_xxxxxx
        '453432689': {
            name: 'Colt 1911',
            information: '',
            stackable: false,
            image: createImage('np_pistol'),
            weight: 6.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // weapon_pistol_mk2
        '-1075685676': {
            name: 'FN Five-Seven',
            information: '',
            stackable: false,
            image: createImage('np_pistol2'),
            weight: 5.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // weapon_combatpistol
        '1593441988': {
            name: 'FN FNX-45',
            information: '',
            stackable: false,
            image: createImage('np_combat-pistol'),
            weight: 5.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // weapon_heavypistol
        '-771403250': {
            name: 'Entreprise Wide Body 1911a',
            information: '',
            stackable: false,
            image: createImage('np_heavy-pistol'),
            weight: 5.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // weapon_taser
        '-820634585': {
            name: 'Government (PD/EMS/DOC) Issued Equipment',
            information: '',
            stackable: false,
            image: createImage('np_stun-gun'),
            weight: 5.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // weapon_glock
        '-120179019': {
            name: 'Glock 19',
            description: `Compact and Reliable, the GC19x is a versatile 9mm handgun.   
            Serial: Unknown  Issuer: Unknown  Attachments:`,
            stackable: false,
            image: createImage('np_glock'),
            weight: 5.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
         // weapon_pistol50
        '-1716589765': {
            name: 'Desert Eagle',
            information: '',
            stackable: false,
            image: createImage('np_pistol-50'),
            weight: 5.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
       // weapon_microsmg3
       '-134995899': {
            name: 'Mac-10',
            information: '',
            stackable: false,
            image: createImage('np_micro-smg'),
            weight: 5.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // smg / auto pistol
        // weapon_appistol
        '584646201': {
            name: 'Glock 18C',
            information: '',
            stackable: false,
            image: createImage('np_glock18c'),
            weight: 5.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // weapon_microsmg
        '324215364': {
            name: 'MP7',
            information: 'Government (PD/EMS/DOC) Issued Equipment',
            stackable: false,
            image: createImage('np_mp7'),
            weight: 5.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // weapon_microsmg2
        '-942620673': {
            name: 'Uzi',
            information: '',
            stackable: false,
            image: createImage('np_micro-smg2'),
            weight: 5.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // weapon_smg
        '736523883': {
            name: 'MP5',
            information: '',
            stackable: false,
            image: createImage('np_mp5'),
            weight: 5.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // weapon_carbinerifle
        '-2084633992': {
            name: 'HK416',
            information: 'SWAT',
            stackable: false,
            image: createImage('HK416'),
            weight: 5.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // weapon_m4
        '1192676223': {
            name: 'M4',
            information: 'Government (PD/EMS/DOC) Issued Equipment',
            stackable: false,
            image: createImage('np_m4'),
            weight: 5.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        //Scar-L
        '-1768145561': {
            name: 'FN SCAR-L',
            information: 'Government (PD/EMS/DOC) Issued Equipment',
            stackable: false,
            image: createImage('np_m4'),
            weight: 25.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // weapon_m14
        '-1719357158': {
            name: 'Mk14',
            information: 'Government (PD/EMS/DOC) Issued Equipment',
            stackable: false,
            image: createImage('np_mk14'),
            weight: 25.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // weapon_m24
        '-1536150836': {
            name: 'AWM',
            information: '',
            stackable: false,
            image: createImage('np_awm'),
            weight: 25.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // weapon_assaultrifle  
        '-1074790547': {
            name: 'AK 74',
            information: '',
            stackable: false,
            image: createImage('np_ak74'),
            weight: 25.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // weapon_assaultrifle2
        '497969164': {
            name: 'M70',
            information: '',
            stackable: false,
            image: createImage('np_m70'),
            weight: 25.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // weapon_dbshotgun
        '-275439685': {
            name: 'Sawn-off Shotgun',
            information: '',
            stackable: false,
            image: createImage('np_db-shotgun'),
            weight: 14.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // weapon_pumpshotgun
        '487013001': {
            name: 'IZh-81',
            information: '',
            stackable: false,
            image: createImage('np_izh81'),
            weight: 21.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // weapon_pumpshotgun_mk2
        '1432025498': {
            name: 'Remington 870',
            information: '',
            stackable: false,
            image: createImage('np_remington'),
            weight: 21.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // WEAPON_COMBATPDW
        '171789620': {
            name: 'SIG MPX',
            information: 'Government (PD/EMS/DOC) Issued Equipment',
            stackable: false,
            image: createImage('np_mpx'),
            weight: 11.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // WEAPON_COMPACTRIFLE
        '1649403952': {
            name: 'Draco NAK9',
            information: '',
            stackable: false,
            image: createImage('np_draco'),
            weight: 11.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // weapon_gepard used to apply skin and still generate data for the weapon
        '-1518444656': {
            name: 'Gepard',
            information: '',
            stackable: false,
            image: createImage('np_gepard'),
            weight: 11.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        //WEAPON_MINISMG2
        '-1472189665': {
            name: 'Skorpion',
            information: '',
            stackable: false,
            image: createImage('np_skorpion'),
            weight: 7.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // explosive type shit
        '-1813897027': {
            name: 'Stun Grenade (SWAT)',
            information: 'So police can breach a building without feeling like a ______! If you are not SWAT certified do not buy this.',
            stackable: false,
            image: createImage('np_stungrenade'),
            weight: 5.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        '1233104067': {
            name: 'Flare',
            information: '',
            stackable: false,
            image: createImage('np_flare'),
            weight: 5.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        '-1600701090': {
            name: 'M67 grenade',
            information: '',
            stackable: false,
            image: createImage('np_grenade'),
            weight: 5.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        '-37975472': {
            name: 'Smoke Grenade',
            information: '',
            stackable: false,
            image: createImage('np_stungrenade'),
            weight: 5.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        'smokegrenadeswat': {
            name: 'Smoke Grenade (SWAT)',
            information: 'Mil-Spec. High price, low quality. If you are not SWAT certified do not buy this.',
            stackable: false,
            image: createImage('np_stungrenade'),
            weight: 25.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        'smokegrenadenpa': {
            name: 'Smoke Grenade',
            information: 'NPA Edition.',
            stackable: false,
            image: createImage('np_stungrenade'),
            weight: 25.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // Pipebomb pipe bomb
        '-1169823560': {
            name: 'Pipebomb',
            information: '',
            stackable: false,
            image: createImage('np_pipe-bomb'),
            weight: 7.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // Molotov (Molly)
        '615608432': {
            name: 'Molly',
            information: '',
            stackable: false,
            image: createImage('np_molotov'),
            weight: 35.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // Sticky Bomb C4
        '741814745': {
            name: 'Sticky Bomb',
            information: '',
            stackable: false,
            image: createImage('np_molotov'),
            weight: 22.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // random weapons
    
        // Nail gun nailgun
        '1748076076': {
            name: 'Nail gun',
            information: '',
            stackable: false,
            image: createImage('np_nailgun'),
            weight: 11.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // Parachute
        '-72657034': {
            name: 'Parachute',
            information: '',
            stackable: false,
            image: createImage('np_parachute'),
            weight: 30.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // Fire Extinguisher
        '101631238': {
            name: 'Fire Ext',
            information: '',
            stackable: false,
            image: createImage('np_fire-extinguisher'),
            weight: 25.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // Petrol can
        '883325847': {
            name: 'Petrol Can',
            information: '',
            stackable: false,
            image: createImage('np_petrol-can'),
            weight: 50.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // blunt weapons
        //WEAPON_SLEDGEHAM
        '1923739240': {
            name: 'Sledge Hammer',
            information: 'Big and girthy.',
            stackable: false,
            image: createImage('np_sledgehammer'),
            weight: 25.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        '419712736': {
            name: 'Pipe Wrench',
            information: 'I\'m here to fix your pipes.',
            stackable: false,
            image: createImage('np_wrench'),
            weight: 25.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        '-102323637': {
            name: 'Old broken bottle',
            information: 'Looks like a green, premium, Karlsberg bottle.',
            stackable: false,
            image: createImage('np_glass-bottle'),
            weight: 2.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        //weapon_knuckle
        '3638508604': {
            name: 'Knuckle',
            information: '',
            stackable: false,
            image: createImage('np_knuckle-dusters'),
            weight: 2.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        'knuckle_chain': {
            name: 'Chain Dusters',
            information: '',
            stackable: false,
            image: createImage('np_chain_dusters'),
            weight: 2.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        '1317494643': {
            name: 'Hammer',
            information: '',
            stackable: false,
            image: createImage('np_hammer'),
            weight: 8.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        '1737195953': {
            name: 'Nightstick',
            information: 'Government (PD/EMS/DOC) Issued Equipment',
            stackable: false,
            image: createImage('np_nightstick'),
            weight: 4.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        '2227010557': {
            name: 'Crowbar',
            information: '',
            stackable: false,
            image: createImage('np_crowbar'),
            weight: 15.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        '-1786099057': {
            name: 'Model M Keyboard',
            information: '',
            stackable: false,
            image: createImage('np_keyboard'),
            weight: 15.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        // sharp weapons
        '-1239161099': {
            name: 'Katana',
            information: 'When you were partying, I studied the blade.',
            stackable: false,
            image: createImage('np_katana'),
            weight: 7.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        'cursedkatanaweapon': {
            name: 'Cursed Katana',
            information: 'Infused with the blood of a Dragon; a normal human mind cannot control such power.',
            stackable: false,
            image: createImage('np_cursed-katana'),
            weight: 7.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        '-538741184': {
            name: 'Shank',
            information: '',
            stackable: false,
            image: createImage('np_switchblade'),
            weight: 3.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        '2460120199': {
            name: 'Dagger',
            information: '',
            stackable: false,
            image: createImage('np_dagger'),
            weight: 5.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        '126349499': {
            name: 'Snowball',
            information: '',
            stackable: false,
            image: createImage('np_dagger'),
            weight: 1.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        '-1024456158': {
            name: 'Bat',
            information: '',
            stackable: false,
            image: createImage('np_baseball-bat'),
            weight: 14.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        '-2000187721': {
            name: 'Secure Briefcase',
            information: '',
            stackable: false,
            image: createImage('np_securitycase'),
            weight: 25.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        '28811031': {
            name: 'Briefcase',
            information: '',
            stackable: false,
            image: createImage('np_suitcase'),
            weight: 25.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        '3713923289': {
            name: 'Machete',
            information: '',
            stackable: false,
            image: createImage('np_machete'),
            weight: 15.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },
        '4191993645': {
            name: 'Hatchet',
            information: '',
            stackable: false,
            image: createImage('np_hatchet'),
            weight: 15.0,
            weapon: true,
            context: {
                useItem: true,
            }
        },

        // weapon attachments

        // weapon ammo
        'subammo': {
            name: 'Sub Ammo x50',
            information: '',
            stackable: true,
            image: createImage('np_sub-ammo'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'heavyammo': {
            name: 'Heavy Ammo x50',
            information: '',
            stackable: true,
            image: createImage('np_rifle-ammo'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'sniperammo': {
            name: 'Sniper Ammo x50',
            information: '',
            stackable: true,
            image: createImage('np_sniper-ammo'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        // LMG ammo is not actually being used for anything and has no "use function". It's the same as Heavy Ammo.
        'lmgammo': {
            name: 'LMG Ammo x50',
            information: '',
            stackable: true,
            image: createImage('np_lmg-ammo'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'shotgunammo': {
            name: 'SG Ammo x50',
            information: '',
            stackable: true,
            image: createImage('np_shotgun-ammo'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'pistolammo': {
            name: 'Pistol Ammo x50',
            information: '',
            stackable: true,
            image: createImage('np_pistol-ammo'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'rifleammo': {
            name: 'Rifle Ammo x50',
            information: '',
            stackable: true,
            image: createImage('np_rifle-ammo'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'pistolammoPD': {
            name: 'Pistol Ammo x50 PD',
            information: 'Government (PD/EMS/DOC) Issued Equipment',
            stackable: true,
            image: createImage('np_pistol-ammo'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'subammoPD': {
            name: 'Sub Ammo x50 PD',
            information: 'Government (PD/EMS/DOC) Issued Equipment',
            stackable: true,
            image: createImage('np_sub-ammo'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'rifleammoPD': {
            name: 'Rifle Ammo x50 PD',
            information: 'Government (PD/EMS/DOC) Issued Equipment',
            stackable: true,
            image: createImage('np_rifle-ammo'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'shotgunammoPD': {
            name: 'Shotgun Ammo x50 PD',
            information: 'Government (PD/EMS/DOC) Issued Equipment',
            stackable: true,
            image: createImage('np_shotgun-ammo'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'taserammo': {
            name: 'Taser Cartridges',
            information: 'Government (PD/EMS/DOC) Issued Equipment',
            stackable: true,
            image: createImage('np_taserammo'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'empammo': {
            name: 'EMP Cartridge',
            information: '',
            stackable: true,
            image: createImage('np_emp_ammo'),
            weight: 20.0,
            context: {
                useItem: true,
            }
        },
        'nails': {
            name: 'Nails',
            information: '',
            stackable: true,
            image: createImage('np_nails'),
            weight: 3.0,
            context: {
                useItem: true,
            }
        },
        'paintballs': {
            name: 'Paintballs',
            information: '',
            stackable: true,
            image: createImage('np_paintball_ammo'),
            weight: 3.0,
            context: {
                useItem: true,
            }
        },
        'rubberslugs': {
            name: '12-Gauge Rubber Slugs',
            information: 'Government (PD/EMS/DOC) Issued Equipment',
            stackable: true,
            image: createImage('np_rubberslugs'),
            weight: 3.0,
            context: {
                useItem: true,
            }
        },
        // END WEAPONS

        // custom items with decay
        'spikes': {
            name: 'PD Spike Kit',
            information: 'Considered Police Equipment - (only lasts around 10 seconds)',
            stackable: true,
            image: createImage('np_spikes'),
            weight: 20.0,
            context: {
                useItem: true,
            }
        },
        'repairkit': {
            name: 'Repair Kit',
            information: '',
            stackable: true,
            image: createImage('np_basic_repair-kit'),
            weight: 10.0,
            context: {
                useItem: true,
            }
        },
        'wheelchair': {
            name: 'Wheelchair',
            information: 'For broken legs n stuff',
            stackable: true,
            image: createImage('np_wheelchair'),
            weight: 50.0,
            context: {
                useItem: true,
            }
        },

        // drugs
        '1gcocaine': {
            name: '10g cocaine',
            information: 'Looks really high quality.',
            stackable: true,
            image: createImage('np_cocaine-baggy'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        '1gcrack': {
            name: '5g Crack',
            information: 'Crack... ',
            stackable: true,
            image: createImage('np_crack'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'cocainebrick': {
            name: 'Coke Brick (50g)',
            information: 'Increases your Stamina and Movement Speed <br> Breaks down into product.',
            stackable: true,
            image: createImage('np_cocaine-brick'),
            weight: 20.0,
            context: {
                useItem: true,
            }
        },
        'coke50g': {
            name: 'Air Tight Cocaine Brick (1kg)',
            information: 'Tightly sealed to prevent water from seeping in.',
            stackable: true,
            image: createImage('np_cocaine-brick'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'coke5g': {
            name: 'Coke Baggy (5g)',
            information: 'Increases your Stamina and Movement Speed',
            stackable: true,
            image: createImage('np_cocaine-baggy'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'joint': {
            name: '3g Joint',
            information: 'Its a Joint, man. ',
            stackable: true,
            image: createImage('np_joint'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'maleseed': {
            name: 'Marijuana Seed',
            information: 'Plant this seed if you wish for more seeds!',
            stackable: true,
            image: createImage('np_weed-seed'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'femaleseed': {
            name: 'Female Marijuana Seed',
            information: 'Surely I can just plant this, right?',
            stackable: true,
            image: createImage('np_weed-seed'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'cocaleaves': {
            name: 'Coca Leaves',
            information: '',
            stackable: true,
            image: createImage('leaf'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'weedplant': {
            name: 'Weed Plant',
            information: '',
            stackable: true,
            image: createImage('weedplant'),
            weight: 20.0,
            context: {
                useItem: true,
            }
        },
        'oxy': {
            name: 'Oxy 100mg',
            information: 'Prescribed by Betta Life Pharmacy (Prescription required)',
            stackable: true,
            image: createImage('np_Oxy'),
            weight: 3.0,
            context: {
                useItem: true,
            }
        },
        'weed12oz': {
            name: 'Weed 250 Oz',
            information: 'Lowers Stress <br> Breaks Down into other Product',
            stackable: true,
            image: createImage('np_box-of-weed-12-18-oz'),
            weight: 35.0,
            context: {
                useItem: true,
            }
        },
        'weed5oz': {
            name: 'Weed 5 Oz',
            information: 'Lowers Stress <br> Breaks Down into other Product',
            stackable: true,
            image: createImage('np_weed-brick-40-Oz'),
            weight: 8.0,
            context: {
                useItem: true,
            }
        },
        'weedoz': {
            name: 'Weed Oz',
            information: 'Lowers Stress',
            stackable: true,
            image: createImage('np_weed-4-Oz'),
            weight: 4.0,
            context: {
                useItem: true,
            }
        },
        'weedq': {
            name: 'Weed Q',
            information: 'Lowers Stress',
            stackable: true,
            image: createImage('np_weed-oz'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'driedbud': {
            name: 'Dried Bud (100 Grams)',
            information: 'Pack It?',
            stackable: true,
            image: createImage('buddry2'),
            weight: 75.0,
            context: {
                useItem: true,
            }
        },
        'smallbud': {
            name: 'Packed Bud (20 Grams)',
            information: 'Sell It?',
            stackable: true,
            image: createImage('buddry'),
            weight: 10.0,
            context: {
                useItem: true,
            }
        },
        'lsdtab': {
            name: 'LSD Tab',
            information: 'For spectacular trips, or whatever.',
            stackable: true,
            image: createImage('np_badlsdtab'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        // Fruits / Alcohol crafting
        'apple': {
            name: 'Apple',
            information: '',
            stackable: true,
            image: createImage('np_apple'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'banana': {
            name: 'Banana',
            information: '',
            stackable: true,
            image: createImage('np_banana'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'cherry': {
            name: 'Cherry',
            information: '',
            stackable: true,
            image: createImage('np_cherry'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'coconut': {
            name: 'Coconut',
            information: '',
            stackable: true,
            image: createImage('np_coconut'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'grain': {
            name: 'Grain',
            information: '',
            stackable: true,
            image: createImage('np_grain'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'grapes': {
            name: 'Grapes',
            information: '',
            stackable: true,
            image: createImage('np_grapes2'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'kiwi': {
            name: 'Kiwi',
            information: '',
            stackable: true,
            image: createImage('np_kiwi'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'lemon': {
            name: 'Lemon',
            information: '',
            stackable: true,
            image: createImage('np_lemon'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'lime': {
            name: 'Lime',
            information: '',
            stackable: true,
            image: createImage('np_lime'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'orange': {
            name: 'Orange',
            information: '',
            stackable: true,
            image: createImage('np_orange'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'peach': {
            name: 'Peach',
            information: '',
            stackable: true,
            image: createImage('np_peach'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'potato': {
            name: 'Potato',
            information: '',
            stackable: true,
            image: createImage('np_potato'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'strawberry': {
            name: 'Strawberry',
            information: '',
            stackable: true,
            image: createImage('np_strawberry'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'watermelon': {
            name: 'Watermelon',
            information: '',
            stackable: true,
            image: createImage('np_watermelon'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        // HOA Mead
        'bottle_cap': {
            name: 'Bottle Cap',
            information: 'Bottle cap saying HOA on it.',
            stackable: true,
            image: createImage('np_hoa_cap'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'mead_watermelon': {
            name: 'Watermelon Mead',
            information: 'The danish vikings really knew how to get hammered.',
            stackable: true,
            image: createImage('np_mead_watermelon'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'mead_Strawberry': {
            name: 'Strawberry Mead',
            information: 'The danish vikings really knew how to get hammered.',
            stackable: true,
            image: createImage('np_mead_strawberry'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'mead_potato': {
            name: 'Potato Mead',
            information: 'The danish vikings really knew how to get hammered.',
            stackable: true,
            image: createImage('np_mead_potato'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'mead_peach': {
            name: 'Peach Mead',
            information: 'The danish vikings really knew how to get hammered.',
            stackable: true,
            image: createImage('np_mead_peach'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'mead_orange': {
            name: 'Orange Mead',
            information: 'The danish vikings really knew how to get hammered.',
            stackable: true,
            image: createImage('np_mead_orange'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'mead_lime': {
            name: 'Lime Mead',
            information: 'The danish vikings really knew how to get hammered.',
            stackable: true,
            image: createImage('np_mead_lime'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'mead_lemon': {
            name: 'Lemon Mead',
            information: 'The danish vikings really knew how to get hammered.',
            stackable: true,
            image: createImage('np_mead_lemon'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'mead_kiwi': {
            name: 'Kiwi Mead',
            information: 'The danish vikings really knew how to get hammered.',
            stackable: true,
            image: createImage('np_mead_kiwi'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'mead_grape': {
            name: 'Grape Mead',
            information: 'The danish vikings really knew how to get hammered.',
            stackable: true,
            image: createImage('np_mead_grape'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'mead_coconut': {
            name: 'Coconut Mead',
            information: 'The danish vikings really knew how to get hammered.',
            stackable: true,
            image: createImage('np_mead_coconut'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'mead_cherry': {
            name: 'Cherry Mead',
            information: 'The danish vikings really knew how to get hammered.',
            stackable: true,
            image: createImage('np_mead_cherry'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'mead_banana': {
            name: 'Banana Mead',
            information: 'The danish vikings really knew how to get hammered.',
            stackable: true,
            image: createImage('np_mead_banana'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'mead_apple': {
            name: 'Apple Mead',
            information: 'The danish vikings really knew how to get hammered.',
            stackable: true,
            image: createImage('np_mead_apple'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        // Drinks for VU
        'drink1': {
            name: 'Orange Lemon',
            information: 'A perfect happy hour choice for vodka drinkers. Sates Thirst',
            stackable: true,
            image: createImage('np_drink1'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'drink2': {
            name: 'Cherry Berry',
            information: ' Berry bliss. Sates Thirst',
            stackable: true,
            image: createImage('np_drink2'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'drink3': {
            name: 'Banana Peach',
            information: 'Tastes just like fruity bubblegum. Sates Thirst',
            stackable: true,
            image: createImage('np_drink3'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'drink4': {
            name: 'Orange Banana',
            information: 'Tastes just like fruity bubblegum. Sates Thirst',
            stackable: true,
            image: createImage('np_drink4'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'drink5': {
            name: 'Cherry Kiwi',
            information: 'Fruity and refreshing. Sates Thirst',
            stackable: true,
            image: createImage('np_drink5'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'drink6': {
            name: 'Berry Watermelon',
            information: 'Cool, Sweet, Colorful. Sates Thirst',
            stackable: true,
            image: createImage('np_drink6'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'drink7': {
            name: 'Apple Lime',
            information: 'Curbs sweet cravings. Sates Thirst',
            stackable: true,
            image: createImage('np_polarbear'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'drink8': {
            name: 'Cherry Peach',
            information: 'Perfect for cooling off on hot days. Sates Thirst',
            stackable: true,
            image: createImage('np_rumcoke'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'drink9': {
            name: 'Coconut Lime',
            information: 'Blended with an island twist. Sates Thirst',
            stackable: true,
            image: createImage('np_straightvodka'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'drink10': {
            name: 'White Paw',
            information: 'Enjoy on your porch admiring the stars. Sates Thirst',
            stackable: true,
            image: createImage('np_whitepaw'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'absinthe': {
            name: 'Absinthe',
            information: 'The strongest you can get, 95%.',
            stackable: true,
            image: createImage('np_absinthe'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'shot1': {
            name: 'Orange Lemon',
            information: 'Sates Thirst',
            stackable: true,
            image: createImage('np_shot1'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'shot2': {
            name: 'Cherry Berry',
            information: 'Sates Thirst',
            stackable: true,
            image: createImage('np_shot2'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'shot3': {
            name: 'Banana Peach',
            information: 'Sates Thirst',
            stackable: true,
            image: createImage('np_shot3'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'shot4': {
            name: 'Orange Banana',
            information: 'Sates Thirst',
            stackable: true,
            image: createImage('np_shot4'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'shot5': {
            name: 'Cherry Kiwi',
            information: 'Sates Thirst',
            stackable: true,
            image: createImage('np_shot5'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'shot6': {
            name: 'Berry Watermelon',
            information: 'Sates Thirst',
            stackable: true,
            image: createImage('np_shot6'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'shot7': {
            name: 'Orange Lemon',
            information: 'Lime Apple',
            stackable: true,
            image: createImage('np_shot7'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'shot8': {
            name: 'Cherry Peach',
            information: 'Sates Thirst',
            stackable: true,
            image: createImage('np_shot8'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'shot9': {
            name: 'Coconut Lime',
            information: 'Sates Thirst',
            stackable: true,
            image: createImage('np_shot1'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'shot10': {
            name: 'Grapes Watermelon',
            information: 'Sates Thirst',
            stackable: true,
            image: createImage('np_shot10'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'redwine': {
            name: 'Red Wine',
            information: 'No crime just wine',
            stackable: true,
            image: createImage('np_red-wine-bottle'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'rum': {
            name: 'Rum',
            information: 'Why is it gone?',
            stackable: true,
            image: createImage('np_rum'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'tequila': {
            name: 'Tequila',
            information: 'Tequilya brand',
            stackable: true,
            image: createImage('np_tequila'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'tequilashot': {
            name: 'Shot of Tequila',
            information: 'Uno mas por favor',
            stackable: true,
            image: createImage('np_tequila-shot'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'vodka': {
            name: 'Vodka',
            information: 'Sates Thirst',
            stackable: true,
            image: createImage('np_vodka'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'whiskey': {
            name: 'Whiskey',
            information: 'Sates Thirst',
            stackable: true,
            image: createImage('np_whiskey'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'champagne': {
            name: 'Champagne',
            information: 'Time to celebrate',
            stackable: true,
            image: createImage('np_champagne'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'beer': {
            name: 'Beer',
            information: 'Sates Thirst',
            stackable: true,
            image: createImage('np_beer'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'pinacolada': {
            name: 'Pina Colada',
            information: 'And getting caught in the rain',
            stackable: true,
            image: createImage('np_pina-colada'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },

        // other drugy shit
        'aspirin': {
            name: 'Aspirin',
            information: 'Its an Aspirin',
            stackable: true,
            image: createImage('np_aspirin'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'cabsinthe': {
            name: 'Cannabis Absinthe',
            information: 'Duuude..bro...',
            stackable: true,
            image: createImage('np_cannabis-absinthe'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        '420bar': {
            name: '420 Bar',
            information: 'Duuude..bro...',
            stackable: true,
            image: createImage('np_420-bar'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        '69box': {
            name: '69 Cigar Box',
            information: 'A taste of Cuba',
            stackable: true,
            image: createImage('np_69-cigar-box'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        '69pack': {
            name: '69 Brand Pack',
            information: 'Just one more',
            stackable: true,
            image: createImage('np_69-brand-pack'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'cgummies': {
            name: 'Cannabis Gummies',
            information: 'Duuude...',
            stackable: true,
            image: createImage('np_cannabis-gummies'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'chloroform': {
            name: 'Chloroform',
            information: 'Special Cross recipe',
            stackable: true,
            image: createImage('np_chloroform'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'ibuprofen': {
            name: 'Ibuprofen',
            information: 'Cures all. Right?',
            stackable: true,
            image: createImage('np_ibuprofen'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'drugx': {
            name: 'Drug X',
            information: 'Now in testing by Humane Labs',
            stackable: true,
            image: createImage('np_drug-x'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'cbrownie': {
            name: 'Cannabis Brownie',
            information: 'Dude...',
            stackable: true,
            image: createImage('np_cannabis-brownie'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },

        //food
        'bfsandwich': {
            name: 'Breakfast Sandwich',
            information: 'Rise and shine',
            stackable: true,
            image: createImage('np_breakfast-sandwich'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'cbfowl': {
            name: 'Fowl Burger',
            information: 'If you enjoyed it, the chicken didnt die in vain! 900Cal',
            stackable: true,
            image: createImage('np_fowl-burger'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'cbfries': {
            name: 'Cluckin Fries',
            information: 'Cluckinsize included. 680Cal',
            stackable: true,
            image: createImage('np_cluckin-fries'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'cookie': {
            name: 'Cookie',
            information: 'Baked with love',
            stackable: true,
            image: createImage('np_cookie'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'tobacco': {
            name: 'Tobacco',
            information: 'Used for ciggies',
            stackable: true,
            image: createImage('np_tobacco'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'gause': {
            name: 'Gause',
            information: 'Used for making bandages',
            stackable: true,
            image: createImage('np_gause'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'pizza': {
            name: 'Pizza Slice',
            information: 'Check for pineapple',
            stackable: true,
            image: createImage('np_pizza-slice'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'chips': {
            name: 'Chips',
            information: 'Phat Chips yeeeaaah. Thickens blood.',
            stackable: true,
            image: createImage('np_chips'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'chocobar': {
            name: 'Chips',
            information: 'Phat Chips yeeeaaah. Thickens blood.',
            stackable: true,
            image: createImage('np_chips'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'torta': {
            name: 'Torta',
            information: 'El mejor jamon',
            stackable: true,
            image: createImage('np_torta'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'coffee': {
            name: 'Cheap Coffee',
            information: 'Tastes like dirt, but has the caffeine you need',
            stackable: true,
            image: createImage('np_coffee'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'burrito': {
            name: 'Burrito',
            information: 'Burrito',
            stackable: true,
            image: createImage('np_burrito'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'donut': {
            name: 'Donut',
            information: 'Fill the hole',
            stackable: true,
            image: createImage('donut'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'foodingredient': {
            name: 'Ingredients',
            information: 'Used to craft food - be aware, food doesnt last forever!',
            stackable: true,
            image: createImage('np_ingredients'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'greencow': {
            name: 'Green Cow',
            information: 'Slightly Increases Stamina and Speed',
            stackable: true,
            image: createImage('np_green-cow'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'icecream': {
            name: 'Ice Cream',
            information: 'Made from real human titty milk. Prevents stress from being gained or relieved.',
            stackable: true,
            image: createImage('np_icecream'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'jailfood': {
            name: 'Jail Food',
            information: "Looks as bad as the Sheriff's aim.",
            stackable: true,
            image: createImage('np_jailfood'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'jaildrink': {
            name: 'Jail Drink',
            information: "Looks as bad as the Chief of Police's aim.",
            stackable: true,
            image: createImage('np_jaildrink'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'hamburger': {
            name: 'Hamburger',
            information: "Sates Hunger",
            stackable: true,
            image: createImage('np_hamburger'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },

        //Materials
        'aluminium': {
            name: 'Aluminium',
            information: "",
            stackable: true,
            image: createImage('np_aluminum'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'plastic': {
            name: 'Plastic',
            information: "",
            stackable: true,
            image: createImage('np_plastic'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'copper': {
            name: 'Copper',
            information: "",
            stackable: true,
            image: createImage('np_copper'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'electronics': {
            name: 'Electronics',
            information: "",
            stackable: true,
            image: createImage('np_electronics'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'rubber': {
            name: 'Rubber',
            information: "",
            stackable: true,
            image: createImage('np_rubber'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'scrapmetal': {
            name: 'Scrap Metal',
            information: "",
            stackable: true,
            image: createImage('np_scrap-metal'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'steel': {
            name: 'Steel',
            information: "",
            stackable: true,
            image: createImage('np_steel'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'glass': {
            name: 'Glass',
            information: "",
            stackable: true,
            image: createImage('np_glass'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'pdpanicbutton': {
            name: 'Panic Button',
            information: 'Alert Police?',
            stackable: true,
            image: createImage('qb_panicbutton'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'lockpickbp': {
            name: 'Lockpick Blueprint',
            information: "",
            stackable: true,
            image: createImage('np_bp-lockpick'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'advlockpickbp': {
            name: 'Advanced Lockpick Blueprint',
            information: "",
            stackable: true,
            image: createImage('np_bp-advlockpick'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'lockpick': {
            name: 'Lockpick Set',
            information: 'Unlocks things, if you have the skill!',
            stackable: true,
            image: createImage('np_lockpick1'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'advlockpick': {
            name: 'Adv Lock Pick',
            information: 'Unlocks things, if you have the skill!',
            stackable: true,
            image: createImage('np_advanced-lockpick'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'hackingdevice': {
            name: 'Security System Hacking Device',
            information: 'Marked for Police Seizure',
            stackable: true,
            image: createImage('np_hacking_device'),
            weight: 3.0,
            context: {
                useItem: true,
            }
        },
        'armor': {
            name: 'Chest Armor',
            information: 'Protects you from bleeding and stumbling on injuries',
            stackable: true,
            image: createImage('np_chest-armor'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'pdarmor': {
            name: '(PD) Chest Armor',
            information: 'Government (PD/EMS/DOC) Issued Equipment',
            stackable: true,
            image: createImage('np_chest-armor'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'aluminiumoxide': {
            name: 'Aluminium Oxide',
            information: '',
            stackable: true,
            image: createImage('np_aluminum-oxide'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'advrepairkit': {
            name: 'Adv Repair Kit',
            information: '',
            stackable: true,
            image: createImage('np_repair-toolkit'),
            weight: 8.0,
            context: {
                useItem: true,
            }
        },
        'tirerepairkit': {
            name: 'For swapping damaged tires.',
            information: '',
            stackable: true,
            image: createImage('np_tire_repair-kit'),
            weight: 8.0,
            context: {
                useItem: true,
            }
        },
        'carbattery': {
            name: 'Car Battery',
            information: '',
            stackable: true,
            image: createImage('np_car-battery'),
            weight: 8.0,
            context: {
                useItem: true,
            }
        },
        'carhood': {
            name: 'Car Hood',
            information: '',
            stackable: true,
            image: createImage('np_car-hood'),
            weight: 8.0,
            context: {
                useItem: true,
            }
        },
        'cashstack': {
            name: 'Stack of Cash',
            information: '',
            stackable: true,
            image: createImage('np_cash-stack'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'band': {
            name: 'Band of Notes',
            information: 'Lots of low denominators - Indicates drug sales.',
            stackable: true,
            image: createImage('np_cash-stack'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'rollcash': {
            name: 'Dirty Money',
            information: 'I need to find a way to clean this money.',
            stackable: true,
            image: createImage('np_cash-roll'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'battery': {
            name: 'Battery',
            information: '',
            stackable: true,
            image: createImage('np_battery'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'binoculars': {
            name: 'Binoculars',
            information: '',
            stackable: true,
            image: createImage('np_binoculars'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'blindfold': {
            name: 'Blindfold',
            information: '',
            stackable: true,
            image: createImage('np_blindfold'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'bloodbag': {
            name: 'Blood Bag',
            information: '',
            stackable: true,
            image: createImage('np_blood-bag'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'bloodvial': {
            name: 'Blood Vial',
            information: '',
            stackable: true,
            image: createImage('np_blood-tube'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'Boombox': {
            name: 'Boombox',
            information: 'Its a prop, wow?',
            stackable: true,
            image: createImage('np_boombox'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'Box': {
            name: 'Box',
            information: 'Its a prop, wow?',
            stackable: true,
            image: createImage('np_box'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'breadboard': {
            name: 'Breadboard',
            information: '',
            stackable: true,
            image: createImage('np_breadboard'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'camera': {
            name: 'Nikea X1000',
            information: 'Works 100% of the time 60% of the time.',
            stackable: true,
            image: createImage('np_camera'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'casing': {
            name: 'Bullet Casing',
            information: '',
            stackable: true,
            image: createImage('np_pistol-ammo'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'certificate': {
            name: 'Certificate',
            information: 'You made it!',
            stackable: true,
            image: createImage('np_certificate'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'cgpapers': {
            name: 'CG Papers',
            information: 'Wata woozers',
            stackable: true,
            image: createImage('np_cg-papers'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'chestxray': {
            name: 'Chest X-Ray',
            information: 'Argh...',
            stackable: true,
            image: createImage('np_chest-xray'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'cigar': {
            name: 'Cigar',
            information: '',
            stackable: true,
            image: createImage('np_cigar'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'ciggy': {
            name: 'Cigarette',
            information: '',
            stackable: true,
            image: createImage('np_cigarette'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'ciggypack': {
            name: 'Cigarettes',
            information: 'A packet of smokes, they smell and taste like shit, but they relieve stress, the stress created by the addiction sure, but they relieve stress.',
            stackable: true,
            image: createImage('np_ciggypack'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'ckatana': {
            name: 'Sheathed Cursed Katana',
            information: 'A normal human mind cannot control such power.',
            stackable: true,
            image: createImage('np_cursed-katana'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'cpelt': {
            name: 'Cougar Pelt',
            information: 'The hunter becomes the hunted',
            stackable: true,
            image: createImage('np_cougar-pelt'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'cuffs': {
            name: 'Hand Cuffs',
            information: 'Marked for Police Seizure',
            stackable: true,
            image: createImage('np_hand-cuffs'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'dhide': {
            name: 'Deer Hide',
            information: 'Call peta',
            stackable: true,
            image: createImage('np_deer-hide'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'drill': {
            name: 'Drill',
            information: '',
            stackable: true,
            image: createImage('drill'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'drillbit': {
            name: 'Drill Bit',
            information: '',
            stackable: true,
            image: createImage('np_drill-bit'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'DuffelBag': {
            name: 'Black Duffel Bag',
            information: '',
            stackable: true,
            image: createImage('np_duffel'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'electronickit': {
            name: 'Electronic Kit',
            information: '',
            stackable: true,
            image: createImage('np_electronic-kit'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'evidence': {
            name: 'Evidence',
            information: '',
            stackable: true,
            image: createImage('np_evidence'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'np_evidence_marker_yellow': {
            name: 'Evidence',
            information: '',
            stackable: true,
            image: createImage('np_evidence_marker_yellow'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'np_evidence_marker_red': {
            name: 'Evidence',
            information: '',
            stackable: true,
            image: createImage('np_evidence_marker_red'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'np_evidence_marker_white': {
            name: 'Evidence',
            information: '',
            stackable: true,
            image: createImage('np_evidence_marker_white'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'np_evidence_marker_orange': {
            name: 'Evidence',
            information: '',
            stackable: true,
            image: createImage('np_evidence_marker_orange'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'np_evidence_marker_light_blue': {
            name: 'Evidence',
            information: '',
            stackable: true,
            image: createImage('np_evidence_marker_light_blue'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'np_evidence_marker_purple': {
            name: 'Evidence',
            information: '',
            stackable: true,
            image: createImage('np_evidence_marker_purple'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'evidencebag': {
            name: 'Evidence Bag',
            information: '',
            stackable: true,
            image: createImage('np_evidence-bag'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'pdbadge': {
            name: 'PD Badge',
            information: '',
            stackable: true,
            image: createImage('np_pd_badge'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'fakeplate': {
            name: 'Fake Plate Kit',
            information: 'Use on a vehicle to alter its plate or change it back - 1 time use..',
            stackable: true,
            image: createImage('np_plate'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'fbumper': {
            name: 'Front Bumper',
            information: 'Ill have the tuna, no crust',
            stackable: true,
            image: createImage('np_front-bumper'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'fertilizer': {
            name: 'Fertilizer',
            information: '',
            stackable: true,
            image: createImage('np_fertilizer'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'fuse': {
            name: 'Fuse',
            information: '',
            stackable: true,
            image: createImage('np_fuse'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'glowing': {
            name: 'Glowing Substance',
            information: '',
            stackable: true,
            image: createImage('np_glowing-substance'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'glucose': {
            name: '500g Glucose',
            information: '',
            stackable: true,
            image: createImage('np_glucose'),
            weight: 3.0,
            context: {
                useItem: true,
            }
        },
        'goldbar': {
            name: 'Gold Bar',
            information: '',
            stackable: true,
            image: createImage('np_gold-bar'),
            weight: 3.0,
            context: {
                useItem: true,
            }
        },
        'goldcoin': {
            name: 'Gold Coin',
            information: '',
            stackable: true,
            image: createImage('np_gold-coin'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'greenb': {
            name: 'Green Bandana',
            information: 'Ay yo my mans',
            stackable: true,
            image: createImage('np_green-bandana'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'gum': {
            name: 'Gum',
            information: 'Release Gum. You chew, you suck then POW',
            stackable: true,
            image: createImage('np_gum'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'hairtie': {
            name: 'Hair Tie',
            information: 'We all know what this is really for...',
            stackable: true,
            image: createImage('np_hairtie'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'harness': {
            name: 'Racing Harness',
            information: 'Stops you from being YEETED',
            stackable: true,
            image: createImage('np_harness'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'heavycutters': {
            name: 'Heavy Cutters',
            information: '',
            stackable: true,
            image: createImage('np_heavy-cutters'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'heavydutydrill': {
            name: 'Heavy Duty Drill',
            information: '',
            stackable: true,
            image: createImage('np_heavy-duty-drill'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'hlights': {
            name: 'Headlights',
            information: 'Cant detail a car with the cover on',
            stackable: true,
            image: createImage('np_headlights'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'IFAK': {
            name: 'IFAK',
            information: 'Government (PD/EMS/DOC) Issued Equipment',
            stackable: true,
            image: createImage('ifak'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'inkedmoneybag': {
            name: 'Inked Money Bag',
            information: 'Made with cheap ink that expires',
            stackable: true,
            image: createImage('np_inked-money-bag'),
            weight: 4.0,
            context: {
                useItem: true,
            }
        },
        'inkset': {
            name: 'Inked Set',
            information: '',
            stackable: true,
            image: createImage('np_inked-money-bag'),
            weight: 4.0,
            context: {
                useItem: true,
            }
        },
        'ironoxide': {
            name: 'Iron Oxide',
            information: '',
            stackable: true,
            image: createImage('np_iron-oxide'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'katana': {
            name: 'Katana',
            information: 'Steel folded over 1000 times',
            stackable: true,
            image: createImage('np_katana'),
            weight: 4.0,
            context: {
                useItem: true,
            }
        },
        'keyfob': {
            name: 'Key Fob',
            information: 'Used for opening doors remotely.',
            stackable: true,
            image: createImage('np_keyfob'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'key1': {
            name: 'Key 1',
            information: 'Numbered Key',
            stackable: true,
            image: createImage('np_key1'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'key2': {
            name: 'Key 2',
            information: 'Numbered Key',
            stackable: true,
            image: createImage('np_key2'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'key3': {
            name: 'Key 3',
            information: 'Numbered Key',
            stackable: true,
            image: createImage('np_key3'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'keya': {
            name: 'Key A',
            information: 'Lettered Key',
            stackable: true,
            image: createImage('np_keya'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'keyb': {
            name: 'Key B',
            information: 'Lettered Key',
            stackable: true,
            image: createImage('np_keyb'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'keyc': {
            name: 'Key C',
            information: 'Lettered Key',
            stackable: true,
            image: createImage('np_keyc'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'lighter': {
            name: 'Lighter',
            information: 'Dont start a fire with this.',
            stackable: true,
            image: createImage('np_lighter'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'locksystem': {
            name: 'Air Pressure Lockpick',
            information: 'Used to blow out small locks - one time use.',
            stackable: true,
            image: createImage('locksystem'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'log': {
            name: 'Log',
            information: '',
            stackable: true,
            image: createImage('np_wood'),
            weight: 3.0,
            context: {
                useItem: true,
            }
        },
        'markedbills': {
            name: 'Marked Bills',
            information: '',
            stackable: true,
            image: createImage('np_inked-money-bag'),
            weight: 3.0,
            context: {
                useItem: true,
            }
        },
        'adrenaline': {
            name: 'Adrenaline Syringe',
            information: 'Adrenaline, gives a good pump! If you are not SWAT certified do not buy this.',
            stackable: true,
            image: createImage('np_adrenaline'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'MedicalBag': {
            name: 'Medical Bag',
            information: 'Its a prop, wow?',
            stackable: true,
            image: createImage('np_medbag'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'headphones': {
            name: 'Medical Bag',
            information: 'Its a prop, wow?',
            stackable: true,
            image: createImage('np_headphones'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'varusb': {
            name: 'VAR USB',
            information: '',
            stackable: false,
            image: createImage('np_mkii-usb-device'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'nitrous': {
            name: 'Nitrous Oxide',
            information: '',
            stackable: true,
            image: createImage('np_nitrous-oxide'),
            weight: 3.0,
            context: {
                useItem: true,
            }
        },
        'copium': {
            name: 'Copium',
            information: '',
            stackable: true,
            image: createImage('np_nitrous-oxide'),
            weight: 3.0,
            context: {
                useItem: true,
            }
        },
        'oil': {
            name: 'Oil',
            information: '',
            stackable: false,
            image: createImage('np_oil'),
            weight: 10.0,
            context: {
                useItem: true,
            }
        },
        'oxygentank': {
            name: 'Oxygen Tank',
            information: '',
            stackable: false,
            image: createImage('np_oxygen-tank'),
            weight: 100.0,
            context: {
                useItem: true,
            }
        },
        'pallet': {
            name: 'Pallet of Boxes',
            information: 'Transportable goods',
            stackable: false,
            image: createImage('np_pallet-of-boxes'),
            weight: 115.0,
            context: {
                useItem: true,
            }
        },
        'purpleb': {
            name: 'Purple Bandana',
            information: 'Straight outta da cul-de-sac',
            stackable: false,
            image: createImage('np_purple-bandana'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'qualityscales': {
            name: 'High Quality Scales',
            information: 'Weighs Baggies with no loss',
            stackable: true,
            image: createImage('np_high-quality-scales'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'rbumper': {
            name: 'Rear Bumper',
            information: 'You owe me a ten second car',
            stackable: true,
            image: createImage('np_rear-bumper'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'recyclablematerial': {
            name: 'Recyclable Material',
            information: '',
            stackable: true,
            image: createImage('np_recyclable-material'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'redb': {
            name: 'Red Bandana',
            information: 'Lean with me',
            stackable: false,
            image: createImage('np_red-bandana'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'repairtoolkit': {
            name: 'Repair Toolkit',
            information: 'Used by Tow Truck drivers and repair people.',
            stackable: true,
            image: createImage('np_repair-toolkit'),
            weight: 20.0,
            context: {
                useItem: true,
            }
        },
        'riflebody': {
            name: 'Rifle Body',
            information: '',
            stackable: true,
            image: createImage('np_rifle-body'),
            weight: 10.0,
            context: {
                useItem: true,
            }
        },
        'riflebodybox': {
            name: 'Box (10+ Rifle Bodys)',
            information: '',
            stackable: true,
            image: createImage('np_rifle-box'),
            weight: 85.0,
            context: {
                useItem: true,
            }
        },
        'rims': {
            name: 'Racing Rims',
            information: '',
            stackable: true,
            image: createImage('np_racing-rims'),
            weight: 15.0,
            context: {
                useItem: true,
            }
        },
        'benjiwatch': {
            name: 'Benjis Watch',
            information: '',
            stackable: true,
            image: createImage('np_benjiwatch'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'rolexwatch': {
            name: 'Rolex Watch (p)',
            information: '',
            stackable: true,
            image: createImage('np_rolex-watchatch'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'rollingpaper': {
            name: 'Rolling Paper',
            information: 'Required to roll joints!',
            stackable: true,
            image: createImage('np_rolling-paper'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'scanner': {
            name: 'Radio Scanner',
            information: 'Used to receive random radio chatter.',
            stackable: true,
            image: createImage('np_radio-scanner'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'scissors': {
            name: 'Scissors',
            information: 'Fuck me up fam',
            stackable: true,
            image: createImage('np_scissors'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'sealedbucket': {
            name: 'Fisher Bucket',
            information: '',
            stackable: true,
            image: createImage('np_sealed-bucket'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'sealedevidencebag': {
            name: 'Sealed Evidence Bag',
            information: '',
            stackable: true,
            image: createImage('np_sealed-evidence-bag'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'seat': {
            name: 'Seat',
            information: '',
            stackable: false,
            image: createImage('np_seat'),
            weight: 8.0,
            context: {
                useItem: true,
            }
        },
        'secretfile': {
            name: 'Secret File',
            information: '',
            stackable: true,
            image: createImage('np_secret-file'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'SecurityCase': {
            name: 'Security Case',
            information: 'Its a prop, wow?',
            stackable: true,
            image: createImage('np_securitycase'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'shipbox': {
            name: 'Shipping Box',
            information: 'Free 2day shipping',
            stackable: true,
            image: createImage('np_shipping-box'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'shipcrate': {
            name: 'Shipping Crate',
            information: 'This side up',
            stackable: true,
            image: createImage('np_shipping-crate'),
            weight: 30.0,
            context: {
                useItem: true,
            }
        },
        'silvercoin': {
            name: 'Silver Coin',
            information: 'Dont lose it',
            stackable: true,
            image: createImage('np_silver-coin'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'slushy': {
            name: 'The best slushy ever.',
            information: 'The only thing in Jail that tastes good.',
            stackable: true,
            image: createImage('np_slushy'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'smallscales': {
            name: 'Small Scales',
            information: 'Weighs Baggies with minimal loss',
            stackable: true,
            image: createImage('np_small-scale'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'smirror': { //car part
            name: 'Side Mirror',
            information: "On green, I'm going for it",
            stackable: true,
            image: createImage('np_side-mirror'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'sound': { //car part
            name: 'Sound System',
            information: "Makes your ears bleed",
            stackable: true,
            image: createImage('np_sound-system'),
            weight: 6.0,
            context: {
                useItem: true,
            }
        },
        'spoiler': { //car part
            name: 'Spoiler',
            information: "Quarter mile at a time",
            stackable: true,
            image: createImage('np_spoiler'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'sskirts': { //car part
            name: 'Side Skirts',
            information: "Ride or die, remember?",
            stackable: true,
            image: createImage('np_side-skirts'),
            weight: 4.0,
            context: {
                useItem: true,
            }
        },
        'swheel': { //car part
            name: 'Steering Wheel',
            information: "Winning is winning...",
            stackable: true,
            image: createImage('np_steering-wheel'),
            weight: 4.0,
            context: {
                useItem: true,
            }
        },
        'sprunk': {
            name: 'Sprunk',
            information: "The Essence of Life",
            stackable: true,
            image: createImage('np_sprunk'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'stolen10ctchain': {
            name: '10ct Gold Chain (p)',
            information: "",
            stackable: true,
            image: createImage('np_10ct-gold-chain'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'stolen2ctchain': {
            name: '2ct Gold Chain (p)',
            information: "",
            stackable: true,
            image: createImage('np_2ct-gold-chain'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'stolen5ctchain': {
            name: '5ct Gold Chain (p)',
            information: "",
            stackable: true,
            image: createImage('np_5ct-gold-chain'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'stolen8ctchain': {
            name: '8ct Gold Chain (p)',
            information: "",
            stackable: true,
            image: createImage('np_8ct-gold-chain'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'stolencasiowatch': {
            name: 'Casio Watch (p)',
            information: "",
            stackable: true,
            image: createImage('np_casio-watch'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'stolengameboy': {
            name: 'Gameboy (p)',
            information: "",
            stackable: true,
            image: createImage('np_gameboy'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'stoleniphone': {
            name: 'Apple Iphone (p)',
            information: "",
            stackable: true,
            image: createImage('np_apple-iphone'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'stolennokia': {
            name: 'Nokia Phone (p)',
            information: "",
            stackable: true,
            image: createImage('np_nokia-phone'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'stolenoakleys': {
            name: 'Oakley Sunglasses (p)',
            information: "",
            stackable: true,
            image: createImage('np_oakley-sunglasses'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'stolenpsp': {
            name: 'PSP (p)',
            information: "",
            stackable: true,
            image: createImage('np_psp'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'stolenraybans': {
            name: 'Ray Ban Sunglasses (p)',
            information: "",
            stackable: true,
            image: createImage('np_raybans'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'stolens8': {
            name: 'Samsung S8 (p)',
            information: "",
            stackable: true,
            image: createImage('np_samsung-s8'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'stolentv': {
            name: 'Flat Panel TV (p)',
            information: "",
            stackable: false,
            image: createImage('np_stolentv'),
            weight: 50.0,
            context: {
                useItem: true,
            }
        },
        'stolenmusic': {
            name: 'Music Equipment (p)',
            information: "",
            stackable: false,
            image: createImage('np_stolenmusic'),
            weight: 50.0,
            context: {
                useItem: true,
            }
        },
        'stolencomputer': {
            name: 'Computer Equipment (p)',
            information: "",
            stackable: false,
            image: createImage('np_stolencomputer'),
            weight: 50.0,
            context: {
                useItem: true,
            }
        },
        'stolenart': {
            name: 'Art (p)',
            information: "",
            stackable: false,
            image: createImage('np_stolenart'),
            weight: 30.0,
            context: {
                useItem: true,
            }
        },
        'Suitcase': {
            name: 'Suitcase',
            information: 'Its a prop, wow?',
            stackable: true,
            image: createImage('np_suitcase'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'tbag': {
            name: 'Transport Bag',
            information: 'Keeping your organs fresh',
            stackable: true,
            image: createImage('np_transport-bag'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'thermite': {
            name: 'Thermite',
            information: '',
            stackable: true,
            image: createImage('np_thermite_charge'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'thermitecharge': {
            name: 'Thermite Charger',
            information: '',
            stackable: true,
            image: createImage('np_thermite_charge'),
            weight: 4.0,
            context: {
                useItem: true,
            }
        },
        'Toolbox': {
            name: 'Toolbox',
            information: '',
            stackable: true,
            image: createImage('np_toolbox'),
            weight: 4.0,
            context: {
                useItem: true,
            }
        },
        'umbrella': {
            name: 'Umbrella',
            information: '',
            stackable: true,
            image: createImage('np_umbrella'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'vpnxj': {
            name: 'VPN',
            information: '',
            stackable: true,
            image: createImage('np_vpn-xj'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'watch': {
            name: 'PD Watch & Compass',
            information: 'Government (PD/EMS/DOC) Issued Equipment',
            stackable: true,
            image: createImage('np_watch'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'yellowb': {
            name: 'Yellow Bandana',
            information: 'Im tellin you',
            stackable: true,
            image: createImage('np_yellow-bandana'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'Bankbox': {
            name: 'Bank Box',
            information: 'A locked bank box.',
            stackable: false,
            image: createImage('np_bankbox'),
            weight: 15.0,
            context: {
                useItem: true,
            }
        },
        'Bankboxkey': {
            name: 'Briefcase Key',
            information: 'A key that seems to fit somewhere.',
            stackable: true,
            image: createImage('np_bankboxkey'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'Largesupplycrate': {
            name: 'Large Supply crate',
            information: 'A very big and heavy crate.',
            stackable: false,
            image: createImage('np_supplycrate_large'),
            weight: 150.0,
            context: {
                useItem: true,
            }
        },
        'Mediumsupplycrate': {
            name: 'Medium Supply crate',
            information: 'A semi-heavy crate containing something.',
            stackable: false,
            image: createImage('np_supplycrate_medium'),
            weight: 100.0,
            context: {
                useItem: true,
            }
        },
        'Smallsupplycrate': {
            name: 'Small Arms Crate',
            information: 'A small unmarked crate.',
            stackable: false,
            image: createImage('np_smallarmscrate'),
            weight: 50.0,
            context: {
                useItem: true,
            }
        },
        // Start Of Fishing Items
        'illegalhook': {
            name: 'Illegal Hook',
            information: 'Hmm maybe fish will like this more?',
            stackable: true,
            image: createImage('np_illegal_hook'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'fishingrod': {
            name: 'Fishing Rod',
            information: 'Lets fish',
            stackable: false,
            image: createImage('np_fishing-rod'),
            weight: 10.0,
            context: {
                useItem: true,
            }
        },
        'fishingbass': {
            name: 'Bass',
            information: 'Striped Bass. Bass like the fish, not the officer',
            stackable: true,
            image: createImage('np_fishing-bass'),
            weight: 8.0,
            context: {
                useItem: true,
            }
        },
        'fishingcarp': {
            name: 'Carp',
            information: 'Carp. Carpe diem!',
            stackable: true,
            image: createImage('np_fishing-carp'),
            weight: 8.0,
            context: {
                useItem: true,
            }
        },
        'fishingcatfish': {
            name: 'Catfish',
            information: 'Catfish. Did you just get done catfish noodlin?',
            stackable: true,
            image: createImage('np_fishing-cat'),
            weight: 8.0,
            context: {
                useItem: true,
            }
        },
        'fishingyellowperch': {
            name: 'Yellow Perch',
            information: 'Yellow Perch. Did they tell you not to perch or not to poach?',
            stackable: true,
            image: createImage('np_fishing-yellowperch'),
            weight: 8.0,
            context: {
                useItem: true,
            }
        },
        'fishingalligatorturtle': {
            name: 'Alligator Snapping Turtle',
            information: 'Alligator Snapping Turtle. This thing could snap your fingers off like twigs.',
            stackable: true,
            image: createImage('np_fishing-alligator-snapping-turtle'),
            weight: 45.0,
            context: {
                useItem: true,
            }
        },
        'fishingsockeyesalmon': {
            name: 'Sockeye Salmon',
            information: 'Sockeye Salmon. It looks like you caught this one before it could reach its spawning grounds...',
            stackable: true,
            image: createImage('np_fishing-sockeye-salmon'),
            weight: 8.0,
            context: {
                useItem: true,
            }
        },
        'fishingsturgeon': {
            name: 'Sturgeon',
            information: 'Green Sturgeon. It looks prehistoric and rare. Maybe it has caviar? ',
            stackable: true,
            image: createImage('np_fishing-sturgeon'),
            weight: 45.0,
            context: {
                useItem: true,
            }
        },
        'fishingbluefish': {
            name: 'Bluegill',
            information: 'Bluegill. Catching this took no skill.',
            stackable: true,
            image: createImage('np_fishing-bluefish'),
            weight: 8.0,
            context: {
                useItem: true,
            }
        },
        'fishingflounder': {
            name: 'Flounder',
            information: 'I went fishing and all I got was this lousy flounder',
            stackable: true,
            image: createImage('np_fishing-flounder'),
            weight: 8.0,
            context: {
                useItem: true,
            }
        },
        'fishingmackerel': {
            name: 'Mackerel',
            information: 'Sometimes holy',
            stackable: true,
            image: createImage('np_fishing-mackerel'),
            weight: 8.0,
            context: {
                useItem: true,
            }
        },
        'fishingcod': {
            name: 'Cod',
            information: 'Modern Warfare',
            stackable: true,
            image: createImage('np_fishing-cod'),
            weight: 8.0,
            context: {
                useItem: true,
            }
        },
        'fishingwhale': {
            name: 'Baby Whale',
            information: 'A fucking whale! Someone might be interested in buying it? Lol, jk. Throw it back. Unless..?',
            stackable: true,
            image: createImage('np_fishing-whale'),
            weight: 55.0,
            context: {
                useItem: true,
            }
        },
        'fishingdolphin': {
            name: 'Baby Dolphin',
            information: 'A fucking dolphin! Someone might be interested in buying it? Lol, jk. Throw it back. Unless..?',
            stackable: true,
            image: createImage('np_fishing-dolphin'),
            weight: 45.0,
            context: {
                useItem: true,
            }
        },
        'fishingshark': {
            name: 'Baby Shark',
            information: 'A fucking dolphin! Someone might be interested in buying it? Lol, jk. Throw it back. Unless..?',
            stackable: true,
            image: createImage('np_fishing-shark'),
            weight: 45.0,
            context: {
                useItem: true,
            }
        },
        'fishingnet': {
            name: 'Gill Net',
            information: '',
            stackable: true,
            image: createImage('np_fishnet'),
            weight: 15.0,
            context: {
                useItem: true,
            }
        },
        // FISHING JUNK
        'fishingboot': {
            name: 'Boot',
            information: '',
            stackable: true,
            image: createImage('np_fishingboot'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'fishinglog': {
            name: 'Log',
            information: '',
            stackable: true,
            image: createImage('np_fishinglog'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'fishingtin': {
            name: 'Tincan',
            information: '',
            stackable: true,
            image: createImage('np_fishingtin'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'fishingtacklebox': {
            name: 'Tackle box',
            information: '',
            stackable: true,
            image: createImage('np_fishingtacklebox'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'fishingchest': {
            name: 'Treasure chest',
            information: '',
            stackable: true,
            image: createImage('np_fishingchest'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'fishinglockbox': {
            name: 'Lockbox',
            information: '',
            stackable: true,
            image: createImage('np_fishinglockbox'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'fishingtunac': {
            name: 'Tuna Chip',
            information: '',
            stackable: true,
            image: createImage('np_tuner'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        // FISHING END
        // HUNTING
        '3648318199': {
            name: 'Hunting Rifle',
            information: '',
            stackable: false,
            image: createImage('np_huntingrifle'),
            weight: 11.0,
            context: {
                useItem: true,
            }
        },
        'huntingammo': {
            name: '223 Hunting Rounds',
            information: '',
            stackable: true,
            image: createImage('np_223ammo'),
            weight: 7.0,
            context: {
                useItem: true,
            }
        },
        'huntingknife': {
            name: 'Hunting Knife',
            information: '',
            stackable: false,
            image: createImage('np_huntingknife'),
            weight: 7.0,
            context: {
                useItem: true,
            }
        },
        'huntingbait': {
            name: 'Animal Bait',
            information: '',
            stackable: true,
            image: createImage('np_huntingbait'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'fishingbait': {
            name: 'Fishing Bait',
            information: 'Wormy like you',
            stackable: true,
            image: createImage('fish_bait'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'huntingcarcass1': {
            name: 'Animal Pelt 1',
            information: 'What is this? Did you shoot it with an AK?',
            stackable: true,
            image: createImage('np_huntingcarcass1'),
            weight: 35.0,
            context: {
                useItem: true,
            }
        },
        'huntingcarcass2': {
            name: 'Animal Pelt 2',
            information: 'Someone might pay a pretty penny for this',
            stackable: true,
            image: createImage('np_huntingcarcass2'),
            weight: 35.0,
            context: {
                useItem: true,
            }
        },
        'huntingcarcass3': {
            name: 'Animal Pelt 3',
            information: 'I am sure we can turn this in to something fancy',
            stackable: true,
            image: createImage('np_huntingcarcass3'),
            weight: 55.0,
            context: {
                useItem: true,
            }
        },
        'huntingcarcass4': {
            name: 'Animal Pelt 4',
            information: 'Hunting in the South Side are we?',
            stackable: true,
            image: createImage('np_huntingcarcass4'),
            weight: 75.0,
            context: {
                useItem: true,
            }
        },
        'huntingpelt': {
            name: 'Animal Pelt',
            information: 'This used to keep an animal warm in the winter! You ANIMAL!',
            stackable: true,
            image: createImage('np_huntingpelt'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'huntingmeat': {
            name: 'Animal Meat',
            information: 'I am sure this could turn in to a killer burger',
            stackable: true,
            image: createImage('np_animalmeat'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        // HUNTING END
        // HEISTS
        // practice
        'heistlaptopprac': {
            name: 'Laptop',
            information: 'Practice makes perfect. Marked for police seizure.',
            stackable: true,
            image: createImage('np_laptop_prac'),
            weight: 20.0,
            context: {
                useItem: true,
            }
        },
        // fleeca
        'heistlaptop3': {
            name: 'Laptop',
            information: 'Pre-configured to access certain systems. Marked for police seizure.',
            stackable: true,
            image: createImage('np_laptop03'),
            weight: 20.0,
            context: {
                useItem: true,
            }
        },
        // paleto
        'heistlaptop2': {
            name: 'Laptop',
            information: 'Pre-configured to access certain systems. Marked for police seizure.',
            stackable: true,
            image: createImage('np_laptop02'),
            weight: 20.0,
            context: {
                useItem: true,
            }
        },
        // vault upper
        'heistlaptop4': {
            name: 'Laptop',
            information: 'Pre-configured to access certain systems. Marked for police seizure.',
            stackable: true,
            image: createImage('np_laptop04'),
            weight: 20.0,
            context: {
                useItem: true,
            }
        },
        // vault lower
        'heistlaptop1': {
            name: 'Laptop',
            information: 'Pre-configured to access certain systems. Marked for police seizure.',
            stackable: true,
            image: createImage('np_laptop01'),
            weight: 20.0,
            context: {
                useItem: true,
            }
        },
        //END
        'receipt': {
            name: 'Receipt',
            information: '',
            stackable: true,
            image: createImage('np_receipt'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'emptybaggies': {
            name: 'Empty Baggies',
            information: '',
            stackable: true,
            image: createImage('np_pack_of_empty_baggies'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        //RACING
        'racingusb0': {
            name: 'Race Creating Dongle',
            information: 'You do not see this...',
            stackable: true,
            image: createImage('np_racing_usb_blue'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'racingusb1': {
            name: 'Phone Dongle',
            information: 'Marked for Police Seizure',
            stackable: true,
            image: createImage('np_racing_usb_blue'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'racingusb2': {
            name: 'Phone Dongle',
            information: 'Marked for Police Seizure',
            stackable: true,
            image: createImage('np_racing_usb_blue'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'racingusb3': {
            name: 'Phone Dongle',
            information: 'Access to SASP Time Trials App',
            stackable: true,
            image: createImage('np_racing_usb_blue'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        // RACING END
        //MECHANIC REPAIR SHOPS
        'xfixbrake': {
            name: 'Brake Parts (X)',
            information: 'New brake discs, pads, calipers, hubs & accessories',
            stackable: true,
            image: createImage('np_brake_parts_x'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'xfixaxle': {
            name: 'Axle Parts (X)',
            information: 'New axle components',
            stackable: true,
            image: createImage('np_axle_parts_x'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'xfixradiator': {
            name: 'Radiator Parts (X)',
            information: 'New radiator and cooling parts',
            stackable: true,
            image: createImage('np_cooling_parts_x'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'xfixclutch': {
            name: 'Clutch Parts (X)',
            information: 'New clutch disc and pressure plate',
            stackable: true,
            image: createImage('np_clutch_parts_x'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'xfixtransmission': {
            name: 'Transmission Parts (X)',
            information: 'New gear sets, shafts, converters and clutch packs',
            stackable: true,
            image: createImage('np_transmission_parts_x'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'xfixelectronics': {
            name: 'Vehicle Electronics (X)',
            information: 'Various vehicle electrical components',
            stackable: true,
            image: createImage('np_electronic_parts_x'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'xfixinjector': {
            name: 'Fuel Injectors (X)',
            information: 'New fuel injectors',
            stackable: true,
            image: createImage('np_fuel_injectors_x'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'vehrepairitem': {
            name: 'Vehicle Repair Tool',
            information: 'For swapping and repairing worn or damaged tires',
            stackable: true,
            image: createImage('np_tire_kit_x'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'xfixtire': {
            name: 'Tire Repair Kit (X)',
            information: 'For swapping and repairing worn or damaged tires',
            stackable: true,
            image: createImage('np_tire_kit_x'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'xfixbody': {
            name: 'Body Panels (X)',
            information: 'New vehicle body panels',
            stackable: true,
            image: createImage('np_body_panels_x'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'xfixengine': {
            name: 'Engine Parts (X)',
            information: 'New engine parts',
            stackable: true,
            image: createImage('np_engine_parts_x'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },

        //S CLASS REPAIR PARTS
        'sfixbrake': {
            name: 'Brake Parts (S)',
            information: 'New brake discs, pads, calipers, hubs & accessories',
            stackable: true,
            image: createImage('np_brake_parts_s'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'sfixaxle': {
            name: 'sAxle Parts (S)',
            information: 'New axle components',
            stackable: true,
            image: createImage('np_axle_parts_s'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'sfixradiator': {
            name: 'Radiator Parts (S)',
            information: 'New radiator and cooling parts',
            stackable: true,
            image: createImage('np_cooling_parts_s'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'sfixclutch': {
            name: 'Clutch Parts (S)',
            information: 'New clutch disc and pressure plate',
            stackable: true,
            image: createImage('np_clutch_parts_s'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'sfixtransmission': {
            name: 'Transmission Parts (S)',
            information: 'New gear sets, shafts, converters and clutch packs',
            stackable: true,
            image: createImage('np_transmission_parts_s'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'sfixelectronics': {
            name: 'Vehicle Electronics (S)',
            information: 'Various vehicle electrical components',
            stackable: true,
            image: createImage('np_electronic_parts_s'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'sfixinjector': {
            name: 'Fuel Injectors (S)',
            information: 'New fuel injectors',
            stackable: true,
            image: createImage('np_fuel_injectors_s'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'sfixtire': {
            name: 'Tire Repair Kit (S)',
            information: 'For swapping and repairing worn or damaged tires',
            stackable: true,
            image: createImage('np_tire_kit_s'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'sfixbody': {
            name: 'Body Panels (S)',
            information: 'New vehicle body panels',
            stackable: true,
            image: createImage('np_body_panels_s'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'sfixengine': {
            name: 'Engine Parts (S)',
            information: 'New engine parts',
            stackable: true,
            image: createImage('np_engine_parts_s'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        //A CLASS REPAIR PARTS
        'afixbrake': {
            name: 'Brake Parts (A)',
            information: 'New brake discs, pads, calipers, hubs & accessories',
            stackable: true,
            image: createImage('np_brake_parts_a'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'afixaxle': {
            name: 'Axle Parts (A)',
            information: 'New axle components',
            stackable: true,
            image: createImage('np_axle_parts_a'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'afixradiator': {
            name: 'Radiator Parts (A)',
            information: 'New radiator and cooling parts',
            stackable: true,
            image: createImage('np_cooling_parts_a'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'afixclutch': {
            name: 'Clutch Parts (A)',
            information: 'New clutch disc and pressure plate',
            stackable: true,
            image: createImage('np_clutch_parts_a'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'afixtransmission': {
            name: 'Transmission Parts (A)',
            information: 'New gear sets, shafts, converters and clutch packs',
            stackable: true,
            image: createImage('np_clutch_parts_a'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'afixelectronics': {
            name: 'Vehicle Electronics (A)',
            information: 'Various vehicle electrical components',
            stackable: true,
            image: createImage('np_electronic_parts_a'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'afixinjector': {
            name: 'Fuel Injectors (A)',
            information: 'New fuel injectors',
            stackable: true,
            image: createImage('np_fuel_injectors_a'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'afixtire': {
            name: 'Tire Repair Kit (A)',
            information: 'For swapping and repairing worn or damaged tires',
            stackable: true,
            image: createImage('np_tire_kit_a'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'afixbody': {
            name: 'Body Panels (A)',
            information: 'New vehicle body panels',
            stackable: true,
            image: createImage('np_body_panels_a'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'afixengine': {
            name: 'Engine Parts (A)',
            information: 'New engine parts',
            stackable: true,
            image: createImage('np_engine_parts_a'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        //B CLASS REPAIR PARTS
        'bfixbrake': {
            name: 'Brake Parts (B)',
            information: 'New brake discs, pads, calipers, hubs & accessories',
            stackable: true,
            image: createImage('np_brake_parts_b'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'bfixaxle': {
            name: 'Axle Parts (B)',
            information: 'New axle components',
            stackable: true,
            image: createImage('np_axle_parts_b'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'bfixradiator': {
            name: 'Radiator Parts (B)',
            information: 'New radiator and cooling parts',
            stackable: true,
            image: createImage('np_cooling_parts_b'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'bfixclutch': {
            name: 'Clutch Parts (B)',
            information: 'New clutch disc and pressure plate',
            stackable: true,
            image: createImage('np_clutch_parts_b'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'bfixtransmission': {
            name: 'Transmission Parts (B)',
            information: 'New gear sets, shafts, converters and clutch packs',
            stackable: true,
            image: createImage('np_transmission_parts_b'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'bfixelectronics': {
            name: 'Vehicle Electronics (B)',
            information: 'Various vehicle electrical components',
            stackable: true,
            image: createImage('np_electronic_parts_b'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'bfixinjector': {
            name: 'Fuel Injectors (B)',
            information: 'New fuel injectors',
            stackable: true,
            image: createImage('np_fuel_injectors_b'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'bfixtire': {
            name: 'Tire Repair Kit (B)',
            information: 'For swapping and repairing worn or damaged tires',
            stackable: true,
            image: createImage('np_tire_kit_b'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'bfixbody': {
            name: 'Body Panels (B)',
            information: 'New vehicle body panels',
            stackable: true,
            image: createImage('np_body_panels_b'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'bfixengine': {
            name: 'Engine Parts (B)',
            information: 'New brake discs, pads, calipers, hubs & accessories',
            stackable: true,
            image: createImage('np_engine_parts_b'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        //C CLASS REPAIR PARTS
        'cfixbrake': {
            name: 'Brake Parts (C)',
            information: 'New brake discs, pads, calipers, hubs & accessories',
            stackable: true,
            image: createImage('np_brake_parts_c'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'cfixaxle': {
            name: 'Axle Parts (C)',
            information: 'New axle components',
            stackable: true,
            image: createImage('np_axle_parts_c'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'cfixradiator': {
            name: 'Radiator Parts (C)',
            information: 'New radiator and cooling parts',
            stackable: true,
            image: createImage('np_cooling_parts_c'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'cfixclutch': {
            name: 'Clutch Parts (C)',
            information: 'New clutch disc and pressure plate',
            stackable: true,
            image: createImage('np_clutch_parts_c'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'cfixtransmission': {
            name: 'Transmission Parts (C)',
            information: 'New gear sets, shafts, converters and clutch packs',
            stackable: true,
            image: createImage('np_transmission_parts_c'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'cfixelectronics': {
            name: 'Vehicle Electronics (C)',
            information: 'Various vehicle electrical components',
            stackable: true,
            image: createImage('np_electronic_parts_c'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'cfixinjector': {
            name: 'Fuel Injectors (C)',
            information: 'New fuel injectors',
            stackable: true,
            image: createImage('np_fuel_injectors_c'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'cfixtire': {
            name: 'Tire Repair Kit (C)',
            information: 'For swapping and repairing worn or damaged tires',
            stackable: true,
            image: createImage('np_tire_kit_c'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'cfixbody': {
            name: 'Body Panels (C)',
            information: 'New vehicle body panels',
            stackable: true,
            image: createImage('np_body_panels_c'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'cfixengine': {
            name: 'Engine Parts (C)',
            information: 'New brake discs, pads, calipers, hubs & accessories',
            stackable: true,
            image: createImage('np_engine_parts_c'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        //D CLASS REPAIR PARTS
        'dfixbrake': {
            name: 'Brake Parts (D)',
            information: 'New brake discs, pads, calipers, hubs & accessories',
            stackable: true,
            image: createImage('np_brake_parts_d'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'dfixaxle': {
            name: 'Axle Parts (D)',
            information: 'New axle components',
            stackable: true,
            image: createImage('np_axle_parts_d'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'dfixradiator': {
            name: 'Radiator Parts (D)',
            information: 'New radiator and cooling parts',
            stackable: true,
            image: createImage('np_cooling_parts_d'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'dfixclutch': {
            name: 'Clutch Parts (D)',
            information: 'New clutch disc and pressure plate',
            stackable: true,
            image: createImage('np_clutch_parts_d'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'dfixtransmission': {
            name: 'Transmission Parts (D)',
            information: 'New gear sets, shafts, converters and clutch packs',
            stackable: true,
            image: createImage('np_transmission_parts_d'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'dfixelectronics': {
            name: 'Vehicle Electronics (D)',
            information: 'Various vehicle electrical components',
            stackable: true,
            image: createImage('np_electronic_parts_d'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'dfixinjector': {
            name: 'Fuel Injectors (D)',
            information: 'New fuel injectors',
            stackable: true,
            image: createImage('np_fuel_injectors_d'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'dfixtire': {
            name: 'Tire Repair Kit (D)',
            information: 'For swapping and repairing worn or damaged tires',
            stackable: true,
            image: createImage('np_tire_kit_d'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'dfixbody': {
            name: 'Body Panels (D)',
            information: 'New vehicle body panels',
            stackable: true,
            image: createImage('np_body_panels_d'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'dfixengine': {
            name: 'Engine Parts (D)',
            information: 'New brake discs, pads, calipers, hubs & accessories',
            stackable: true,
            image: createImage('np_engine_parts_d'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        //M CLASS REPAIR PARTS
        'mfixbrake': {
            name: 'Brake Parts (M)',
            information: 'New brake discs, pads, calipers, hubs & accessories',
            stackable: true,
            image: createImage('np_brake_parts_m'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'mfixaxle': {
            name: 'Axle Parts (M)',
            information: 'New axle components',
            stackable: true,
            image: createImage('np_axle_parts_m'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'mfixradiator': {
            name: 'Radiator Parts (M)',
            information: 'New radiator and cooling parts',
            stackable: true,
            image: createImage('np_cooling_parts_m'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'mfixclutch': {
            name: 'Clutch Parts (M)',
            information: 'New clutch disc and pressure plate',
            stackable: true,
            image: createImage('np_clutch_parts_m'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'mfixtransmission': {
            name: 'Transmission Parts (M)',
            information: 'New gear sets, shafts, converters and clutch packs',
            stackable: true,
            image: createImage('np_transmission_parts_m'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'mfixelectronics': {
            name: 'Vehicle Electronics (M)',
            information: 'Various vehicle electrical components',
            stackable: true,
            image: createImage('np_electronic_parts_m'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'mfixinjector': {
            name: 'Fuel Injectors (M)',
            information: 'New fuel injectors',
            stackable: true,
            image: createImage('np_fuel_injectors_m'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'mfixtire': {
            name: 'Tire Repair Kit (M)',
            information: 'For swapping and repairing worn or damaged tires',
            stackable: true,
            image: createImage('np_tire_kit_m'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'mfixbody': {
            name: 'Body Panels (M)',
            information: 'New vehicle body panels',
            stackable: true,
            image: createImage('np_body_panels_m'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'mfixengine': {
            name: 'Engine Parts (M)',
            information: 'New brake discs, pads, calipers, hubs & accessories',
            stackable: true,
            image: createImage('np_engine_parts_m'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        // Vegetables
        'lettuce': {
            name: 'Lettuce',
            information: 'Used to craft food - be aware, food doesnt last forever!',
            stackable: true,
            image: createImage('np_ingredients_lettuce'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'hamburgerbuns': {
            name: 'Hamburger Bun',
            information: 'Used to craft food - be aware, food doesnt last forever!',
            stackable: true,
            image: createImage('np_ingredients_buns'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'hamburgerpatty': {
            name: 'Hamburger Patty',
            information: 'Used to craft food - be aware, food doesnt last forever!',
            stackable: true,
            image: createImage('np_ingredients_patty'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'cheese': {
            name: 'Cheese',
            information: 'Used to craft food - be aware, food doesnt last forever!',
            stackable: true,
            image: createImage('np_ingredients_cheese'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'potatoingred': {
            name: 'Potatoes',
            information: 'Used to craft food - be aware, food doesnt last forever!',
            stackable: true,
            image: createImage('np_potato'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'milk': {
            name: 'Milk',
            information: 'Used to craft food - be aware, food doesnt last forever!',
            stackable: true,
            image: createImage('np_ingredients_milk'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'icecreamingred': {
            name: 'Ice Cream',
            information: 'Used to craft food - be aware, food doesnt last forever!',
            stackable: true,
            image: createImage('np_ingredients_icecream'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'coffeebeans': {
            name: 'Coffee Beans',
            information: 'Used to craft food - be aware, food doesnt last forever!',
            stackable: true,
            image: createImage('np_ingredients_coffeebeans'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'hfcs': {
            name: 'High-Fructose Syrup',
            information: 'Used to craft food - be aware, food doesnt last forever!',
            stackable: true,
            image: createImage('np_ingredients_hfcs'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'tomato': {
            name: 'Tomato',
            information: 'Used to craft food - be aware, food doesnt last forever!',
            stackable: true,
            image: createImage('np_ingredients_tomato'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'cucumber': {
            name: 'Cucumber',
            information: 'Used to craft food - be aware, food doesnt last forever!',
            stackable: true,
            image: createImage('np_ingredients_cucumber'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'carrot': {
            name: 'Carrot',
            information: 'Used to craft food - be aware, food doesnt last forever!',
            stackable: true,
            image: createImage('np_ingredients_carrot'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'radish': {
            name: 'Radish',
            information: 'Used to craft food - be aware, food doesnt last forever!',
            stackable: true,
            image: createImage('radish'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'beetroot': {
            name: 'Beet',
            information: 'Used to craft food - be aware, food doesnt last forever!',
            stackable: true,
            image: createImage('beetroot'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'cabbage': {
            name: 'Cabbage',
            information: 'Used to craft food - be aware, food doesnt last forever!',
            stackable: true,
            image: createImage('np_ingredients_cabbage'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'chives': {
            name: 'Chives',
            information: 'Used to craft food - be aware, food doesnt last forever!',
            stackable: true,
            image: createImage('np_ingredients_chives'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'pumpkin': {
            name: 'Pumpkin',
            information: 'Used to craft food - be aware, food doesnt last forever!',
            stackable: true,
            image: createImage('np_ingredients_pumpkin'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'corn': {
            name: 'Corn',
            information: 'Used to craft food - be aware, food doesnt last forever!',
            stackable: true,
            image: createImage('corn'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'oregano': {
            name: 'Oregano',
            information: 'Used to craft food - be aware, food doesnt last forever!',
            stackable: true,
            image: createImage('np_ingredients_oregano'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'garlic': {
            name: 'Garlic',
            information: 'Used to craft food - be aware, food doesnt last forever!',
            stackable: true,
            image: createImage('np_ingredients_garlic'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'mushrooms': {
            name: 'Mushrooms',
            information: 'Used to craft food - be aware, food doesnt last forever!',
            stackable: true,
            image: createImage('np_ingredients_mushrooms'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'foodbag': {
            name: 'Brown Bag',
            information: 'Enough space for one.',
            stackable: false,
            image: createImage('np_food_bag'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        //Mech
        'helicopterrepairkit': {
            name: 'Brown Bag',
            information: 'Helicopter Repair Kit.',
            stackable: true,
            image: createImage('np_helicopter_repair_kit'),
            weight: 80.0,
            context: {
                useItem: true,
            }
        },
        'bodyrepairkit': {
            name: 'Body Repair Kit',
            information: '1 Time use - repairs body to full.',
            stackable: true,
            image: createImage('np_body_repair_kit'),
            weight: 80.0,
            context: {
                useItem: true,
            }
        },
        'mask': {
            name: 'Mask',
            information: '',
            stackable: true,
            image: createImage('np_mask'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'hat': {
            name: 'Hat',
            information: '',
            stackable: true,
            image: createImage('np_hat'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'varhelmet': {
            name: 'VAR Helmet',
            information: 'Virtually augmented reality, woah.',
            stackable: true,
            image: createImage('np_var_headset'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'darkmarketdeliveries': {
            name: 'Delivery List',
            information: 'A suspicious list with transport instructions. Marked for Police Seizure.',
            stackable: true,
            image: createImage('np_dark_market_customers'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'darkmarketpackage': {
            name: 'Suspicious Package',
            information: 'Package covered in tape and milk stickers. Marked for Police Seizure.',
            stackable: true,
            image: createImage('np_dark_market_package'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'choplist': {
            name: 'Vehicle List',
            information: 'List with locations and vehicle models. Marked for Police Seizure.',
            stackable: true,
            image: createImage('np_dark_market_customers'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'bennysorder': {
            name: 'Bennys Order',
            information: 'Go to the manager and buy the parts.<br>Then give this to an employee.',
            stackable: true,
            image: createImage('np_receipt'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'stolenshoes': {
            name: 'Stolen Shoes',
            information: 'These are not yours, bro.',
            stackable: true,
            image: createImage('np_stolenshoes'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'rentalpapers': {
            name: 'Rental Papers',
            information: '',
            stackable: true,
            image: createImage('rental_paper'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'dashcamracing': {
            name: 'GoPixel (Public)',
            information: 'Throw this in your vehicle to stream live footage to the cloud! Unencrypted.',
            stackable: true,
            image: createImage('np_dashcam'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'dashcampd': {
            name: 'GoPixel (PD)',
            information: 'Throw this in your vehicle to stream live footage to the cloud! Unencrypted.',
            stackable: true,
            image: createImage('np_dashcam'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'dashcamstatic': {
            name: 'GoPixel (Static)',
            information: 'Security camera for things.',
            stackable: true,
            image: createImage('np_dashcam'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'dashcamstaticpd': {
            name: 'GoPixel (Static)',
            information: 'Government (PD/EMS/DOC) Issued Equipment',
            stackable: true,
            image: createImage('np_dashcam'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'moneycase': {
            name: 'Regular Briefcase',
            information: 'Good for about $20k in large bills.',
            stackable: true,
            image: createImage('np_moneycase'),
            weight: 10.0,
            context: {
                useItem: true,
            }
        },
        'nightvisiongoggles': {
            name: 'Night Vision Goggles',
            information: 'Mil-Spec. High price, low quality.',
            stackable: true,
            image: createImage('np_nv'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'nightvisiongogglespd': {
            name: 'NVG (SWAT)',
            information: 'Mil-Spec. High price, low quality. If you are not SWAT certified do not buy this.',
            stackable: true,
            image: createImage('np_nv'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'grapplegun': {
            name: 'Grapple Gun',
            information: 'This is some Batman shit. Marked for Police Seizure.',
            stackable: true,
            image: createImage('np_grapple'),
            weight: 7.0,
            context: {
                useItem: true,
            }
        },
        'grapplegunpd': {
            name: 'Grapple Gun (SWAT)',
            information: 'This is some Batman shit. If you are not SWAT certified do not buy this.',
            stackable: true,
            image: createImage('np_grapple'),
            weight: 7.0,
            context: {
                useItem: true,
            }
        },
        'weedpackage': {
            name: 'Suspicious Package',
            information: 'Marked for Police Seizure.',
            stackable: true,
            image: createImage('np_box-of-weed-12-18-oz'),
            weight: 25.0,
            context: {
                useItem: true,
            }
        },
        'methpackage': {
            name: 'Suspicious Package',
            information: 'Marked for Police Seizure.',
            stackable: true,
            image: createImage('np_meth_brick'),
            weight: 25.0,
            context: {
                useItem: true,
            }
        },
        'methbag': {
            name: 'Big Meth Bag (100g)',
            information: '100g of pure fuckin meth',
            stackable: true,
            image: createImage('np_meth_bag'),
            weight: 10.0,
            context: {
                useItem: true,
            }
        },
        'tattooremover': {
            name: 'Tattoo Remover',
            information: 'Removes tattoos from someone.',
            stackable: true,
            image: createImage('tattoo_remover'),
            weight: 10.0,
            context: {
                useItem: true,
            }
        },
        'megaphone': {
            name: 'Megaphone',
            information: '',
            stackable: true,
            image: createImage('np_megaphone'),
            weight: 10.0,
            context: {
                useItem: true,
            }
        },
        'murdermeal': {
            name: 'Murder Meal',
            information: 'This burger may kill you! We are not responsible',
            stackable: true,
            image: createImage('np_murder_meal'),
            weight: 16.0,
            context: {
                useItem: true,
            }
        },
        'newsusb': {
            name: 'News USB',
            information: 'Property of LS News Center',
            stackable: true,
            image: createImage('np_news_usb'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'newscamera': {
            name: 'News Camera',
            information: 'A little dusty',
            stackable: true,
            image: createImage('np_news_camera'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'newsmic': {
            name: 'News Mic',
            information: 'Is this thing on?',
            stackable: true,
            image: createImage('np_news_mic'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'newsboom': {
            name: 'News Boom',
            information: 'Heavier than it looks',
            stackable: true,
            image: createImage('np_news_boom'),
            weight: 3.0,
            context: {
                useItem: true,
            }
        },
        'newslight': {
            name: 'News Light',
            information: 'I said, ooooh, Im blinded by the lights',
            stackable: true,
            image: createImage('np_news_light'),
            weight: 6.0,
            context: {
                useItem: true,
            }
        },
        'safecrackingkit': {
            name: 'Safe Cracking Tool',
            information: 'Marked for police seizure.',
            stackable: true,
            image: createImage('np_safecrackingkit'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'trackerdisabler': {
            name: 'Tracker Disabling Tool',
            information: 'Plug this in and keep moving.',
            stackable: true,
            image: createImage('np_disabler'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'gatheringkit': {
            name: 'Detective Kit',
            information: 'Used to gather evidence - should be seized by police if suspected of use in crime.',
            stackable: true,
            image: createImage('np_cleaning-goods'),
            weight: 3.0,
            context: {
                useItem: true,
            }
        },
        'weapon_silencer_pistol': {
            name: 'Pistol Suppressor',
            information: 'A silencer designed for use on some pistols.',
            stackable: true,
            image: createImage('np_ssilencer'),
            weight: 15.0,
            context: {
                useItem: true,
            }
        },
        'weapon_oil_silencer': {
            name: 'Oil Filter',
            information: 'Old, used oil filter. Do not seem to last long.',
            stackable: true,
            image: createImage('np_oil_can_supp'),
            weight: 15.0,
            context: {
                useItem: true,
            }
        },
        'weapon_silencer_assault': {
            name: 'Rifle Suppressor',
            information: 'Silencer designed for use on some rifles.',
            stackable: true,
            image: createImage('np_silencerbig'),
            weight: 15.0,
            context: {
                useItem: true,
            }
        },
        'weapon_scope': {
            name: 'Weapon Optics',
            information: 'Scope designed for use on some weapons.',
            stackable: true,
            image: createImage('np_lscope'),
            weight: 15.0,
            context: {
                useItem: true,
            }
        },
        'weapon_uzi_extended': {
            name: 'UZI extended mag',
            information: 'Will only fit on the UZI.',
            stackable: true,
            image: createImage('np_uzi_extended'),
            weight: 15.0,
            context: {
                useItem: true,
            }
        },
        'weapon_uzi_foldstock': {
            name: 'UZI Stock',
            information: 'Will only fit on the UZI.',
            stackable: true,
            image: createImage('np_uzi_fold_stock'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'weapon_uzi_woodstock': {
            name: 'UZI Wooden Stock',
            information: 'Will only fit on the UZI.',
            stackable: true,
            image: createImage('np_uzi_wooden_stock'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        '2343591895': {
            name: 'Flash Light',
            information: '',
            stackable: true,
            image: createImage('np_flashlight'),
            weight: 11.0,
            context: {
                useItem: true,
            }
        },
        'miningprobe': {
            name: 'Mining Probe',
            information: '',
            stackable: true,
            image: createImage('np_metaldetector'),
            weight: 20.0,
            context: {
                useItem: true,
            }
        },
        'miningpickaxe': {
            name: 'Mining Pickaxe',
            information: '',
            stackable: true,
            image: createImage('np_pickaxe'),
            weight: 20.0,
            context: {
                useItem: true,
            }
        },
        'mininggem': {
            name: 'Mined Gemstone',
            information: 'Go get rid of this shit!',
            stackable: true,
            image: createImage('np_gallery_diamond'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'miningcoal': {
            name: 'Mined Coal',
            information: 'Go get rid of this shit!',
            stackable: true,
            image: createImage('np_coal'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'trowel': {
            name: 'Trowel',
            information: '',
            stackable: true,
            image: createImage('np_trowel'),
            weight: 10.0,
            context: {
                useItem: true,
            }
        },
        'pdevidencebag': {
            name: 'Evidence Bag',
            information: '',
            stackable: true,
            image: createImage('np_evidence_bag'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'ketamine': {
            name: 'Special K',
            information: '',
            stackable: true,
            image: createImage('np_ketamine_baggie'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'bakingsoda': {
            name: 'Cleaning Product (Baking Soda)',
            information: 'Cleans n shit yo',
            stackable: true,
            image: createImage('np_bakingsoda'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'cleaningproduct': {
            name: 'Cleaning Product',
            information: 'Cleans n shit yo',
            stackable: true,
            image: createImage('np_cleaningproduct'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'cleaningproduct1': {
            name: 'Cleaning Product',
            information: 'Cleans n shit yo',
            stackable: true,
            image: createImage('np_cleaningproduct2'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'hqparts': {
            name: 'HQ Car Parts',
            information: "Meta-gamed in minutes.",
            stackable: true,
            image: createImage('np_hqparts'),
            weight: 15.0,
            context: {
                useItem: true,
            }
        },
        'cryptostick': {
            name: 'GNE Stick',
            information: 'Contains 10GNE. Somehow more valuable than DOGE',
            stackable: true,
            image: createImage('np_cryptostick'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'turbokit': {
            name: 'Quality Turbo Parts',
            information: 'Turbo, might need repairs to fully function!',
            stackable: true,
            image: createImage('np_vehicle_part'),
            weight: 10.0,
            context: {
                useItem: true,
            }
        },
        'enginekit': {
            name: 'Quality Engine Parts',
            information: 'Looks like some engine parts, might need repairs to fully function!',
            stackable: true,
            image: createImage('np_vehicle_part'),
            weight: 10.0,
            context: {
                useItem: true,
            }
        },
        'transmissionkit': {
            name: 'Quality Transmission Parts',
            information: 'Transmission Parts, might need repairs to fully function!',
            stackable: true,
            image: createImage('np_vehicle_part'),
            weight: 10.0,
            context: {
                useItem: true,
            }
        },
        'brakingkit': {
            name: 'Quality Braking Parts',
            information: 'Transmission Parts, might need repairs to fully function!',
            stackable: true,
            image: createImage('np_vehicle_part'),
            weight: 10.0,
            context: {
                useItem: true,
            }
        },
        'suspensionkit': {
            name: 'Quality Suspension Parts',
            information: 'Transmission Parts, might need repairs to fully function!',
            stackable: true,
            image: createImage('np_vehicle_part'),
            weight: 10.0,
            context: {
                useItem: true,
            }
        },
        'enginebay': {
            name: 'Placeholder Item',
            information: 'Hey, dont touch this!',
            stackable: true,
            image: createImage('np_vehicle_part'),
            weight: 10.0,
            context: {
                useItem: true,
            }
        },
        'refinedaluminium': {
            name: 'Refined Aluminium',
            information: 'Refined Aluminium.',
            stackable: true,
            image: createImage('np_refined_aluminium'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'refinedcopper': {
            name: 'Refined Copper',
            information: 'Refined Copper.',
            stackable: true,
            image: createImage('np_refined_copper'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'refinedglass': {
            name: 'Refined Glass',
            information: 'Refined Glass.',
            stackable: true,
            image: createImage('np_refined_glass'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'refinedplastic': {
            name: 'Refined Plastic',
            information: 'Refined Plastic.',
            stackable: true,
            image: createImage('np_refined_plastic'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'refinedrubber': {
            name: 'Refined Rubber',
            information: 'Refined Rubber.',
            stackable: true,
            image: createImage('np_refined_rubber'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'refinedscrap': {
            name: 'Refined Scrap',
            information: 'Refined Scrap.',
            stackable: true,
            image: createImage('np_refined_scrap'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'refinedsteel': {
            name: 'Refined Steel',
            information: 'Refined Steel.',
            stackable: true,
            image: createImage('np_refined_steel'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'dodopackagesmall': {
            name: 'Dodo Small Package',
            information: 'Store various products in this packaging!',
            stackable: true,
            image: createImage('np_dodobox1'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'dodopackagemedium': {
            name: 'Dodo Medium Package',
            information: 'Store various products in this packaging!',
            stackable: true,
            image: createImage('np_dodobox2'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'dodopackagelarge': {
            name: 'Dodo Large Package',
            information: 'Store various products in this packaging!',
            stackable: true,
            image: createImage('np_dodobox3'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'lawnchair': {
            name: 'Lawn Chair',
            information: 'Get off my lawn!',
            stackable: true,
            image: createImage('np_props_lawnchair'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'lawnchair2': {
            name: 'Lawn Chair',
            information: 'Get off my lawn!',
            stackable: true,
            image: createImage('np_props_lawnchair2'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'stonechisel': {
            name: 'Chisel',
            information: 'Used for stone.',
            stackable: true,
            image: createImage('np_chisel'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'metalshaper': {
            name: 'Shaper',
            information: 'Used for metal.',
            stackable: true,
            image: createImage('np_shaper'),
            weight: 100.0,
            context: {
                useItem: true,
            }
        },
        'woodsaw': {
            name: 'Saw',
            information: 'Used for wood.',
            stackable: true,
            image: createImage('np_saw'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'usedbattery': {
            name: 'Used Battery',
            information: '',
            stackable: true,
            image: createImage('np_used_battery'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'detcord': {
            name: 'Det. Cord',
            information: 'Government (PD/EMS/DOC) Issued Equipment',
            stackable: true,
            image: createImage('np_detcord'),
            weight: 15.0,
            context: {
                useItem: true,
            }
        },
        'mobilecratelock': {
            name: 'Padlock',
            information: '',
            stackable: true,
            image: createImage('np_padlock'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'mobilecratekey': {
            name: 'Padlock Key',
            information: 'A key for some padlock',
            stackable: true,
            image: createImage('np_mobilecratekey'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'mobilecratekeylock': {
            name: 'Keypad',
            information: 'A keypad for something',
            stackable: true,
            image: createImage('np_mobilecratekeylock'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'surveyortool': {
            name: 'Surveying Device',
            information: 'Various tools for surveying.',
            stackable: true,
            image: createImage('np_digi_scanner'),
            weight: 11.0,
            context: {
                useItem: true,
            }
        },
        'agenericmechanicpart': {
            name: 'Mechanical Part (A)',
            information: '',
            stackable: true,
            image: createImage('np_generic_mechanical_A'),
            weight: 10.0,
            context: {
                useItem: true,
            }
        },
        'bgenericmechanicpart': {
            name: 'Mechanical Part (B)',
            information: '',
            stackable: true,
            image: createImage('np_generic_mechanical_B'),
            weight: 10.0,
            context: {
                useItem: true,
            }
        },
        'cgenericmechanicpart': {
            name: 'Mechanical Part (C)',
            information: '',
            stackable: true,
            image: createImage('np_generic_mechanical_C'),
            weight: 10.0,
            context: {
                useItem: true,
            }
        },
        'dgenericmechanicpart': {
            name: 'Mechanical Part (D)',
            information: '',
            stackable: true,
            image: createImage('np_generic_mechanical_D'),
            weight: 10.0,
            context: {
                useItem: true,
            }
        },
        'mgenericmechanicpart': {
            name: 'Mechanical Part (M)',
            information: '',
            stackable: true,
            image: createImage('np_generic_mechanical_M'),
            weight: 10.0,
            context: {
                useItem: true,
            }
        },
        'sgenericmechanicpart': {
            name: 'Mechanical Part (S)',
            information: '',
            stackable: true,
            image: createImage('np_generic_mechanical_S'),
            weight: 10.0,
            context: {
                useItem: true,
            }
        },
        'xgenericmechanicpart': {
            name: 'Mechanical Part (X)',
            information: '',
            stackable: true,
            image: createImage('np_generic_mechanical_X'),
            weight: 10.0,
            context: {
                useItem: true,
            }
        },
        'genericelectronicpart': {
            name: 'Electronic Part',
            information: '',
            stackable: true,
            image: createImage('np_generic_electronic'),
            weight: 10.0,
            context: {
                useItem: true,
            }
        },
        'housesafe': {
            name: 'Home Safe',
            information: 'Verying tempting to crack into...',
            stackable: true,
            image: createImage('np_housesafe'),
            weight: 100.0,
            context: {
                useItem: true,
            }
        },
        'Desomorphine': {
            name: 'Metamorphine',
            information: 'Dumpster Flu Shot',
            stackable: true,
            image: createImage('np_desomorphine'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'Desomorphine_used': {
            name: 'Used Syringe',
            information: 'I would not touch that if I were you.',
            stackable: true,
            image: createImage('np_empty_syringe'),
            weight: 1.0,
            context: {
                useItem: true,
            }
        },
        'wateringcan': {
            name: 'Used Syringe',
            information: 'Fill this at a river or lake.',
            stackable: true,
            image: createImage('wateringcan'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'farmhoe': {
            name: 'Hoe',
            information: 'Used to plant groups of crops.',
            stackable: true,
            image: createImage('np_hoe'),
            weight: 3.0,
            context: {
                useItem: true,
            }
        },
        'drone_lspd': {
            name: 'Police Drone',
            information: 'Government (PD/EMS/DOC) Issued Equipment',
            stackable: true,
            image: createImage('np_drone'),
            weight: 11.0,
            context: {
                useItem: true,
            }
        },
        'drone_civ': {
            name: 'Drone',
            information: 'It flies!',
            stackable: true,
            image: createImage('np_drone'),
            weight: 11.0,
            context: {
                useItem: true,
            }
        },
        'rccontroller': {
            name: 'Remote Controller',
            information: 'Used to control a variety of RC vehicles.',
            stackable: true,
            image: createImage('np_drone_control'),
            weight: 2.0,
            context: {
                useItem: true,
            }
        },
        'C4_dev': {
            name: 'C4',
            information: 'Beep...Beep...Beep...',
            stackable: true,
            image: createImage('np_c4'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'car_bomb': {
            name: 'Car Bomb',
            information: 'Beep...Beep...Beep...',
            stackable: true,
            image: createImage('np_phone_bomb'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'car_bomb_defused': {
            name: 'Defused Car Bomb',
            information: 'You should try and shake it!',
            stackable: true,
            image: createImage('np_phone_bomb'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'C4_defused': {
            name: 'Defused C4',
            information: 'You should try and shake it!',
            stackable: true,
            image: createImage('np_c4'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        'bombmirror': {
            name: 'Car Bomb Detector',
            information: 'Helps stop boom boom',
            stackable: true,
            image: createImage('np_bombmirror'),
            weight: 5.0,
            context: {
                useItem: true,
            }
        },
        //Stolen
        'stolencartrunk': {
            name: 'Stolen Trunk',
            information: '',
            stackable: true,
            image: createImage('np_cartrunk'),
            weight: 25.0,
            context: {
                useItem: true,
            }
        },
        'stolencardoor': {
            name: 'Stolen Door',
            information: '',
            stackable: true,
            image: createImage('np_cardoor'),
            weight: 25.0,
            context: {
                useItem: true,
            }
        },
        'stolencarwheel': {
            name: 'Stolen Wheel',
            information: '',
            stackable: true,
            image: createImage('np_carwheel'),
            weight: 25.0,
            context: {
                useItem: true,
            }
        },
        'stolencarhood': {
            name: 'Stolen Hood',
            information: '',
            stackable: true,
            image: createImage('np_car-hood'),
            weight: 25.0,
            context: {
                useItem: true,
            }
        },
    })

    const [PlayerState, setPlayerState] = createStore<any>({
        character: {
            id: '1000',
            name: 'John Doe',
            cash: 0,
            personalVehicle: 'Landstalker',
            home: '#23 No3 Alta Street',
            phone: '+1 (628) 123-4567',
        },

        settings: {
            holdToDrag: true,
            shiftQuickMove: true
        }
    })

    const [Inventory, setInventory] = createStore<any>({
        ClothingSlots: [
            {
                id: 'hat',
                item: null,
                acceptedItems: [
                    'hat'
                ]
            },
            {
                id: 'mask',
                item: null,
                acceptedItems: [
                    'mask'
                ]
            },
            {
                id: 'glasses',
                item: null,
                acceptedItems: [
                    'glasses'
                ]
            },
            {
                id: 'armor',
                item: null,
                acceptedItems: [
                    'armorplate'
                ]
            },
            {
                id: 'bag',
                item: null,
                acceptedItems: [
                    'bag'
                ]
            }
        ],

        Pockets: {
            name: 'pockets-1',
            Slots: [
                {
                    id: 1,
                    icon: 'idcard',
                    item: null,
                    acceptedItems: [
                        'ID Card'
                    ]
                },
                {
                    id: 2,
                    icon: 'phone',
                    item: {
                        itemId: 'phone',
                        durability: 1,
                    },
                    acceptedItems: [
                        'Mobile Phone'
                    ]
                },
                {
                    id: 3,
                    icon: 'tablet',
                    item: null,
                    acceptedItems: [
                        'OneCity Tablet'
                    ]
                },
                {
                    id: 4,
                    icon: 'key',
                    item: null,
                    acceptedItems: [
                        'housekey'
                    ]
                },
                {
                    id: 5,
                    icon: 'wallet',
                    item: null,
                    acceptedItems: [
                        'Wallet'
                    ]
                }
            ]
        },

        PersonalInventory: {
            maxWeight: 150,
            inventoryName: 'body-1',
            slots: [
                {
                    id: 1,
                    hotBar: true,
                    item: {
                        itemId: 'phone',
                        durability: 1,
                    },
                },
                {
                    id: 2,
                    hotBar: true,
                    item: {
                        itemId: 'knife',
                        durability: 25,
                    },
                },
                {
                    id: 3,
                    hotBar: true,
                    item: {
                        itemId: 'id_card',
                        durability: 1,
                    },
                },
                {
                    id: 4,
                    hotBar: true,
                    item: {
                        itemId: 'octablet',
                        durability: 1,
                    },
                },
                {
                    id: 5,
                    hotBar: true,
                    item: {
                        itemId: 'wallet',
                        durability: 1,
                    },
                },
                {
                    id: 6,
                    item: null,
                },
                {
                    id: 7,
                    item: null,
                },
                {
                    id: 8,
                    item: null,
                },
                {
                    id: 9,
                    item: null,
                },
                {
                    id: 10,
                    item: {
                        itemId: 'cash',
                        amount: 100,
                    },
                },
                {
                    id: 11,
                    item: {
                        itemId: 'glock',
                    },
                },
                {
                    id: 12,
                    item: {
                        itemId: 'hotdog',
                        amount: 5,
                    },
                },
                {
                    id: 13,
                    item: {
                        itemId: 'water',
                    },
                },
                {
                    id: 14,
                    item: {
                        itemId: 'water',
                    },
                },
                {
                    id: 15,
                    item: {
                        itemId: 'water',
                    },
                },
            ]
        },

        PersonalBackpack: {
            maxWeight: 250,
            inventoryName: 'backpack-1',
            slots: [
                {
                    id: 1,
                    item: {
                        itemId: 'knife',
                        durability: 76,
                    },
                },
                {
                    id: 2,
                    item: null,
                },
                {
                    id: 3,
                    item: null,
                },
                {
                    id: 4,
                    item: null,
                },
                {
                    id: 5,
                    item: null,
                },
                {
                    id: 6,
                    item: null,
                },
                {
                    id: 7,
                    item: null,
                },
                {
                    id: 8,
                    item: null,
                },
                {
                    id: 9,
                    item: null,
                },
                {
                    id: 10,
                    item: null,
                },
                {
                    id: 11,
                    item: null,
                },
                {
                    id: 12,
                    item: null,
                },
                {
                    id: 13,
                    item: null,
                },
                {
                    id: 14,
                    item: null,
                },
                {
                    id: 15,
                    item: null,
                },
                {
                    id: 16,
                    item: null,
                },
                {
                    id: 17,
                    item: null,
                },
                {
                    id: 18,
                    item: null,
                },
                {
                    id: 19,
                    item: null,
                },
                {
                    id: 20,
                    item: null,
                },
                {
                    id: 21,
                    item: null,
                },
                {
                    id: 22,
                    item: null,
                },
                {
                    id: 23,
                    item: null,
                },
                {
                    id: 24,
                    item: null,
                },
                {
                    id: 25,
                    item: null,
                },
            ]
        },

        PrimarySecondaryInventory: {
            maxWeight: 150,
            Weight: 1,
            inventoryName: 'glovebox-NE14ABJ',
            inventoryLabel: 'Glovebox',
            slots: [
                {},
                {},
                {},
                {},
                {},
                {},
                {},
            ]
        },

        Drops: [
            {
                id: 1,
                item: null,
            },
            {
                id: 2,
                item: null,
            },
            {
                id: 3,
                item: null,
            },
            {
                id: 4,
                item: null,
            },
            {
                id: 5,
                item: null,
            },
            {
                id: 6,
                item: null,
            },
            {
                id: 7,
                item: null,
            },
            {
                id: 8,
                item: null,
            },
            {
                id: 9,
                item: null,
            },
            {
                id: 10,
                item: null,
            },
            {
                id: 11,
                item: null,
            },
            {
                id: 12,
                item: null,
            },
            {
                id: 13,
                item: null,
            },
            {
                id: 14,
                item: null,
            },
            {
                id: 15,
                item: null,
            },
            {
                id: 16,
                item: null,
            },
            {
                id: 17,
                item: null,
            },
            {
                id: 18,
                item: null,
            },
            {
                id: 19,
                item: null,
            },
            {
                id: 20,
                item: null,
            },
            {
                id: 21,
                item: null,
            },
            {
                id: 22,
                item: null,
            },
            {
                id: 23,
                item: null,
            },
            {
                id: 24,
                item: null,
            },
            {
                id: 25,
                item: null,
            },
            {
                id: 26,
                item: null,
            },
            {
                id: 27,
                item: null,
            },
            {
                id: 28,
                item: null,
            },
            {
                id: 29,
                item: null,
            },
            {
                id: 30,
                item: null,
            },
            {
                id: 31,
                item: null,
            },
            {
                id: 32,
                item: null,
            },
            {
                id: 33,
                item: null,
            },
            {
                id: 34,
                item: null,
            },
            {
                id: 35,
                item: null,
            },
            {
                id: 36,
                item: null,
            },
            {
                id: 37,
                item: null,
            },
            {
                id: 38,
                item: null,
            },
            {
                id: 39,
                item: null,
            },
            {
                id: 40,
                item: null,
            },
            {
                id: 41,
                item: null,
            },
            {
                id: 42,
                item: null,
            },
            {
                id: 43,
                item: null,
            },
            {
                id: 44,
                item: null,
            },
            {
                id: 45,
                item: null,
            },
            {
                id: 46,
                item: null,
            },
            {
                id: 47,
                item: null,
            },
            {
                id: 48,
                item: null,
            },
            {
                id: 49,
                item: null,
            },
            {
                id: 50,
                item: null,
            },
        ],

        AdditionalInventories: [
            {
                id: 'body-15',
                name: 'Robbed Player',
                maxWeight: 5,
                InventoryOpened: true,
                inventoryName: 'body-25',
                slots: [
                    {
                        id: 1,
                        item: {
                            itemId: 'water',
                            durability: 1,
                        },
                    },
                    {
                        id: 1,
                        item: {
                            itemId: 'water',
                            durability: 50,
                        },
                    }
                ]
            },
            {
                id: '2',
                name: 'Mobile Phone',
                maxWeight: 5,
                InventoryOpened: false,
                inventoryName: 'phone-1',
                slots: [
                    {
                        id: 1,
                        item: {
                            itemId: 'simcard',
                        },
                    }
                ]
            },
        ]
    })

    return (
        <InventoryContext.Provider
            value={{
                showingHelpMenu,
                setShowingHelpMenu,
                showingSettingsMenu,
                setShowingSettingsMenu,
                Inventory,
                setInventory,
                hoveringWound,
                setHoveringWound,
                PlayerState,
                setPlayerState,
                show,
                setShow,
                displayActionbar,
                setDisplayActionBar,
                hoveringItem,
                setHoveringItem,
                splittingItem,
                setSplittingItem,
                itemList,
                setItemList,
                Notifications,
                SetNotfications,
                draggingItem,
                setDraggingItem,
                activeInventory,
                setActiveInventory,
                activeSlot,
                setActiveSlot,
                movingSplitItem,
                setMovingSplitItem,
                actionbarItems,
                setActionbarItems,
                woundPosition,
                setWoundPosition,
                searchedItem,
                setSearchedItem
            }}

            children={props.children}
        />
    )
}

export function getInventoryContext(): any {
    return useContext(InventoryContext)
}