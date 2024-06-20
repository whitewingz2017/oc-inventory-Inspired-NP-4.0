import { For, createEffect, createSignal } from "solid-js"
import { getInventoryContext } from "../../../../../provider"
import { createStore } from "solid-js/store"
import { PocketSlot } from "./Components/Slot/Slot"

export const AccessoriesRight = () => {
    const {
        Inventory,
        draggingItem,
        itemList,
        hoveringItem,
        setHoveringItem,
        setDraggingItem,
        PlayerState,
        activeInventory,
        activeSlot,
        setActiveInventory
    } = getInventoryContext()
    console.log('Inventory.Pockets.Slots',Inventory.Pockets.Slots, JSON.stringify(Inventory.Pockets.Slots))
    return (
        <div
            class="overflow-y-auto [scrollbar-gutter:stable]"
        >
            <div
                class="inline-grid justify-items-center overflow-x-hidden"
                style="grid-template-columns: repeat(1, minmax(0px, 1fr)); grid-template-rows: repeat(5, minmax(0px, 1fr));"
                onMouseEnter={() => setActiveInventory(Inventory.Pockets.name)}
                onMouseLeave={() => setActiveInventory('')}
            >
                <For
                    each={Inventory.Pockets.Slots}
                >
                    {(pSlot: any) => (
                        <PocketSlot
                            {...pSlot}
                        />
                    )}
                </For>
            </div>
        </div>
    )
}