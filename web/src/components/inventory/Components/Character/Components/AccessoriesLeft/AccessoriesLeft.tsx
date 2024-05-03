import { For, createSignal } from "solid-js"
import { getInventoryContext } from "../../../../../provider"
import { createStore } from "solid-js/store";

export const AccessoriesLeft = () => {
    const {
        Inventory,
        draggingItem,
        itemList,
        setActiveInventory
    } = getInventoryContext()
    // const [acceptingItem, setAcceptingItem] = createSignal<boolean>(false)

    const [slotIcons, setSlotIcons] = createStore<any>({
        'hat': <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="3.5vh" width="3.4vh" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3a9 9 0 0 0-9 9v7c0 1.1.9 2 2 2h4v-8H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-4v8h4c1.1 0 2-.9 2-2v-7a9 9 0 0 0-9-9z"></path></svg>,
        'mask': <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="3.5vh" width="3.4vh" xmlns="http://www.w3.org/2000/svg"><path d="M413.28 123.063C366.787 123.317 306.08 143 255.845 143c-56.868 0-124.174-23.704-171-19.156-23.414 2.274-40.642 10.16-52.28 30.937-11.64 20.78-17.23 56.337-10.97 113.19 8.578 77.917 73.225 118.973 128.656 99.405 11.513-4.064 30.972-25.256 49-46.125 9.014-10.434 17.993-20.687 27.03-28.72 9.04-8.03 18.23-14.624 29.564-14.624 11.335 0 20.493 6.594 29.53 14.625 9.04 8.033 18.018 18.286 27.032 28.72 18.028 20.87 37.487 42.06 49 46.125 55.45 19.574 118.93-21.672 128.688-99.563 7.137-56.986 1.753-92.528-9.938-113.28-11.69-20.754-29.346-28.665-53.22-30.907-2.983-.28-6.05-.46-9.186-.53-1.47-.035-2.97-.04-4.47-.032zM135.064 181.72c22.378-.2 44.746 10.556 67.125 30.78-43.4 54.67-108.488 37.044-130.188 0 21.022-20.738 42.04-30.594 63.063-30.78zm234.625 0c.7-.016 1.394-.007 2.093 0 21.023.186 42.073 10.042 63.095 30.78-21.7 37.044-86.82 54.67-130.22 0 21.68-19.592 43.354-30.312 65.033-30.78z"></path></svg>,
        'glasses': <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="3.5vh" width="3.4vh" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M224 232a32 32 0 0 1 64 0m160-32h16m-400 0H48m16 0c0 96 16 128 80 128s80-32 80-128c0 0-16-16-80-16s-80 16-80 16zm384 0c0 96-16 128-80 128s-80-32-80-128c0 0 16-16 80-16s80 16 80 16z"></path></svg>,
        'armor': <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="3.5vh" width="3.4vh" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path></svg>,
        'bag': <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="3.5vh" width="3.4vh" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 8v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.86 1.28-3.41 3-3.86V2h3v2h4V2h3v2.14c1.72.45 3 2 3 3.86zM6 12v2h10v2h2v-4H6z"></path></svg>,
    })

    const calculateBorderColor = (acceptedItems: any, currentItem: any) => {
        if (currentItem === null) {
            return 'border:1px_solid_#00F8B9'
        }

        if (!draggingItem.isDragging) {
            return 'border:1px_solid_#00F8B9'
        }

        if (acceptedItems.includes(currentItem.name)) {
            return 'border:1px_solid_#00F8B9'
        } else {
            return 'border:1px_solid_#FF0000'
        }
    }

    const calculateBackgroundColor = (acceptedItems: any, currentItem: any) => {
        if (currentItem === null) {
            // setAcceptingItem(true)
            return 'background:radial-gradient(83%_83%_at_50%_50%,_rgba(0,_248,_185,_0.15),_rgba(0,_102,_76,_0.25))'
        }

        if (!draggingItem.isDragging) {
            // setAcceptingItem(true)
            return 'background:radial-gradient(83%_83%_at_50%_50%,_rgba(0,_248,_185,_0.15),_rgba(0,_102,_76,_0.25))'
        }

        if (acceptedItems.includes(currentItem.name)) {
            // setAcceptingItem(true)
            return 'background:radial-gradient(83%_83%_at_50%_50%,_rgba(0,_248,_185,_0.15),_rgba(0,_102,_76,_0.25))'
        } else {
            // setAcceptingItem(false)
            return 'background:radial-gradient(83%_83%_at_50%_50%,_rgba(255,_0,_0,_0.15),_rgba(102,_0,_0,_0.25))'
        }
    }
    return (
        <div
            class="overflow-y-auto [scrollbar-gutter:stable]"
        >
            <div
                class="inline-grid justify-items-center overflow-x-hidden"
                style="grid-template-columns: repeat(1, minmax(0px, 1fr)); grid-template-rows: repeat(5, minmax(0px, 1fr));"
                onMouseEnter={() => {
                    console.log('Setting inventory as clothing')
                    setActiveInventory('clothing')
                }}
                onMouseLeave={() => setActiveInventory('')}
            >
                <For
                    each={Inventory.ClothingSlots}
                >
                    {(pSlot: any) => (
                        <div
                            class="p-2"
                        >
                            <div>
                                {/* ${acceptingItem() ? '' : 'cursor-not-allowed'} This goes below where box-c is*/}
                                <div
                                    class={`box-c relative h-24 w-24 rounded [background:radial-gradient(83%_83%_at_50%_50%,_rgba(180,_180,_180,_0.15),_rgba(120,_120,_120,_0.05))] [border:1px_solid_transparent] hover:[${draggingItem.item !== null ? calculateBackgroundColor(pSlot.acceptedItems, draggingItem.Item) : 'background:radial-gradient(83%_83%_at_50%_50%,_rgba(255,_0,_0,_0.15),_rgba(102,_0,_0,_0.25))'}] hover:[${draggingItem.Item !== null ? calculateBorderColor(pSlot.acceptedItems, draggingItem.Item) : 'border:1px_solid_#00F8B9'}]`}
                                >
                                    <div
                                        class="pointer-events-none absolute left-0 top-0 flex h-full w-full place-content-center place-items-center"
                                    >
                                        {pSlot.item !== null &&
                                            <>
                                                <div
                                                    class="relative flex h-full w-full flex-col items-start justify-end"
                                                >
                                                    <div
                                                        class="z-10 w-full bg-gray-700"
                                                    >
                                                        <div
                                                            class="bg-mediumspringgreen-100 h-1 w-full"
                                                            style={`width: ${pSlot.item?.durability}%;`}
                                                        />
                                                    </div>
                                                </div>

                                                <img class="pointer-events-none absolute top-0 w-full object-cover px-2 pb-2 pt-[0.375rem]" draggable="false" src={itemList[pSlot.item.itemId].image} />
                                            </>
                                        }

                                        {pSlot.item === null &&
                                            <div
                                                class="flex h-full w-full place-content-center place-items-center rounded"
                                            >
                                                <span
                                                    class="material-symbols-rounded select-none text-[2.5rem] text-gray-100/10"
                                                >
                                                    {slotIcons[pSlot.id]}
                                                </span>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </For>
            </div>
        </div>
    )
}