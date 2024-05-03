import { v5 as uuidv5, v4 as uuidv4 } from 'uuid';
import * as uuid from 'pure-uuid';
// import { deflate, inflate } from 'zlib';
import { deflate, inflate } from 'zlib';
import { MathUtils } from '../shared/math';
function Cacheable(getValueCb, options) {
    const key = "_";
    const map = CacheableMap((ctx, _, ...args) => {
      return getValueCb(ctx, ...args);
    }, options);
    return {
      get: function(...args) {
        return map.get(key, ...args);
      },
      reset: function() {
        map.reset(key);
      }
    };
  }
  function CacheableMap(getValueCb, options) {
    const ttl = options.timeToLive || 6e4;
    const cachedValues = {};
    async function ensureCachedValue(key, ...args) {
      let cachedValue = cachedValues[key];
      if (!cachedValue) {
        cachedValue = { value: null, lastUpdated: 0 };
        cachedValues[key] = cachedValue;
      }
      const now = Date.now();
      if (cachedValue.lastUpdated === 0 || now - cachedValue.lastUpdated > ttl) {
        const [shouldCache, value] = await getValueCb(cachedValue, key, ...args);
        if (shouldCache) {
          cachedValue.lastUpdated = now;
          cachedValue.value = value;
        }
        return value;
      }
      return await new Promise((resolve) => setTimeout(() => resolve(cachedValue.value), 0));
    }
    return {
      get: async function(key, ...args) {
        return await ensureCachedValue(key, ...args);
      },
      reset: function(key) {
        const cachedValue = cachedValues[key];
        if (cachedValue)
          cachedValue.lastUpdated = 0;
      }
    };
  }
  function getUUID() {
    if (globalThis && typeof globalThis.crypto === "object") {
      return uuidv4();
    } else {
      return new uuid(4).toString();
    }
  }
  function hashString(pString) {
    return uuidv5(pString, uuidv5.URL);
  }
  function WaitForCondition(conditionCallback, timeoutMS) {
    return new Promise((resolve, reject) => {
      const start = Date.now();
      const tickId = setInterval(() => {
        const hasTimedOut = Date.now() - start > timeoutMS;
        if (conditionCallback() || hasTimedOut) {
          clearInterval(tickId);
          return resolve(hasTimedOut);
        }
      }, 1);
    });
  }
function client_Wait(pTime) {
    return new Promise((resolve) => setTimeout(() => resolve(true), pTime));
}
function WaitForNextFrame() {
    return client_Wait(0);
}

export const Utils = {
    cache: Cacheable,
    cacheableMap: CacheableMap,
    waitForCondition: WaitForCondition,
    getUUID,
    getStringHash: hashString,
    wait: client_Wait,
    waitForNextFrame: WaitForNextFrame,
    deflate: deflate,
    inflate: inflate,
    ...MathUtils.MathUtils()
};