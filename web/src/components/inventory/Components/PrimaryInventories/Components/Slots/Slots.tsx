import { createSignal } from "solid-js";
import { getInventoryContext } from "../../../../../provider";
import { nuiAction } from "../../../../../Callbacks";

export const CreateSlot = (props: any) => {
    const [draggingSlot, setDraggingSlot] = createSignal<boolean>(false);
    const [acceptingItem, setAcceptingItem] = createSignal<boolean>(false);
    const {
        setHoveringItem,
        hoveringItem,
        itemList,
        PlayerState,
        draggingItem,
        setDraggingItem,
        activeInventory,
        setActiveSlot,
        activeSlot,
        movingSplitItem,
        setMovingSplitItem,
        searchedItem,
        setShow,
        setInventory
    } = getInventoryContext();
    
    const pItem = itemList[props.item?.itemId] ?? null

    const handleMouseDown = (e: any) => {
        if (e.button === 1 && props.item) {
            nuiAction('useItem', {
                ItemId: hoveringItem.Information.itemId,
                Info: hoveringItem.Information
            })
            nuiAction('closeInventory')
            setShow(false)

            setHoveringItem({
                show: false,
                frozenPosition: false,
                showingOptions: false,
                Information: []
            })

            return
        } 

        if (e.button !== 0) {return}
        if (PlayerState.settings.holdToDrag && props.item && !movingSplitItem()) {
            setDraggingSlot(true)
            setDraggingItem({
                isDragging: true,
                Item: pItem,
                quantity: !props.item.amount ? 1 : props.item.amount,
                fromSlot: props.id,
                fromInventory: activeInventory()
            });

            window.addEventListener('mouseup', handleMouseUp);
        }
    };

    const handleMouseUp = (e: any) => {
        if (draggingItem.isDragging && !movingSplitItem()) {
            const slot = draggingItem.fromSlot
            console.log('Inventory dropped in ' + activeInventory())
            console.log('Dropped [1] ' + props.item.itemId + ' in slot ' + activeSlot() + ' from slot ' + draggingItem.fromSlot + ' from inventory ' + draggingItem.fromInventory + ' into inventory ' + activeInventory())
            // const itemToMove = slot.find((slot: { id: number; }) => slot.id === activeSlot()).item;
            // console.log("ITEM TO MOVE ", itemToMove)
            // console.log("PROPS",props,JSON.stringify(props))
            setInventory('PersonalInventory', 'slots', (slots: any[]) => {
                const fromSlotId = slot; // Slot id of the item to move
                const toSlotId = activeSlot(); // Slot id where the item is being moved to
                const fromSlot = slots.find(slota => slota.id === fromSlotId);
                const toSlot = slots.find(slota => slota.id === toSlotId);
              
                if (!fromSlot || !fromSlot.item) return slots; // If fromSlot or its item is not found, return slots unchanged
              
                const fromItem = fromSlot.item;
                const toItem = toSlot ? toSlot.item : null;
              
                const fromItemStackable = itemList[fromItem.itemId].stackable;
                const toItemStackable = toItem && itemList[toItem.itemId].stackable;
              
                return slots.map(slota => {
                  if (slota.id === fromSlotId) {
                    if (toItem && toItem.itemId === fromItem.itemId && fromItemStackable && toItemStackable) {
                      // Combine items if they are the same and stackable
                      return { ...slota, item: null }; // Clear the from slot after combining
                    } else {
                      // Swap items if they are different
                      return { ...slota, item: toItem || null };
                    }
                  } else if (slota.id === toSlotId) {
                    if (toItem && toItem.itemId === fromItem.itemId && fromItemStackable && toItemStackable) {
                      // Combine items if they are the same and stackable
                      return { ...slota, item: { ...toItem, amount: toItem.amount + fromItem.amount } };
                    } else {
                      // Place the from item in the to slot
                      return { ...slota, item: fromItem };
                    }
                  } else {
                    // Keep other slots unchanged
                    return slota;
                  }
                });
              });
              
              
              
              
            nuiAction('itemDrag', {
                itemId: props.item.itemId,
                fromSlot: draggingItem.fromSlot,
                fromInventory: draggingItem.fromInventory,
                toSlot: activeSlot(),
                toInventory: activeInventory()
            })
    
            setDraggingSlot(false)
            setDraggingItem({
                isDragging: false,
                Item: null,
                quantity: 0,
            });
    
            window.removeEventListener('mouseup', handleMouseUp);
        }
    };

    const handleClick = () => {
        if (movingSplitItem() && acceptingItem()) {
            const slot = draggingItem.fromSlot
            setMovingSplitItem(false)
            console.log('[ITEM SPLIT] | Inventory dropped in ' + activeInventory())
            console.log('Dropped ' + draggingItem.Item.name + ' in slot ' + activeSlot() + ' inventory ' + activeInventory())
            setInventory('PersonalInventory', 'slots', (slots: any[]) => {
                const fromSlotId = slot; // Slot id of the item to move
                const toSlotId = activeSlot(); // Slot id where the item is being moved to
                const fromSlot = slots.find(slota => slota.id === fromSlotId);
                const toSlot = slots.find(slota => slota.id === toSlotId);
              
                if (!fromSlot || !fromSlot.item) return slots; // If fromSlot or its item is not found, return slots unchanged
              
                const fromItem = fromSlot.item;
                const toItem = toSlot ? toSlot.item : null;
              
                const fromItemStackable = itemList[fromItem.itemId].stackable;
                const toItemStackable = toItem && itemList[toItem.itemId].stackable;
              
                return slots.map(slota => {
                  if (slota.id === fromSlotId) {
                    if (toItem && toItem.itemId === fromItem.itemId && fromItemStackable && toItemStackable) {
                      // Combine items if they are the same and stackable
                      return { ...slota, item: null }; // Clear the from slot after combining
                    } else {
                      // Swap items if they are different
                      return { ...slota, item: toItem || null };
                    }
                  } else if (slota.id === toSlotId) {
                    if (toItem && toItem.itemId === fromItem.itemId && fromItemStackable && toItemStackable) {
                      // Combine items if they are the same and stackable
                      return { ...slota, item: { ...toItem, amount: toItem.amount + fromItem.amount } };
                    } else {
                      // Place the from item in the to slot
                      return { ...slota, item: fromItem };
                    }
                  } else {
                    // Keep other slots unchanged
                    return slota;
                  }
                });
              });
            nuiAction('itemSplit', {
                itemId: draggingItem.Item.name,
                fromSlot: draggingItem.fromSlot,
                fromInventory: draggingItem.fromInventory,
                toSlot: activeSlot(),
                toInventory: activeInventory(),
                amount: draggingItem.quantity
            })

            setDraggingSlot(false)

            setDraggingItem({
                isDragging: false,
                Item: [],
                quantity: 0
            });
            return
        }
        console.log("HOLD")
        if (!PlayerState.settings.holdToDrag) {
            if (draggingItem.isDragging && !movingSplitItem()) {
                console.log('[ITEM CLICK] | Inventory dropped in ' + activeInventory())
                console.log('Dropped ' + props.item.itemId + ' in slot ' + activeSlot() + ' inventory ' + activeInventory())
                setDraggingSlot(false)

                setDraggingItem({
                    isDragging: false,
                    Item: [],
                    quantity: 0
                });
                return
            }

            if (!draggingItem.isDragging && !movingSplitItem()) {
                setDraggingSlot(true)
                setDraggingItem({
                    isDragging: !draggingItem.isDragging,
                    Item: pItem,
                    quantity: !props.item.amount ? 1 : props.item.amount
                });
            }
        }
    };

    const calculateBackgroundColor = () => {
        if (pItem === null) {
            setAcceptingItem(true)
            return 'background:radial-gradient(83%_83%_at_50%_50%,_rgba(0,_248,_185,_0.15),_rgba(0,_102,_76,_0.25))'
        }
        
        if (!movingSplitItem() && draggingItem.Item !== null) {
            setAcceptingItem(true)
            return 'background:radial-gradient(83%_83%_at_50%_50%,_rgba(0,_248,_185,_0.15),_rgba(0,_102,_76,_0.25))'
        }

        if (draggingItem.Item === pItem && movingSplitItem()) {
            setAcceptingItem(true)
            return 'background:radial-gradient(83%_83%_at_50%_50%,_rgba(0,_248,_185,_0.15),_rgba(0,_102,_76,_0.25))'
        }

        if (draggingItem.Item !== pItem && movingSplitItem()) {
            setAcceptingItem(false)
            return 'background:radial-gradient(83%_83%_at_50%_50%,_rgba(255,_0,_0,_0.15),_rgba(102,_0,_0,_0.25))'
        }

        return 'background:radial-gradient(83%_83%_at_50%_50%,_rgba(0,_248,_185,_0.15),_rgba(0,_102,_76,_0.25))'
    }

    const calculateBorderColor = () => {
        if (pItem === null) {
            return 'border:1px_solid_#00F8B9'
        }
        
        if (!movingSplitItem() && draggingItem.Item !== null) {
            return 'border:1px_solid_#00F8B9'
        }

        if (draggingItem.Item === pItem && movingSplitItem()) {
            return 'border:1px_solid_#00F8B9'
        }

        if (draggingItem.Item !== pItem && movingSplitItem()) {
            return 'border:1px_solid_#FF0000'
        }

        return 'border:1px_solid_#00F8B9'
    }
    // {console.log('QUALITY',props.item)}
    // console.log("NEED TO DO THE QUALITY FROM OLD INVENTORY")
    // if(props.item){
    //     console.log("ITEM", JSON.stringify(props.item))
    // }
    return (
        <div
            class="p-2"
            onContextMenu={(e: any) => {
                if (!hoveringItem.frozenPosition && props.item) {
                    setHoveringItem({
                        show: true,
                        showingOptions: true,
                        Information: hoveringItem.Information,
                        frozenPosition: true,
                        slot: props.id,
                        canUse: itemList[hoveringItem.Information.itemId].context.useItem,
                        personalInventory: true,
                        fromSlot: activeSlot(),
                        fromInventory: activeInventory()
                    });
                }
            }}
            onMouseEnter={() => {
                setActiveSlot(props.id)
                if (!hoveringItem.frozenPosition && props.item !== null) {
                    setHoveringItem({
                        show: true,
                        Information: props.item,
                        isSideSlot: false
                    });
                }
            }}
            onMouseLeave={() => {
                if (!hoveringItem.frozenPosition && props.item !== null) {
                    setHoveringItem({
                        show: false,
                        Information: props.item
                    });
                }
            }}
            onMouseDown={handleMouseDown}
            onClick={handleClick}
        >
          
            <div>
                {/* ${acceptingItem() ? '' : 'cursor-not-allowed'} This code goes below where box-c is but needs fixing...*/}
                <div
                    class={`box-c relative h-24 w-24 rounded ${draggingSlot() ? 'bg-black opacity-50' : ''} ${draggingSlot() ? '' : '[background:radial-gradient(83%_83%_at_50%_50%,_rgba(180,_180,_180,_0.15),_rgba(120,_120,_120,_0.05))]'} [border:1px_solid_transparent] hover:[${calculateBackgroundColor()}] hover:[${calculateBorderColor()}]`}
                >
                    {props.hotBar && (
                        <>
                            <div
                                class="bg-mediumspringgreen-100/10 absolute left-[0rem] top-[0rem] h-[0.88rem] w-[0.8rem] select-none rounded-br rounded-tl"
                            ></div>

                            <div
                                class="text-mediumspringgreen-100 text-3xs absolute left-[0.25rem] top-[0.06rem] select-none leading-[108.5%]"
                            >
                                {props.id}
                            </div>
                        </>
                    )}

                    {pItem && (
                        <div
                            class="pointer-events-none h-full w-full overflow-hidden rounded-sm"
                            style="opacity: 1;"
                        >
                            <div
                                class="relative flex h-full w-full flex-col items-start justify-end"
                            >
                                <div
                                    class="z-10 w-full bg-gray-700"
                                >
                                    <div
                                        class="bg-mediumspringgreen-100 h-1 w-full"
                                        style={`width: ${props.item?.durability}%;`}
                                    />
                                </div>
                            </div>

                            {pItem.stackable && (
                                <div
                                    class=" text-outline absolute right-0 top-0 z-10 rounded-br rounded-tl pr-2 pt-1 text-sm font-bold text-gray-300"
                                >
                                    {!props.item.amount ? 1 : props.item.amount}
                                </div>
                            )}

                            <img class="pointer-events-none absolute top-0 w-full object-cover px-2 pb-2 pt-[0.375rem]" draggable="false" src={pItem.image} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
