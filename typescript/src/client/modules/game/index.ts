import { SetEntityStateValue } from "../../../shared/fivem/statebags";
import { SetPlayerStateValue } from "../../../shared/fivem/statebags";
import { GetPlayerStateValue } from "../../../shared/fivem/statebags";
import { GetEntityStateValue } from "../../../shared/fivem/statebags";
import { RegisterStatebagChangeHandler } from "./statebags";

export const Game = {
    GetEntityStateValue: () => GetEntityStateValue,
    GetPlayerStateValue: () => GetPlayerStateValue,
    RegisterStatebagChangeHandler: () => RegisterStatebagChangeHandler,
    SetEntityStateValue: () => SetEntityStateValue,
    SetPlayerStateValue: () => SetPlayerStateValue
}