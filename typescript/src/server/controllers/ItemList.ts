async function createImage(Item: any) {
    return `https://whitewingz2017.github.io/rprpmap/dev/images/inventory/icon/${Item}.png`
}

export const ItemList = {
    '2578778090': {
        name: 'Knife',
        description: 'Big man ting lets go on glide and shank them possios',
        decayrate: 0.0,
        stackable: false,
        image: createImage('knife'),
        weight: 7.0,
        weapon: true,
        context: {
            useItem: true,
        }
    },
    'phone': {
        name: 'Mobile Phone',
        description: 'Just a phone',
        decayrate: 0.2,
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
        decayrate: 0.0,
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
        decayrate: 0.4,
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
        decayrate: 0.0,
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
        decayrate: 0.01,
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
        decayrate: 0.0,
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
        decayrate: 0.01,
        stackable: true,
        image: createImage('hotdog'),
        weight: 0.1,
        context: {
            useItem: true,
        }
    },
    'simcard': {
        name: 'Sim Card',
        description: 'A Sim Card for a Mobile Device',
        decayrate: 0.0,
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
        decayrate: 0.0,
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
        decayrate: 0.01,
        stackable: true,
        image: createImage('sandwich'),
        weight: 0.2,
        context: {
            useItem: true,
        }
    },
    'computer': {
        name: 'Computer',
        description: 'Use to hacking and crypto.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('pc'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'notebook': {
        name: 'Notebook',
        description: 'Diary?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('notebook'),
        weight: 3.0,
        context: {
            useItem: true,
        }
    },
    //aids
    'bandage': {
        name: 'Bandage',
        description: 'Bandage?',
        decayrate: 0.0,
        stackable: true,
        image: createImage('bandage_1'),
        weight: 3.0,
        context: {
            useItem: true,
        }
    },
    'bandage2': {
        name: 'Bandage',
        description: 'Bandage?',
        decayrate: 0.0,
        stackable: true,
        image: createImage('bandage_2'),
        weight: 3.0,
        context: {
            useItem: true,
        }
    },
    'bandage3': {
        name: 'Bandage',
        description: 'Bandage?',
        decayrate: 0.0,
        stackable: true,
        image: createImage('bandage_3'),
        weight: 3.0,
        context: {
            useItem: true,
        }
    },
    'bandage4': {
        name: 'Bandage',
        description: 'Bandage?',
        decayrate: 0.0,
        stackable: true,
        image: createImage('bandage_4'),
        weight: 3.0,
        context: {
            useItem: true,
        }
    },
    //accessories
    'barrel': {
        name: 'Barrel',
        description: 'Storage?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('barrel'),
        weight: 3.0,
        context: {
            useItem: true,
        }
    },

    //Custom Weapon
    '728397530': {
        name: 'Flamethrower',
        description: '',
        decayrate: 0.0,
        stackable: true,
        image: createImage('np_flamethrower'),
        weight: 35.0,
        weapon: true,
        context: {
            useItem: true,
        }
    },
    'flamethrowerammo': {
        name: 'Flamethrower Canister',
        description: '',
        decayrate: 0.0,
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
        decayrate: 0.0,
        stackable: true,
        image: createImage('np_flamethrower_part1'),
        weight: 5.0,
        weapon: false,
        context: {}
    },
    'flamethrowerpart2': {
        name: 'Flamethrower Part',
        description: '',
        decayrate: 0.0,
        stackable: true,
        image: createImage('np_flamethrower_part2'),
        weight: 5.0,
        weapon: false,
        context: {}
    },
    'flamethrowerpart3': {
        name: 'Flamethrower Part',
        description: '',
        decayrate: 0.0,
        stackable: true,
        image: createImage('np_flamethrower_part3'),
        weight: 5.0,
        weapon: false,
        context: {}
    },
    'flamethrowerpart4': {
        name: 'Flamethrower Part',
        description: '',
        decayrate: 0.0,
        stackable: true,
        image: createImage('np_flamethrower_part4'),
        weight: 5.0,
        weapon: false,
        context: {}
    },
    'flamethrowerpart5': {
        name: 'Flamethrower Part',
        description: '',
        decayrate: 0.0,
        stackable: true,
        image: createImage('np_flamethrower_part5'),
        weight: 5.0,
        weapon: false,
        context: {}
    },
    'flamethrowerpart6': {
        name: 'Flamethrower Part',
        description: '',
        decayrate: 0.0,
        stackable: true,
        image: createImage('np_flamethrower_part6'),
        weight: 5.0,
        weapon: false,
        context: {}
    },
    // Paintball Gun
    '-2009644972': {
        name: 'Paintball Gun',
        description: '',
        decayrate: 0.0,
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
        decayrate: 0.0,
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
        decayrate: 0.0,
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
        decayrate: 0.0,
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
        decayrate: 0.0,
        stackable: true,
        image: createImage('np_brick'),
        weight: 5.0,
        weapon: true,
        context: {
            useItem: true,
        }
    },
    '-828058162': {
        displayname: 'Stolen Shoes',
        information: 'These are not yours, bro.',
        decayrate: 0.0,
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
        displayname: 'Rubber Slug Shotgun',
        information: 'PD and DOC Issued LTL Weapon',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_lessthanlethal'),
        weight: 25.0,
        weapon: true,
        context: {
            useItem: true,
        }
    },
    'rubberslugpd': {
        displayname: 'Rubber Slug Shotgun (Short Life)',
        information: 'PD and DOC Issued LTL Weapon',
        decayrate: 0.0,
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
        displayname: 'Prison Shiv',
        information: '',
        decayrate: 0.0,
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
        displayname: 'Browning Hi-Power',
        information: '',
        decayrate: 0.0,
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
        displayname: 'Diamondback DB9',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_DB9'),
        weight: 25.0,
        weapon: true,
        context: {
            useItem: true,
        }
    },
    '-1746263880': {
        displayname: 'Colt Python',
        information: '',
        decayrate: 0.0,
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
        displayname: 'Colt 1911',
        information: '',
        decayrate: 0.0,
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
        displayname: 'FN Five-Seven',
        information: '',
        decayrate: 0.0,
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
        displayname: 'FN FNX-45',
        information: '',
        decayrate: 0.0,
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
        displayname: 'Entreprise Wide Body 1911a',
        information: '',
        decayrate: 0.0,
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
        displayname: 'Government (PD/EMS/DOC) Issued Equipment',
        information: '',
        decayrate: 0.0,
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
        Serial: Unknown  Issuer: Unknown   Attachments:`,
        decayrate: 0.0,
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
        displayname: 'Desert Eagle',
        information: '',
        decayrate: 0.0,
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
        displayname: 'Mac-10',
        information: '',
        decayrate: 0.0,
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
        displayname: 'Glock 18C',
        information: '',
        decayrate: 0.0,
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
        displayname: 'MP7',
        information: 'Government (PD/EMS/DOC) Issued Equipment',
        decayrate: 0.0,
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
        displayname: 'Uzi',
        information: '',
        decayrate: 0.0,
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
        displayname: 'MP5',
        information: '',
        decayrate: 0.0,
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
        displayname: 'HK416',
        information: 'SWAT',
        decayrate: 0.0,
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
        displayname: 'M4',
        information: 'Government (PD/EMS/DOC) Issued Equipment',
        decayrate: 0.0,
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
        displayname: 'FN SCAR-L',
        information: 'Government (PD/EMS/DOC) Issued Equipment',
        decayrate: 0.0,
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
        displayname: 'Mk14',
        information: 'Government (PD/EMS/DOC) Issued Equipment',
        decayrate: 0.0,
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
        displayname: 'AWM',
        information: '',
        decayrate: 0.0,
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
        displayname: 'AK 74',
        information: '',
        decayrate: 0.0,
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
        displayname: 'M70',
        information: '',
        decayrate: 0.0,
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
        displayname: 'Sawn-off Shotgun',
        information: '',
        decayrate: 0.0,
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
        displayname: 'IZh-81',
        information: '',
        decayrate: 0.0,
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
        displayname: 'Remington 870',
        information: '',
        decayrate: 0.0,
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
        displayname: 'SIG MPX',
        information: 'Government (PD/EMS/DOC) Issued Equipment',
        decayrate: 0.0,
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
        displayname: 'Draco NAK9',
        information: '',
        decayrate: 0.0,
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
        displayname: 'Gepard',
        information: '',
        decayrate: 0.0,
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
        displayname: 'Skorpion',
        information: '',
        decayrate: 0.0,
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
        displayname: 'Stun Grenade (SWAT)',
        information: 'So police can breach a building without feeling like a ______! If you are not SWAT certified do not buy this.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_stungrenade'),
        weight: 5.0,
        weapon: true,
        context: {
            useItem: true,
        }
    },
    '1233104067': {
        displayname: 'Flare',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_flare'),
        weight: 5.0,
        weapon: true,
        context: {
            useItem: true,
        }
    },
    '-1600701090': {
        displayname: 'M67 grenade',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_grenade'),
        weight: 5.0,
        weapon: true,
        context: {
            useItem: true,
        }
    },
    '-37975472': {
        displayname: 'Smoke Grenade',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_stungrenade'),
        weight: 5.0,
        weapon: true,
        context: {
            useItem: true,
        }
    },
    'smokegrenadeswat': {
        displayname: 'Smoke Grenade (SWAT)',
        information: 'Mil-Spec. High price, low quality. If you are not SWAT certified do not buy this.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_stungrenade'),
        weight: 25.0,
        weapon: true,
        context: {
            useItem: true,
        }
    },
    'smokegrenadenpa': {
        displayname: 'Smoke Grenade',
        information: 'NPA Edition.',
        decayrate: 0.0,
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
        displayname: 'Pipebomb',
        information: '',
        decayrate: 0.0,
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
        displayname: 'Molly',
        information: '',
        decayrate: 0.0,
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
        displayname: 'Sticky Bomb',
        information: '',
        decayrate: 0.0,
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
        displayname: 'Nail gun',
        information: '',
        decayrate: 0.0,
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
        displayname: 'Parachute',
        information: '',
        decayrate: 0.0,
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
        displayname: 'Fire Ext',
        information: '',
        decayrate: 0.0,
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
        displayname: 'Petrol Can',
        information: '',
        decayrate: 0.0,
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
        displayname: 'Sledge Hammer',
        information: 'Big and girthy.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_sledgehammer'),
        weight: 25.0,
        weapon: true,
        context: {
            useItem: true,
        }
    },
    '419712736': {
        displayname: 'Pipe Wrench',
        information: 'I\'m here to fix your pipes.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_wrench'),
        weight: 25.0,
        weapon: true,
        context: {
            useItem: true,
        }
    },
    '-102323637': {
        displayname: 'Old broken bottle',
        information: 'Looks like a green, premium, Karlsberg bottle.',
        decayrate: 0.0,
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
        displayname: 'Knuckle',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_knuckle-dusters'),
        weight: 2.0,
        weapon: true,
        context: {
            useItem: true,
        }
    },
    'knuckle_chain': {
        displayname: 'Chain Dusters',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_chain_dusters'),
        weight: 2.0,
        weapon: true,
        context: {
            useItem: true,
        }
    },
    '1317494643': {
        displayname: 'Hammer',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_hammer'),
        weight: 8.0,
        weapon: true,
        context: {
            useItem: true,
        }
    },
    '1737195953': {
        displayname: 'Nightstick',
        information: 'Government (PD/EMS/DOC) Issued Equipment',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_nightstick'),
        weight: 4.0,
        weapon: true,
        context: {
            useItem: true,
        }
    },
    '2227010557': {
        displayname: 'Crowbar',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_crowbar'),
        weight: 15.0,
        weapon: true,
        context: {
            useItem: true,
        }
    },
    '-1786099057': {
        displayname: 'Model M Keyboard',
        information: '',
        decayrate: 0.0,
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
        displayname: 'Katana',
        information: 'When you were partying, I studied the blade.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_katana'),
        weight: 7.0,
        weapon: true,
        context: {
            useItem: true,
        }
    },
    'cursedkatanaweapon': {
        displayname: 'Cursed Katana',
        information: 'Infused with the blood of a Dragon; a normal human mind cannot control such power.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cursed-katana'),
        weight: 7.0,
        weapon: true,
        context: {
            useItem: true,
        }
    },
    '-538741184': {
        displayname: 'Shank',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_switchblade'),
        weight: 3.0,
        weapon: true,
        context: {
            useItem: true,
        }
    },
    '2460120199': {
        displayname: 'Dagger',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_dagger'),
        weight: 5.0,
        weapon: true,
        context: {
            useItem: true,
        }
    },
    '126349499': {
        displayname: 'Snowball',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_dagger'),
        weight: 1.0,
        weapon: true,
        context: {
            useItem: true,
        }
    },
    '-1024456158': {
        displayname: 'Bat',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_baseball-bat'),
        weight: 14.0,
        weapon: true,
        context: {
            useItem: true,
        }
    },
    '-2000187721': {
        displayname: 'Secure Briefcase',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_securitycase'),
        weight: 25.0,
        weapon: true,
        context: {
            useItem: true,
        }
    },
    '28811031': {
        displayname: 'Briefcase',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_suitcase'),
        weight: 25.0,
        weapon: true,
        context: {
            useItem: true,
        }
    },
    '3713923289': {
        displayname: 'Machete',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_machete'),
        weight: 15.0,
        weapon: true,
        context: {
            useItem: true,
        }
    },
    '4191993645': {
        displayname: 'Hatchet',
        information: '',
        decayrate: 0.0,
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
        displayname: 'Sub Ammo x50',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_sub-ammo'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'heavyammo': {
        displayname: 'Heavy Ammo x50',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_rifle-ammo'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'sniperammo': {
        displayname: 'Sniper Ammo x50',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_sniper-ammo'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    // LMG ammo is not actually being used for anything and has no "use function". It's the same as Heavy Ammo.
    'lmgammo': {
        displayname: 'LMG Ammo x50',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_lmg-ammo'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'shotgunammo': {
        displayname: 'SG Ammo x50',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_shotgun-ammo'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'pistolammo': {
        displayname: 'Pistol Ammo x50',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_pistol-ammo'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'rifleammo': {
        displayname: 'Rifle Ammo x50',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_rifle-ammo'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'pistolammoPD': {
        displayname: 'Pistol Ammo x50 PD',
        information: 'Government (PD/EMS/DOC) Issued Equipment',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_pistol-ammo'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'subammoPD': {
        displayname: 'Sub Ammo x50 PD',
        information: 'Government (PD/EMS/DOC) Issued Equipment',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_sub-ammo'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'rifleammoPD': {
        displayname: 'Rifle Ammo x50 PD',
        information: 'Government (PD/EMS/DOC) Issued Equipment',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_rifle-ammo'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'shotgunammoPD': {
        displayname: 'Shotgun Ammo x50 PD',
        information: 'Government (PD/EMS/DOC) Issued Equipment',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_shotgun-ammo'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'taserammo': {
        displayname: 'Taser Cartridges',
        information: 'Government (PD/EMS/DOC) Issued Equipment',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_taserammo'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'empammo': {
        displayname: 'EMP Cartridge',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_emp_ammo'),
        weight: 20.0,
        context: {
            useItem: true,
        }
    },
    'nails': {
        displayname: 'Nails',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_nails'),
        weight: 3.0,
        context: {
            useItem: true,
        }
    },
    'paintballs': {
        displayname: 'Paintballs',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_paintball_ammo'),
        weight: 3.0,
        context: {
            useItem: true,
        }
    },
    'rubberslugs': {
        displayname: '12-Gauge Rubber Slugs',
        information: 'Government (PD/EMS/DOC) Issued Equipment',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_rubberslugs'),
        weight: 3.0,
        context: {
            useItem: true,
        }
    },
    // END WEAPONS

    // custom items with decay
    'spikes': {
        displayname: 'PD Spike Kit',
        information: 'Considered Police Equipment - (only lasts around 10 seconds)',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_spikes'),
        weight: 20.0,
        context: {
            useItem: true,
        }
    },
    'repairkit': {
        displayname: 'Repair Kit',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_basic_repair-kit'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'wheelchair': {
        displayname: 'Wheelchair',
        information: 'For broken legs n stuff',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_wheelchair'),
        weight: 50.0,
        context: {
            useItem: true,
        }
    },

    // drugs
    '1gcocaine': {
        displayname: '10g cocaine',
        information: 'Looks really high quality.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cocaine-baggy'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    '1gcrack': {
        displayname: '5g Crack',
        information: 'Crack... ',
        decayrate: 0.0,
        stackable: true,
        image: createImage('np_crack'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'cocainebrick': {
        displayname: 'Coke Brick (50g)',
        information: 'Increases your Stamina and Movement Speed <br> Breaks down into product.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cocaine-brick'),
        weight: 20.0,
        context: {
            useItem: true,
        }
    },
    'coke50g': {
        displayname: 'Air Tight Cocaine Brick (1kg)',
        information: 'Tightly sealed to prevent water from seeping in.',
        decayrate: 0.0,
        stackable: true,
        image: createImage('np_cocaine-brick'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'coke5g': {
        displayname: 'Coke Baggy (5g)',
        information: 'Increases your Stamina and Movement Speed',
        decayrate: 0.0,
        stackable: true,
        image: createImage('np_cocaine-baggy'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'joint': {
        displayname: '3g Joint',
        information: 'Its a Joint, man. ',
        decayrate: 0.0,
        stackable: true,
        image: createImage('np_joint'),
        weight: 0.5,
        context: {
            useItem: true,
        }
    },
    'maleseed': {
        displayname: 'Marijuana Seed',
        information: 'Plant this seed if you wish for more seeds!',
        decayrate: 0.0,
        stackable: true,
        image: createImage('np_weed-seed'),
        weight: 0.05,
        context: {
            useItem: true,
        }
    },
    'femaleseed': {
        displayname: 'Female Marijuana Seed',
        information: 'Surely I can just plant this, right?',
        decayrate: 0.0,
        stackable: true,
        image: createImage('np_weed-seed'),
        weight: 0.05,
        context: {
            useItem: true,
        }
    },
    'cocaleaves': {
        displayname: 'Coca Leaves',
        information: '',
        decayrate: 0.0,
        stackable: true,
        image: createImage('leaf'),
        weight: 0.01,
        context: {
            useItem: true,
        }
    },
    'weedplant': {
        displayname: 'Weed Plant',
        information: '',
        decayrate: 0.0,
        stackable: true,
        image: createImage('weedplant'),
        weight: 0.20,
        context: {
            useItem: true,
        }
    },
    'oxy': {
        displayname: 'Oxy 100mg',
        information: 'Prescribed by Betta Life Pharmacy (Prescription required)',
        decayrate: 0.0,
        stackable: true,
        image: createImage('np_Oxy'),
        weight: 0.3,
        context: {
            useItem: true,
        }
    },
    'weed12oz': {
        displayname: 'Weed 250 Oz',
        information: 'Lowers Stress <br> Breaks Down into other Product',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_box-of-weed-12-18-oz'),
        weight: 35.0,
        context: {
            useItem: true,
        }
    },
    'weed5oz': {
        displayname: 'Weed 5 Oz',
        information: 'Lowers Stress <br> Breaks Down into other Product',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_weed-brick-40-Oz'),
        weight: 8.0,
        context: {
            useItem: true,
        }
    },
    'weedoz': {
        displayname: 'Weed Oz',
        information: 'Lowers Stress',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_weed-4-Oz'),
        weight: 4.0,
        context: {
            useItem: true,
        }
    },
    'weedq': {
        displayname: 'Weed Q',
        information: 'Lowers Stress',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_weed-oz'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'driedbud': {
        displayname: 'Dried Bud (100 Grams)',
        information: 'Pack It?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('buddry2'),
        weight: 75.0,
        context: {
            useItem: true,
        }
    },
    'smallbud': {
        displayname: 'Packed Bud (20 Grams)',
        information: 'Sell It?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('buddry'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'lsdtab': {
        displayname: 'LSD Tab',
        information: 'For spectacular trips, or whatever.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_badlsdtab'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    // Fruits / Alcohol crafting
    'apple': {
        displayname: 'Apple',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_apple'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'banana': {
        displayname: 'Banana',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_banana'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'cherry': {
        displayname: 'Cherry',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cherry'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'coconut': {
        displayname: 'Coconut',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_coconut'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'grain': {
        displayname: 'Grain',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_grain'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'grapes': {
        displayname: 'Grapes',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_grapes2'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'kiwi': {
        displayname: 'Kiwi',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_kiwi'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'lemon': {
        displayname: 'Lemon',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_lemon'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'lime': {
        displayname: 'Lime',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_lime'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'orange': {
        displayname: 'Orange',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_orange'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'peach': {
        displayname: 'Peach',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_peach'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'potato': {
        displayname: 'Potato',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_potato'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'strawberry': {
        displayname: 'Strawberry',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_strawberry'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'watermelon': {
        displayname: 'Watermelon',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_watermelon'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    // HOA Mead
    'bottle_cap': {
        displayname: 'Bottle Cap',
        information: 'Bottle cap saying HOA on it.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_hoa_cap'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'mead_watermelon': {
        displayname: 'Watermelon Mead',
        information: 'The danish vikings really knew how to get hammered.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mead_watermelon'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'mead_Strawberry': {
        displayname: 'Strawberry Mead',
        information: 'The danish vikings really knew how to get hammered.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mead_strawberry'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'mead_potato': {
        displayname: 'Potato Mead',
        information: 'The danish vikings really knew how to get hammered.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mead_potato'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'mead_peach': {
        displayname: 'Peach Mead',
        information: 'The danish vikings really knew how to get hammered.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mead_peach'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'mead_orange': {
        displayname: 'Orange Mead',
        information: 'The danish vikings really knew how to get hammered.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mead_orange'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'mead_lime': {
        displayname: 'Lime Mead',
        information: 'The danish vikings really knew how to get hammered.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mead_lime'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'mead_lemon': {
        displayname: 'Lemon Mead',
        information: 'The danish vikings really knew how to get hammered.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mead_lemon'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'mead_kiwi': {
        displayname: 'Kiwi Mead',
        information: 'The danish vikings really knew how to get hammered.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mead_kiwi'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'mead_grape': {
        displayname: 'Grape Mead',
        information: 'The danish vikings really knew how to get hammered.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mead_grape'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'mead_coconut': {
        displayname: 'Coconut Mead',
        information: 'The danish vikings really knew how to get hammered.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mead_coconut'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'mead_cherry': {
        displayname: 'Cherry Mead',
        information: 'The danish vikings really knew how to get hammered.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mead_cherry'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'mead_banana': {
        displayname: 'Banana Mead',
        information: 'The danish vikings really knew how to get hammered.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mead_banana'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'mead_apple': {
        displayname: 'Apple Mead',
        information: 'The danish vikings really knew how to get hammered.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mead_apple'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    // Drinks for VU
    'drink1': {
        displayname: 'Orange Lemon',
        information: 'A perfect happy hour choice for vodka drinkers. Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_drink1'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'drink2': {
        displayname: 'Cherry Berry',
        information: ' Berry bliss. Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_drink2'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'drink3': {
        displayname: 'Banana Peach',
        information: 'Tastes just like fruity bubblegum. Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_drink3'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'drink4': {
        displayname: 'Orange Banana',
        information: 'Tastes just like fruity bubblegum. Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_drink4'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'drink5': {
        displayname: 'Cherry Kiwi',
        information: 'Fruity and refreshing. Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_drink5'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'drink6': {
        displayname: 'Berry Watermelon',
        information: 'Cool, Sweet, Colorful. Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_drink6'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'drink7': {
        displayname: 'Apple Lime',
        information: 'Curbs sweet cravings. Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_polarbear'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'drink8': {
        displayname: 'Cherry Peach',
        information: 'Perfect for cooling off on hot days. Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_rumcoke'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'drink9': {
        displayname: 'Coconut Lime',
        information: 'Blended with an island twist. Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_straightvodka'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'drink10': {
        displayname: 'White Paw',
        information: 'Enjoy on your porch admiring the stars. Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_whitepaw'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'absinthe': {
        displayname: 'Absinthe',
        information: 'The strongest you can get, 95%.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_absinthe'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'shot1': {
        displayname: 'Orange Lemon',
        information: 'Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_shot1'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'shot2': {
        displayname: 'Cherry Berry',
        information: 'Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_shot2'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'shot3': {
        displayname: 'Banana Peach',
        information: 'Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_shot3'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'shot4': {
        displayname: 'Orange Banana',
        information: 'Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_shot4'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'shot5': {
        displayname: 'Cherry Kiwi',
        information: 'Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_shot5'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'shot6': {
        displayname: 'Berry Watermelon',
        information: 'Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_shot6'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'shot7': {
        displayname: 'Orange Lemon',
        information: 'Lime Apple',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_shot7'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'shot8': {
        displayname: 'Cherry Peach',
        information: 'Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_shot8'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'shot9': {
        displayname: 'Coconut Lime',
        information: 'Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_shot1'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'shot10': {
        displayname: 'Grapes Watermelon',
        information: 'Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_shot10'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'redwine': {
        displayname: 'Red Wine',
        information: 'No crime just wine',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_red-wine-bottle'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'rum': {
        displayname: 'Rum',
        information: 'Why is it gone?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_rum'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'tequila': {
        displayname: 'Tequila',
        information: 'Tequilya brand',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_tequila'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'tequilashot': {
        displayname: 'Shot of Tequila',
        information: 'Uno mas por favor',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_tequila-shot'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'vodka': {
        displayname: 'Vodka',
        information: 'Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_vodka'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'whiskey': {
        displayname: 'Whiskey',
        information: 'Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_whiskey'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'champagne': {
        displayname: 'Champagne',
        information: 'Time to celebrate',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_champagne'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'beer': {
        displayname: 'Beer',
        information: 'Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_beer'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'pinacolada': {
        displayname: 'Pina Colada',
        information: 'And getting caught in the rain',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_pina-colada'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },

    // other drugy shit
    'aspirin': {
        displayname: 'Aspirin',
        information: 'Its an Aspirin',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_aspirin'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'cabsinthe': {
        displayname: 'Cannabis Absinthe',
        information: 'Duuude..bro...',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cannabis-absinthe'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    '420bar': {
        displayname: '420 Bar',
        information: 'Duuude..bro...',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_420-bar'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    '69box': {
        displayname: '69 Cigar Box',
        information: 'A taste of Cuba',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_69-cigar-box'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    '69pack': {
        displayname: '69 Brand Pack',
        information: 'Just one more',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_69-brand-pack'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'cgummies': {
        displayname: 'Cannabis Gummies',
        information: 'Duuude...',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cannabis-gummies'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'chloroform': {
        displayname: 'Chloroform',
        information: 'Special Cross recipe',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_chloroform'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'ibuprofen': {
        displayname: 'Ibuprofen',
        information: 'Cures all. Right?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ibuprofen'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'drugx': {
        displayname: 'Drug X',
        information: 'Now in testing by Humane Labs',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_drug-x'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'cbrownie': {
        displayname: 'Cannabis Brownie',
        information: 'Dude...',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cannabis-brownie'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },

    //food
    'bfsandwich': {
        displayname: 'Breakfast Sandwich',
        information: 'Rise and shine',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_breakfast-sandwich'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'cbfowl': {
        displayname: 'Fowl Burger',
        information: 'If you enjoyed it, the chicken didnt die in vain! 900Cal',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fowl-burger'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'cbfries': {
        displayname: 'Cluckin Fries',
        information: 'Cluckinsize included. 680Cal',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cluckin-fries'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'cookie': {
        displayname: 'Cookie',
        information: 'Baked with love',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cookie'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'tobacco': {
        displayname: 'Tobacco',
        information: 'Used for ciggies',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_tobacco'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'gause': {
        displayname: 'Gause',
        information: 'Used for making bandages',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_gause'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'pizza': {
        displayname: 'Pizza Slice',
        information: 'Check for pineapple',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_pizza-slice'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'chips': {
        displayname: 'Chips',
        information: 'Phat Chips yeeeaaah. Thickens blood.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_chips'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'chocobar': {
        displayname: 'Chips',
        information: 'Phat Chips yeeeaaah. Thickens blood.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_chips'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'torta': {
        displayname: 'Torta',
        information: 'El mejor jamon',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_torta'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'coffee': {
        displayname: 'Cheap Coffee',
        information: 'Tastes like dirt, but has the caffeine you need',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_coffee'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'burrito': {
        displayname: 'Burrito',
        information: 'Burrito',
        decayrate: 0.01,
        stackable: true,
        image: createImage('np_burrito'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'donut': {
        displayname: 'Donut',
        information: 'Fill the hole',
        decayrate: 0.01,
        stackable: true,
        image: createImage('donut'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'foodingredient': {
        displayname: 'Ingredients',
        information: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.01,
        stackable: true,
        image: createImage('np_ingredients'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'greencow': {
        displayname: 'Green Cow',
        information: 'Slightly Increases Stamina and Speed',
        decayrate: 0.01,
        stackable: true,
        image: createImage('np_green-cow'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'icecream': {
        displayname: 'Ice Cream',
        information: 'Made from real human titty milk. Prevents stress from being gained or relieved.',
        decayrate: 0.01,
        stackable: true,
        image: createImage('np_icecream'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'jailfood': {
        displayname: 'Jail Food',
        information: "Looks as bad as the Sheriff's aim.",
        decayrate: 0.01,
        stackable: true,
        image: createImage('np_jailfood'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'jaildrink': {
        displayname: 'Jail Drink',
        information: "Looks as bad as the Chief of Police's aim.",
        decayrate: 0.01,
        stackable: true,
        image: createImage('np_jaildrink'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'hamburger': {
        displayname: 'Hamburger',
        information: "Sates Hunger",
        decayrate: 0.01,
        stackable: true,
        image: createImage('np_hamburger'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },

    //Materials
    'aluminium': {
        displayname: 'Aluminium',
        information: "",
        decayrate: 0.7,
        stackable: true,
        image: createImage('np_aluminum'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'plastic': {
        displayname: 'Plastic',
        information: "",
        decayrate: 0.7,
        stackable: true,
        image: createImage('np_plastic'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'copper': {
        displayname: 'Copper',
        information: "",
        decayrate: 0.7,
        stackable: true,
        image: createImage('np_copper'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'electronics': {
        displayname: 'Electronics',
        information: "",
        decayrate: 0.7,
        stackable: true,
        image: createImage('np_electronics'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'rubber': {
        displayname: 'Rubber',
        information: "",
        decayrate: 0.7,
        stackable: true,
        image: createImage('np_rubber'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'scrapmetal': {
        displayname: 'Scrap Metal',
        information: "",
        decayrate: 0.7,
        stackable: true,
        image: createImage('np_scrap-metal'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'steel': {
        displayname: 'Steel',
        information: "",
        decayrate: 0.7,
        stackable: true,
        image: createImage('np_steel'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'glass': {
        displayname: 'Glass',
        information: "",
        decayrate: 0.7,
        stackable: true,
        image: createImage('np_glass'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'pdpanicbutton': {
        displayname: 'Panic Button',
        information: 'Alert Police?',
        decayrate: 0.2,
        stackable: false,
        image: createImage('qb_panicbutton'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'lockpickbp': {
        displayname: 'Lockpick Blueprint',
        information: "",
        decayrate: 0.5,
        stackable: true,
        image: createImage('np_bp-lockpick'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'advlockpickbp': {
        displayname: 'Advanced Lockpick Blueprint',
        information: "",
        decayrate: 0.6,
        stackable: true,
        image: createImage('np_bp-advlockpick'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'lockpick': {
        displayname: 'Lockpick Set',
        information: 'Unlocks things, if you have the skill!',
        decayrate: 0.5,
        stackable: true,
        image: createImage('np_lockpick1'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'advlockpick': {
        displayname: 'Adv Lock Pick',
        information: 'Unlocks things, if you have the skill!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_advanced-lockpick'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'hackingdevice': {
        displayname: 'Security System Hacking Device',
        information: 'Marked for Police Seizure',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_hacking_device'),
        weight: 3.0,
        context: {
            useItem: true,
        }
    },
    'armor': {
        displayname: 'Chest Armor',
        information: 'Protects you from bleeding and stumbling on injuries',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_chest-armor'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'pdarmor': {
        displayname: '(PD) Chest Armor',
        information: 'Government (PD/EMS/DOC) Issued Equipment',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_chest-armor'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'aluminiumoxide': {
        displayname: 'Aluminium Oxide',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_aluminum-oxide'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'advrepairkit': {
        displayname: 'Adv Repair Kit',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_repair-toolkit'),
        weight: 8.0,
        context: {
            useItem: true,
        }
    },
    'tirerepairkit': {
        displayname: 'For swapping damaged tires.',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_tire_repair-kit'),
        weight: 8.0,
        context: {
            useItem: true,
        }
    },
    'carbattery': {
        displayname: 'Car Battery',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_car-battery'),
        weight: 8.0,
        context: {
            useItem: true,
        }
    },
    'carhood': {
        displayname: 'Car Hood',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_car-hood'),
        weight: 8.0,
        context: {
            useItem: true,
        }
    },
    'cashstack': {
        displayname: 'Stack of Cash',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cash-stack'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'band': {
        displayname: 'Band of Notes',
        information: 'Lots of low denominators - Indicates drug sales.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cash-stack'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'rollcash': {
        displayname: 'Dirty Money',
        information: 'I need to find a way to clean this money.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cash-roll'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'battery': {
        displayname: 'Battery',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_battery'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'binoculars': {
        displayname: 'Binoculars',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_binoculars'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'blindfold': {
        displayname: 'Blindfold',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_blindfold'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'bloodbag': {
        displayname: 'Blood Bag',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_blood-bag'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'bloodvial': {
        displayname: 'Blood Vial',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_blood-tube'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'Boombox': {
        displayname: 'Boombox',
        information: 'Its a prop, wow?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_boombox'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'Box': {
        displayname: 'Box',
        information: 'Its a prop, wow?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_box'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'breadboard': {
        displayname: 'Breadboard',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_breadboard'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'camera': {
        displayname: 'Nikea X1000',
        information: 'Works 100% of the time 60% of the time.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_camera'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'casing': {
        displayname: 'Bullet Casing',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_pistol-ammo'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'certificate': {
        displayname: 'Certificate',
        information: 'You made it!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_certificate'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'cgpapers': {
        displayname: 'CG Papers',
        information: 'Wata woozers',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cg-papers'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'chestxray': {
        displayname: 'Chest X-Ray',
        information: 'Argh...',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_chest-xray'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'cigar': {
        displayname: 'Cigar',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cigar'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'ciggy': {
        displayname: 'Cigarette',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cigarette'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'ciggypack': {
        displayname: 'Cigarettes',
        information: 'A packet of smokes, they smell and taste like shit, but they relieve stress, the stress created by the addiction sure, but they relieve stress.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ciggypack'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'ckatana': {
        displayname: 'Sheathed Cursed Katana',
        information: 'A normal human mind cannot control such power.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cursed-katana'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'cpelt': {
        displayname: 'Cougar Pelt',
        information: 'The hunter becomes the hunted',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cougar-pelt'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'cuffs': {
        displayname: 'Hand Cuffs',
        information: 'Marked for Police Seizure',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_hand-cuffs'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'dhide': {
        displayname: 'Deer Hide',
        information: 'Call peta',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_deer-hide'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'drill': {
        displayname: 'Drill',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('drill'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'drillbit': {
        displayname: 'Drill Bit',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_drill-bit'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'DuffelBag': {
        displayname: 'Black Duffel Bag',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_duffel'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'electronickit': {
        displayname: 'Electronic Kit',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_electronic-kit'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'evidence': {
        displayname: 'Evidence',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_evidence'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'np_evidence_marker_yellow': {
        displayname: 'Evidence',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_evidence_marker_yellow'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'np_evidence_marker_red': {
        displayname: 'Evidence',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_evidence_marker_red'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'np_evidence_marker_white': {
        displayname: 'Evidence',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_evidence_marker_white'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'np_evidence_marker_orange': {
        displayname: 'Evidence',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_evidence_marker_orange'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'np_evidence_marker_light_blue': {
        displayname: 'Evidence',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_evidence_marker_light_blue'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'np_evidence_marker_purple': {
        displayname: 'Evidence',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_evidence_marker_purple'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'evidencebag': {
        displayname: 'Evidence Bag',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_evidence-bag'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'pdbadge': {
        displayname: 'PD Badge',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_pd_badge'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'fakeplate': {
        displayname: 'Fake Plate Kit',
        information: 'Use on a vehicle to alter its plate or change it back - 1 time use..',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_plate'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'fbumper': {
        displayname: 'Front Bumper',
        information: 'Ill have the tuna, no crust',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_front-bumper'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'fertilizer': {
        displayname: 'Fertilizer',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fertilizer'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'fuse': {
        displayname: 'Fuse',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fuse'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'glowing': {
        displayname: 'Glowing Substance',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_glowing-substance'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'glucose': {
        displayname: '500g Glucose',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_glucose'),
        weight: 3.0,
        context: {
            useItem: true,
        }
    },
    'goldbar': {
        displayname: 'Gold Bar',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_gold-bar'),
        weight: 3.0,
        context: {
            useItem: true,
        }
    },
    'goldcoin': {
        displayname: 'Gold Coin',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_gold-coin'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'greenb': {
        displayname: 'Green Bandana',
        information: 'Ay yo my mans',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_green-bandana'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'gum': {
        displayname: 'Gum',
        information: 'Release Gum. You chew, you suck then POW',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_gum'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'hairtie': {
        displayname: 'Hair Tie',
        information: 'We all know what this is really for...',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_hairtie'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'harness': {
        displayname: 'Racing Harness',
        information: 'Stops you from being YEETED',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_harness'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'heavycutters': {
        displayname: 'Heavy Cutters',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_heavy-cutters'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'heavydutydrill': {
        displayname: 'Heavy Duty Drill',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_heavy-duty-drill'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'hlights': {
        displayname: 'Headlights',
        information: 'Cant detail a car with the cover on',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_headlights'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'IFAK': {
        displayname: 'IFAK',
        information: 'Government (PD/EMS/DOC) Issued Equipment',
        decayrate: 0.0,
        stackable: false,
        image: createImage('ifak'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'inkedmoneybag': {
        displayname: 'Inked Money Bag',
        information: 'Made with cheap ink that expires',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_inked-money-bag'),
        weight: 4.0,
        context: {
            useItem: true,
        }
    },
    'inkset': {
        displayname: 'Inked Set',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_inked-money-bag'),
        weight: 4.0,
        context: {
            useItem: true,
        }
    },
    'ironoxide': {
        displayname: 'Iron Oxide',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_iron-oxide'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'katana': {
        displayname: 'Katana',
        information: 'Steel folded over 1000 times',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_katana'),
        weight: 4.0,
        context: {
            useItem: true,
        }
    },
    'keyfob': {
        displayname: 'Key Fob',
        information: 'Used for opening doors remotely.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_keyfob'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'key1': {
        displayname: 'Key 1',
        information: 'Numbered Key',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_key1'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'key2': {
        displayname: 'Key 2',
        information: 'Numbered Key',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_key2'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'key3': {
        displayname: 'Key 3',
        information: 'Numbered Key',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_key3'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'keya': {
        displayname: 'Key A',
        information: 'Lettered Key',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_keya'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'keyb': {
        displayname: 'Key B',
        information: 'Lettered Key',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_keyb'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'keyc': {
        displayname: 'Key C',
        information: 'Lettered Key',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_keyc'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'lighter': {
        displayname: 'Lighter',
        information: 'Dont start a fire with this.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_lighter'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'locksystem': {
        displayname: 'Air Pressure Lockpick',
        information: 'Used to blow out small locks - one time use.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('locksystem'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'log': {
        displayname: 'Log',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_wood'),
        weight: 3.0,
        context: {
            useItem: true,
        }
    },
    'markedbills': {
        displayname: 'Marked Bills',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_inked-money-bag'),
        weight: 3.0,
        context: {
            useItem: true,
        }
    },
    'adrenaline': {
        displayname: 'Adrenaline Syringe',
        information: 'Adrenaline, gives a good pump! If you are not SWAT certified do not buy this.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_adrenaline'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'MedicalBag': {
        displayname: 'Medical Bag',
        information: 'Its a prop, wow?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_medbag'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'headphones': {
        displayname: 'Medical Bag',
        information: 'Its a prop, wow?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_headphones'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'varusb': {
        displayname: 'VAR USB',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mkii-usb-device'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'nitrous': {
        displayname: 'Nitrous Oxide',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_nitrous-oxide'),
        weight: 3.0,
        context: {
            useItem: true,
        }
    },
    'copium': {
        displayname: 'Copium',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_nitrous-oxide'),
        weight: 3.0,
        context: {
            useItem: true,
        }
    },
    'oil': {
        displayname: 'Oil',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_oil'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'oxygentank': {
        displayname: 'Oxygen Tank',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_oxygen-tank'),
        weight: 100.0,
        context: {
            useItem: true,
        }
    },
    'pallet': {
        displayname: 'Pallet of Boxes',
        information: 'Transportable goods',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_pallet-of-boxes'),
        weight: 115.0,
        context: {
            useItem: true,
        }
    },
    'purpleb': {
        displayname: 'Purple Bandana',
        information: 'Straight outta da cul-de-sac',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_purple-bandana'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'qualityscales': {
        displayname: 'High Quality Scales',
        information: 'Weighs Baggies with no loss',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_high-quality-scales'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'rbumper': {
        displayname: 'Rear Bumper',
        information: 'You owe me a ten second car',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_rear-bumper'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'recyclablematerial': {
        displayname: 'Recyclable Material',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_recyclable-material'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'redb': {
        displayname: 'Red Bandana',
        information: 'Lean with me',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_red-bandana'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'repairtoolkit': {
        displayname: 'Repair Toolkit',
        information: 'Used by Tow Truck drivers and repair people.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_repair-toolkit'),
        weight: 20.0,
        context: {
            useItem: true,
        }
    },
    'riflebody': {
        displayname: 'Rifle Body',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_rifle-body'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'riflebodybox': {
        displayname: 'Box (10+ Rifle Bodys)',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_rifle-box'),
        weight: 85.0,
        context: {
            useItem: true,
        }
    },
    'rims': {
        displayname: 'Racing Rims',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_racing-rims'),
        weight: 15.0,
        context: {
            useItem: true,
        }
    },
    'benjiwatch': {
        displayname: 'Benjis Watch',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_benjiwatch'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'rolexwatch': {
        displayname: 'Rolex Watch (p)',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_rolex-watchatch'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'rollingpaper': {
        displayname: 'Rolling Paper',
        information: 'Required to roll joints!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_rolling-paper'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'scanner': {
        displayname: 'Radio Scanner',
        information: 'Used to receive random radio chatter.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_radio-scanner'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'scissors': {
        displayname: 'Scissors',
        information: 'Fuck me up fam',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_scissors'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'sealedbucket': {
        displayname: 'Fisher Bucket',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_sealed-bucket'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'sealedevidencebag': {
        displayname: 'Sealed Evidence Bag',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_sealed-evidence-bag'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'seat': {
        displayname: 'Seat',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_seat'),
        weight: 8.0,
        context: {
            useItem: true,
        }
    },
    'secretfile': {
        displayname: 'Secret File',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_secret-file'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'SecurityCase': {
        displayname: 'Security Case',
        information: 'Its a prop, wow?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_securitycase'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'shipbox': {
        displayname: 'Shipping Box',
        information: 'Free 2day shipping',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_shipping-box'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'shipcrate': {
        displayname: 'Shipping Crate',
        information: 'This side up',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_shipping-crate'),
        weight: 30.0,
        context: {
            useItem: true,
        }
    },
    'silvercoin': {
        displayname: 'Silver Coin',
        information: 'Dont lose it',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_silver-coin'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'slushy': {
        displayname: 'The best slushy ever.',
        information: 'The only thing in Jail that tastes good.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_slushy'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'smallscales': {
        displayname: 'Small Scales',
        information: 'Weighs Baggies with minimal loss',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_small-scale'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'smirror': { //car part
        displayname: 'Side Mirror',
        information: "On green, I'm going for it",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_side-mirror'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'sound': { //car part
        displayname: 'Sound System',
        information: "Makes your ears bleed",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_sound-system'),
        weight: 6.0,
        context: {
            useItem: true,
        }
    },
    'spoiler': { //car part
        displayname: 'Spoiler',
        information: "Quarter mile at a time",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_spoiler'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'sskirts': { //car part
        displayname: 'Side Skirts',
        information: "Ride or die, remember?",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_side-skirts'),
        weight: 4.0,
        context: {
            useItem: true,
        }
    },
    'swheel': { //car part
        displayname: 'Steering Wheel',
        information: "Winning is winning...",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_steering-wheel'),
        weight: 4.0,
        context: {
            useItem: true,
        }
    },
    'sprunk': {
        displayname: 'Sprunk',
        information: "The Essence of Life",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_sprunk'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'stolen10ctchain': {
        displayname: '10ct Gold Chain (p)',
        information: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_10ct-gold-chain'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'stolen2ctchain': {
        displayname: '2ct Gold Chain (p)',
        information: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_2ct-gold-chain'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'stolen5ctchain': {
        displayname: '5ct Gold Chain (p)',
        information: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_5ct-gold-chain'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'stolen8ctchain': {
        displayname: '8ct Gold Chain (p)',
        information: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_8ct-gold-chain'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'stolencasiowatch': {
        displayname: 'Casio Watch (p)',
        information: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_casio-watch'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'stolengameboy': {
        displayname: 'Gameboy (p)',
        information: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_gameboy'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'stoleniphone': {
        displayname: 'Apple Iphone (p)',
        information: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_apple-iphone'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'stolennokia': {
        displayname: 'Nokia Phone (p)',
        information: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_nokia-phone'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'stolenoakleys': {
        displayname: 'Oakley Sunglasses (p)',
        information: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_oakley-sunglasses'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'stolenpsp': {
        displayname: 'PSP (p)',
        information: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_psp'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'stolenraybans': {
        displayname: 'Ray Ban Sunglasses (p)',
        information: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_raybans'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'stolens8': {
        displayname: 'Samsung S8 (p)',
        information: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_samsung-s8'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'stolentv': {
        displayname: 'Flat Panel TV (p)',
        information: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_stolentv'),
        weight: 50.0,
        context: {
            useItem: true,
        }
    },
    'stolenmusic': {
        displayname: 'Music Equipment (p)',
        information: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_stolenmusic'),
        weight: 50.0,
        context: {
            useItem: true,
        }
    },
    'stolencomputer': {
        displayname: 'Computer Equipment (p)',
        information: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_stolencomputer'),
        weight: 50.0,
        context: {
            useItem: true,
        }
    },
    'stolenart': {
        displayname: 'Art (p)',
        information: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_stolenart'),
        weight: 30.0,
        context: {
            useItem: true,
        }
    },
    'Suitcase': {
        displayname: 'Suitcase',
        information: 'Its a prop, wow?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_suitcase'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'tbag': {
        displayname: 'Transport Bag',
        information: 'Keeping your organs fresh',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_transport-bag'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'thermite': {
        displayname: 'Thermite',
        information: '',
        decayrate: 0.0,
        stackable: true,
        image: createImage('np_thermite_charge'),
        weight: 4.0,
        context: {
            useItem: true,
        }
    },
    'thermitecharge': {
        displayname: 'Thermite Charger',
        information: '',
        decayrate: 0.0,
        stackable: true,
        image: createImage('np_thermite_charge'),
        weight: 4.0,
        context: {
            useItem: true,
        }
    },
    'Toolbox': {
        displayname: 'Toolbox',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_toolbox'),
        weight: 4.0,
        context: {
            useItem: true,
        }
    },
    'umbrella': {
        displayname: 'Umbrella',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_umbrella'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'vpnxj': {
        displayname: 'VPN',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_vpn-xj'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'watch': {
        displayname: 'PD Watch & Compass',
        information: 'Government (PD/EMS/DOC) Issued Equipment',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_watch'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'yellowb': {
        displayname: 'Yellow Bandana',
        information: 'Im tellin you',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_yellow-bandana'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'Bankbox': {
        displayname: 'Bank Box',
        information: 'A locked bank box.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_bankbox'),
        weight: 15.0,
        context: {
            useItem: true,
        }
    },
    'Bankboxkey': {
        displayname: 'Briefcase Key',
        information: 'A key that seems to fit somewhere.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_bankboxkey'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'Largesupplycrate': {
        displayname: 'Large Supply crate',
        information: 'A very big and heavy crate.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_supplycrate_large'),
        weight: 150.0,
        context: {
            useItem: true,
        }
    },
    'Mediumsupplycrate': {
        displayname: 'Medium Supply crate',
        information: 'A semi-heavy crate containing something.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_supplycrate_medium'),
        weight: 100.0,
        context: {
            useItem: true,
        }
    },
    'Smallsupplycrate': {
        displayname: 'Small Arms Crate',
        information: 'A small unmarked crate.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_smallarmscrate'),
        weight: 50.0,
        context: {
            useItem: true,
        }
    },
    // Start Of Fishing Items
    'illegalhook': {
        displayname: 'Illegal Hook',
        information: 'Hmm maybe fish will like this more?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_illegal_hook'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'fishingrod': {
        displayname: 'Fishing Rod',
        information: 'Lets fish',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishing-rod'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'fishingbass': {
        displayname: 'Bass',
        information: 'Striped Bass. Bass like the fish, not the officer',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishing-bass'),
        weight: 8.0,
        context: {
            useItem: true,
        }
    },
    'fishingcarp': {
        displayname: 'Carp',
        information: 'Carp. Carpe diem!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishing-carp'),
        weight: 8.0,
        context: {
            useItem: true,
        }
    },
    'fishingcatfish': {
        displayname: 'Catfish',
        information: 'Catfish. Did you just get done catfish noodlin?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishing-cat'),
        weight: 8.0,
        context: {
            useItem: true,
        }
    },
    'fishingyellowperch': {
        displayname: 'Yellow Perch',
        information: 'Yellow Perch. Did they tell you not to perch or not to poach?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishing-yellowperch'),
        weight: 8.0,
        context: {
            useItem: true,
        }
    },
    'fishingalligatorturtle': {
        displayname: 'Alligator Snapping Turtle',
        information: 'Alligator Snapping Turtle. This thing could snap your fingers off like twigs.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishing-alligator-snapping-turtle'),
        weight: 45.0,
        context: {
            useItem: true,
        }
    },
    'fishingsockeyesalmon': {
        displayname: 'Sockeye Salmon',
        information: 'Sockeye Salmon. It looks like you caught this one before it could reach its spawning grounds...',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishing-sockeye-salmon'),
        weight: 8.0,
        context: {
            useItem: true,
        }
    },
    'fishingsturgeon': {
        displayname: 'Sturgeon',
        information: 'Green Sturgeon. It looks prehistoric and rare. Maybe it has caviar? ',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishing-sturgeon'),
        weight: 45.0,
        context: {
            useItem: true,
        }
    },
    'fishingbluefish': {
        displayname: 'Bluegill',
        information: 'Bluegill. Catching this took no skill.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishing-bluefish'),
        weight: 8.0,
        context: {
            useItem: true,
        }
    },
    'fishingflounder': {
        displayname: 'Flounder',
        information: 'I went fishing and all I got was this lousy flounder',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishing-flounder'),
        weight: 8.0,
        context: {
            useItem: true,
        }
    },
    'fishingmackerel': {
        displayname: 'Mackerel',
        information: 'Sometimes holy',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishing-mackerel'),
        weight: 8.0,
        context: {
            useItem: true,
        }
    },
    'fishingcod': {
        displayname: 'Cod',
        information: 'Modern Warfare',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishing-cod'),
        weight: 8.0,
        context: {
            useItem: true,
        }
    },
    'fishingwhale': {
        displayname: 'Baby Whale',
        information: 'A fucking whale! Someone might be interested in buying it? Lol, jk. Throw it back. Unless..?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishing-whale'),
        weight: 55.0,
        context: {
            useItem: true,
        }
    },
    'fishingdolphin': {
        displayname: 'Baby Dolphin',
        information: 'A fucking dolphin! Someone might be interested in buying it? Lol, jk. Throw it back. Unless..?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishing-dolphin'),
        weight: 45.0,
        context: {
            useItem: true,
        }
    },
    'fishingshark': {
        displayname: 'Baby Shark',
        information: 'A fucking dolphin! Someone might be interested in buying it? Lol, jk. Throw it back. Unless..?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishing-shark'),
        weight: 45.0,
        context: {
            useItem: true,
        }
    },
    'fishingnet': {
        displayname: 'Gill Net',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishnet'),
        weight: 15.0,
        context: {
            useItem: true,
        }
    },
    // FISHING JUNK
    'fishingboot': {
        displayname: 'Boot',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishingboot'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'fishinglog': {
        displayname: 'Log',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishinglog'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'fishingtin': {
        displayname: 'Tincan',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishingtin'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'fishingtacklebox': {
        displayname: 'Tackle box',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishingtacklebox'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'fishingchest': {
        displayname: 'Treasure chest',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishingchest'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'fishinglockbox': {
        displayname: 'Lockbox',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishinglockbox'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'fishingtunac': {
        displayname: 'Tuna Chip',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_tuner'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    // FISHING END
    // HUNTING
    '3648318199': {
        displayname: 'Hunting Rifle',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_huntingrifle'),
        weight: 11.0,
        context: {
            useItem: true,
        }
    },
    'huntingammo': {
        displayname: '223 Hunting Rounds',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_223ammo'),
        weight: 7.0,
        context: {
            useItem: true,
        }
    },
    'huntingknife': {
        displayname: 'Hunting Knife',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_huntingknife'),
        weight: 7.0,
        context: {
            useItem: true,
        }
    },
    'huntingbait': {
        displayname: 'Animal Bait',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_huntingbait'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'fishingbait': {
        displayname: 'Fishing Bait',
        information: 'Wormy like you',
        decayrate: 0.0,
        stackable: false,
        image: createImage('fish_bait'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'huntingcarcass1': {
        displayname: 'Animal Pelt 1',
        information: 'What is this? Did you shoot it with an AK?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_huntingcarcass1'),
        weight: 35.0,
        context: {
            useItem: true,
        }
    },
    'huntingcarcass2': {
        displayname: 'Animal Pelt 2',
        information: 'Someone might pay a pretty penny for this',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_huntingcarcass2'),
        weight: 35.0,
        context: {
            useItem: true,
        }
    },
    'huntingcarcass3': {
        displayname: 'Animal Pelt 3',
        information: 'I am sure we can turn this in to something fancy',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_huntingcarcass3'),
        weight: 55.0,
        context: {
            useItem: true,
        }
    },
    'huntingcarcass4': {
        displayname: 'Animal Pelt 4',
        information: 'Hunting in the South Side are we?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_huntingcarcass4'),
        weight: 75.0,
        context: {
            useItem: true,
        }
    },
    'huntingpelt': {
        displayname: 'Animal Pelt',
        information: 'This used to keep an animal warm in the winter! You ANIMAL!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_huntingpelt'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'huntingmeat': {
        displayname: 'Animal Meat',
        information: 'I am sure this could turn in to a killer burger',
        decayrate: 0.0,
        stackable: false,
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
        displayname: 'Laptop',
        information: 'Practice makes perfect. Marked for police seizure.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_laptop_prac'),
        weight: 20.0,
        context: {
            useItem: true,
        }
    },
    // fleeca
    'heistlaptop3': {
        displayname: 'Laptop',
        information: 'Pre-configured to access certain systems. Marked for police seizure.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_laptop03'),
        weight: 20.0,
        context: {
            useItem: true,
        }
    },
    // paleto
    'heistlaptop2': {
        displayname: 'Laptop',
        information: 'Pre-configured to access certain systems. Marked for police seizure.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_laptop02'),
        weight: 20.0,
        context: {
            useItem: true,
        }
    },
    // vault upper
    'heistlaptop4': {
        displayname: 'Laptop',
        information: 'Pre-configured to access certain systems. Marked for police seizure.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_laptop04'),
        weight: 20.0,
        context: {
            useItem: true,
        }
    },
    // vault lower
    'heistlaptop1': {
        displayname: 'Laptop',
        information: 'Pre-configured to access certain systems. Marked for police seizure.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_laptop01'),
        weight: 20.0,
        context: {
            useItem: true,
        }
    },
    //END
    'receipt': {
        displayname: 'Receipt',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_receipt'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'emptybaggies': {
        displayname: 'Empty Baggies',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_pack_of_empty_baggies'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    //RACING
    'racingusb0': {
        displayname: 'Race Creating Dongle',
        information: 'You do not see this...',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_racing_usb_blue'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'racingusb1': {
        displayname: 'Phone Dongle',
        information: 'Marked for Police Seizure',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_racing_usb_blue'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'racingusb2': {
        displayname: 'Phone Dongle',
        information: 'Marked for Police Seizure',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_racing_usb_blue'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'racingusb3': {
        displayname: 'Phone Dongle',
        information: 'Access to SASP Time Trials App',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_racing_usb_blue'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    // RACING END
    //MECHANIC REPAIR SHOPS
    'xfixbrake': {
        displayname: 'Brake Parts (X)',
        information: 'New brake discs, pads, calipers, hubs & accessories',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_brake_parts_x'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'xfixaxle': {
        displayname: 'Axle Parts (X)',
        information: 'New axle components',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_axle_parts_x'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'xfixradiator': {
        displayname: 'Radiator Parts (X)',
        information: 'New radiator and cooling parts',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cooling_parts_x'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'xfixclutch': {
        displayname: 'Clutch Parts (X)',
        information: 'New clutch disc and pressure plate',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_clutch_parts_x'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'xfixtransmission': {
        displayname: 'Transmission Parts (X)',
        information: 'New gear sets, shafts, converters and clutch packs',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_transmission_parts_x'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'xfixelectronics': {
        displayname: 'Vehicle Electronics (X)',
        information: 'Various vehicle electrical components',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_electronic_parts_x'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'xfixinjector': {
        displayname: 'Fuel Injectors (X)',
        information: 'New fuel injectors',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fuel_injectors_x'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'vehrepairitem': {
        displayname: 'Vehicle Repair Tool',
        information: 'For swapping and repairing worn or damaged tires',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_tire_kit_x'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'xfixtire': {
        displayname: 'Tire Repair Kit (X)',
        information: 'For swapping and repairing worn or damaged tires',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_tire_kit_x'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'xfixbody': {
        displayname: 'Body Panels (X)',
        information: 'New vehicle body panels',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_body_panels_x'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'xfixengine': {
        displayname: 'Engine Parts (X)',
        information: 'New engine parts',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_engine_parts_x'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },

    //S CLASS REPAIR PARTS
    'sfixbrake': {
        displayname: 'Brake Parts (S)',
        information: 'New brake discs, pads, calipers, hubs & accessories',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_brake_parts_s'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'sfixaxle': {
        displayname: 'sAxle Parts (S)',
        information: 'New axle components',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_axle_parts_s'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'sfixradiator': {
        displayname: 'Radiator Parts (S)',
        information: 'New radiator and cooling parts',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cooling_parts_s'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'sfixclutch': {
        displayname: 'Clutch Parts (S)',
        information: 'New clutch disc and pressure plate',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_clutch_parts_s'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'sfixtransmission': {
        displayname: 'Transmission Parts (S)',
        information: 'New gear sets, shafts, converters and clutch packs',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_transmission_parts_s'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'sfixelectronics': {
        displayname: 'Vehicle Electronics (S)',
        information: 'Various vehicle electrical components',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_electronic_parts_s'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'sfixinjector': {
        displayname: 'Fuel Injectors (S)',
        information: 'New fuel injectors',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fuel_injectors_s'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'sfixtire': {
        displayname: 'Tire Repair Kit (S)',
        information: 'For swapping and repairing worn or damaged tires',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_tire_kit_s'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'sfixbody': {
        displayname: 'Body Panels (S)',
        information: 'New vehicle body panels',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_body_panels_s'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'sfixengine': {
        displayname: 'Engine Parts (S)',
        information: 'New engine parts',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_engine_parts_s'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    //A CLASS REPAIR PARTS
    'afixbrake': {
        displayname: 'Brake Parts (A)',
        information: 'New brake discs, pads, calipers, hubs & accessories',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_brake_parts_a'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'afixaxle': {
        displayname: 'Axle Parts (A)',
        information: 'New axle components',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_axle_parts_a'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'afixradiator': {
        displayname: 'Radiator Parts (A)',
        information: 'New radiator and cooling parts',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cooling_parts_a'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'afixclutch': {
        displayname: 'Clutch Parts (A)',
        information: 'New clutch disc and pressure plate',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_clutch_parts_a'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'afixtransmission': {
        displayname: 'Transmission Parts (A)',
        information: 'New gear sets, shafts, converters and clutch packs',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_clutch_parts_a'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'afixelectronics': {
        displayname: 'Vehicle Electronics (A)',
        information: 'Various vehicle electrical components',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_electronic_parts_a'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'afixinjector': {
        displayname: 'Fuel Injectors (A)',
        information: 'New fuel injectors',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fuel_injectors_a'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'afixtire': {
        displayname: 'Tire Repair Kit (A)',
        information: 'For swapping and repairing worn or damaged tires',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_tire_kit_a'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'afixbody': {
        displayname: 'Body Panels (A)',
        information: 'New vehicle body panels',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_body_panels_a'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'afixengine': {
        displayname: 'Engine Parts (A)',
        information: 'New engine parts',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_engine_parts_a'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    //B CLASS REPAIR PARTS
    'bfixbrake': {
        displayname: 'Brake Parts (B)',
        information: 'New brake discs, pads, calipers, hubs & accessories',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_brake_parts_b'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'bfixaxle': {
        displayname: 'Axle Parts (B)',
        information: 'New axle components',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_axle_parts_b'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'bfixradiator': {
        displayname: 'Radiator Parts (B)',
        information: 'New radiator and cooling parts',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cooling_parts_b'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'bfixclutch': {
        displayname: 'Clutch Parts (B)',
        information: 'New clutch disc and pressure plate',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_clutch_parts_b'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'bfixtransmission': {
        displayname: 'Transmission Parts (B)',
        information: 'New gear sets, shafts, converters and clutch packs',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_transmission_parts_b'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'bfixelectronics': {
        displayname: 'Vehicle Electronics (B)',
        information: 'Various vehicle electrical components',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_electronic_parts_b'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'bfixinjector': {
        displayname: 'Fuel Injectors (B)',
        information: 'New fuel injectors',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fuel_injectors_b'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'bfixtire': {
        displayname: 'Tire Repair Kit (B)',
        information: 'For swapping and repairing worn or damaged tires',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_tire_kit_b'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'bfixbody': {
        displayname: 'Body Panels (B)',
        information: 'New vehicle body panels',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_body_panels_b'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'bfixengine': {
        displayname: 'Engine Parts (B)',
        information: 'New brake discs, pads, calipers, hubs & accessories',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_engine_parts_b'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    //C CLASS REPAIR PARTS
    'cfixbrake': {
        displayname: 'Brake Parts (C)',
        information: 'New brake discs, pads, calipers, hubs & accessories',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_brake_parts_c'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'cfixaxle': {
        displayname: 'Axle Parts (C)',
        information: 'New axle components',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_axle_parts_c'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'cfixradiator': {
        displayname: 'Radiator Parts (C)',
        information: 'New radiator and cooling parts',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cooling_parts_c'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'cfixclutch': {
        displayname: 'Clutch Parts (C)',
        information: 'New clutch disc and pressure plate',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_clutch_parts_c'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'cfixtransmission': {
        displayname: 'Transmission Parts (C)',
        information: 'New gear sets, shafts, converters and clutch packs',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_transmission_parts_c'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'cfixelectronics': {
        displayname: 'Vehicle Electronics (C)',
        information: 'Various vehicle electrical components',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_electronic_parts_c'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'cfixinjector': {
        displayname: 'Fuel Injectors (C)',
        information: 'New fuel injectors',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fuel_injectors_c'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'cfixtire': {
        displayname: 'Tire Repair Kit (C)',
        information: 'For swapping and repairing worn or damaged tires',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_tire_kit_c'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'cfixbody': {
        displayname: 'Body Panels (C)',
        information: 'New vehicle body panels',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_body_panels_c'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'cfixengine': {
        displayname: 'Engine Parts (C)',
        information: 'New brake discs, pads, calipers, hubs & accessories',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_engine_parts_c'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    //D CLASS REPAIR PARTS
    'dfixbrake': {
        displayname: 'Brake Parts (D)',
        information: 'New brake discs, pads, calipers, hubs & accessories',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_brake_parts_d'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'dfixaxle': {
        displayname: 'Axle Parts (D)',
        information: 'New axle components',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_axle_parts_d'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'dfixradiator': {
        displayname: 'Radiator Parts (D)',
        information: 'New radiator and cooling parts',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cooling_parts_d'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'dfixclutch': {
        displayname: 'Clutch Parts (D)',
        information: 'New clutch disc and pressure plate',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_clutch_parts_d'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'dfixtransmission': {
        displayname: 'Transmission Parts (D)',
        information: 'New gear sets, shafts, converters and clutch packs',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_transmission_parts_d'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'dfixelectronics': {
        displayname: 'Vehicle Electronics (D)',
        information: 'Various vehicle electrical components',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_electronic_parts_d'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'dfixinjector': {
        displayname: 'Fuel Injectors (D)',
        information: 'New fuel injectors',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fuel_injectors_d'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'dfixtire': {
        displayname: 'Tire Repair Kit (D)',
        information: 'For swapping and repairing worn or damaged tires',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_tire_kit_d'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'dfixbody': {
        displayname: 'Body Panels (D)',
        information: 'New vehicle body panels',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_body_panels_d'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'dfixengine': {
        displayname: 'Engine Parts (D)',
        information: 'New brake discs, pads, calipers, hubs & accessories',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_engine_parts_d'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    //M CLASS REPAIR PARTS
    'mfixbrake': {
        displayname: 'Brake Parts (M)',
        information: 'New brake discs, pads, calipers, hubs & accessories',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_brake_parts_m'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'mfixaxle': {
        displayname: 'Axle Parts (M)',
        information: 'New axle components',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_axle_parts_m'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'mfixradiator': {
        displayname: 'Radiator Parts (M)',
        information: 'New radiator and cooling parts',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cooling_parts_m'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'mfixclutch': {
        displayname: 'Clutch Parts (M)',
        information: 'New clutch disc and pressure plate',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_clutch_parts_m'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'mfixtransmission': {
        displayname: 'Transmission Parts (M)',
        information: 'New gear sets, shafts, converters and clutch packs',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_transmission_parts_m'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'mfixelectronics': {
        displayname: 'Vehicle Electronics (M)',
        information: 'Various vehicle electrical components',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_electronic_parts_m'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'mfixinjector': {
        displayname: 'Fuel Injectors (M)',
        information: 'New fuel injectors',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fuel_injectors_m'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'mfixtire': {
        displayname: 'Tire Repair Kit (M)',
        information: 'For swapping and repairing worn or damaged tires',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_tire_kit_m'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'mfixbody': {
        displayname: 'Body Panels (M)',
        information: 'New vehicle body panels',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_body_panels_m'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'mfixengine': {
        displayname: 'Engine Parts (M)',
        information: 'New brake discs, pads, calipers, hubs & accessories',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_engine_parts_m'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    // Vegetables
    'lettuce': {
        displayname: 'Lettuce',
        information: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_lettuce'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'hamburgerbuns': {
        displayname: 'Hamburger Bun',
        information: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_buns'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'hamburgerpatty': {
        displayname: 'Hamburger Patty',
        information: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_patty'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'cheese': {
        displayname: 'Cheese',
        information: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_cheese'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'potatoingred': {
        displayname: 'Potatoes',
        information: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_potato'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'milk': {
        displayname: 'Milk',
        information: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_milk'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'icecreamingred': {
        displayname: 'Ice Cream',
        information: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_icecream'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'coffeebeans': {
        displayname: 'Coffee Beans',
        information: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_coffeebeans'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'hfcs': {
        displayname: 'High-Fructose Syrup',
        information: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_hfcs'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'tomato': {
        displayname: 'Tomato',
        information: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_tomato'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'cucumber': {
        displayname: 'Cucumber',
        information: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_cucumber'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'carrot': {
        displayname: 'Carrot',
        information: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_carrot'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'radish': {
        displayname: 'Radish',
        information: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('radish'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'beetroot': {
        displayname: 'Beet',
        information: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('beetroot'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'cabbage': {
        displayname: 'Cabbage',
        information: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_cabbage'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'chives': {
        displayname: 'Chives',
        information: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_chives'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'pumpkin': {
        displayname: 'Pumpkin',
        information: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_pumpkin'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'corn': {
        displayname: 'Corn',
        information: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('corn'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'oregano': {
        displayname: 'Oregano',
        information: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_oregano'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'garlic': {
        displayname: 'Garlic',
        information: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_garlic'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'mushrooms': {
        displayname: 'Mushrooms',
        information: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_mushrooms'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'foodbag': {
        displayname: 'Brown Bag',
        information: 'Enough space for one.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_food_bag'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    //Mech
    'helicopterrepairkit': {
        displayname: 'Brown Bag',
        information: 'Helicopter Repair Kit.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_helicopter_repair_kit'),
        weight: 80.0,
        context: {
            useItem: true,
        }
    },
    'bodyrepairkit': {
        displayname: 'Body Repair Kit',
        information: '1 Time use - repairs body to full.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_body_repair_kit'),
        weight: 80.0,
        context: {
            useItem: true,
        }
    },
    'mask': {
        displayname: 'Mask',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mask'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'hat': {
        displayname: 'Hat',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_hat'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'varhelmet': {
        displayname: 'VAR Helmet',
        information: 'Virtually augmented reality, woah.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_var_headset'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'darkmarketdeliveries': {
        displayname: 'Delivery List',
        information: 'A suspicious list with transport instructions. Marked for Police Seizure.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_dark_market_customers'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'darkmarketpackage': {
        displayname: 'Suspicious Package',
        information: 'Package covered in tape and milk stickers. Marked for Police Seizure.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_dark_market_package'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'choplist': {
        displayname: 'Vehicle List',
        information: 'List with locations and vehicle models. Marked for Police Seizure.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_dark_market_customers'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'bennysorder': {
        displayname: 'Bennys Order',
        information: 'Go to the manager and buy the parts.<br>Then give this to an employee.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_receipt'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'stolenshoes': {
        displayname: 'Stolen Shoes',
        information: 'These are not yours, bro.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_stolenshoes'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'rentalpapers': {
        displayname: 'Rental Papers',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('rental_paper'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'dashcamracing': {
        displayname: 'GoPixel (Public)',
        information: 'Throw this in your vehicle to stream live footage to the cloud! Unencrypted.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_dashcam'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'dashcampd': {
        displayname: 'GoPixel (PD)',
        information: 'Throw this in your vehicle to stream live footage to the cloud! Unencrypted.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_dashcam'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'dashcamstatic': {
        displayname: 'GoPixel (Static)',
        information: 'Security camera for things.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_dashcam'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'dashcamstaticpd': {
        displayname: 'GoPixel (Static)',
        information: 'Government (PD/EMS/DOC) Issued Equipment',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_dashcam'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'moneycase': {
        displayname: 'Regular Briefcase',
        information: 'Good for about $20k in large bills.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_moneycase'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'nightvisiongoggles': {
        displayname: 'Night Vision Goggles',
        information: 'Mil-Spec. High price, low quality.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_nv'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'nightvisiongogglespd': {
        displayname: 'NVG (SWAT)',
        information: 'Mil-Spec. High price, low quality. If you are not SWAT certified do not buy this.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_nv'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'grapplegun': {
        displayname: 'Grapple Gun',
        information: 'This is some Batman shit. Marked for Police Seizure.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_grapple'),
        weight: 7.0,
        context: {
            useItem: true,
        }
    },
    'grapplegunpd': {
        displayname: 'Grapple Gun (SWAT)',
        information: 'This is some Batman shit. If you are not SWAT certified do not buy this.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_grapple'),
        weight: 7.0,
        context: {
            useItem: true,
        }
    },
    'weedpackage': {
        displayname: 'Suspicious Package',
        information: 'Marked for Police Seizure.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_box-of-weed-12-18-oz'),
        weight: 25.0,
        context: {
            useItem: true,
        }
    },
    'methpackage': {
        displayname: 'Suspicious Package',
        information: 'Marked for Police Seizure.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_meth_brick'),
        weight: 25.0,
        context: {
            useItem: true,
        }
    },
    'methbag': {
        displayname: 'Big Meth Bag (100g)',
        information: '100g of pure fuckin meth',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_meth_bag'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'tattooremover': {
        displayname: 'Tattoo Remover',
        information: 'Removes tattoos from someone.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('tattoo_remover'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'megaphone': {
        displayname: 'Megaphone',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_megaphone'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'murdermeal': {
        displayname: 'Murder Meal',
        information: 'This burger may kill you! We are not responsible',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_murder_meal'),
        weight: 16.0,
        context: {
            useItem: true,
        }
    },
    'newsusb': {
        displayname: 'News USB',
        information: 'Property of LS News Center',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_news_usb'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'newscamera': {
        displayname: 'News Camera',
        information: 'A little dusty',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_news_camera'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'newsmic': {
        displayname: 'News Mic',
        information: 'Is this thing on?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_news_mic'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'newsboom': {
        displayname: 'News Boom',
        information: 'Heavier than it looks',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_news_boom'),
        weight: 3.0,
        context: {
            useItem: true,
        }
    },
    'newslight': {
        displayname: 'News Light',
        information: 'I said, ooooh, Im blinded by the lights',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_news_light'),
        weight: 6.0,
        context: {
            useItem: true,
        }
    },
    'safecrackingkit': {
        displayname: 'Safe Cracking Tool',
        information: 'Marked for police seizure.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_safecrackingkit'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'trackerdisabler': {
        displayname: 'Tracker Disabling Tool',
        information: 'Plug this in and keep moving.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_disabler'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'gatheringkit': {
        displayname: 'Detective Kit',
        information: 'Used to gather evidence - should be seized by police if suspected of use in crime.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cleaning-goods'),
        weight: 3.0,
        context: {
            useItem: true,
        }
    },
    'weapon_silencer_pistol': {
        displayname: 'Pistol Suppressor',
        information: 'A silencer designed for use on some pistols.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ssilencer'),
        weight: 15.0,
        context: {
            useItem: true,
        }
    },
    'weapon_oil_silencer': {
        displayname: 'Oil Filter',
        information: 'Old, used oil filter. Do not seem to last long.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_oil_can_supp'),
        weight: 15.0,
        context: {
            useItem: true,
        }
    },
    'weapon_silencer_assault': {
        displayname: 'Rifle Suppressor',
        information: 'Silencer designed for use on some rifles.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_silencerbig'),
        weight: 15.0,
        context: {
            useItem: true,
        }
    },
    'weapon_scope': {
        displayname: 'Weapon Optics',
        information: 'Scope designed for use on some weapons.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_lscope'),
        weight: 15.0,
        context: {
            useItem: true,
        }
    },
    'weapon_uzi_extended': {
        displayname: 'UZI extended mag',
        information: 'Will only fit on the UZI.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_uzi_extended'),
        weight: 15.0,
        context: {
            useItem: true,
        }
    },
    'weapon_uzi_foldstock': {
        displayname: 'UZI Stock',
        information: 'Will only fit on the UZI.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_uzi_fold_stock'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'weapon_uzi_woodstock': {
        displayname: 'UZI Wooden Stock',
        information: 'Will only fit on the UZI.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_uzi_wooden_stock'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    '2343591895': {
        displayname: 'Flash Light',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_flashlight'),
        weight: 11.0,
        context: {
            useItem: true,
        }
    },
    'miningprobe': {
        displayname: 'Mining Probe',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_metaldetector'),
        weight: 20.0,
        context: {
            useItem: true,
        }
    },
    'miningpickaxe': {
        displayname: 'Mining Pickaxe',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_pickaxe'),
        weight: 20.0,
        context: {
            useItem: true,
        }
    },
    'mininggem': {
        displayname: 'Mined Gemstone',
        information: 'Go get rid of this shit!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_gallery_diamond'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'miningcoal': {
        displayname: 'Mined Coal',
        information: 'Go get rid of this shit!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_coal'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'trowel': {
        displayname: 'Trowel',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_trowel'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'pdevidencebag': {
        displayname: 'Evidence Bag',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_evidence_bag'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'ketamine': {
        displayname: 'Special K',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ketamine_baggie'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'bakingsoda': {
        displayname: 'Cleaning Product (Baking Soda)',
        information: 'Cleans n shit yo',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_bakingsoda'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'cleaningproduct': {
        displayname: 'Cleaning Product',
        information: 'Cleans n shit yo',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cleaningproduct'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'cleaningproduct1': {
        displayname: 'Cleaning Product',
        information: 'Cleans n shit yo',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cleaningproduct2'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'hqparts': {
        displayname: 'HQ Car Parts',
        information: "Meta-gamed in minutes.",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_hqparts'),
        weight: 15.0,
        context: {
            useItem: true,
        }
    },
    'cryptostick': {
        displayname: 'GNE Stick',
        information: 'Contains 10GNE. Somehow more valuable than DOGE',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cryptostick'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'turbokit': {
        displayname: 'Quality Turbo Parts',
        information: 'Turbo, might need repairs to fully function!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_vehicle_part'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'enginekit': {
        displayname: 'Quality Engine Parts',
        information: 'Looks like some engine parts, might need repairs to fully function!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_vehicle_part'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'transmissionkit': {
        displayname: 'Quality Transmission Parts',
        information: 'Transmission Parts, might need repairs to fully function!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_vehicle_part'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'brakingkit': {
        displayname: 'Quality Braking Parts',
        information: 'Transmission Parts, might need repairs to fully function!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_vehicle_part'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'suspensionkit': {
        displayname: 'Quality Suspension Parts',
        information: 'Transmission Parts, might need repairs to fully function!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_vehicle_part'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'enginebay': {
        displayname: 'Placeholder Item',
        information: 'Hey, dont touch this!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_vehicle_part'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'refinedaluminium': {
        displayname: 'Refined Aluminium',
        information: 'Refined Aluminium.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_refined_aluminium'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'refinedcopper': {
        displayname: 'Refined Copper',
        information: 'Refined Copper.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_refined_copper'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'refinedglass': {
        displayname: 'Refined Glass',
        information: 'Refined Glass.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_refined_glass'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'refinedplastic': {
        displayname: 'Refined Plastic',
        information: 'Refined Plastic.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_refined_plastic'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'refinedrubber': {
        displayname: 'Refined Rubber',
        information: 'Refined Rubber.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_refined_rubber'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'refinedscrap': {
        displayname: 'Refined Scrap',
        information: 'Refined Scrap.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_refined_scrap'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'refinedsteel': {
        displayname: 'Refined Steel',
        information: 'Refined Steel.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_refined_steel'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'dodopackagesmall': {
        displayname: 'Dodo Small Package',
        information: 'Store various products in this packaging!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_dodobox1'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'dodopackagemedium': {
        displayname: 'Dodo Medium Package',
        information: 'Store various products in this packaging!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_dodobox2'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'dodopackagelarge': {
        displayname: 'Dodo Large Package',
        information: 'Store various products in this packaging!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_dodobox3'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'lawnchair': {
        displayname: 'Lawn Chair',
        information: 'Get off my lawn!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_props_lawnchair'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'lawnchair2': {
        displayname: 'Lawn Chair',
        information: 'Get off my lawn!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_props_lawnchair2'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'stonechisel': {
        displayname: 'Chisel',
        information: 'Used for stone.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_chisel'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'metalshaper': {
        displayname: 'Shaper',
        information: 'Used for metal.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_shaper'),
        weight: 100.0,
        context: {
            useItem: true,
        }
    },
    'woodsaw': {
        displayname: 'Saw',
        information: 'Used for wood.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_saw'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'usedbattery': {
        displayname: 'Used Battery',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_used_battery'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'detcord': {
        displayname: 'Det. Cord',
        information: 'Government (PD/EMS/DOC) Issued Equipment',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_detcord'),
        weight: 15.0,
        context: {
            useItem: true,
        }
    },
    'mobilecratelock': {
        displayname: 'Padlock',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_padlock'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'mobilecratekey': {
        displayname: 'Padlock Key',
        information: 'A key for some padlock',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mobilecratekey'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'mobilecratekeylock': {
        displayname: 'Keypad',
        information: 'A keypad for something',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mobilecratekeylock'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'surveyortool': {
        displayname: 'Surveying Device',
        information: 'Various tools for surveying.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_digi_scanner'),
        weight: 11.0,
        context: {
            useItem: true,
        }
    },
    'agenericmechanicpart': {
        displayname: 'Mechanical Part (A)',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_generic_mechanical_A'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'bgenericmechanicpart': {
        displayname: 'Mechanical Part (B)',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_generic_mechanical_B'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'cgenericmechanicpart': {
        displayname: 'Mechanical Part (C)',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_generic_mechanical_C'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'dgenericmechanicpart': {
        displayname: 'Mechanical Part (D)',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_generic_mechanical_D'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'mgenericmechanicpart': {
        displayname: 'Mechanical Part (M)',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_generic_mechanical_M'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'sgenericmechanicpart': {
        displayname: 'Mechanical Part (S)',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_generic_mechanical_S'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'xgenericmechanicpart': {
        displayname: 'Mechanical Part (X)',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_generic_mechanical_X'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'genericelectronicpart': {
        displayname: 'Electronic Part',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_generic_electronic'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'housesafe': {
        displayname: 'Home Safe',
        information: 'Verying tempting to crack into...',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_housesafe'),
        weight: 100.0,
        context: {
            useItem: true,
        }
    },
    'Desomorphine': {
        displayname: 'Metamorphine',
        information: 'Dumpster Flu Shot',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_desomorphine'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'Desomorphine_used': {
        displayname: 'Used Syringe',
        information: 'I would not touch that if I were you.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_empty_syringe'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'wateringcan': {
        displayname: 'Used Syringe',
        information: 'Fill this at a river or lake.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('wateringcan'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'farmhoe': {
        displayname: 'Hoe',
        information: 'Used to plant groups of crops.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_hoe'),
        weight: 3.0,
        context: {
            useItem: true,
        }
    },
    'drone_lspd': {
        displayname: 'Police Drone',
        information: 'Government (PD/EMS/DOC) Issued Equipment',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_drone'),
        weight: 11.0,
        context: {
            useItem: true,
        }
    },
    'drone_civ': {
        displayname: 'Drone',
        information: 'It flies!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_drone'),
        weight: 11.0,
        context: {
            useItem: true,
        }
    },
    'rccontroller': {
        displayname: 'Remote Controller',
        information: 'Used to control a variety of RC vehicles.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_drone_control'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'C4_dev': {
        displayname: 'C4',
        information: 'Beep...Beep...Beep...',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_c4'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'car_bomb': {
        displayname: 'Car Bomb',
        information: 'Beep...Beep...Beep...',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_phone_bomb'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'car_bomb_defused': {
        displayname: 'Defused Car Bomb',
        information: 'You should try and shake it!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_phone_bomb'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'C4_defused': {
        displayname: 'Defused C4',
        information: 'You should try and shake it!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_c4'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'bombmirror': {
        displayname: 'Car Bomb Detector',
        information: 'Helps stop boom boom',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_bombmirror'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    //Stolen
    'stolencartrunk': {
        displayname: 'Stolen Trunk',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cartrunk'),
        weight: 25.0,
        context: {
            useItem: true,
        }
    },
    'stolencardoor': {
        displayname: 'Stolen Door',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cardoor'),
        weight: 25.0,
        context: {
            useItem: true,
        }
    },
    'stolencarwheel': {
        displayname: 'Stolen Wheel',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_carwheel'),
        weight: 25.0,
        context: {
            useItem: true,
        }
    },
    'stolencarhood': {
        displayname: 'Stolen Hood',
        information: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_car-hood'),
        weight: 25.0,
        context: {
            useItem: true,
        }
    },
}

RPC.register('inventory:getItemList', async() => {
    return ItemList
})