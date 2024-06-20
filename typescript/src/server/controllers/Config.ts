export const InventoryConfig = {
    PersonalInventory: {
        Slots: 15,
        MaxWeight: 150
    },

    Backpack: {
        Slots: 25,
        MaxWeight: 250
    },

    Drop: {
        Slots: 50,
        MaxWeight: 1000
    },

    Phone: {
        Slots: 1,
        acceptedItems: [
            'phone'
        ]
    },

    Simcard: {
        id: 1,
        Slots: 1,
        acceptedItems: [
            'Sim Card'
        ]
    },

    Wallet: {
        id: 1,
        Slots: 1,
        acceptedItems: [
            'Cash'
        ],
        MaxWeight: 5
    },

    Tablet: {
        id: 1,
        Slots: 2,
        acceptedItems: [
            'chips',
            'chips_1'
        ],
        MaxWeight: 5
    },

    ApartmentStash: {
        Slots: 50,
        MaxWeight: 1000,
    },

    Pockets: {
        Slots: 5,
        MaxWeight: 125
    },

    Glovebox: {
        Slots: 7,
        MaxWeight: 150
    },

    Trunk: {
        Slots: 50,
        MaxWeight: 800
    }
}