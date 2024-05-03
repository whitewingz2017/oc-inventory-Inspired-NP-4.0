import { Resource } from "./modules";

import './controllers/Inventory'
import './controllers/Callbacks'
import './controllers/Notifications'
import './controllers/Actionbar'
import './controllers/Exports'
import './controllers/Drops'
import './controllers/Functions'
import './controllers/Sync'
import { initTrunk } from "./controllers/Trunk";

new Resource(GetCurrentResourceName());

global.exports.focusmanager.RegisterFocusHandler(function (Focus: any, state: any) {
    if (state) {
        SetCursorLocation(0.5, 0.5);
    }

    SetNuiFocus(Focus, state);
});

initTrunk()