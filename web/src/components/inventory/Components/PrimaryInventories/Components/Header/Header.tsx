import { getInventoryContext } from '../../../../../provider'

import Polygon from '../../../../../../assets/polygon.png'
import Polygon1 from '../../../../../../assets/polygon1.png'

export const Header = () => {
    const {
        Inventory,
        setSearchedItem
    } = getInventoryContext()

    return (
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
                        height="2.5vh" width="2.2vh" xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="none"
                            d="M0 0h24v24H0z"
                        />

                        <path
                            d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"
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
                    Player
                </div>

                <div
                    class="text-[0.88rem] leading-[108.5%] text-gray-300"
                >
                    {Inventory.PersonalInventory.Weight.toFixed(1)}kg / {Inventory.PersonalInventory.maxWeight}kg
                </div>
            </div>

            <div
                class="flex-grow pr-2"
            >
                <div
                    class="flex h-full w-full items-center justify-end pr-2"
                >
                    <div
                        class="flex"
                    >
                        <div
                            class="flex flex-col gap-1"
                        >
                            <div
                                class="font-font relative w-[11.6666rem] border border-solid border-neutral-700"
                            >
                                <div
                                    class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                                >
                                    <svg
                                        class="h-4 w-4 text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    id="search"
                                    class="block w-full rounded-none border border-transparent bg-transparent p-2 pl-10 text-sm text-white focus:border-transparent focus:ring-transparent"
                                    placeholder="Search"
                                    autocomplete="off"
                                    onInput={(e: any) => {
                                        setSearchedItem(e.target.value)
                                    }}
                                />
                            </div>
                            <div
                                class="flex gap-[0.4rem]"
                            >
                                <div
                                    class="hover:bg-mediumspringgreen-200 flex h-8 w-8 cursor-pointer place-content-center place-items-center rounded hover:text-white"
                                    style="filter: brightness(0.8); background: rgba(0, 248, 185, 0.1); color: unset;"
                                >
                                    <svg
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="fa"
                                        viewBox="0 0 576 512"
                                        style="height: 1em; vertical-align: -0.125em; transform-origin: center center; overflow: visible;"
                                    >
                                        <g
                                            transform="translate(288 256)"
                                            transform-origin="144 0"
                                        >
                                            <g
                                                transform="translate(0,0) scale(1,1)"
                                            >
                                                <path
                                                    d="M528 56c0-13.3-10.7-24-24-24s-24 10.7-24 24v8H32C14.3 64 0 78.3 0 96V208c0 17.7 14.3 32 32 32H42c20.8 0 36.1 19.6 31 39.8L33 440.2c-2.4 9.6-.2 19.7 5.8 27.5S54.1 480 64 480h96c14.7 0 27.5-10 31-24.2L217 352H321.4c23.7 0 44.8-14.9 52.7-37.2L400.9 240H432c8.5 0 16.6-3.4 22.6-9.4L477.3 208H544c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H528V56zM321.4 304H229l16-64h105l-21 58.7c-1.1 3.2-4.2 5.3-7.5 5.3zM80 128H464c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16z" fill="currentColor" transform="translate(-288 -256)"
                                                />
                                            </g>
                                        </g>
                                    </svg>
                                </div>

                                <div
                                    class=" hover:bg-mediumspringgreen-200 flex h-8 w-8 cursor-pointer place-content-center place-items-center rounded hover:text-white"
                                    style="filter: brightness(0.8); background: rgba(0, 248, 185, 0.1); color: unset;"
                                >
                                    <svg
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="fa"
                                        viewBox="0 0 512 512"
                                        style="height: 1em; vertical-align: -0.125em; transform-origin: center center; overflow: visible;"
                                    >
                                        <g
                                            transform="translate(256 256)"
                                            transform-origin="128 0"
                                        >
                                            <g
                                                transform="translate(0,0) scale(1,1)"
                                            >
                                                <path
                                                    d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z"
                                                    fill="currentColor"
                                                    transform="translate(-256 -256)"
                                                />
                                            </g>
                                        </g>
                                    </svg>
                                </div>

                                <div
                                    class=" hover:bg-mediumspringgreen-200 flex h-8 w-8 cursor-pointer place-content-center place-items-center rounded hover:text-white"
                                    style="filter: brightness(0.8); background: rgba(0, 248, 185, 0.1); color: unset;"
                                >
                                    <svg
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="fa"
                                        viewBox="0 0 512 512"
                                        style="height: 1em; vertical-align: -0.125em; transform-origin: center center; overflow: visible;"
                                    >
                                        <g
                                            transform="translate(256 256)"
                                            transform-origin="128 0"
                                        >
                                            <g
                                                transform="translate(0,0) scale(1,1)"
                                            >
                                                <path
                                                    d="M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7H336c-8.8 0-16-7.2-16-16V118.6c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                                                    fill="currentColor"
                                                    transform="translate(-256 -256)"
                                                />
                                            </g>
                                        </g>
                                    </svg>
                                </div>

                                <div
                                    class=" hover:bg-mediumspringgreen-200 flex h-8 w-8 cursor-pointer place-content-center place-items-center rounded hover:text-white"
                                    style="filter: brightness(0.8); background: rgba(0, 248, 185, 0.1); color: unset;"
                                >
                                    <svg
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="fa"
                                        viewBox="0 0 512 512"
                                        style="height: 1em; vertical-align: -0.125em; transform-origin: center center; overflow: visible;"
                                    >
                                        <g
                                            transform="translate(256 256)"
                                            transform-origin="128 0"
                                        >
                                            <g
                                                transform="translate(0,0) scale(1,1)"
                                            >
                                                <path
                                                    d="M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1H61.1zM144 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm240 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM272 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM16 304c0-26.5 21.5-48 48-48H448c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16H464c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V400z" fill="currentColor" transform="translate(-256 -256)"
                                                />
                                            </g>
                                        </g>
                                    </svg>
                                </div>

                                <div
                                    class=" hover:bg-mediumspringgreen-200 flex h-8 w-8 cursor-pointer place-content-center place-items-center rounded hover:text-white"
                                    style="filter: brightness(0.8); background: rgba(0, 248, 185, 0.1); color: unset;"
                                >
                                    <svg
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="fa"
                                        viewBox="0 0 640 512"
                                        style="height: 1em; vertical-align: -0.125em; transform-origin: center center; overflow: visible;"
                                    >
                                        <g
                                            transform="translate(320 256)"
                                            transform-origin="160 0"
                                        >
                                            <g
                                                transform="translate(0,0) scale(1,1)"
                                            >
                                                <path
                                                    d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z"
                                                    fill="currentColor"
                                                    transform="translate(-320 -256)"
                                                />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}