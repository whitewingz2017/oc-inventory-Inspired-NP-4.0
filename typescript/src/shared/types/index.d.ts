declare namespace NPX {
    class Events {
        static on: (event: string, callback: (...args: any[]) => void) => void;
        static onNet: (event: string, callback: (...args: any[]) => void) => void;
        static emit: (event: string, ...args: any[]) => void;
        static emitNet: (event: string, ...args: any[]) => void;
    }

    class Streaming {
        static loadModel: (model: string | number) => Promise<boolean>;
        static loadTexture: (dict: string) => Promise<boolean>;
        static loadAnim: (dict: string) => Promise<boolean>;
        static loadClipSet: (anim: string) => Promise<boolean>;
    }

    class Zones {
        static isActive: (event: string, id?: string) => boolean;
        static onEnter: (event: string, cb: (data: any) => void) => boolean;
        static onExit: (event: string, cb: (data: any) => void) => boolean;
        static addBoxZone: (id: string, zone: string, vectors: { x: number, y: number, z: number }, length: number, width: number, options: { maxZ: number, minZ: number, heading?: number }, data: any) => void;
        static addCircleZone: (id: string, zone: string, vectors: { x: number, y: number, z: number }, length: number, width: number, options: { maxZ: number, minZ: number, heading?: number }, data: any) => void;
    }

    class Interact {
        static addTargetBox: (id: string, zone: string, vectors: { x: number, y: number, z: number }, length: number, width: number, options: { maxZ: number, minZ: number, heading?: number }, data: any) => void;
        static addTargetCircle: (id: string, zone: string, vectors: { x: number, y: number, z: number }, radius: number, options: { useZ?: boolean }, data: any) => void;
    }

    class Utils {
        static waitForCondition: (conditionCallback: () => boolean, timeoutMS: number) => Promise<boolean>;
    }

    class Procedures {
        static register(name: string, cb: (src: number, ...args: any) => any): void;
        static execute(name: string, ...args: any): any;
    }
}

declare class RPC {
    static register(name: string, cb: (src: number, ...args: any) => any): void;
    static execute(name: string, ...args: any): any;
}

declare class SQL {
    static execute(query: string, ...args: any): any;
}

declare class Events {
    static on: (event: string, callback: (...args: any[]) => void) => void;
    static onNet: (event: string, callback: (...args: any[]) => void) => void;
    static emit: (event: string, ...args: any[]) => void;
    static emitNet: (event: string, ...args: any[]) => void;
}

declare const Citizen: {
    InvokeNative: (hash: number, ...args: any[]) => any;
};