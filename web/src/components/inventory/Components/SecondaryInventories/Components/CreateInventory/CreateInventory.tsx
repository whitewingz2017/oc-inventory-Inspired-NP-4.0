import { For } from 'solid-js'
import { CreateSlot } from '../Slots/Slots'
import { getInventoryContext } from '../../../../../provider'

import Polygon from '../../../../../../assets/polygon.png'
import Polygon1 from '../../../../../../assets/polygon1.png'

export const CreateInventory = (props: any) => {
    let weight = 0
    const {
        itemList,
        setActiveInventory
    } = getInventoryContext();

    return (<>
        <div>
            <div>
                <div
                    class="ml-2 rounded"
                    style="background: radial-gradient(83% 83% at 50% 50%, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));"
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
                                <svg
                                    style={{"margin-top": '-0.1vh'}}
                                    stroke="currentColor" fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 24 24"
                                    height="2.5vh"
                                    width="2.2vh"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="none"
                                        d="M0 0h24v24H0V0z"
                                    />

                                    <path
                                        d="M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm-5 12H9v-2h6v2zm5-7H4V4l16-.02V7z"
                                    />
                                </svg>
                            </span>
                        </div>

                        <div
                            class="flex w-1/2 flex-col place-content-center pl-20 pt-1"
                        >
                            <div
                                class="text-xl font-semibold [text-shadow:0px_0px_5px_rgba(0,_248,_185,_0.05)]"
                            >
                                {props.inventoryName}
                            </div>
                            <div
                                class="text-[0.88rem] leading-[108.5%] text-gray-300"
                                onClick={() => {
                                    console.log(JSON.stringify(props, null, 2))
                                }}   
                            >
                                {props.Weight}kg / {props.maxWeight}kg
                            </div>
                        </div>

                        <div
                            class="flex-grow pr-2"
                        >
                            <div
                                class="flex h-full items-center justify-end pr-2"
                            >
                                <div
                                    class="bg-mediumspringgreen-300/10 hover:bg-mediumspringgreen-200 flex h-16 w-10 select-none place-content-center place-items-center rounded text-center hover:text-white"
                                    onClick={() => {
                                        props.SetInventoryOpen(props) 
                                    }}
                                >
                                    <span
                                        class="material-symbols-rounded pointer-events-none text-[2rem] [text-shadow:0px_4px_28px_rgba(0,_248,_185,_0.55)]"
                                    >
                                        <svg
                                            width={'1.7vh'}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            style={{
                                                rotate: props.InventoryOpened ? '' : '-90deg'
                                            }}
                                        >
                                            <path
                                                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                                                fill='#03e0a9'
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="overflow-y-auto [scrollbar-gutter:stable]"
                    style="max-height: 20.5rem;"
                    // style={{
                    //     "max-height": '20.5rem'
                    // }}
                    onMouseEnter={() => {
                        console.log('Setting active inventory ' + props.name)
                        setActiveInventory(props.name)
                    }}
                    onMouseLeave={() => setActiveInventory('')}
                >
                    <div
                        class="inline-grid justify-items-center overflow-x-hidden"
                        style="grid-template-columns: repeat(5, minmax(0px, 1fr));"
                    >
                        <For
                            each={props}
                        >
                            {(pSlot: any) => (
                              <CreateSlot {...pSlot} />

                            )}
                        </For>
                        {/* {props.map((pSlot: any) => (
                            <CreateSlot {...pSlot} />
                        ))} */}
                    </div>
                </div>
            </div>
        </div>
        </>)
}