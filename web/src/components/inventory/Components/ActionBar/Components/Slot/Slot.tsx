import actionbarBg from '../../../../../../assets/actionbar-bg.png'
import { getInventoryContext } from '../../../../../provider'

export const Slot = (props: any) => {
    const { itemList } = getInventoryContext()

    const item = itemList[props.item_id] || { name: 'Empty', image: null };

    return (
        <div
            class="action-item"
        >
            <div
                class="action-icon"
                style={`background-image: url(${actionbarBg})`}
            >
                {item.image &&
                    <img
                        src={item.image}
                    />
                }
            </div>

            <div
                class="texts"
            >
                <p>
                    {item.name}
                </p>
            </div>
        </div>
    );
};
