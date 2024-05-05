import { nuiAction } from "../../../../../Callbacks"
import { getInventoryContext } from "../../../../../provider"

export const Header = () => {
    const {
        showingHelpMenu,
        setShowingHelpMenu,
        setShowingSettingsMenu,
        showingSettingsMenu,
        setShow
    } = getInventoryContext()

    return (
        <>
            <div
                class="absolute left-7 top-[-2rem] flex h-6 w-28 cursor-pointer items-center justify-around border border-solid border-neutral-800/80 text-center text-[0.75rem] text-neutral-400 hover:border-neutral-500"
                onClick={() => {
                    console.log("CLICK EXIT")
                    nuiAction('closeInventory')
                    setShow(false)
                }}
            >
                <span
                    class="flex h-full w-4/5 place-items-center justify-center"
                >
                    Exit
                </span>

                <span
                    class="flex h-full w-full place-items-center justify-center bg-neutral-800/80"
                >
                    Escape
                </span>
            </div>

            <div
                class="absolute bottom-[1rem] left-8 flex h-6 w-24 cursor-pointer items-center justify-around border border-solid border-neutral-800/80 text-center text-[0.75rem] text-neutral-400 hover:border-neutral-500"
                onClick={() => {
                    setShowingSettingsMenu(!showingSettingsMenu())
                }}
            >
                <span
                    class="flex h-full w-full place-items-center justify-center bg-neutral-800/80"
                >
                    Settings
                </span>
            </div>

            <div
                class="animate-bounce absolute bottom-[1rem] left-36 flex h-6 w-24 cursor-pointer items-center justify-around border border-solid border-neutral-800/80 text-center text-[0.75rem] text-neutral-400 hover:border-neutral-500"
                onClick={() => {
                    setShowingHelpMenu(!showingHelpMenu())
                }}
            >
                <span
                    class="flex h-full w-full place-items-center justify-center bg-neutral-800/80"
                >
                    Help
                </span>
            </div>
        </>
    )
}