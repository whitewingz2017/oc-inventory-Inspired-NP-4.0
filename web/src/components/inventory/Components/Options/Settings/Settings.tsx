import { Show } from "solid-js"
import { getInventoryContext } from "../../../../provider"
import { nuiAction } from "../../../../Callbacks"

export const Settings = () => {
    const {
        showingSettingsMenu,
        setShowingSettingsMenu,
        PlayerState,
        setPlayerState
    } = getInventoryContext()

    return (
        <Show
            when={showingSettingsMenu()}
        >
            <div
                class="absolute inset-0 z-50 flex items-center justify-center"
            >
                <div
                    class="flex h-1/5 w-1/2 flex-col overflow-hidden rounded bg-neutral-800"
                >
                    <div
                        class="flex h-1/3 w-full items-center justify-center border-b border-solid border-neutral-700"
                    >
                        <span
                            class="text-xl text-neutral-400"
                        >
                            Settings
                        </span>    
                    </div>

                    <div
                        class="flex h-1/3 w-full flex-col items-center justify-center"
                    >
                        <div
                            class="flex h-1/2 w-full items-center justify-center"
                        >
                            <span
                                class="text-xl text-neutral-400"
                            >
                                Hold to drag
                            </span>
                            
                            <input
                                type="checkbox"
                                class="ml-4"
                                checked={PlayerState.settings.holdToDrag}
                                onChange={(e: any) => {
                                    nuiAction('updateSettings', {
                                        holdToDrag: !PlayerState.settings.holdToDrag,
                                        shiftQuickMove: PlayerState.settings.shiftQuickMove
                                    })

                                    setPlayerState({
                                        show: PlayerState.show,
                                        actionbar: PlayerState.actionbar,
                                        character: PlayerState.character,
                                        settings: {
                                            holdToDrag: !PlayerState.settings.holdToDrag,
                                            shiftQuickMove: PlayerState.settings.shiftQuickMove
                                        }
                                    })
                                }}
                            />
                        </div>
                        
                        <div
                            class="flex h-1/2 w-full items-center justify-center"
                        >
                            <span
                                class="text-xl text-neutral-400"
                            >
                                Shift Quick Move
                            </span>
                            
                            <input
                                type="checkbox"
                                class="ml-4"
                                checked={PlayerState.settings.shiftQuickMove}
                                onChange={(e: any) => {
                                    nuiAction('updateSettings', {
                                        holdToDrag: PlayerState.settings.holdToDrag,
                                        shiftQuickMove: !PlayerState.settings.shiftQuickMove
                                    })

                                    setPlayerState({
                                        show: PlayerState.show,
                                        actionbar: PlayerState.actionbar,
                                        character: PlayerState.character,
                                        settings: {
                                            holdToDrag: PlayerState.settings.holdToDrag,
                                            shiftQuickMove: !PlayerState.settings.shiftQuickMove
                                        }
                                    })
                                }}
                            />
                        </div>
                    </div>
                    
                    <div
                        class="flex h-1/3 w-full cursor-pointer items-center justify-center border-t border-solid border-neutral-700 hover:bg-neutral-500"
                        onClick={() => {
                            setShowingSettingsMenu(false)
                        }}
                    >
                        <span
                            class="text-xl text-neutral-400"
                        >
                            Close
                        </span>
                    </div>
                </div>
            </div>
        </Show>
    )
}