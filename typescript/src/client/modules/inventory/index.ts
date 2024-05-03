import { Exports } from "../../../shared/fivem/exports";

export const Inventory = {
    HasItem: async (itemId, filterOptions) => {
      return await globalThis.exports["inventory"].HasItem(itemId, filterOptions);
    },
    GetItemStacks: async (itemId, filterOptions) => {
      return await globalThis.exports["inventory"].GetItemStacks(itemId, filterOptions);
    },
    GetAllItemStacks: async (filterOptions) => {
      return await globalThis.exports["inventory"].GetAllItemStacks(filterOptions);
    },
    GetItemList: async () => {
      return await globalThis.exports["inventory"].GetItemList();
    },
    GetPlayerInventories: async () => {
      return await globalThis.exports["inventory"].GetPlayerInventories();
    },
    GetWeaponsList: () => {
      return globalThis.exports["inventory"].GetWeaponsList();
    },
    GetWeapon: (weaponHash) => {
      return globalThis.exports["inventory"].GetWeapon(weaponHash);
    },
    OpenInventory: (inventoriesToOpen, openGround) => {
      globalThis.exports["inventory"].OpenInventory(inventoriesToOpen, openGround);
    },
    UseBodySlot: (slot) => {
      return Exports.Async["inventory"].UseBodySlot(slot);
    },
    SetBodySlotDisabled: (pSlot, pDisabled, pBlockId) => {
      Exports.Sync["inventory"].SetBodySlotDisabled(pSlot, pDisabled, pBlockId);
    },
    IsBodySlotDisabled: (pSlot, pBlockId) => {
      return Exports.Sync["inventory"].IsBodySlotDisabled(pSlot, pBlockId);
    }
  };