import { For } from 'solid-js'
import { AdditionalInventories } from './Components/AdditionalInventories/AdditionalInventories'
import { CreateSlot } from './Components/Slots/Slots'
import { getInventoryContext } from '../../../provider'

import Polygon from '../../../../assets/polygon.png'
import Polygon1 from '../../../../assets/polygon.png'
import { createStore } from 'solid-js/store'

export const SecondaryInventory = () => {
    const {
        Inventory,
        setActiveInventory
    } = getInventoryContext()

    const [Icons, setIcons] = createStore<any>({
        'Ground': <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" style={{"margin-top": '-0.3vh'}} height="2.5vh" width="2.5vh" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 20H2v-2h5.75A8.032 8.032 0 0 0 2 12.26c.64-.16 1.31-.26 2-.26 4.42 0 8 3.58 8 8zm10-7.74c-.64-.16-1.31-.26-2-.26-2.93 0-5.48 1.58-6.88 3.93a9.82 9.82 0 0 1 .87 4.07h8v-2h-5.75A8.061 8.061 0 0 1 22 12.26zm-6.36-1.24a10.03 10.03 0 0 1 4.09-5C15.44 6.16 12 9.67 12 14v.02c.95-1.27 2.2-2.3 3.64-3zm-4.22-2.17A8.527 8.527 0 0 0 6.7 4C8.14 5.86 9 8.18 9 10.71c0 .21-.03.41-.04.61.43.24.83.52 1.22.82a9.91 9.91 0 0 1 1.24-3.29z"></path></svg>,
        'Trunk': <svg  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" style={{"margin-top": '-0.3vh'}} height="2vh" width="2vh" xmlns="http://www.w3.org/2000/svg"><path d="M628.88 210.65L494.39 49.27A48.01 48.01 0 0 0 457.52 32H32C14.33 32 0 46.33 0 64v288c0 17.67 14.33 32 32 32h32c0 53.02 42.98 96 96 96s96-42.98 96-96h128c0 53.02 42.98 96 96 96s96-42.98 96-96h32c17.67 0 32-14.33 32-32V241.38c0-11.23-3.94-22.1-11.12-30.73zM64 192V96h96v96H64zm96 240c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm160-240h-96V96h96v96zm160 240c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm-96-240V96h66.02l80 96H384z"></path></svg>,
        'Glovebox': <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" style={{"margin-top": '-0.3vh'}} height="2.25vh" width="2.25vh" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"></path><path fill-rule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path></svg>
    })

    return (
        <>
            <div
                id="secondary"
                class="flex flex-col gap-10 overflow-y-auto pl-6 pr-5 [scrollbar-gutter:stable]"
            >
                <div>
                    <div>
                        <div
                            class="ml-2 rounded"
                        >
                            <div
                                class="flex h-20 w-full"
                            >
                                <div
                                    class="relative mt-1"
                                >
                                    <img
                                        class="absolute left-4 top-4 h-12 w-12" alt="" src={Polygon}
                                    />

                                    <img
                                        class="absolute left-4 top-2 h-12 w-12" alt="" src={Polygon1}
                                    />

                                    <span
                                        class="material-symbols-rounded absolute left-[1.75rem] top-[1.75rem] text-[1.5rem] [text-shadow:0px_0px_12px_rgba(0,_248,_185,_0.25)]"
                                    >
                                        {Icons[Inventory.PrimarySecondaryInventory.inventoryLabel]}
                                    </span>
                                </div>
                                <div
                                    class="flex w-1/2 flex-col place-content-center pl-20 pt-1"
                                >
                                    <div
                                        class="text-xl font-semibold [text-shadow:0px_0px_5px_rgba(0,_248,_185,_0.05)]"
                                    >
                                        {Inventory.PrimarySecondaryInventory.inventoryLabel}
                                    </div>

                                    <div
                                        class="text-[0.88rem] leading-[108.5%] text-gray-300"
                                    >
                                        {Inventory.PrimarySecondaryInventory.Weight.toFixed(1)}kg / {Inventory.PrimarySecondaryInventory.maxWeight}kg
                                    </div>
                                </div>

                                <div
                                    class="flex-grow pr-2"
                                />
                            </div>
                        </div>

                        <div
                            class="overflow-y-auto [scrollbar-gutter:stable]"
                            style="max-height: 20.5rem;"
                            onMouseEnter={() => {
                                setActiveInventory(Inventory.PrimarySecondaryInventory.inventoryName)
                            }}
                        >
                            <div
                                class="inline-grid justify-items-center overflow-x-hidden"
                                style={`grid-template-columns: repeat(5, minmax(0px, 1fr)); grid-template-rows: repeat(${Inventory.PrimarySecondaryInventory.inventoryLabel === 'Glovebox' ? '1': '5'}, minmax(0px, 1fr));`}
                            >
                                <For
                                    each={Inventory.PrimarySecondaryInventory.slots}
                                >
                                    {(pSlot: any) => (
                                        <CreateSlot {...pSlot} />
                                    )}
                                </For>  
                            </div>
                        </div>
                    </div>
                </div>

                <AdditionalInventories />
            </div>
        </>
    )
}