import { For } from 'solid-js'
import { Slot } from './Components/Slot/Slot'
import { getInventoryContext } from '../../../provider'

export const ActionBar = () => {
    const {
        actionbarItems,
        displayActionbar
    } = getInventoryContext()

    return (
        <div
            class={`actionBar-cont ${displayActionbar() ? 'visible' : 'hidden'}`}
        >
            <div
                class="actionBar-list"
            >
                <div
                    class="action-list"
                >
                    <For
                        each={actionbarItems}
                    >
                        {(pSlot: any) => (
                            <Slot {...pSlot} />
                        )}
                    </For>
                </div>
            </div>
        </div>
    )
}