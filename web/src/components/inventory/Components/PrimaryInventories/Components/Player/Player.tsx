import { For } from "solid-js"
import { CreateSlot } from "../Slots/Slots"
import { getInventoryContext } from "../../../../../provider"

export const Player = () => {
    const {
        Inventory
    } = getInventoryContext()
    return (
        <div
                    class="overflow-y-auto [scrollbar-gutter:stable]"
                    style="max-height: 20.5rem;"
                >
            <div
                class="inline-grid justify-items-center overflow-x-hidden"
                style="grid-template-columns: repeat(5, minmax(0px, 1fr)); grid-template-rows: repeat(2, minmax(0px, 1fr));"
            >
                <For
                    each={Inventory.PersonalInventory.slots}
                >
                    {(pSlot: any) => (
                        <CreateSlot {...pSlot} />
                    )}
                </For>    
            </div>
        </div>
    )
}