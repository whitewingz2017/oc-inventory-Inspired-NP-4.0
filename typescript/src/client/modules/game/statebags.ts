
export function RegisterStatebagChangeHandler(pBagKey: string, pOwned: boolean, pReplicated: boolean, pHandler: (netId: number, handle: number, value: any) => void) {
    return AddStateBagChangeHandler(pBagKey, null, async function(bagName: string, key: string, value: any, _: any, replicated: boolean) {
      if (pReplicated && !replicated) return;
  
      const isPlayer = bagName.startsWith("player");
      const netId = parseInt(bagName.substring(7));
      const handle: any = isPlayer ? GetPlayerFromStateBagName(bagName) : GetPlayerFromStateBagName(bagName);
  
      if (!handle) return;
  
      const isOwned = isPlayer ? NetworkGetPlayerIndexFromPed(handle) === PlayerId() : NetworkGetEntityOwner(handle) === PlayerId();
  
      if (pOwned && !isOwned) return;
  
      pHandler(netId, handle, value);
    });
  }

function GetPlayerFromStateBagName(bagName: string) {
    throw new Error("Function not implemented.");
}
