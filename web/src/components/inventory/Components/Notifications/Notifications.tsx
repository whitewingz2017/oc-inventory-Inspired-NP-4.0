import { For } from 'solid-js'
import actionbarBg from '../../../../assets/actionbar-bg.png'
import { getInventoryContext } from '../../../provider'

export const Notification = () => {
    const {
        Notifications,
        SetNotfications
    } = getInventoryContext()

    return (
        <div
            class="notifications"
        >
            <div
                class="notifications-list"
            >
                <div
                    class="items-list"
                >
                    <For
                        each={Notifications}
                    >
                        {(pNotif: any) => {
                            setTimeout(() => {
                                const pRemoved = Notifications.filter((pItem: any) => {
                                    return pItem.id !== pNotif.id
                                })
                                SetNotfications(pRemoved)
                            }, 5150)

                            return (
                                <li>
                                    <div
                                        class="info-container"
                                    >
                                        <div
                                            class="item-icon"
                                            style={`background-image: url(${actionbarBg})`}
                                        >
                                            <img
                                                src={pNotif.image}
                                            />
                                        </div>
            
                                        <div
                                            class="texts"
                                        >
                                            <p
                                                class="label"
                                            >
                                                {pNotif.text}
                                            </p>
            
                                            <div
                                                class="flex flex-row items-center justify-start"
                                            >
                                                <p
                                                    class="info"
                                                >
                                                    {pNotif.action}
                                                </p>
            
                                                <p
                                                    class={`weight type-${pNotif.color}`}
                                                >
                                                    {pNotif.count}x
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        }}
                    </For>
                    

                </div>
            </div>
        </div>
    )
}