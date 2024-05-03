import { getInventoryContext } from "../../../../../provider"
import { Player } from "../Player/Player"

export const Main = () => {
    const {
        setActiveInventory,
        Inventory
    } = getInventoryContext()

    return (
        <div
            class=""
            onMouseEnter={() => setActiveInventory(Inventory.PersonalInventory.inventoryName)}
            onMouseLeave={() => setActiveInventory('')}
        >
            <Player />
        </div>
    )
}