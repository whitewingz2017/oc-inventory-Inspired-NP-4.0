import { Cache } from "../../../shared/classes/cache";
import { PolyZone } from "../../../shared/classes/polyzone";
import { Thread } from "../../../shared/classes/thread";
import { Vector3 } from "../../../shared/classes/vector";
import { Vector2 } from "../../../shared/classes/vector2";

export const Classes = {
    Cache: () => Cache,
    PolyZone: () => PolyZone,
    Thread: () => Thread,
    Vector2: () => Vector2,
    Vector3: () => Vector3
}