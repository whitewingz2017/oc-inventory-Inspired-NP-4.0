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
        name: 'OC Tablet',
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
            useItem: false,
            equipItem: false,
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
        name: 'Stolen Shoes',
        description: 'These are not yours, bro.',
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
        name: 'Rubber Slug Shotgun',
        description: 'PD and DOC Issued LTL Weapon',
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
        name: 'Rubber Slug Shotgun (Short Life)',
        description: 'PD and DOC Issued LTL Weapon',
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
        name: 'Prison Shiv',
        description: '',
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
        name: 'Browning Hi-Power',
        description: '',
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
        name: 'Diamondback DB9',
        description: '',
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
        name: 'Colt Python',
        description: '',
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
        name: 'Colt 1911',
        description: '',
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
        name: 'FN Five-Seven',
        description: '',
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
        name: 'FN FNX-45',
        description: '',
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
        name: 'Entreprise Wide Body 1911a',
        description: '',
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
        name: 'Government (PD/EMS/DOC) Issued Equipment',
        description: '',
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
    'glock19_mags': {
        name: 'Glock 19 Magazine',
        description: ``,
        decayrate: 0.0,
        stackable: false,
        image: createImage('mag_pistol'),
        weight: 3.0,
        weapon: true,
        context: {
            useItem: true,
        }
    },
     // weapon_pistol50
    '-1716589765': {
        name: 'Desert Eagle',
        description: '',
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
        name: 'Mac-10',
        description: '',
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
        name: 'Glock 18C',
        description: '',
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
        name: 'MP7',
        description: 'Government (PD/EMS/DOC) Issued Equipment',
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
        name: 'Uzi',
        description: '',
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
        name: 'MP5',
        description: '',
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
        name: 'HK416',
        description: 'SWAT',
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
        name: 'M4',
        description: 'Government (PD/EMS/DOC) Issued Equipment',
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
        name: 'FN SCAR-L',
        description: 'Government (PD/EMS/DOC) Issued Equipment',
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
        name: 'Mk14',
        description: 'Government (PD/EMS/DOC) Issued Equipment',
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
        name: 'AWM',
        description: '',
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
        name: 'AK 74',
        description: '',
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
        name: 'M70',
        description: '',
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
        name: 'Sawn-off Shotgun',
        description: '',
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
        name: 'IZh-81',
        description: '',
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
        name: 'Remington 870',
        description: '',
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
        name: 'SIG MPX',
        description: 'Government (PD/EMS/DOC) Issued Equipment',
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
        name: 'Draco NAK9',
        description: '',
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
        name: 'Gepard',
        description: '',
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
        name: 'Skorpion',
        description: '',
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
        name: 'Stun Grenade (SWAT)',
        description: 'So police can breach a building without feeling like a ______! If you are not SWAT certified do not buy this.',
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
        name: 'Flare',
        description: '',
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
        name: 'M67 grenade',
        description: '',
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
        name: 'Smoke Grenade',
        description: '',
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
        name: 'Smoke Grenade (SWAT)',
        description: 'Mil-Spec. High price, low quality. If you are not SWAT certified do not buy this.',
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
        name: 'Smoke Grenade',
        description: 'NPA Edition.',
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
        name: 'Pipebomb',
        description: '',
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
        name: 'Molly',
        description: '',
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
        name: 'Sticky Bomb',
        description: '',
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
        name: 'Nail gun',
        description: '',
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
        name: 'Parachute',
        description: '',
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
        name: 'Fire Ext',
        description: '',
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
        name: 'Petrol Can',
        description: '',
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
        name: 'Sledge Hammer',
        description: 'Big and girthy.',
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
        name: 'Pipe Wrench',
        description: 'I\'m here to fix your pipes.',
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
        name: 'Old broken bottle',
        description: 'Looks like a green, premium, Karlsberg bottle.',
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
        name: 'Knuckle',
        description: '',
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
        name: 'Chain Dusters',
        description: '',
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
        name: 'Hammer',
        description: '',
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
        name: 'Nightstick',
        description: 'Government (PD/EMS/DOC) Issued Equipment',
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
        name: 'Crowbar',
        description: '',
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
        name: 'Model M Keyboard',
        description: '',
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
        name: 'Katana',
        description: 'When you were partying, I studied the blade.',
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
        name: 'Cursed Katana',
        description: 'Infused with the blood of a Dragon; a normal human mind cannot control such power.',
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
        name: 'Shank',
        description: '',
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
        name: 'Dagger',
        description: '',
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
        name: 'Snowball',
        description: '',
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
        name: 'Bat',
        description: '',
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
        name: 'Secure Briefcase',
        description: '',
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
        name: 'Briefcase',
        description: '',
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
        name: 'Machete',
        description: '',
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
        name: 'Hatchet',
        description: '',
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
        name: 'Sub Ammo x50',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_sub-ammo'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'heavyammo': {
        name: 'Heavy Ammo x50',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_rifle-ammo'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'sniperammo': {
        name: 'Sniper Ammo x50',
        description: '',
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
        name: 'LMG Ammo x50',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_lmg-ammo'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'shotgunammo': {
        name: 'SG Ammo x50',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_shotgun-ammo'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'pistolbullet': {
        name: '9mm Ammo',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('bullet_1'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'pistolammo': {
        name: 'Pistol Ammo x50',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_pistol-ammo'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'rifleammo': {
        name: 'Rifle Ammo x50',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_rifle-ammo'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'pistolammoPD': {
        name: 'Pistol Ammo x50 PD',
        description: 'Government (PD/EMS/DOC) Issued Equipment',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_pistol-ammo'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'subammoPD': {
        name: 'Sub Ammo x50 PD',
        description: 'Government (PD/EMS/DOC) Issued Equipment',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_sub-ammo'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'rifleammoPD': {
        name: 'Rifle Ammo x50 PD',
        description: 'Government (PD/EMS/DOC) Issued Equipment',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_rifle-ammo'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'shotgunammoPD': {
        name: 'Shotgun Ammo x50 PD',
        description: 'Government (PD/EMS/DOC) Issued Equipment',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_shotgun-ammo'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'taserammo': {
        name: 'Taser Cartridges',
        description: 'Government (PD/EMS/DOC) Issued Equipment',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_taserammo'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'empammo': {
        name: 'EMP Cartridge',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_emp_ammo'),
        weight: 20.0,
        context: {
            useItem: true,
        }
    },
    'nails': {
        name: 'Nails',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_nails'),
        weight: 3.0,
        context: {
            useItem: true,
        }
    },
    'paintballs': {
        name: 'Paintballs',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_paintball_ammo'),
        weight: 3.0,
        context: {
            useItem: true,
        }
    },
    'rubberslugs': {
        name: '12-Gauge Rubber Slugs',
        description: 'Government (PD/EMS/DOC) Issued Equipment',
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
        name: 'PD Spike Kit',
        description: 'Considered Police Equipment - (only lasts around 10 seconds)',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_spikes'),
        weight: 20.0,
        context: {
            useItem: true,
        }
    },
    'repairkit': {
        name: 'Repair Kit',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_basic_repair-kit'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'wheelchair': {
        name: 'Wheelchair',
        description: 'For broken legs n stuff',
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
        name: '10g cocaine',
        description: 'Looks really high quality.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cocaine-baggy'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    '1gcrack': {
        name: '5g Crack',
        description: 'Crack... ',
        decayrate: 0.0,
        stackable: true,
        image: createImage('np_crack'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'cocainebrick': {
        name: 'Coke Brick (50g)',
        description: 'Increases your Stamina and Movement Speed <br> Breaks down into product.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cocaine-brick'),
        weight: 20.0,
        context: {
            useItem: true,
        }
    },
    'coke50g': {
        name: 'Air Tight Cocaine Brick (1kg)',
        description: 'Tightly sealed to prevent water from seeping in.',
        decayrate: 0.0,
        stackable: true,
        image: createImage('np_cocaine-brick'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'coke5g': {
        name: 'Coke Baggy (5g)',
        description: 'Increases your Stamina and Movement Speed',
        decayrate: 0.0,
        stackable: true,
        image: createImage('np_cocaine-baggy'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'joint': {
        name: '3g Joint',
        description: 'Its a Joint, man. ',
        decayrate: 0.0,
        stackable: true,
        image: createImage('np_joint'),
        weight: 0.5,
        context: {
            useItem: true,
        }
    },
    'maleseed': {
        name: 'Marijuana Seed',
        description: 'Plant this seed if you wish for more seeds!',
        decayrate: 0.0,
        stackable: true,
        image: createImage('np_weed-seed'),
        weight: 0.05,
        context: {
            useItem: true,
        }
    },
    'femaleseed': {
        name: 'Female Marijuana Seed',
        description: 'Surely I can just plant this, right?',
        decayrate: 0.0,
        stackable: true,
        image: createImage('np_weed-seed'),
        weight: 0.05,
        context: {
            useItem: true,
        }
    },
    'cocaleaves': {
        name: 'Coca Leaves',
        description: '',
        decayrate: 0.0,
        stackable: true,
        image: createImage('leaf'),
        weight: 0.01,
        context: {
            useItem: true,
        }
    },
    'weedplant': {
        name: 'Weed Plant',
        description: '',
        decayrate: 0.0,
        stackable: true,
        image: createImage('weedplant'),
        weight: 0.20,
        context: {
            useItem: true,
        }
    },
    'oxy': {
        name: 'Oxy 100mg',
        description: 'Prescribed by Betta Life Pharmacy (Prescription required)',
        decayrate: 0.0,
        stackable: true,
        image: createImage('np_Oxy'),
        weight: 0.3,
        context: {
            useItem: true,
        }
    },
    'weed12oz': {
        name: 'Weed 250 Oz',
        description: 'Lowers Stress <br> Breaks Down into other Product',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_box-of-weed-12-18-oz'),
        weight: 35.0,
        context: {
            useItem: true,
        }
    },
    'weed5oz': {
        name: 'Weed 5 Oz',
        description: 'Lowers Stress <br> Breaks Down into other Product',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_weed-brick-40-Oz'),
        weight: 8.0,
        context: {
            useItem: true,
        }
    },
    'weedoz': {
        name: 'Weed Oz',
        description: 'Lowers Stress',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_weed-4-Oz'),
        weight: 4.0,
        context: {
            useItem: true,
        }
    },
    'weedq': {
        name: 'Weed Q',
        description: 'Lowers Stress',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_weed-oz'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'driedbud': {
        name: 'Dried Bud (100 Grams)',
        description: 'Pack It?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('buddry2'),
        weight: 75.0,
        context: {
            useItem: true,
        }
    },
    'smallbud': {
        name: 'Packed Bud (20 Grams)',
        description: 'Sell It?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('buddry'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'lsdtab': {
        name: 'LSD Tab',
        description: 'For spectacular trips, or whatever.',
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
        name: 'Apple',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_apple'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'banana': {
        name: 'Banana',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_banana'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'cherry': {
        name: 'Cherry',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cherry'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'coconut': {
        name: 'Coconut',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_coconut'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'grain': {
        name: 'Grain',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_grain'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'grapes': {
        name: 'Grapes',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_grapes2'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'kiwi': {
        name: 'Kiwi',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_kiwi'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'lemon': {
        name: 'Lemon',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_lemon'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'lime': {
        name: 'Lime',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_lime'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'orange': {
        name: 'Orange',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_orange'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'peach': {
        name: 'Peach',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_peach'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'potato': {
        name: 'Potato',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_potato'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'strawberry': {
        name: 'Strawberry',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_strawberry'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'watermelon': {
        name: 'Watermelon',
        description: '',
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
        name: 'Bottle Cap',
        description: 'Bottle cap saying HOA on it.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_hoa_cap'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'mead_watermelon': {
        name: 'Watermelon Mead',
        description: 'The danish vikings really knew how to get hammered.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mead_watermelon'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'mead_Strawberry': {
        name: 'Strawberry Mead',
        description: 'The danish vikings really knew how to get hammered.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mead_strawberry'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'mead_potato': {
        name: 'Potato Mead',
        description: 'The danish vikings really knew how to get hammered.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mead_potato'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'mead_peach': {
        name: 'Peach Mead',
        description: 'The danish vikings really knew how to get hammered.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mead_peach'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'mead_orange': {
        name: 'Orange Mead',
        description: 'The danish vikings really knew how to get hammered.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mead_orange'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'mead_lime': {
        name: 'Lime Mead',
        description: 'The danish vikings really knew how to get hammered.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mead_lime'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'mead_lemon': {
        name: 'Lemon Mead',
        description: 'The danish vikings really knew how to get hammered.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mead_lemon'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'mead_kiwi': {
        name: 'Kiwi Mead',
        description: 'The danish vikings really knew how to get hammered.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mead_kiwi'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'mead_grape': {
        name: 'Grape Mead',
        description: 'The danish vikings really knew how to get hammered.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mead_grape'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'mead_coconut': {
        name: 'Coconut Mead',
        description: 'The danish vikings really knew how to get hammered.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mead_coconut'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'mead_cherry': {
        name: 'Cherry Mead',
        description: 'The danish vikings really knew how to get hammered.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mead_cherry'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'mead_banana': {
        name: 'Banana Mead',
        description: 'The danish vikings really knew how to get hammered.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mead_banana'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'mead_apple': {
        name: 'Apple Mead',
        description: 'The danish vikings really knew how to get hammered.',
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
        name: 'Orange Lemon',
        description: 'A perfect happy hour choice for vodka drinkers. Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_drink1'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'drink2': {
        name: 'Cherry Berry',
        description: ' Berry bliss. Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_drink2'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'drink3': {
        name: 'Banana Peach',
        description: 'Tastes just like fruity bubblegum. Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_drink3'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'drink4': {
        name: 'Orange Banana',
        description: 'Tastes just like fruity bubblegum. Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_drink4'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'drink5': {
        name: 'Cherry Kiwi',
        description: 'Fruity and refreshing. Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_drink5'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'drink6': {
        name: 'Berry Watermelon',
        description: 'Cool, Sweet, Colorful. Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_drink6'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'drink7': {
        name: 'Apple Lime',
        description: 'Curbs sweet cravings. Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_polarbear'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'drink8': {
        name: 'Cherry Peach',
        description: 'Perfect for cooling off on hot days. Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_rumcoke'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'drink9': {
        name: 'Coconut Lime',
        description: 'Blended with an island twist. Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_straightvodka'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'drink10': {
        name: 'White Paw',
        description: 'Enjoy on your porch admiring the stars. Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_whitepaw'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'absinthe': {
        name: 'Absinthe',
        description: 'The strongest you can get, 95%.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_absinthe'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'shot1': {
        name: 'Orange Lemon',
        description: 'Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_shot1'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'shot2': {
        name: 'Cherry Berry',
        description: 'Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_shot2'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'shot3': {
        name: 'Banana Peach',
        description: 'Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_shot3'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'shot4': {
        name: 'Orange Banana',
        description: 'Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_shot4'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'shot5': {
        name: 'Cherry Kiwi',
        description: 'Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_shot5'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'shot6': {
        name: 'Berry Watermelon',
        description: 'Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_shot6'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'shot7': {
        name: 'Orange Lemon',
        description: 'Lime Apple',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_shot7'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'shot8': {
        name: 'Cherry Peach',
        description: 'Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_shot8'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'shot9': {
        name: 'Coconut Lime',
        description: 'Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_shot1'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'shot10': {
        name: 'Grapes Watermelon',
        description: 'Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_shot10'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'redwine': {
        name: 'Red Wine',
        description: 'No crime just wine',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_red-wine-bottle'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'rum': {
        name: 'Rum',
        description: 'Why is it gone?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_rum'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'tequila': {
        name: 'Tequila',
        description: 'Tequilya brand',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_tequila'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'tequilashot': {
        name: 'Shot of Tequila',
        description: 'Uno mas por favor',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_tequila-shot'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'vodka': {
        name: 'Vodka',
        description: 'Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_vodka'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'whiskey': {
        name: 'Whiskey',
        description: 'Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_whiskey'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'champagne': {
        name: 'Champagne',
        description: 'Time to celebrate',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_champagne'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'beer': {
        name: 'Beer',
        description: 'Sates Thirst',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_beer'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'pinacolada': {
        name: 'Pina Colada',
        description: 'And getting caught in the rain',
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
        name: 'Aspirin',
        description: 'Its an Aspirin',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_aspirin'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'cabsinthe': {
        name: 'Cannabis Absinthe',
        description: 'Duuude..bro...',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cannabis-absinthe'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    '420bar': {
        name: '420 Bar',
        description: 'Duuude..bro...',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_420-bar'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    '69box': {
        name: '69 Cigar Box',
        description: 'A taste of Cuba',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_69-cigar-box'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    '69pack': {
        name: '69 Brand Pack',
        description: 'Just one more',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_69-brand-pack'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'cgummies': {
        name: 'Cannabis Gummies',
        description: 'Duuude...',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cannabis-gummies'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'chloroform': {
        name: 'Chloroform',
        description: 'Special Cross recipe',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_chloroform'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'ibuprofen': {
        name: 'Ibuprofen',
        description: 'Cures all. Right?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ibuprofen'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'drugx': {
        name: 'Drug X',
        description: 'Now in testing by Humane Labs',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_drug-x'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'cbrownie': {
        name: 'Cannabis Brownie',
        description: 'Dude...',
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
        name: 'Breakfast Sandwich',
        description: 'Rise and shine',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_breakfast-sandwich'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'cbfowl': {
        name: 'Fowl Burger',
        description: 'If you enjoyed it, the chicken didnt die in vain! 900Cal',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fowl-burger'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'cbfries': {
        name: 'Cluckin Fries',
        description: 'Cluckinsize included. 680Cal',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cluckin-fries'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'cookie': {
        name: 'Cookie',
        description: 'Baked with love',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cookie'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'tobacco': {
        name: 'Tobacco',
        description: 'Used for ciggies',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_tobacco'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'gause': {
        name: 'Gause',
        description: 'Used for making bandages',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_gause'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'pizza': {
        name: 'Pizza Slice',
        description: 'Check for pineapple',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_pizza-slice'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'chips': {
        name: 'Chips',
        description: 'Phat Chips yeeeaaah. Thickens blood.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_chips'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'chocobar': {
        name: 'Chips',
        description: 'Phat Chips yeeeaaah. Thickens blood.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_chocolate-bar'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'torta': {
        name: 'Torta',
        description: 'El mejor jamon',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_torta'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'coffee': {
        name: 'Cheap Coffee',
        description: 'Tastes like dirt, but has the caffeine you need',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_coffee'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'burrito': {
        name: 'Burrito',
        description: 'Burrito',
        decayrate: 0.01,
        stackable: true,
        image: createImage('np_burrito'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'donut': {
        name: 'Donut',
        description: 'Fill the hole',
        decayrate: 0.01,
        stackable: true,
        image: createImage('donut'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'foodingredient': {
        name: 'Ingredients',
        description: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.01,
        stackable: true,
        image: createImage('np_ingredients'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'greencow': {
        name: 'Green Cow',
        description: 'Slightly Increases Stamina and Speed',
        decayrate: 0.01,
        stackable: true,
        image: createImage('np_green-cow'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'icecream': {
        name: 'Ice Cream',
        description: 'Made from real human titty milk. Prevents stress from being gained or relieved.',
        decayrate: 0.01,
        stackable: true,
        image: createImage('np_icecream'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'jailfood': {
        name: 'Jail Food',
        description: "Looks as bad as the Sheriff's aim.",
        decayrate: 0.01,
        stackable: true,
        image: createImage('np_jailfood'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'jaildrink': {
        name: 'Jail Drink',
        description: "Looks as bad as the Chief of Police's aim.",
        decayrate: 0.01,
        stackable: true,
        image: createImage('np_jaildrink'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'hamburger': {
        name: 'Hamburger',
        description: "Sates Hunger",
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
        name: 'Aluminium',
        description: "",
        decayrate: 0.7,
        stackable: true,
        image: createImage('np_aluminum'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'plastic': {
        name: 'Plastic',
        description: "",
        decayrate: 0.7,
        stackable: true,
        image: createImage('np_plastic'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'copper': {
        name: 'Copper',
        description: "",
        decayrate: 0.7,
        stackable: true,
        image: createImage('np_copper'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'electronics': {
        name: 'Electronics',
        description: "",
        decayrate: 0.7,
        stackable: true,
        image: createImage('np_electronics'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'rubber': {
        name: 'Rubber',
        description: "",
        decayrate: 0.7,
        stackable: true,
        image: createImage('np_rubber'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'scrapmetal': {
        name: 'Scrap Metal',
        description: "",
        decayrate: 0.7,
        stackable: true,
        image: createImage('np_scrap-metal'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'steel': {
        name: 'Steel',
        description: "",
        decayrate: 0.7,
        stackable: true,
        image: createImage('np_steel'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'glass': {
        name: 'Glass',
        description: "",
        decayrate: 0.7,
        stackable: true,
        image: createImage('np_glass'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'pdpanicbutton': {
        name: 'Panic Button',
        description: 'Alert Police?',
        decayrate: 0.2,
        stackable: false,
        image: createImage('qb_panicbutton'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'lockpickbp': {
        name: 'Lockpick Blueprint',
        description: "",
        decayrate: 0.5,
        stackable: true,
        image: createImage('np_bp-lockpick'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'advlockpickbp': {
        name: 'Advanced Lockpick Blueprint',
        description: "",
        decayrate: 0.6,
        stackable: true,
        image: createImage('np_bp-advlockpick'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'lockpick': {
        name: 'Lockpick Set',
        description: 'Unlocks things, if you have the skill!',
        decayrate: 0.5,
        stackable: true,
        image: createImage('np_lockpick1'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'advlockpick': {
        name: 'Adv Lock Pick',
        description: 'Unlocks things, if you have the skill!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_advanced-lockpick'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'hackingdevice': {
        name: 'Security System Hacking Device',
        description: 'Marked for Police Seizure',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_hacking_device'),
        weight: 3.0,
        context: {
            useItem: true,
        }
    },
    'armor': {
        name: 'Chest Armor',
        description: 'Protects you from bleeding and stumbling on injuries',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_chest-armor'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'pdarmor': {
        name: '(PD) Chest Armor',
        description: 'Government (PD/EMS/DOC) Issued Equipment',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_chest-armor'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'aluminiumoxide': {
        name: 'Aluminium Oxide',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_aluminum-oxide'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'advrepairkit': {
        name: 'Adv Repair Kit',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_repair-toolkit'),
        weight: 8.0,
        context: {
            useItem: true,
        }
    },
    'tirerepairkit': {
        name: 'For swapping damaged tires.',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_tire_repair-kit'),
        weight: 8.0,
        context: {
            useItem: true,
        }
    },
    'carbattery': {
        name: 'Car Battery',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_car-battery'),
        weight: 8.0,
        context: {
            useItem: true,
        }
    },
    'carhood': {
        name: 'Car Hood',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_car-hood'),
        weight: 8.0,
        context: {
            useItem: true,
        }
    },
    'cashstack': {
        name: 'Stack of Cash',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cash-stack'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'band': {
        name: 'Band of Notes',
        description: 'Lots of low denominators - Indicates drug sales.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cash-stack'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'rollcash': {
        name: 'Dirty Money',
        description: 'I need to find a way to clean this money.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cash-roll'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'battery': {
        name: 'Battery',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_battery'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'binoculars': {
        name: 'Binoculars',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_binoculars'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'blindfold': {
        name: 'Blindfold',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_blindfold'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'bloodbag': {
        name: 'Blood Bag',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_blood-bag'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'bloodvial': {
        name: 'Blood Vial',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_blood-tube'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'Boombox': {
        name: 'Boombox',
        description: 'Its a prop, wow?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_boombox'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'Box': {
        name: 'Box',
        description: 'Its a prop, wow?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_box'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'breadboard': {
        name: 'Breadboard',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_breadboard'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'camera': {
        name: 'Nikea X1000',
        description: 'Works 100% of the time 60% of the time.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_camera'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'casing': {
        name: 'Bullet Casing',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_pistol-ammo'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'certificate': {
        name: 'Certificate',
        description: 'You made it!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_certificate'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'cgpapers': {
        name: 'CG Papers',
        description: 'Wata woozers',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cg-papers'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'chestxray': {
        name: 'Chest X-Ray',
        description: 'Argh...',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_chest-xray'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'cigar': {
        name: 'Cigar',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cigar'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'ciggy': {
        name: 'Cigarette',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cigarette'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'ciggypack': {
        name: 'Cigarettes',
        description: 'A packet of smokes, they smell and taste like shit, but they relieve stress, the stress created by the addiction sure, but they relieve stress.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ciggypack'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'ckatana': {
        name: 'Sheathed Cursed Katana',
        description: 'A normal human mind cannot control such power.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cursed-katana'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'cpelt': {
        name: 'Cougar Pelt',
        description: 'The hunter becomes the hunted',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cougar-pelt'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'cuffs': {
        name: 'Hand Cuffs',
        description: 'Marked for Police Seizure',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_hand-cuffs'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'dhide': {
        name: 'Deer Hide',
        description: 'Call peta',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_deer-hide'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'drill': {
        name: 'Drill',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('drill'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'drillbit': {
        name: 'Drill Bit',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_drill-bit'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'DuffelBag': {
        name: 'Black Duffel Bag',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_duffel'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'electronickit': {
        name: 'Electronic Kit',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_electronic-kit'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'evidence': {
        name: 'Evidence',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_evidence'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'np_evidence_marker_yellow': {
        name: 'Evidence',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_evidence_marker_yellow'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'np_evidence_marker_red': {
        name: 'Evidence',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_evidence_marker_red'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'np_evidence_marker_white': {
        name: 'Evidence',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_evidence_marker_white'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'np_evidence_marker_orange': {
        name: 'Evidence',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_evidence_marker_orange'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'np_evidence_marker_light_blue': {
        name: 'Evidence',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_evidence_marker_light_blue'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'np_evidence_marker_purple': {
        name: 'Evidence',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_evidence_marker_purple'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'evidencebag': {
        name: 'Evidence Bag',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_evidence-bag'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'pdbadge': {
        name: 'PD Badge',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_pd_badge'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'fakeplate': {
        name: 'Fake Plate Kit',
        description: 'Use on a vehicle to alter its plate or change it back - 1 time use..',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_plate'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'fbumper': {
        name: 'Front Bumper',
        description: 'Ill have the tuna, no crust',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_front-bumper'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'fertilizer': {
        name: 'Fertilizer',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fertilizer'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'fuse': {
        name: 'Fuse',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fuse'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'glowing': {
        name: 'Glowing Substance',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_glowing-substance'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'glucose': {
        name: '500g Glucose',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_glucose'),
        weight: 3.0,
        context: {
            useItem: true,
        }
    },
    'goldbar': {
        name: 'Gold Bar',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_gold-bar'),
        weight: 3.0,
        context: {
            useItem: true,
        }
    },
    'goldcoin': {
        name: 'Gold Coin',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_gold-coin'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'greenb': {
        name: 'Green Bandana',
        description: 'Ay yo my mans',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_green-bandana'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'gum': {
        name: 'Gum',
        description: 'Release Gum. You chew, you suck then POW',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_gum'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'hairtie': {
        name: 'Hair Tie',
        description: 'We all know what this is really for...',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_hairtie'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'harness': {
        name: 'Racing Harness',
        description: 'Stops you from being YEETED',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_harness'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'heavycutters': {
        name: 'Heavy Cutters',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_heavy-cutters'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'heavydutydrill': {
        name: 'Heavy Duty Drill',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_heavy-duty-drill'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'hlights': {
        name: 'Headlights',
        description: 'Cant detail a car with the cover on',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_headlights'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'IFAK': {
        name: 'IFAK',
        description: 'Government (PD/EMS/DOC) Issued Equipment',
        decayrate: 0.0,
        stackable: false,
        image: createImage('ifak'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'inkedmoneybag': {
        name: 'Inked Money Bag',
        description: 'Made with cheap ink that expires',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_inked-money-bag'),
        weight: 4.0,
        context: {
            useItem: true,
        }
    },
    'inkset': {
        name: 'Inked Set',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_inked-money-bag'),
        weight: 4.0,
        context: {
            useItem: true,
        }
    },
    'ironoxide': {
        name: 'Iron Oxide',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_iron-oxide'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'katana': {
        name: 'Katana',
        description: 'Steel folded over 1000 times',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_katana'),
        weight: 4.0,
        context: {
            useItem: true,
        }
    },
    'keyfob': {
        name: 'Key Fob',
        description: 'Used for opening doors remotely.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_keyfob'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'key1': {
        name: 'Key 1',
        description: 'Numbered Key',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_key1'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'key2': {
        name: 'Key 2',
        description: 'Numbered Key',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_key2'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'key3': {
        name: 'Key 3',
        description: 'Numbered Key',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_key3'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'keya': {
        name: 'Key A',
        description: 'Lettered Key',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_keya'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'keyb': {
        name: 'Key B',
        description: 'Lettered Key',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_keyb'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'keyc': {
        name: 'Key C',
        description: 'Lettered Key',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_keyc'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'lighter': {
        name: 'Lighter',
        description: 'Dont start a fire with this.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_lighter'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'locksystem': {
        name: 'Air Pressure Lockpick',
        description: 'Used to blow out small locks - one time use.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('locksystem'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'log': {
        name: 'Log',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_wood'),
        weight: 3.0,
        context: {
            useItem: true,
        }
    },
    'markedbills': {
        name: 'Marked Bills',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_inked-money-bag'),
        weight: 3.0,
        context: {
            useItem: true,
        }
    },
    'adrenaline': {
        name: 'Adrenaline Syringe',
        description: 'Adrenaline, gives a good pump! If you are not SWAT certified do not buy this.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_adrenaline'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'MedicalBag': {
        name: 'Medical Bag',
        description: 'Its a prop, wow?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_medbag'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'headphones': {
        name: 'Medical Bag',
        description: 'Its a prop, wow?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_headphones'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'varusb': {
        name: 'VAR USB',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mkii-usb-device'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'nitrous': {
        name: 'Nitrous Oxide',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_nitrous-oxide'),
        weight: 3.0,
        context: {
            useItem: true,
        }
    },
    'copium': {
        name: 'Copium',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_nitrous-oxide'),
        weight: 3.0,
        context: {
            useItem: true,
        }
    },
    'oil': {
        name: 'Oil',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_oil'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'oxygentank': {
        name: 'Oxygen Tank',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_oxygen-tank'),
        weight: 100.0,
        context: {
            useItem: true,
        }
    },
    'pallet': {
        name: 'Pallet of Boxes',
        description: 'Transportable goods',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_pallet-of-boxes'),
        weight: 115.0,
        context: {
            useItem: true,
        }
    },
    'purpleb': {
        name: 'Purple Bandana',
        description: 'Straight outta da cul-de-sac',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_purple-bandana'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'qualityscales': {
        name: 'High Quality Scales',
        description: 'Weighs Baggies with no loss',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_high-quality-scales'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'rbumper': {
        name: 'Rear Bumper',
        description: 'You owe me a ten second car',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_rear-bumper'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'recyclablematerial': {
        name: 'Recyclable Material',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_recyclable-material'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'redb': {
        name: 'Red Bandana',
        description: 'Lean with me',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_red-bandana'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'repairtoolkit': {
        name: 'Repair Toolkit',
        description: 'Used by Tow Truck drivers and repair people.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_repair-toolkit'),
        weight: 20.0,
        context: {
            useItem: true,
        }
    },
    'riflebody': {
        name: 'Rifle Body',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_rifle-body'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'riflebodybox': {
        name: 'Box (10+ Rifle Bodys)',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_rifle-box'),
        weight: 85.0,
        context: {
            useItem: true,
        }
    },
    'rims': {
        name: 'Racing Rims',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_racing-rims'),
        weight: 15.0,
        context: {
            useItem: true,
        }
    },
    'benjiwatch': {
        name: 'Benjis Watch',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_benjiwatch'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'rolexwatch': {
        name: 'Rolex Watch (p)',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_rolex-watchatch'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'rollingpaper': {
        name: 'Rolling Paper',
        description: 'Required to roll joints!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_rolling-paper'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'scanner': {
        name: 'Radio Scanner',
        description: 'Used to receive random radio chatter.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_radio-scanner'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'civradio': {
        name: 'Standard Radio',
        description: 'Used to communicate to radio chatter.',
        stackable: true,
        image: createImage('np_civradio'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'radio': {
        name: 'Government Radio',
        description: 'Used to communicate to Police radio.',
        stackable: true,
        image: createImage('np_radio'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'scissors': {
        name: 'Scissors',
        description: 'Fuck me up fam',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_scissors'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'sealedbucket': {
        name: 'Fisher Bucket',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_sealed-bucket'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'sealedevidencebag': {
        name: 'Sealed Evidence Bag',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_sealed-evidence-bag'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'seat': {
        name: 'Seat',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_seat'),
        weight: 8.0,
        context: {
            useItem: true,
        }
    },
    'secretfile': {
        name: 'Secret File',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_secret-file'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'SecurityCase': {
        name: 'Security Case',
        description: 'Its a prop, wow?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_securitycase'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'shipbox': {
        name: 'Shipping Box',
        description: 'Free 2day shipping',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_shipping-box'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'shipcrate': {
        name: 'Shipping Crate',
        description: 'This side up',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_shipping-crate'),
        weight: 30.0,
        context: {
            useItem: true,
        }
    },
    'silvercoin': {
        name: 'Silver Coin',
        description: 'Dont lose it',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_silver-coin'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'slushy': {
        name: 'The best slushy ever.',
        description: 'The only thing in Jail that tastes good.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_slushy'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'smallscales': {
        name: 'Small Scales',
        description: 'Weighs Baggies with minimal loss',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_small-scale'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'smirror': { //car part
        name: 'Side Mirror',
        description: "On green, I'm going for it",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_side-mirror'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'sound': { //car part
        name: 'Sound System',
        description: "Makes your ears bleed",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_sound-system'),
        weight: 6.0,
        context: {
            useItem: true,
        }
    },
    'spoiler': { //car part
        name: 'Spoiler',
        description: "Quarter mile at a time",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_spoiler'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'sskirts': { //car part
        name: 'Side Skirts',
        description: "Ride or die, remember?",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_side-skirts'),
        weight: 4.0,
        context: {
            useItem: true,
        }
    },
    'swheel': { //car part
        name: 'Steering Wheel',
        description: "Winning is winning...",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_steering-wheel'),
        weight: 4.0,
        context: {
            useItem: true,
        }
    },
    'sprunk': {
        name: 'Sprunk',
        description: "The Essence of Life",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_sprunk'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'stolen10ctchain': {
        name: '10ct Gold Chain (p)',
        description: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_10ct-gold-chain'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'stolen2ctchain': {
        name: '2ct Gold Chain (p)',
        description: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_2ct-gold-chain'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'stolen5ctchain': {
        name: '5ct Gold Chain (p)',
        description: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_5ct-gold-chain'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'stolen8ctchain': {
        name: '8ct Gold Chain (p)',
        description: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_8ct-gold-chain'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'stolencasiowatch': {
        name: 'Casio Watch (p)',
        description: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_casio-watch'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'stolengameboy': {
        name: 'Gameboy (p)',
        description: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_gameboy'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'stoleniphone': {
        name: 'Apple Iphone (p)',
        description: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_apple-iphone'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'stolennokia': {
        name: 'Nokia Phone (p)',
        description: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_nokia-phone'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'stolenoakleys': {
        name: 'Oakley Sunglasses (p)',
        description: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_oakley-sunglasses'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'stolenpsp': {
        name: 'PSP (p)',
        description: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_psp'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'stolenraybans': {
        name: 'Ray Ban Sunglasses (p)',
        description: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_raybans'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'stolens8': {
        name: 'Samsung S8 (p)',
        description: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_samsung-s8'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'stolentv': {
        name: 'Flat Panel TV (p)',
        description: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_stolentv'),
        weight: 50.0,
        context: {
            useItem: true,
        }
    },
    'stolenmusic': {
        name: 'Music Equipment (p)',
        description: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_stolenmusic'),
        weight: 50.0,
        context: {
            useItem: true,
        }
    },
    'stolencomputer': {
        name: 'Computer Equipment (p)',
        description: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_stolencomputer'),
        weight: 50.0,
        context: {
            useItem: true,
        }
    },
    'stolenart': {
        name: 'Art (p)',
        description: "",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_stolenart'),
        weight: 30.0,
        context: {
            useItem: true,
        }
    },
    'Suitcase': {
        name: 'Suitcase',
        description: 'Its a prop, wow?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_suitcase'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'tbag': {
        name: 'Transport Bag',
        description: 'Keeping your organs fresh',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_transport-bag'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'thermite': {
        name: 'Thermite',
        description: '',
        decayrate: 0.0,
        stackable: true,
        image: createImage('np_thermite_charge'),
        weight: 4.0,
        context: {
            useItem: true,
        }
    },
    'thermitecharge': {
        name: 'Thermite Charger',
        description: '',
        decayrate: 0.0,
        stackable: true,
        image: createImage('np_thermite_charge'),
        weight: 4.0,
        context: {
            useItem: true,
        }
    },
    'Toolbox': {
        name: 'Toolbox',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_toolbox'),
        weight: 4.0,
        context: {
            useItem: true,
        }
    },
    'umbrella': {
        name: 'Umbrella',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_umbrella'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'vpnxj': {
        name: 'VPN',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_vpn-xj'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'watch': {
        name: 'PD Watch & Compass',
        description: 'Government (PD/EMS/DOC) Issued Equipment',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_watch'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'yellowb': {
        name: 'Yellow Bandana',
        description: 'Im tellin you',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_yellow-bandana'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'Bankbox': {
        name: 'Bank Box',
        description: 'A locked bank box.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_bankbox'),
        weight: 15.0,
        context: {
            useItem: true,
        }
    },
    'Bankboxkey': {
        name: 'Briefcase Key',
        description: 'A key that seems to fit somewhere.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_bankboxkey'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'Largesupplycrate': {
        name: 'Large Supply crate',
        description: 'A very big and heavy crate.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_supplycrate_large'),
        weight: 150.0,
        context: {
            useItem: true,
        }
    },
    'Mediumsupplycrate': {
        name: 'Medium Supply crate',
        description: 'A semi-heavy crate containing something.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_supplycrate_medium'),
        weight: 100.0,
        context: {
            useItem: true,
        }
    },
    'Smallsupplycrate': {
        name: 'Small Arms Crate',
        description: 'A small unmarked crate.',
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
        name: 'Illegal Hook',
        description: 'Hmm maybe fish will like this more?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_illegal_hook'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'fishingrod': {
        name: 'Fishing Rod',
        description: 'Lets fish',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishing-rod'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'fishingbass': {
        name: 'Bass',
        description: 'Striped Bass. Bass like the fish, not the officer',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishing-bass'),
        weight: 8.0,
        context: {
            useItem: true,
        }
    },
    'fishingcarp': {
        name: 'Carp',
        description: 'Carp. Carpe diem!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishing-carp'),
        weight: 8.0,
        context: {
            useItem: true,
        }
    },
    'fishingcatfish': {
        name: 'Catfish',
        description: 'Catfish. Did you just get done catfish noodlin?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishing-cat'),
        weight: 8.0,
        context: {
            useItem: true,
        }
    },
    'fishingyellowperch': {
        name: 'Yellow Perch',
        description: 'Yellow Perch. Did they tell you not to perch or not to poach?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishing-yellowperch'),
        weight: 8.0,
        context: {
            useItem: true,
        }
    },
    'fishingalligatorturtle': {
        name: 'Alligator Snapping Turtle',
        description: 'Alligator Snapping Turtle. This thing could snap your fingers off like twigs.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishing-alligator-snapping-turtle'),
        weight: 45.0,
        context: {
            useItem: true,
        }
    },
    'fishingsockeyesalmon': {
        name: 'Sockeye Salmon',
        description: 'Sockeye Salmon. It looks like you caught this one before it could reach its spawning grounds...',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishing-sockeye-salmon'),
        weight: 8.0,
        context: {
            useItem: true,
        }
    },
    'fishingsturgeon': {
        name: 'Sturgeon',
        description: 'Green Sturgeon. It looks prehistoric and rare. Maybe it has caviar? ',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishing-sturgeon'),
        weight: 45.0,
        context: {
            useItem: true,
        }
    },
    'fishingbluefish': {
        name: 'Bluegill',
        description: 'Bluegill. Catching this took no skill.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishing-bluefish'),
        weight: 8.0,
        context: {
            useItem: true,
        }
    },
    'fishingflounder': {
        name: 'Flounder',
        description: 'I went fishing and all I got was this lousy flounder',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishing-flounder'),
        weight: 8.0,
        context: {
            useItem: true,
        }
    },
    'fishingmackerel': {
        name: 'Mackerel',
        description: 'Sometimes holy',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishing-mackerel'),
        weight: 8.0,
        context: {
            useItem: true,
        }
    },
    'fishingcod': {
        name: 'Cod',
        description: 'Modern Warfare',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishing-cod'),
        weight: 8.0,
        context: {
            useItem: true,
        }
    },
    'fishingwhale': {
        name: 'Baby Whale',
        description: 'A fucking whale! Someone might be interested in buying it? Lol, jk. Throw it back. Unless..?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishing-whale'),
        weight: 55.0,
        context: {
            useItem: true,
        }
    },
    'fishingdolphin': {
        name: 'Baby Dolphin',
        description: 'A fucking dolphin! Someone might be interested in buying it? Lol, jk. Throw it back. Unless..?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishing-dolphin'),
        weight: 45.0,
        context: {
            useItem: true,
        }
    },
    'fishingshark': {
        name: 'Baby Shark',
        description: 'A fucking dolphin! Someone might be interested in buying it? Lol, jk. Throw it back. Unless..?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishing-shark'),
        weight: 45.0,
        context: {
            useItem: true,
        }
    },
    'fishingnet': {
        name: 'Gill Net',
        description: '',
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
        name: 'Boot',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishingboot'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'fishinglog': {
        name: 'Log',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishinglog'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'fishingtin': {
        name: 'Tincan',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishingtin'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'fishingtacklebox': {
        name: 'Tackle box',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishingtacklebox'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'fishingchest': {
        name: 'Treasure chest',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishingchest'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'fishinglockbox': {
        name: 'Lockbox',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fishinglockbox'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'fishingtunac': {
        name: 'Tuna Chip',
        description: '',
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
        name: 'Hunting Rifle',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_huntingrifle'),
        weight: 11.0,
        context: {
            useItem: true,
        }
    },
    'huntingammo': {
        name: '223 Hunting Rounds',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_223ammo'),
        weight: 7.0,
        context: {
            useItem: true,
        }
    },
    'huntingknife': {
        name: 'Hunting Knife',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_huntingknife'),
        weight: 7.0,
        context: {
            useItem: true,
        }
    },
    'huntingbait': {
        name: 'Animal Bait',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_huntingbait'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'fishingbait': {
        name: 'Fishing Bait',
        description: 'Wormy like you',
        decayrate: 0.0,
        stackable: false,
        image: createImage('fish_bait'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'huntingcarcass1': {
        name: 'Animal Pelt 1',
        description: 'What is this? Did you shoot it with an AK?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_huntingcarcass1'),
        weight: 35.0,
        context: {
            useItem: true,
        }
    },
    'huntingcarcass2': {
        name: 'Animal Pelt 2',
        description: 'Someone might pay a pretty penny for this',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_huntingcarcass2'),
        weight: 35.0,
        context: {
            useItem: true,
        }
    },
    'huntingcarcass3': {
        name: 'Animal Pelt 3',
        description: 'I am sure we can turn this in to something fancy',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_huntingcarcass3'),
        weight: 55.0,
        context: {
            useItem: true,
        }
    },
    'huntingcarcass4': {
        name: 'Animal Pelt 4',
        description: 'Hunting in the South Side are we?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_huntingcarcass4'),
        weight: 75.0,
        context: {
            useItem: true,
        }
    },
    'huntingpelt': {
        name: 'Animal Pelt',
        description: 'This used to keep an animal warm in the winter! You ANIMAL!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_huntingpelt'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'huntingmeat': {
        name: 'Animal Meat',
        description: 'I am sure this could turn in to a killer burger',
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
        name: 'Laptop',
        description: 'Practice makes perfect. Marked for police seizure.',
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
        name: 'Laptop',
        description: 'Pre-configured to access certain systems. Marked for police seizure.',
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
        name: 'Laptop',
        description: 'Pre-configured to access certain systems. Marked for police seizure.',
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
        name: 'Laptop',
        description: 'Pre-configured to access certain systems. Marked for police seizure.',
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
        name: 'Laptop',
        description: 'Pre-configured to access certain systems. Marked for police seizure.',
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
        name: 'Receipt',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_receipt'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'emptybaggies': {
        name: 'Empty Baggies',
        description: '',
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
        name: 'Race Creating Dongle',
        description: 'You do not see this...',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_racing_usb_blue'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'racingusb1': {
        name: 'Phone Dongle',
        description: 'Marked for Police Seizure',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_racing_usb_blue'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'racingusb2': {
        name: 'Phone Dongle',
        description: 'Marked for Police Seizure',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_racing_usb_blue'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'racingusb3': {
        name: 'Phone Dongle',
        description: 'Access to SASP Time Trials App',
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
        name: 'Brake Parts (X)',
        description: 'New brake discs, pads, calipers, hubs & accessories',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_brake_parts_x'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'xfixaxle': {
        name: 'Axle Parts (X)',
        description: 'New axle components',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_axle_parts_x'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'xfixradiator': {
        name: 'Radiator Parts (X)',
        description: 'New radiator and cooling parts',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cooling_parts_x'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'xfixclutch': {
        name: 'Clutch Parts (X)',
        description: 'New clutch disc and pressure plate',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_clutch_parts_x'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'xfixtransmission': {
        name: 'Transmission Parts (X)',
        description: 'New gear sets, shafts, converters and clutch packs',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_transmission_parts_x'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'xfixelectronics': {
        name: 'Vehicle Electronics (X)',
        description: 'Various vehicle electrical components',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_electronic_parts_x'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'xfixinjector': {
        name: 'Fuel Injectors (X)',
        description: 'New fuel injectors',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fuel_injectors_x'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'vehrepairitem': {
        name: 'Vehicle Repair Tool',
        description: 'For swapping and repairing worn or damaged tires',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_tire_kit_x'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'xfixtire': {
        name: 'Tire Repair Kit (X)',
        description: 'For swapping and repairing worn or damaged tires',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_tire_kit_x'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'xfixbody': {
        name: 'Body Panels (X)',
        description: 'New vehicle body panels',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_body_panels_x'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'xfixengine': {
        name: 'Engine Parts (X)',
        description: 'New engine parts',
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
        name: 'Brake Parts (S)',
        description: 'New brake discs, pads, calipers, hubs & accessories',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_brake_parts_s'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'sfixaxle': {
        name: 'sAxle Parts (S)',
        description: 'New axle components',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_axle_parts_s'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'sfixradiator': {
        name: 'Radiator Parts (S)',
        description: 'New radiator and cooling parts',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cooling_parts_s'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'sfixclutch': {
        name: 'Clutch Parts (S)',
        description: 'New clutch disc and pressure plate',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_clutch_parts_s'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'sfixtransmission': {
        name: 'Transmission Parts (S)',
        description: 'New gear sets, shafts, converters and clutch packs',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_transmission_parts_s'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'sfixelectronics': {
        name: 'Vehicle Electronics (S)',
        description: 'Various vehicle electrical components',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_electronic_parts_s'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'sfixinjector': {
        name: 'Fuel Injectors (S)',
        description: 'New fuel injectors',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fuel_injectors_s'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'sfixtire': {
        name: 'Tire Repair Kit (S)',
        description: 'For swapping and repairing worn or damaged tires',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_tire_kit_s'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'sfixbody': {
        name: 'Body Panels (S)',
        description: 'New vehicle body panels',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_body_panels_s'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'sfixengine': {
        name: 'Engine Parts (S)',
        description: 'New engine parts',
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
        name: 'Brake Parts (A)',
        description: 'New brake discs, pads, calipers, hubs & accessories',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_brake_parts_a'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'afixaxle': {
        name: 'Axle Parts (A)',
        description: 'New axle components',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_axle_parts_a'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'afixradiator': {
        name: 'Radiator Parts (A)',
        description: 'New radiator and cooling parts',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cooling_parts_a'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'afixclutch': {
        name: 'Clutch Parts (A)',
        description: 'New clutch disc and pressure plate',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_clutch_parts_a'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'afixtransmission': {
        name: 'Transmission Parts (A)',
        description: 'New gear sets, shafts, converters and clutch packs',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_clutch_parts_a'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'afixelectronics': {
        name: 'Vehicle Electronics (A)',
        description: 'Various vehicle electrical components',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_electronic_parts_a'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'afixinjector': {
        name: 'Fuel Injectors (A)',
        description: 'New fuel injectors',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fuel_injectors_a'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'afixtire': {
        name: 'Tire Repair Kit (A)',
        description: 'For swapping and repairing worn or damaged tires',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_tire_kit_a'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'afixbody': {
        name: 'Body Panels (A)',
        description: 'New vehicle body panels',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_body_panels_a'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'afixengine': {
        name: 'Engine Parts (A)',
        description: 'New engine parts',
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
        name: 'Brake Parts (B)',
        description: 'New brake discs, pads, calipers, hubs & accessories',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_brake_parts_b'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'bfixaxle': {
        name: 'Axle Parts (B)',
        description: 'New axle components',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_axle_parts_b'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'bfixradiator': {
        name: 'Radiator Parts (B)',
        description: 'New radiator and cooling parts',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cooling_parts_b'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'bfixclutch': {
        name: 'Clutch Parts (B)',
        description: 'New clutch disc and pressure plate',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_clutch_parts_b'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'bfixtransmission': {
        name: 'Transmission Parts (B)',
        description: 'New gear sets, shafts, converters and clutch packs',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_transmission_parts_b'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'bfixelectronics': {
        name: 'Vehicle Electronics (B)',
        description: 'Various vehicle electrical components',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_electronic_parts_b'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'bfixinjector': {
        name: 'Fuel Injectors (B)',
        description: 'New fuel injectors',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fuel_injectors_b'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'bfixtire': {
        name: 'Tire Repair Kit (B)',
        description: 'For swapping and repairing worn or damaged tires',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_tire_kit_b'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'bfixbody': {
        name: 'Body Panels (B)',
        description: 'New vehicle body panels',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_body_panels_b'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'bfixengine': {
        name: 'Engine Parts (B)',
        description: 'New brake discs, pads, calipers, hubs & accessories',
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
        name: 'Brake Parts (C)',
        description: 'New brake discs, pads, calipers, hubs & accessories',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_brake_parts_c'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'cfixaxle': {
        name: 'Axle Parts (C)',
        description: 'New axle components',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_axle_parts_c'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'cfixradiator': {
        name: 'Radiator Parts (C)',
        description: 'New radiator and cooling parts',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cooling_parts_c'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'cfixclutch': {
        name: 'Clutch Parts (C)',
        description: 'New clutch disc and pressure plate',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_clutch_parts_c'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'cfixtransmission': {
        name: 'Transmission Parts (C)',
        description: 'New gear sets, shafts, converters and clutch packs',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_transmission_parts_c'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'cfixelectronics': {
        name: 'Vehicle Electronics (C)',
        description: 'Various vehicle electrical components',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_electronic_parts_c'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'cfixinjector': {
        name: 'Fuel Injectors (C)',
        description: 'New fuel injectors',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fuel_injectors_c'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'cfixtire': {
        name: 'Tire Repair Kit (C)',
        description: 'For swapping and repairing worn or damaged tires',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_tire_kit_c'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'cfixbody': {
        name: 'Body Panels (C)',
        description: 'New vehicle body panels',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_body_panels_c'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'cfixengine': {
        name: 'Engine Parts (C)',
        description: 'New brake discs, pads, calipers, hubs & accessories',
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
        name: 'Brake Parts (D)',
        description: 'New brake discs, pads, calipers, hubs & accessories',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_brake_parts_d'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'dfixaxle': {
        name: 'Axle Parts (D)',
        description: 'New axle components',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_axle_parts_d'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'dfixradiator': {
        name: 'Radiator Parts (D)',
        description: 'New radiator and cooling parts',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cooling_parts_d'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'dfixclutch': {
        name: 'Clutch Parts (D)',
        description: 'New clutch disc and pressure plate',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_clutch_parts_d'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'dfixtransmission': {
        name: 'Transmission Parts (D)',
        description: 'New gear sets, shafts, converters and clutch packs',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_transmission_parts_d'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'dfixelectronics': {
        name: 'Vehicle Electronics (D)',
        description: 'Various vehicle electrical components',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_electronic_parts_d'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'dfixinjector': {
        name: 'Fuel Injectors (D)',
        description: 'New fuel injectors',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fuel_injectors_d'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'dfixtire': {
        name: 'Tire Repair Kit (D)',
        description: 'For swapping and repairing worn or damaged tires',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_tire_kit_d'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'dfixbody': {
        name: 'Body Panels (D)',
        description: 'New vehicle body panels',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_body_panels_d'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'dfixengine': {
        name: 'Engine Parts (D)',
        description: 'New brake discs, pads, calipers, hubs & accessories',
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
        name: 'Brake Parts (M)',
        description: 'New brake discs, pads, calipers, hubs & accessories',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_brake_parts_m'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'mfixaxle': {
        name: 'Axle Parts (M)',
        description: 'New axle components',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_axle_parts_m'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'mfixradiator': {
        name: 'Radiator Parts (M)',
        description: 'New radiator and cooling parts',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cooling_parts_m'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'mfixclutch': {
        name: 'Clutch Parts (M)',
        description: 'New clutch disc and pressure plate',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_clutch_parts_m'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'mfixtransmission': {
        name: 'Transmission Parts (M)',
        description: 'New gear sets, shafts, converters and clutch packs',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_transmission_parts_m'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'mfixelectronics': {
        name: 'Vehicle Electronics (M)',
        description: 'Various vehicle electrical components',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_electronic_parts_m'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'mfixinjector': {
        name: 'Fuel Injectors (M)',
        description: 'New fuel injectors',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_fuel_injectors_m'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'mfixtire': {
        name: 'Tire Repair Kit (M)',
        description: 'For swapping and repairing worn or damaged tires',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_tire_kit_m'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'mfixbody': {
        name: 'Body Panels (M)',
        description: 'New vehicle body panels',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_body_panels_m'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'mfixengine': {
        name: 'Engine Parts (M)',
        description: 'New brake discs, pads, calipers, hubs & accessories',
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
        name: 'Lettuce',
        description: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_lettuce'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'hamburgerbuns': {
        name: 'Hamburger Bun',
        description: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_buns'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'hamburgerpatty': {
        name: 'Hamburger Patty',
        description: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_patty'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'cheese': {
        name: 'Cheese',
        description: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_cheese'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'potatoingred': {
        name: 'Potatoes',
        description: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_potato'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'milk': {
        name: 'Milk',
        description: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_milk'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'icecreamingred': {
        name: 'Ice Cream',
        description: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_icecream'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'coffeebeans': {
        name: 'Coffee Beans',
        description: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_coffeebeans'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'hfcs': {
        name: 'High-Fructose Syrup',
        description: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_hfcs'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'tomato': {
        name: 'Tomato',
        description: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_tomato'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'cucumber': {
        name: 'Cucumber',
        description: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_cucumber'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'carrot': {
        name: 'Carrot',
        description: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_carrot'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'radish': {
        name: 'Radish',
        description: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('radish'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'beetroot': {
        name: 'Beet',
        description: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('beetroot'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'cabbage': {
        name: 'Cabbage',
        description: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_cabbage'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'chives': {
        name: 'Chives',
        description: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_chives'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'pumpkin': {
        name: 'Pumpkin',
        description: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_pumpkin'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'corn': {
        name: 'Corn',
        description: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('corn'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'oregano': {
        name: 'Oregano',
        description: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_oregano'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'garlic': {
        name: 'Garlic',
        description: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_garlic'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'mushrooms': {
        name: 'Mushrooms',
        description: 'Used to craft food - be aware, food doesnt last forever!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ingredients_mushrooms'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'foodbag': {
        name: 'Brown Bag',
        description: 'Enough space for one.',
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
        name: 'Brown Bag',
        description: 'Helicopter Repair Kit.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_helicopter_repair_kit'),
        weight: 80.0,
        context: {
            useItem: true,
        }
    },
    'bodyrepairkit': {
        name: 'Body Repair Kit',
        description: '1 Time use - repairs body to full.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_body_repair_kit'),
        weight: 80.0,
        context: {
            useItem: true,
        }
    },
    'mask': {
        name: 'Mask',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mask'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'hat': {
        name: 'Hat',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_hat'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'varhelmet': {
        name: 'VAR Helmet',
        description: 'Virtually augmented reality, woah.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_var_headset'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'darkmarketdeliveries': {
        name: 'Delivery List',
        description: 'A suspicious list with transport instructions. Marked for Police Seizure.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_dark_market_customers'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'darkmarketpackage': {
        name: 'Suspicious Package',
        description: 'Package covered in tape and milk stickers. Marked for Police Seizure.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_dark_market_package'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'choplist': {
        name: 'Vehicle List',
        description: 'List with locations and vehicle models. Marked for Police Seizure.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_dark_market_customers'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'bennysorder': {
        name: 'Bennys Order',
        description: 'Go to the manager and buy the parts.<br>Then give this to an employee.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_receipt'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'stolenshoes': {
        name: 'Stolen Shoes',
        description: 'These are not yours, bro.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_stolenshoes'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'rentalpapers': {
        name: 'Rental Papers',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('rental_paper'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'dashcamracing': {
        name: 'GoPixel (Public)',
        description: 'Throw this in your vehicle to stream live footage to the cloud! Unencrypted.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_dashcam'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'dashcampd': {
        name: 'GoPixel (PD)',
        description: 'Throw this in your vehicle to stream live footage to the cloud! Unencrypted.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_dashcam'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'dashcamstatic': {
        name: 'GoPixel (Static)',
        description: 'Security camera for things.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_dashcam'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'dashcamstaticpd': {
        name: 'GoPixel (Static)',
        description: 'Government (PD/EMS/DOC) Issued Equipment',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_dashcam'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'moneycase': {
        name: 'Regular Briefcase',
        description: 'Good for about $20k in large bills.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_moneycase'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'nightvisiongoggles': {
        name: 'Night Vision Goggles',
        description: 'Mil-Spec. High price, low quality.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_nv'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'nightvisiongogglespd': {
        name: 'NVG (SWAT)',
        description: 'Mil-Spec. High price, low quality. If you are not SWAT certified do not buy this.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_nv'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'grapplegun': {
        name: 'Grapple Gun',
        description: 'This is some Batman shit. Marked for Police Seizure.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_grapple'),
        weight: 7.0,
        context: {
            useItem: true,
        }
    },
    'grapplegunpd': {
        name: 'Grapple Gun (SWAT)',
        description: 'This is some Batman shit. If you are not SWAT certified do not buy this.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_grapple'),
        weight: 7.0,
        context: {
            useItem: true,
        }
    },
    'weedpackage': {
        name: 'Suspicious Package',
        description: 'Marked for Police Seizure.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_box-of-weed-12-18-oz'),
        weight: 25.0,
        context: {
            useItem: true,
        }
    },
    'methpackage': {
        name: 'Suspicious Package',
        description: 'Marked for Police Seizure.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_meth_brick'),
        weight: 25.0,
        context: {
            useItem: true,
        }
    },
    'methbag': {
        name: 'Big Meth Bag (100g)',
        description: '100g of pure fuckin meth',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_meth_bag'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'tattooremover': {
        name: 'Tattoo Remover',
        description: 'Removes tattoos from someone.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('tattoo_remover'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'megaphone': {
        name: 'Megaphone',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_megaphone'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'murdermeal': {
        name: 'Murder Meal',
        description: 'This burger may kill you! We are not responsible',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_murder_meal'),
        weight: 16.0,
        context: {
            useItem: true,
        }
    },
    'newsusb': {
        name: 'News USB',
        description: 'Property of LS News Center',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_news_usb'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'newscamera': {
        name: 'News Camera',
        description: 'A little dusty',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_news_camera'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'newsmic': {
        name: 'News Mic',
        description: 'Is this thing on?',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_news_mic'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'newsboom': {
        name: 'News Boom',
        description: 'Heavier than it looks',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_news_boom'),
        weight: 3.0,
        context: {
            useItem: true,
        }
    },
    'newslight': {
        name: 'News Light',
        description: 'I said, ooooh, Im blinded by the lights',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_news_light'),
        weight: 6.0,
        context: {
            useItem: true,
        }
    },
    'safecrackingkit': {
        name: 'Safe Cracking Tool',
        description: 'Marked for police seizure.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_safecrackingkit'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'trackerdisabler': {
        name: 'Tracker Disabling Tool',
        description: 'Plug this in and keep moving.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_disabler'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'gatheringkit': {
        name: 'Detective Kit',
        description: 'Used to gather evidence - should be seized by police if suspected of use in crime.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cleaning-goods'),
        weight: 3.0,
        context: {
            useItem: true,
        }
    },
    'weapon_silencer_pistol': {
        name: 'Pistol Suppressor',
        description: 'A silencer designed for use on some pistols.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ssilencer'),
        weight: 15.0,
        context: {
            useItem: true,
        }
    },
    'weapon_oil_silencer': {
        name: 'Oil Filter',
        description: 'Old, used oil filter. Do not seem to last long.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_oil_can_supp'),
        weight: 15.0,
        context: {
            useItem: true,
        }
    },
    'weapon_silencer_assault': {
        name: 'Rifle Suppressor',
        description: 'Silencer designed for use on some rifles.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_silencerbig'),
        weight: 15.0,
        context: {
            useItem: true,
        }
    },
    'weapon_scope': {
        name: 'Weapon Optics',
        description: 'Scope designed for use on some weapons.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_lscope'),
        weight: 15.0,
        context: {
            useItem: true,
        }
    },
    'weapon_uzi_extended': {
        name: 'UZI extended mag',
        description: 'Will only fit on the UZI.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_uzi_extended'),
        weight: 15.0,
        context: {
            useItem: true,
        }
    },
    'weapon_uzi_foldstock': {
        name: 'UZI Stock',
        description: 'Will only fit on the UZI.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_uzi_fold_stock'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'weapon_uzi_woodstock': {
        name: 'UZI Wooden Stock',
        description: 'Will only fit on the UZI.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_uzi_wooden_stock'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    '2343591895': {
        name: 'Flash Light',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_flashlight'),
        weight: 11.0,
        context: {
            useItem: true,
        }
    },
    'miningprobe': {
        name: 'Mining Probe',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_metaldetector'),
        weight: 20.0,
        context: {
            useItem: true,
        }
    },
    'miningpickaxe': {
        name: 'Mining Pickaxe',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_pickaxe'),
        weight: 20.0,
        context: {
            useItem: true,
        }
    },
    'mininggem': {
        name: 'Mined Gemstone',
        description: 'Go get rid of this shit!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_gallery_diamond'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'miningcoal': {
        name: 'Mined Coal',
        description: 'Go get rid of this shit!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_coal'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'trowel': {
        name: 'Trowel',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_trowel'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'pdevidencebag': {
        name: 'Evidence Bag',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_evidence_bag'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'ketamine': {
        name: 'Special K',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_ketamine_baggie'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'bakingsoda': {
        name: 'Cleaning Product (Baking Soda)',
        description: 'Cleans n shit yo',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_bakingsoda'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'cleaningproduct': {
        name: 'Cleaning Product',
        description: 'Cleans n shit yo',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cleaningproduct'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'cleaningproduct1': {
        name: 'Cleaning Product',
        description: 'Cleans n shit yo',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cleaningproduct2'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'hqparts': {
        name: 'HQ Car Parts',
        description: "Meta-gamed in minutes.",
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_hqparts'),
        weight: 15.0,
        context: {
            useItem: true,
        }
    },
    'cryptostick': {
        name: 'GNE Stick',
        description: 'Contains 10GNE. Somehow more valuable than DOGE',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cryptostick'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'turbokit': {
        name: 'Quality Turbo Parts',
        description: 'Turbo, might need repairs to fully function!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_vehicle_part'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'enginekit': {
        name: 'Quality Engine Parts',
        description: 'Looks like some engine parts, might need repairs to fully function!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_vehicle_part'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'transmissionkit': {
        name: 'Quality Transmission Parts',
        description: 'Transmission Parts, might need repairs to fully function!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_vehicle_part'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'brakingkit': {
        name: 'Quality Braking Parts',
        description: 'Transmission Parts, might need repairs to fully function!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_vehicle_part'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'suspensionkit': {
        name: 'Quality Suspension Parts',
        description: 'Transmission Parts, might need repairs to fully function!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_vehicle_part'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'enginebay': {
        name: 'Placeholder Item',
        description: 'Hey, dont touch this!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_vehicle_part'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'refinedaluminium': {
        name: 'Refined Aluminium',
        description: 'Refined Aluminium.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_refined_aluminium'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'refinedcopper': {
        name: 'Refined Copper',
        description: 'Refined Copper.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_refined_copper'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'refinedglass': {
        name: 'Refined Glass',
        description: 'Refined Glass.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_refined_glass'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'refinedplastic': {
        name: 'Refined Plastic',
        description: 'Refined Plastic.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_refined_plastic'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'refinedrubber': {
        name: 'Refined Rubber',
        description: 'Refined Rubber.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_refined_rubber'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'refinedscrap': {
        name: 'Refined Scrap',
        description: 'Refined Scrap.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_refined_scrap'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'refinedsteel': {
        name: 'Refined Steel',
        description: 'Refined Steel.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_refined_steel'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'dodopackagesmall': {
        name: 'Dodo Small Package',
        description: 'Store various products in this packaging!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_dodobox1'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'dodopackagemedium': {
        name: 'Dodo Medium Package',
        description: 'Store various products in this packaging!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_dodobox2'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'dodopackagelarge': {
        name: 'Dodo Large Package',
        description: 'Store various products in this packaging!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_dodobox3'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'lawnchair': {
        name: 'Lawn Chair',
        description: 'Get off my lawn!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_props_lawnchair'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'lawnchair2': {
        name: 'Lawn Chair',
        description: 'Get off my lawn!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_props_lawnchair2'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'stonechisel': {
        name: 'Chisel',
        description: 'Used for stone.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_chisel'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'metalshaper': {
        name: 'Shaper',
        description: 'Used for metal.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_shaper'),
        weight: 100.0,
        context: {
            useItem: true,
        }
    },
    'woodsaw': {
        name: 'Saw',
        description: 'Used for wood.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_saw'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'usedbattery': {
        name: 'Used Battery',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_used_battery'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'detcord': {
        name: 'Det. Cord',
        description: 'Government (PD/EMS/DOC) Issued Equipment',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_detcord'),
        weight: 15.0,
        context: {
            useItem: true,
        }
    },
    'mobilecratelock': {
        name: 'Padlock',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_padlock'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'mobilecratekey': {
        name: 'Padlock Key',
        description: 'A key for some padlock',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mobilecratekey'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'mobilecratekeylock': {
        name: 'Keypad',
        description: 'A keypad for something',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_mobilecratekeylock'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'surveyortool': {
        name: 'Surveying Device',
        description: 'Various tools for surveying.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_digi_scanner'),
        weight: 11.0,
        context: {
            useItem: true,
        }
    },
    'agenericmechanicpart': {
        name: 'Mechanical Part (A)',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_generic_mechanical_A'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'bgenericmechanicpart': {
        name: 'Mechanical Part (B)',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_generic_mechanical_B'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'cgenericmechanicpart': {
        name: 'Mechanical Part (C)',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_generic_mechanical_C'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'dgenericmechanicpart': {
        name: 'Mechanical Part (D)',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_generic_mechanical_D'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'mgenericmechanicpart': {
        name: 'Mechanical Part (M)',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_generic_mechanical_M'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'sgenericmechanicpart': {
        name: 'Mechanical Part (S)',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_generic_mechanical_S'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'xgenericmechanicpart': {
        name: 'Mechanical Part (X)',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_generic_mechanical_X'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'genericelectronicpart': {
        name: 'Electronic Part',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_generic_electronic'),
        weight: 10.0,
        context: {
            useItem: true,
        }
    },
    'housesafe': {
        name: 'Home Safe',
        description: 'Verying tempting to crack into...',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_housesafe'),
        weight: 100.0,
        context: {
            useItem: true,
        }
    },
    'Desomorphine': {
        name: 'Metamorphine',
        description: 'Dumpster Flu Shot',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_desomorphine'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'Desomorphine_used': {
        name: 'Used Syringe',
        description: 'I would not touch that if I were you.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_empty_syringe'),
        weight: 1.0,
        context: {
            useItem: true,
        }
    },
    'wateringcan': {
        name: 'Used Syringe',
        description: 'Fill this at a river or lake.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('wateringcan'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'farmhoe': {
        name: 'Hoe',
        description: 'Used to plant groups of crops.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_hoe'),
        weight: 3.0,
        context: {
            useItem: true,
        }
    },
    'drone_lspd': {
        name: 'Police Drone',
        description: 'Government (PD/EMS/DOC) Issued Equipment',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_drone'),
        weight: 11.0,
        context: {
            useItem: true,
        }
    },
    'drone_civ': {
        name: 'Drone',
        description: 'It flies!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_drone'),
        weight: 11.0,
        context: {
            useItem: true,
        }
    },
    'rccontroller': {
        name: 'Remote Controller',
        description: 'Used to control a variety of RC vehicles.',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_drone_control'),
        weight: 2.0,
        context: {
            useItem: true,
        }
    },
    'C4_dev': {
        name: 'C4',
        description: 'Beep...Beep...Beep...',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_c4'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'car_bomb': {
        name: 'Car Bomb',
        description: 'Beep...Beep...Beep...',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_phone_bomb'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'car_bomb_defused': {
        name: 'Defused Car Bomb',
        description: 'You should try and shake it!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_phone_bomb'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'C4_defused': {
        name: 'Defused C4',
        description: 'You should try and shake it!',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_c4'),
        weight: 5.0,
        context: {
            useItem: true,
        }
    },
    'bombmirror': {
        name: 'Car Bomb Detector',
        description: 'Helps stop boom boom',
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
        name: 'Stolen Trunk',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cartrunk'),
        weight: 25.0,
        context: {
            useItem: true,
        }
    },
    'stolencardoor': {
        name: 'Stolen Door',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_cardoor'),
        weight: 25.0,
        context: {
            useItem: true,
        }
    },
    'stolencarwheel': {
        name: 'Stolen Wheel',
        description: '',
        decayrate: 0.0,
        stackable: false,
        image: createImage('np_carwheel'),
        weight: 25.0,
        context: {
            useItem: true,
        }
    },
    'stolencarhood': {
        name: 'Stolen Hood',
        description: '',
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