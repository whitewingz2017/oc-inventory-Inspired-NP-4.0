import { createSignal } from "solid-js";
import { getInventoryContext } from "../../../../../provider";
import { nuiAction } from "../../../../../Callbacks";
import { createStore } from "solid-js/store";
import { jsx } from "solid-js/h/jsx-runtime";

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
    } = getInventoryContext();
    
    const pItem = itemList[props.item?.itemId] ?? null
    // if(etf !== undefined){
        const { etf } = props;
        // console.log("ETF", etf?.name,etf?.name === etf?.name.includes('pockets-'))
        // console.log("LENGTH SHIT",etf?.name.includes('pockets-').length)
        // if(etf?.name === etf?.name.includes('pockets-')){
        //     console.log("INA MO",props.id)
        // }
    // }
    const isPocket = etf?.name && etf.name.includes('pockets-');
    // const currentItem = props.slots[0].item.itemId
    // console.log("HELLO CREATE INVENTORY", JSON.stringify(etf))
    // console.log("ACCCEEEEOOOOTTT",pItem,props.item?.itemId)
    // console.log("props.acceptedItems [SIM SLOT]",props.acceptedItems,JSON.stringify(props))
    // console.log("[ADDINV] draggingItem.item",draggingItem.item, JSON.stringify(draggingItem))
    // console.log("HOVERING ITEMS",hoveringItem,JSON.stringify(hoveringItem))
    const handleMouseDown = (e: any) => {
        if (e.button !== 0) {return}
        if (PlayerState.settings.holdToDrag && props.item && !movingSplitItem()) {
            // console.log("FUCKING ITEMS",pItem, JSON.stringify(pItem))
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
            console.log('Inventory dropped in ' + activeInventory())
            console.log('[SLOT ADD] Dropped ' + props.item.itemId + ' in slot ' + activeSlot() + ' from slot ' + draggingItem.fromSlot + ' from inventory ' + draggingItem.fromInventory + ' into inventory ' + activeInventory())
    
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
            setMovingSplitItem(false)
            console.log('[ITEM SPLIT] | Inventory dropped in ' + activeInventory())
            console.log('[SLOT ADD2] Dropped ' + draggingItem.Item.name + ' in slot ' + activeSlot() + ' inventory ' + activeInventory())

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

        if (!PlayerState.settings.holdToDrag) {
            if (draggingItem.isDragging && !movingSplitItem()) {
                console.log('[ITEM CLICK] | Inventory dropped in ' + activeInventory())
                console.log('[SLOT ADD3] Dropped ' + props.item.itemId + ' in slot ' + activeSlot() + ' inventory ' + activeInventory())
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

    const calculateBorderColor = (acceptedItems: any, currentItem: any) => {

        if(acceptedItems){
            if (currentItem === null) {
                return 'border:1px_solid_#00F8B9'
            }
    
            if (!draggingItem.isDragging) {
                return 'border:1px_solid_#00F8B9'
            }
    
            if (acceptedItems.includes(currentItem.name)) {
                return 'border:1px_solid_#00F8B9'
            } else {
                return 'border:1px_solid_#FF0000'
            }
        }
        
        return 'border:1px_solid_#00F8B9'
    }

    const calculateBackgroundColor = (acceptedItems: any, currentItem: any) => {
        if(acceptedItems){
            if (currentItem === null) {
                return 'background:radial-gradient(83%_83%_at_50%_50%,_rgba(0,_248,_185,_0.15),_rgba(0,_102,_76,_0.25))'
            }
    
            if (!draggingItem.isDragging) {
                return 'background:radial-gradient(83%_83%_at_50%_50%,_rgba(0,_248,_185,_0.15),_rgba(0,_102,_76,_0.25))'
            }
    
            if (acceptedItems.includes(currentItem.name)) {
                return 'background:radial-gradient(83%_83%_at_50%_50%,_rgba(0,_248,_185,_0.15),_rgba(0,_102,_76,_0.25))'
            } else {
                
                return 'background:radial-gradient(83%_83%_at_50%_50%,_rgba(255,_0,_0,_0.15),_rgba(102,_0,_0,_0.25))'
            }
        }

        return 'background:radial-gradient(83%_83%_at_50%_50%,_rgba(0,_248,_185,_0.15),_rgba(0,_102,_76,_0.25))'
    }

    const [slotIcons, setSlotIcons] = createStore<any>({
        
        1: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="3.5vh" width="3.5vh" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM9 12c.83 0 1.5.67 1.5 1.5S9.83 15 9 15s-1.5-.67-1.5-1.5S8.17 12 9 12zm3 6H6v-.75c0-1 2-1.5 3-1.5s3 .5 3 1.5V18zm1-9h-2V4h2v5zm5 7.5h-4V15h4v1.5zm0-3h-4V12h4v1.5z"></path></svg>,
        2: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="3.5vh" width="3.5vh" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></svg>,
        3: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="3.5vh" width="3.5vh" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z"></path></svg>,
        4: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="3.5vh" width="3.5vh" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M21 10h-8.35A5.99 5.99 0 0 0 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6a5.99 5.99 0 0 0 5.65-4H13l2 2 2-2 2 2 4-4.04L21 10zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"></path></svg>,
        5: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="3.5vh" width="3.5vh" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M18 4H6C3.79 4 2 5.79 2 8v8c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-1.86 9.77c-.24.2-.57.28-.88.2L4.15 11.25C4.45 10.52 5.16 10 6 10h12c.67 0 1.26.34 1.63.84l-3.49 2.93zM6 6h12c1.1 0 2 .9 2 2v.55c-.59-.34-1.27-.55-2-.55H6c-.73 0-1.41.21-2 .55V8c0-1.1.9-2 2-2z"></path></svg>,
    })
    return (<>
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
                        personalInventory: false,
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
                <div
                    class={`box-c relative h-24 w-24 rounded [background:radial-gradient(83%_83%_at_50%_50%,_rgba(180,_180,_180,_0.15),_rgba(120,_120,_120,_0.05))] [border:1px_solid_transparent] hover:[${draggingItem.item !== null ? calculateBackgroundColor(props.acceptedItems, draggingItem.Item) : 'background:radial-gradient(83%_83%_at_50%_50%,_rgba(255,_0,_0,_0.15),_rgba(102,_0,_0,_0.25))'}] hover:[${draggingItem.Item !== null ? calculateBorderColor(props.acceptedItems, draggingItem.Item) : 'border:1px_solid_#00F8B9'}]`}
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
                            {props.item !== null && <> 
                                <img 
                            class="pointer-events-none absolute top-0 w-full object-cover px-2 pb-2 pt-[0.375rem]" 
                            draggable="false" 
                            src={pItem.image} />
                            </>}

                        </div>
                    )}
                   
                </div>
            </div>
        </div>
        </>);
};
