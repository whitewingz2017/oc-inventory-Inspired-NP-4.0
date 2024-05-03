import { Show, createSignal, onCleanup, onMount } from 'solid-js'
import { ActionBar } from './Components/ActionBar/ActionBar'
import { Character } from './Components/Character/Character'

import { PrimaryInventory } from './Components/PrimaryInventories/PrimaryInventory'
import { SecondaryInventory } from './Components/SecondaryInventories/SecondaryInventory'
import { getInventoryContext } from '../provider'
import { Notification } from './Components/Notifications/Notifications'
import { nuiAction } from '../Callbacks'

export const Inventory = () => {
    const [enterSplitArea, setInActionLocation] = createSignal<boolean>(false);
    const [splittingValue, setSplittingValue] = createSignal<number>(1);
    const [notiId, setNotiId] = createSignal<number>(1);
    const {
        displayActionbar,
        hoveringItem,
        setHoveringItem,
        splittingItem,
        setSplittingItem,
        show,
        setShow,
        draggingItem,
        setDraggingItem,
        itemList,
        setInventory,
        Notifications,
        SetNotfications,
        setDisplayActionBar,
        setPlayerState,
        setMovingSplitItem,
        setActionbarItems,
        hoveringWound,
        woundPosition,
        setHoveringWound,
        Inventory
    } = getInventoryContext()

    const position = useMousePosition()
    function useMousePosition() {
        const [position, setPosition] = createSignal({ x: 0, y: 0 });

        const updatePosition = (e: any) => {
            if (hoveringItem.frozenPosition) { return }
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updatePosition);

        onCleanup(() => {
            window.removeEventListener('mousemove', updatePosition);
        });

        return position;
    }

    const onMessage = async (data: any) => {
        const eventData: any = data.data
        // console.log("WTF", eventData.event, JSON.stringify(eventData))
        // console.log("SHESH", eventData.Inventory, JSON.stringify(eventData.Inventory))
        if (eventData.show) {
            setShow(eventData.show)
        }

        if (eventData.Inventory) {
            setInventory(eventData.Inventory)
        }

        if (eventData.event === 'inventory:toggleActionbar') {
            setDisplayActionBar(!displayActionbar())
        }

        if (eventData.PlayerData) {
            setPlayerState(eventData.PlayerData)
        }

        if (eventData.event === 'inventory:sendNotification') {
            setNotiId(notiId() + 1)
            SetNotfications([...Notifications, {
                id: notiId(),
                text: itemList[eventData.item].name,
                action: eventData.action,
                image: itemList[eventData.item].image,
                count: eventData.count,
                color: eventData.action === 'Added' ? 'Green' : eventData.action === 'Removed' ? 'Red' : 'Grey'
            }])
        }

        if (eventData.actionBarItems) {
            setActionbarItems(eventData.actionBarItems)
        }
    };

    const handleKeyDown = (event: any) => {
        if (event.key === 'Escape') {
            setShow(false);

            nuiAction('closeInventory', {});
            setSplittingItem(false)
            setHoveringWound(false)
            setHoveringItem({
                show: false,
                frozenPosition: false,
                showingOptions: false,
                Information: []
            })
        }
    };

    return (
        onMount(async () => {
            window.addEventListener('message', onMessage)
            window.addEventListener('keydown', handleKeyDown);
        }),

        onCleanup(() => {
            window.removeEventListener('message', onMessage)
            window.removeEventListener('keydown', handleKeyDown);
        }),

        <div
            class="font-font text-mediumspringgreen-100 h-screen w-screen"
            onClick={() => {
                if (hoveringItem.frozenPosition && !enterSplitArea()) {
                    setHoveringItem({
                        show: false,
                        showingOptions: false,
                        frozenPosition: false,
                        Information: hoveringItem.Information,
                        isSideSlot: false,
                    })

                    setSplittingItem(false)
                }
            }}
        >
            <Show
                when={show()}
            >
                <div
                    class="flex h-full w-full justify-center [background:radial-gradient(83%_83%_at_50%_50%,_rgba(12,_13,_18,_0.96),_rgba(14,_15,_19,_0.96))]"
                >

                    <div
                        class="relative z-10 grid h-full min-w-max grid-cols-3 pb-8 pl-24 pr-24 pt-32"
                    >
                        <Character />

                        <PrimaryInventory />

                        {Inventory.PrimarySecondaryInventory &&
                            <SecondaryInventory />
                        }
                    </div>
                </div>
            </Show>

            <Show
                when={hoveringWound() && show()}
            >
                <div
                    class="infoWounds"
                    style={`left: calc(${position().x}px); top: calc(${position().y}px); margin-left: ${woundPosition() === 'left' ? `-24.33vh` : `1.6vh`}`}

                >
                    Information
                    <div
                        class="infoItem"
                    >
                        Bullets
                        <div
                            class="infoResult"
                        >
                            0
                        </div>
                    </div>
                    
                    <div
                        class="infoItem"
                    >
                        Broken
                        <div
                            class="infoResult"
                        >
                            No
                        </div>
                    </div>
                    
                    <div
                        class="infoItem"
                    >
                        Severity
                        <div
                            class="infoResult"
                        >
                            None
                        </div>
                    </div>

                    <div
                        class="infoItem"
                    >
                        Bleeding
                        <div
                            class="infoResult"
                        >
                            No
                        </div>
                    </div>
                </div>
            </Show>

            <Show
                when={draggingItem.isDragging && show()}
            >
                <div
                    class="absolute z-10 flex min-w-[12rem] max-w-[15rem] flex-col overflow-hidden"
                    style={`left: calc(${position().x}px - 2.5rem); top: calc(${position().y}px - 2.5rem); pointer-events: none;`}
                >
                    <div
                        class="flex flex-col gap-1 text-sm text-white"
                        style="pointer-events: none;"
                    >
                        <div
                            class="box-c relative h-24 w-24 rounded [background:radial-gradient(83%_83%_at_50%_50%,_rgba(180,_180,_180,_0.15),_rgba(120,_120,_120,_0.05))] [border:1px_solid_transparent]"
                            style="pointer-events: none;"
                        >
                            <div
                                class="pointer-events-none bg-black opacity-50 h-full w-full overflow-hidden rounded-sm border:1px_solid_transparent]"
                            >
                                <div
                                    class=" text-outline absolute right-0 top-0 z-10 rounded-br rounded-tl pr-2 pt-1 text-sm font-bold text-gray-300"
                                    style="pointer-events: none;"
                                >
                                    {draggingItem.quantity}
                                </div>

                                <img
                                    class="pointer-events-none absolute top-0 w-full object-cover px-2 pb-2 pt-[0.375rem]"
                                    src={draggingItem.Item.image}
                                    style="pointer-events: none; opacity: 1"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Show>

            <Show
                when={hoveringItem.show && show() && !draggingItem.isDragging}
            >
                <div
                    class="absolute z-10 flex min-w-[12rem] max-w-[15rem] flex-col overflow-hidden" style={`left: calc(${position().x}px + 1rem); top: ${position().y}px;`}
                    onMouseEnter={() => setInActionLocation(true)}
                    onMouseLeave={() => setInActionLocation(false)}
                >
                    <div
                        class="flex flex-col gap-1 text-sm text-white"
                    >
                        <div
                            class="flex flex-col gap-2 rounded p-4 ring-1 ring-black ring-opacity-5 [background:radial-gradient(83%_83%_at_50%_50%,_rgba(80,_80,_80,_0.9),_rgba(40,_40,_40,_0.9))]"
                        >
                            <div>
                                {itemList[hoveringItem.Information?.itemId].name}
                            </div>

                            <div
                                class="flex gap-1 text-sm text-gray-300"
                            >
                                <div
                                    class="flex items-center rounded-sm bg-neutral-900/50 p-1"
                                >
                                    <span
                                        class="material-symbols-rounded text-sm"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 512 512"
                                            height="1vh"
                                            width="1vh"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M510.28 445.86l-73.03-292.13c-3.8-15.19-16.44-25.72-30.87-25.72h-60.25c3.57-10.05 5.88-20.72 5.88-32 0-53.02-42.98-96-96-96s-96 42.98-96 96c0 11.28 2.3 21.95 5.88 32h-60.25c-14.43 0-27.08 10.54-30.87 25.72L1.72 445.86C-6.61 479.17 16.38 512 48.03 512h415.95c31.64 0 54.63-32.83 46.3-66.14zM256 128c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.36 32-32 32z"
                                            ></path>
                                        </svg>
                                    </span> {itemList[hoveringItem.Information?.itemId].weight}kg
                                </div>
                                <div
                                    class="flex items-center rounded-sm bg-neutral-900/50 p-1"
                                >
                                    <span
                                        class="material-symbols-rounded text-sm"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 24 24"
                                            height="1.05vh"
                                            width="1.05vh"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill="none"
                                                d="M0 0h24v24H0z"
                                            ></path>

                                            <path
                                                d="m13.783 15.172 2.121-2.121 5.996 5.996-2.121 2.121zM17.5 10c1.93 0 3.5-1.57 3.5-3.5 0-.58-.16-1.12-.41-1.6l-2.7 2.7-1.49-1.49 2.7-2.7c-.48-.25-1.02-.41-1.6-.41C15.57 3 14 4.57 14 6.5c0 .41.08.8.21 1.16l-1.85 1.85-1.78-1.78.71-.71-1.41-1.41L12 3.49a3 3 0 0 0-4.24 0L4.22 7.03l1.41 1.41H2.81l-.71.71 3.54 3.54.71-.71V9.15l1.41 1.41.71-.71 1.78 1.78-7.41 7.41 2.12 2.12L16.34 9.79c.36.13.75.21 1.16.21z"
                                            />
                                        </svg>
                                    </span> {hoveringItem.Information?.durability}
                                </div>
                            </div>
                        </div>

                        <Show
                            when={itemList[hoveringItem.Information?.itemId].description}
                        >
                            <div
                                class="flex flex-col gap-2 rounded p-4 ring-1 ring-black ring-opacity-5 [background:radial-gradient(83%_83%_at_50%_50%,_rgba(80,_80,_80,_0.9),_rgba(40,_40,_40,_0.9))]"
                            >
                                <div>
                                    {itemList[hoveringItem.Information?.itemId].description}
                                </div>
                            </div>
                        </Show>

                        <Show
                            when={hoveringItem.showingOptions}
                        >
                            <Show
                                when={itemList[hoveringItem.Information?.itemId].context.openItem && !splittingItem()}
                            >
                                <div
                                    onClick={() => {
                                        nuiAction('opeItem', {
                                            ItemId: hoveringItem.Information.itemId,
                                            isSideSlot: hoveringItem.isSideSlot,
                                            slot: hoveringItem.isSideSlot ? hoveringItem.slot : hoveringItem.fromSlot,
                                            fromInventory: hoveringItem.isSideSlot ? null : hoveringItem.fromInventory,
                                            itemAction: itemList[hoveringItem.Information.itemId].context.action
                                        })
                                        console.log("OH SHIT",JSON.stringify(hoveringItem))
                                        // nuiAction('closeInventory')
                                        // setShow(false)

                                        setHoveringItem({
                                            show: false,
                                            frozenPosition: false,
                                            showingOptions: false,
                                            Information: []
                                        })
                                    }}
                                    class="rounded ring-1 ring-black ring-opacity-5 [background:radial-gradient(83%_83%_at_50%_50%,_rgba(80,_80,_80,_0.9),_rgba(40,_40,_40,_0.9))]"
                                >
                                    <div
                                        class="text-mediumspringgreen-100 hover:bg-mediumspringgreen-200 flex cursor-pointer rounded px-2 py-3 text-sm hover:text-white"
                                    >
                                        <div
                                            class="flex h-5 w-5 items-center pl-2 pr-9"
                                        >
                                            <span
                                                class="material-symbols-rounded text-2xl"
                                            >
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    stroke-width="0"
                                                    viewBox="0 0 24 24"
                                                    height="2vh"
                                                    width="2vh"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill="none"
                                                        d="M0 0h24v24H0z"
                                                    ></path>

                                                    <path
                                                        d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <div
                                            class="self-center text-white"
                                        >
                                            {itemList[hoveringItem.Information?.itemId].context.openItem}
                                        </div>
                                    </div>
                                </div>
                            </Show>

                            <Show
                                when={itemList[hoveringItem.Information?.itemId].context.useItem && !splittingItem() && hoveringItem.personalInventory}
                            >
                                <div
                                    class="rounded ring-1 ring-black ring-opacity-5 [background:radial-gradient(83%_83%_at_50%_50%,_rgba(80,_80,_80,_0.9),_rgba(40,_40,_40,_0.9))]"
                                    onClick={() => {
                                        nuiAction('useItem', {
                                            ItemId: hoveringItem.Information.itemId,
                                            Info: hoveringItem.Information
                                        })
                                        nuiAction('closeInventory')
                                        setShow(false)

                                        setHoveringItem({
                                            show: false,
                                            frozenPosition: false,
                                            showingOptions: false,
                                            Information: []
                                        })
                                    }}
                                >
                                    <div
                                        class="text-mediumspringgreen-100 hover:bg-mediumspringgreen-200 flex cursor-pointer rounded px-2 py-3 text-sm hover:text-white"
                                    >
                                        <div
                                            class="flex h-5 w-5 items-center pl-2 pr-9"
                                        >
                                            <span
                                                class="material-symbols-rounded text-2xl"
                                            >
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    stroke-width="0"
                                                    viewBox="0 0 24 24"
                                                    height="2vh"
                                                    width="2vh"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill="none"
                                                        d="M0 0h24v24H0z"
                                                    ></path>

                                                    <path
                                                        d="M9 11.24V7.5a2.5 2.5 0 0 1 5 0v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74c-3.6-.76-3.54-.75-3.67-.75-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <div
                                            class="self-center text-white"
                                        >
                                            Use item
                                        </div>
                                    </div>
                                </div>
                            </Show>

                            <Show
                                when={hoveringItem.isSideSlot && !splittingItem()}
                            >
                                <div
                                    class="rounded ring-1 ring-black ring-opacity-5 [background:radial-gradient(83%_83%_at_50%_50%,_rgba(80,_80,_80,_0.9),_rgba(40,_40,_40,_0.9))]"
                                    onClick={() => {
                                        nuiAction('unequipItem', {
                                            ItemId: hoveringItem.Information.itemId,
                                            Slot: hoveringItem.slot,
                                            Inventory: hoveringItem.fromInventory
                                        })

                                        setHoveringItem({
                                            show: false,
                                            frozenPosition: false,
                                            showingOptions: false,
                                            Information: []
                                        })
                                    }}
                                >
                                    <div
                                        class="text-mediumspringgreen-100 hover:bg-mediumspringgreen-200 flex cursor-pointer rounded px-2 py-3 text-sm hover:text-white"
                                    >
                                        <div
                                            class="flex h-5 w-5 items-center pl-2 pr-9"
                                        >
                                            <span
                                                class="material-symbols-rounded text-2xl"
                                            >
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    stroke-width="0"
                                                    viewBox="0 0 24 24"
                                                    height="2vh"
                                                    width="2vh"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill="none"
                                                        d="M0 0h24v24H0z"
                                                    ></path>
                                                    
                                                    <path
                                                        d="M20 8v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.86 1.28-3.41 3-3.86V2h3v2h4V2h3v2.14c1.72.45 3 2 3 3.86zM6 12v2h10v2h2v-4H6z"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <div
                                            class="self-center text-white"
                                        >
                                            Unequip item
                                        </div>
                                    </div>
                                </div>
                            </Show>

                            <Show
                                when={itemList[hoveringItem.Information?.itemId].context.equipItem && !splittingItem() && !hoveringItem.isSideSlot}
                            >
                                <div
                                    class="rounded ring-1 ring-black ring-opacity-5 [background:radial-gradient(83%_83%_at_50%_50%,_rgba(80,_80,_80,_0.9),_rgba(40,_40,_40,_0.9))]"
                                    onClick={() => {
                                        nuiAction('equipItem', {
                                            ItemId: hoveringItem.Information.itemId,
                                            Slot: hoveringItem.slot,
                                            Inventory: hoveringItem.fromInventory
                                        })

                                        setHoveringItem({
                                            show: false,
                                            frozenPosition: false,
                                            showingOptions: false,
                                            Information: []
                                        })
                                    }}
                                >
                                    <div
                                        class="text-mediumspringgreen-100 hover:bg-mediumspringgreen-200 flex cursor-pointer rounded px-2 py-3 text-sm hover:text-white"
                                    >
                                        <div
                                            class="flex h-5 w-5 items-center pl-2 pr-9
                                        ">
                                            <span
                                                class="material-symbols-rounded text-2xl"
                                            >
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    stroke-width="0"
                                                    viewBox="0 0 384 512"
                                                    height="2vh"
                                                    width="2vh"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M80.95 472.23c-4.28 17.16 6.14 34.53 23.28 38.81 2.61.66 5.22.95 7.8.95 14.33 0 27.37-9.7 31.02-24.23l25.24-100.97-52.78-52.78-34.56 138.22zm14.89-196.12L137 117c2.19-8.42-3.14-16.95-11.92-19.06-43.88-10.52-88.35 15.07-99.32 57.17L.49 253.24c-2.19 8.42 3.14 16.95 11.92 19.06l63.56 15.25c8.79 2.1 17.68-3.02 19.87-11.44zM368 160h-16c-8.84 0-16 7.16-16 16v16h-34.75l-46.78-46.78C243.38 134.11 228.61 128 212.91 128c-27.02 0-50.47 18.3-57.03 44.52l-26.92 107.72a32.012 32.012 0 0 0 8.42 30.39L224 397.25V480c0 17.67 14.33 32 32 32s32-14.33 32-32v-82.75c0-17.09-6.66-33.16-18.75-45.25l-46.82-46.82c.15-.5.49-.89.62-1.41l19.89-79.57 22.43 22.43c6 6 14.14 9.38 22.62 9.38h48v240c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V176c.01-8.84-7.15-16-15.99-16zM240 96c26.51 0 48-21.49 48-48S266.51 0 240 0s-48 21.49-48 48 21.49 48 48 48z"/>
                                                </svg>
                                            </span>
                                        </div>
                                        <div
                                            class="self-center text-white"
                                        >
                                            Equip item
                                        </div>
                                    </div>
                                </div>
                            </Show>

                            <Show
                                when={!splittingItem() && hoveringItem.Information?.amount > 1}
                            >
                                <div
                                    class="rounded ring-1 ring-black ring-opacity-5 [background:radial-gradient(83%_83%_at_50%_50%,_rgba(80,_80,_80,_0.9),_rgba(40,_40,_40,_0.9))]"
                                    onClick={() => setSplittingItem(true)}
                                >
                                    <div
                                        class="text-mediumspringgreen-100 hover:bg-mediumspringgreen-200 flex cursor-pointer rounded px-2 py-3 text-sm hover:text-white"
                                    >
                                        <div
                                            class="flex h-5 w-5 items-center pl-2 pr-9"
                                        >
                                            <span
                                                class="material-symbols-rounded text-2xl"
                                                style={{
                                                    rotate: '90deg'
                                                }}
                                            >
                                                <svg
                                                    stroke="currentColor"
                                                    fill="none"
                                                    stroke-width="2"
                                                    viewBox="0 0 24 24"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    height="2vh"
                                                    width="2vh"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M16 3h5v5"
                                                    ></path>

                                                    <path
                                                        d="M8 3H3v5"
                                                    ></path>

                                                    <path
                                                        d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"
                                                    ></path>

                                                    <path
                                                        d="m15 9 6-6"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </div>

                                        <div
                                            class="self-center text-white"
                                        >
                                            Split item
                                        </div>
                                    </div>
                                </div>
                            </Show>

                            <Show
                                when={splittingItem()}
                            >
                                <form
                                    class="flex flex-col items-end gap-2 rounded p-4 ring-1 ring-black ring-opacity-5 [background:radial-gradient(83%_83%_at_50%_50%,_rgba(80,_80,_80,_0.9),_rgba(40,_40,_40,_0.9))]"
                                >
                                    <div
                                        class="flex w-full items-center justify-between"
                                    >
                                        <div>
                                            Amount:
                                        </div>
                                        <input
                                            inputmode="numeric"
                                            type="number"
                                            min="1"
                                            class="font-font h-8 w-12 bg-transparent text-center text-sm text-white"
                                            max={hoveringItem.Information?.amount}
                                            value={splittingValue()}
                                            onInput={(e: any) => {
                                                console.log(e.target.value)
                                                setSplittingValue(e.target.value)
                                            }}
                                        />
                                    </div>

                                    <input
                                        type="range"
                                        min="1"
                                        class="accent-mediumspringgreen-200 bg-mediumspringgreen-100 w-full"
                                        max={hoveringItem.Information?.amount}
                                        value={splittingValue()}
                                        onInput={(e: any) => {
                                            setSplittingValue(e.target.value)
                                        }}
                                    />

                                    <button
                                        class="bg-mediumspringgreen-300 hover:bg-mediumspringgreen-200 font-font h-8 w-full rounded text-center text-sm text-white"
                                        onClick={(e: any) => {
                                            e.preventDefault()
                                            setMovingSplitItem(true)

                                            setSplittingItem(false)

                                            setDraggingItem({
                                                isDragging: true,
                                                Item: itemList[hoveringItem.Information.itemId],
                                                quantity: splittingValue(),
                                                fromSlot: hoveringItem.fromSlot,
                                                fromInventory: hoveringItem.fromInventory,
                                            })

                                            setHoveringItem({
                                                show: false,
                                                showingOptions: false,
                                                Information: hoveringItem.Information,
                                                frozenPosition: false,
                                                canUse: hoveringItem.canUse,
                                                personalInventory: hoveringItem.personalInventory
                                            });

                                            setSplittingValue(1)
                                        }}
                                    >
                                        Split
                                    </button>
                                </form>
                            </Show>

                            <Show
                                when={hoveringItem.personalInventory && !splittingItem()}
                            >
                                <div
                                    class="rounded ring-1 ring-black ring-opacity-5 [background:radial-gradient(83%_83%_at_50%_50%,_rgba(80,_80,_80,_0.9),_rgba(40,_40,_40,_0.9))]"
                                >
                                    <div
                                        class="text-mediumspringgreen-100 hover:bg-mediumspringgreen-200 flex cursor-pointer rounded px-2 py-3 text-sm hover:text-white"
                                    >
                                        <div
                                            class="flex h-5 w-5 items-center pl-2 pr-9"
                                        >
                                            <span
                                                class="material-symbols-rounded text-2xl"
                                                style={{
                                                    rotate: '-90deg'
                                                }}
                                            >
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    stroke-width="0"
                                                    viewBox="0 0 256 256"
                                                    height="2vh"
                                                    width="2vh"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M240,88v64a8,8,0,0,1-8,8H168a8,8,0,0,1-5.66-13.66l26.19-26.18A88,88,0,0,0,40,184a8,8,0,0,1-16,0,104,104,0,0,1,175.86-75.18l26.48-26.48A8,8,0,0,1,240,88Z"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <div
                                            class="self-center text-white"
                                        >
                                            Give item
                                        </div>
                                    </div>
                                </div>
                            </Show>
                        </Show>
                    </div>
                </div>
            </Show>

            <Notification />

            <ActionBar />
        </div>
    )
}