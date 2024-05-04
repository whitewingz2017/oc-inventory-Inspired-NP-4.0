import { For } from 'solid-js'
import { CreateInventory } from '../CreateInventory/CreateInventory'
import { getInventoryContext } from '../../../../../provider'


export const AdditionalInventories = () => {
    const {
        Inventory,
        setInventory
    } = getInventoryContext()
    // console.log("ADDITIONAL INV",Inventory.slots,JSON.stringify(Inventory))
    return (
        <>
            <For
                each={Inventory.AdditionalInventories}
            >
                {(pInventory: any) => (
                    <CreateInventory 
                        {...pInventory}
                        SetInventoryOpen={(pData: any) => {
                            const updatedIndex = Inventory.AdditionalInventories.findIndex((pItem: any) => pItem.id === pData.id);
                            const AdditionalInventories = [...Inventory.AdditionalInventories];

                            if (updatedIndex !== -1) {
                                AdditionalInventories[updatedIndex] = {
                                    id: pData.id,
                                    name: pData.name,
                                    inventoryName: pData.inventoryName,
                                    maxWeight: pData.maxWeight,
                                    InventoryOpened: !pData.InventoryOpened,
                                    slots: pData.slots
                                };
                            }

                            setInventory({...Inventory, AdditionalInventories: AdditionalInventories});
                        }}
                    />
                )}
            </For>
        </>
    )
}