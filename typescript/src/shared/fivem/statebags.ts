import { Cache } from "../classes/cache";

class StatebagCache extends Cache {
    constructor() {
      super(5000); // Assuming client_Cache is a class with a constructor that takes a number argument.
    }
  }
  
  const StatebagCacheInstance = new StatebagCache();
  
  function GetEntityStateBag(pEntity: any): any {
    let statebag = StatebagCacheInstance.get(`ent-${pEntity}`);
    if (statebag) return statebag;
  
    statebag = Entity(pEntity); // Assuming Entity is a function that returns an object.
    StatebagCacheInstance.set(`ent-${pEntity}`, statebag);
    return statebag;
  }
  
  function GetEntityStateValue(pEntity: any, pKey: string): any {
    const statebag = GetEntityStateBag(pEntity);
    return statebag.state[pKey];
  }
  
  function SetEntityStateValue(pEntity: any, pKey: string, pValue: any, pReplicated: boolean = false): void {
    const statebag = GetEntityStateBag(pEntity);
    statebag.state.set(pKey, pValue, pReplicated);
  }
  
  function GetPlayerStateBag(pServerId: any): any {
    let statebag = StatebagCacheInstance.get(`ply-${pServerId}`);
    if (statebag) return statebag;
  
    statebag = Player(pServerId); // Assuming Player is a function that returns an object.
    StatebagCacheInstance.set(`ply-${pServerId}`, statebag);
    return statebag;
  }
  
  function GetPlayerStateValue(pServerId: any, pKey: string): any {
    const statebag = GetPlayerStateBag(pServerId);
    return statebag.state[pKey];
  }
  
  function SetPlayerStateValue(pServerId: any, pKey: string, pValue: any, pReplicated: boolean = false): void {
    const statebag = GetPlayerStateBag(pServerId);
    statebag.state.set(pKey, pValue, pReplicated);
  }

export {
    GetEntityStateBag,
    GetEntityStateValue,
    SetEntityStateValue,
    GetPlayerStateBag,
    GetPlayerStateValue,
    SetPlayerStateValue
}