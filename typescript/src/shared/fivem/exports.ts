//@ts-nocheck

type ExportCallback = (cb: any, ...args: any[]) => void;

interface AsyncProxy {
  (exportName: string, callback: any): void;
}

interface SyncProxy {
  (exportName: string, callback: Function): void;
}


interface ReferenceCache {
  [resource: string]: { [cacheId: string]: ExportCallback };
}

const ReferenceCache: ReferenceCache = {};

const getExportEventName = (resourceName: string, exportName: string) => `__cfx_export_${resourceName}_${exportName}`;

const Async: AsyncProxy = new Proxy(
  (pKey: string, pCallback: ExportCallback) => {
    const wrapperCB: ExportCallback = (cb, ...args) => {
      const result = pCallback(...args);
      if (result instanceof Promise) {
        result.then((promiseResult) => cb(promiseResult));
      } else {
        cb(result);
      }
    };
    const resourceName = GetCurrentResourceName();
    if (resourceName == void 0) {
      throw new Error("Failed to get resource name, are you sure you are using this in a fivem resource?");
    }
    on(getExportEventName(resourceName, pKey), (cb, ...args) => {
      wrapperCB(cb, ...args);
    });
  },
  {
    apply: (cb, _, args) => {
      cb(...args);
    },
    get: (_, resource) => {
      if (ReferenceCache[resource] == void 0)
        ReferenceCache[resource] = {};
      return new Proxy(
        {},
        {
          get: (_2, key) => {
            const cacheId = `${key}_async`;
            return (...args) => {
              return new Promise(async (resolve, reject) => {
                const isNotRunning = await client_Utils.waitForCondition(() => GetResourceState(resource) === "started", 60000);
                if (isNotRunning) {
                  return reject(`Resource ${resource} is not running`);
                }
                if (ReferenceCache[resource][cacheId] === void 0) {
                  emit(getExportEventName(resource, key), (reference) => {
                    ReferenceCache[resource][cacheId] = reference;
                  });
                  const notCached = await client_Utils.waitForCondition(() => ReferenceCache[resource][cacheId] !== void 0, 1000);
                  if (notCached) {
                    return reject(`Failed to get export ${key} from resource ${resource}`);
                  }
                }
                try {
                  ReferenceCache[resource][cacheId](resolve, ...args);
                } catch (e) {
                  reject(e);
                }
              });
            };
          }
        }
      );
    }
  }
);

const Sync: SyncProxy = new Proxy(
  (pKey: string, pCallback: Function) => {
    const resourceName = GetCurrentResourceName();
    if (resourceName == void 0) {
      throw new Error("Failed to get resource name, are you sure you are using this in a fivem resource?");
    } else if (typeof pCallback !== "function") {
      throw new Error("Callback is not a function");
    } else if (typeof pKey !== "string") {
      throw new Error("Export name must be a string");
    }
    on(getExportEventName(resourceName, pKey), (cb, ...args) => {
      pCallback(...args);
    });
  },
  {
    apply: (cb, _, args) => {
      cb(...args);
    },
    get: (_, resource) => {
      if (ReferenceCache[resource] == void 0)
        ReferenceCache[resource] = {};
      return new Proxy(
        {},
        {
          get: (_2, key) => {
            const cacheId = `${key}_sync`;
            if (ReferenceCache[resource][cacheId] === void 0) {
              emit(getExportEventName(resource, key), (reference) => {
                ReferenceCache[resource][cacheId] = reference;
              });
              if (ReferenceCache[resource][cacheId] === void 0) {
                if (GetResourceState(resource) !== "started") {
                  throw new Error(`Resource ${resource} is not running`);
                } else {
                  throw new Error(`No such export ${key} in resource ${resource}`);
                }
              }
            }
            return (...args) => {
              try {
                return ReferenceCache[resource][cacheId](...args);
              } catch (e) {
                throw new Error(`An error occurred while calling export ${key} of resource ${resource} - see above for details`);
              }
            };
          }
        }
      );
    }
  }
);

on("onResourceStop", (resource) => ReferenceCache[resource] = void 0);

export const Exports = {
  Async,
  Sync
};
