print("HELLO SHIT")

RegisterCommand('invinv', function()
    local shit = RPC.execute("testInventory")
    SendNUIMessage({
        show = true,
        PlayerData = {
            character = {
                id = exports['isPed']:isPed('cid'),
                name = exports['isPed']:isPed('fullname'),
                cash = 0,
                personalVehicle = 'Landstalker',
                home = '#23 No3 Alta Street',
                phone = '+1 (628) 123-4567',
            },
    
            settings = {
                holdToDrag = GetResourceKvpInt('inventory:holdToDrag'),
                shiftQuickMove = GetResourceKvpInt('inventory:shiftQuickMove')
            }
        }
    });
end)