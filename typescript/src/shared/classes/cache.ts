class ClientCache {
    private _map: Map<string, { value: any; expiration: number }>;
    private _ttl: number;
  
    constructor(ttl: number) {
      this._ttl = ttl != null ? ttl : 5;
      this._map = new Map();
    }
  
    setTTL(ttl: number) {
      this._ttl = ttl;
    }
  
    set(key: string, value: any, ttl?: number) {
      this._map.set(key, { value, expiration: Date.now() + (ttl != null ? ttl : this._ttl) * 1000 });
      return this;
    }
  
    get(key: string, stale: boolean = false) {
      const entry = this._map.get(key);
      const valid = entry ? (stale ? true : entry.expiration > Date.now()) : false;
  
      if (!entry || !valid) {
        if (entry) this._map.delete(key);
        return;
      }
  
      return entry.value;
    }
  
    has(key: string, stale: boolean = false) {
      const entry = this._map.get(key);
      const valid = entry ? (stale ? true : entry.expiration > Date.now()) : false;
  
      if (entry && !valid) {
        this._map.delete(key);
      }
  
      return valid;
    }
  
    delete(key: string) {
      return this._map.delete(key);
    }
  
    clear() {
      this._map.clear();
    }
  
    values(stale: boolean = false) {
      const values: any[] = [];
      const date = Date.now();
  
      for (const entry of this._map.values()) {
        if (stale || entry.expiration > date) {
          values.push(entry.value);
        }
      }
  
      return values;
    }
  
    keys(stale: boolean = false) {
      const keys: string[] = [];
      const date = Date.now();
  
      for (const [key, entry] of this._map.entries()) {
        if (stale || entry.expiration > date) {
          keys.push(key);
        }
      }
  
      return keys;
    }
  
    entries(stale: boolean = false) {
      const entries: [string, any][] = [];
      const date = Date.now();
  
      for (const [key, entry] of this._map.entries()) {
        if (stale || entry.expiration > date) {
          entries.push([key, entry.value]);
        }
      }
  
      return entries;
    }
  }
  
  export const Cache = ClientCache;
  