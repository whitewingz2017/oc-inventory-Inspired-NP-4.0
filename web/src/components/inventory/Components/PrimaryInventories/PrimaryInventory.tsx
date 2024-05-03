import { Backpack } from './Components/Backpack/Backpack'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'

export const PrimaryInventory = () => {
    return (
        <div
            id="main"
            class="flex flex-col gap-8 pl-6 pr-5"
        >
            <div
                class="relative"
            >
                <Header />

                <Main />
            </div>

            <div
                class="relative"
            >
                <Backpack />
            </div>
        </div>
    )
}