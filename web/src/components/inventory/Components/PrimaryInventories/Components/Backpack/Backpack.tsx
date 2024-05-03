import { For } from 'solid-js'
import { CreateSlot } from '../Slots/Slots'
import { getInventoryContext } from '../../../../../provider'
import Polygon from '../../../../../../assets/polygon.png'
import Polygon1 from '../../../../../../assets/polygon1.png'

export const Backpack = () => {
    const {
        Inventory,
        itemList,
        setActiveInventory
    } = getInventoryContext()

    return (
        <>
            <div
                class="flex h-20 w-full"
            >
                <div
                    class="relative mt-1"
                >
                    <img
                        class="absolute left-4 top-4 h-12 w-12"
                        alt=""
                        src={Polygon}
                    />

                    <img
                        class="absolute left-4 top-2 h-12 w-12"
                        alt=""
                        src={Polygon1}
                    />

                    <span
                        class="material-symbols-rounded absolute left-[1.75rem] top-[1.75rem] text-[1.5rem] [text-shadow:0px_0px_12px_rgba(0,_248,_185,_0.25)]"
                    >
                        <svg
                            style={{ "margin-top": '-0.3vh' }}
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            height="2.5vh"
                            width="2.2vh"
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
                    class="flex w-1/2 flex-col place-content-center pl-20 pt-1"
                >
                    <div
                        class="text-xl font-semibold [text-shadow:0px_0px_5px_rgba(0,_248,_185,_0.05)]"
                    >
                        Backpack
                    </div>

                    <div
                        class="text-[0.88rem] leading-[108.5%] text-gray-300"
                    >
                        {Inventory.PersonalBackpack.Weight}kg / {Inventory.PersonalBackpack.maxWeight}kg
                    </div>
                </div>

                <div
                    class="flex-grow pr-2"
                />
            </div>

            <div
                onMouseEnter={() => {
                    console.log('Setting inventory as ' + Inventory.PersonalBackpack.inventoryName)
                    setActiveInventory(Inventory.PersonalBackpack.inventoryName)
                }}
                onMouseLeave={() => setActiveInventory('')}
            >
                <div
                    class="overflow-y-auto [scrollbar-gutter:stable]"
                    style="max-height: 20.5rem;"
                >
                    <div
                        class="inline-grid justify-items-center overflow-x-hidden"
                        style="grid-template-columns: repeat(5, minmax(0px, 1fr)); grid-template-rows: repeat(5, minmax(0px, 1fr));"
                    >
                        <For
                            each={Inventory.PersonalBackpack.slots}
                        >
                            {(pSlot: any) => (
                                <CreateSlot {...pSlot} />
                            )}
                        </For>    
                    </div>
                </div>
            </div>
        </>
    )
}