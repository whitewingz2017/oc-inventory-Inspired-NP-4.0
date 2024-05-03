import { getInventoryContext } from "../../../../provider"

export const CharacterInformation = () => {
    const {
        PlayerState
    } = getInventoryContext()
    return (
        <div
            class="flex h-[20rem] w-full flex-col"
        >
            <div
                class="relative h-[15rem] w-full"
            >
                <div
                    class="bg-mediumspringgreen-100 absolute left-[-1.25rem] top-6 h-2 w-2 rounded-sm shadow-[0px_0px_12px_rgba(106,_154,_254,_0.55)]"
                ></div>

                <h3
                    class="font-light text-white"
                >
                    Personal Information
                </h3>

                <div
                    class="relative grid h-36 w-full grid-cols-2 grid-rows-2 gap-2"
                >
                    <div
                        class="flex h-full w-full gap-2 p-4 text-sm"
                    >
                        <div
                            class="w-1 rounded-sm"
                            style="background-color: rgb(106, 154, 254); box-shadow: rgb(106, 154, 254) 0px 0px 3px;"
                        ></div>
                        <div>
                            <div
                                class="text-xs text-gray-400"
                            >
                                Personal Vehicle
                            </div>

                            <div
                                class="select-text text-white"
                            >
                                N/A
                            </div>
                        </div>
                    </div>

                    <div
                        class="flex h-full w-full gap-2 p-4 text-sm"
                    >
                        <div
                            class="w-1 rounded-sm"
                            style="background-color: rgb(198, 106, 254); box-shadow: rgb(198, 106, 254) 0px 0px 3px;"
                        ></div>

                        <div>
                            <div
                                class="text-xs text-gray-400"
                            >
                                {PlayerState.character.name}
                            </div>

                            <div
                                class="select-text text-white"
                            >
                                Citizen ID: {PlayerState.character.id}
                            </div>
                        </div>
                    </div>

                    <div
                        class="flex h-full w-full gap-2 p-4 text-sm"
                    >
                        <div
                            class="w-1 rounded-sm"
                            style="background-color: rgb(171, 254, 106); box-shadow: rgb(171, 254, 106) 0px 0px 3px;"
                        ></div>

                        <div>
                            <div
                                class="text-xs text-gray-400"
                            >
                                Phone Number
                            </div>
                            <div
                                class="select-text text-white"
                            >
                               {PlayerState.character.phone}
                            </div>
                        </div>
                    </div>

                    <div
                        class="flex h-full w-full gap-2 p-4 text-sm"
                    >
                        <div
                            class="w-1 rounded-sm"
                            style="background-color: rgb(255, 163, 96); box-shadow: rgb(255, 163, 96) 0px 0px 3px;"
                        ></div>

                        <div>
                            <div
                                class="text-xs text-gray-400"
                            >
                                Home Location
                            </div>
                            <div
                                class="select-text text-white"
                            >
                                {PlayerState.character.home}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}