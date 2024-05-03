import { Utils } from "../../../shared/utils";

const _LoadEntityModel = async (pModel: number | string): Promise<boolean> => {
    const modelHash = typeof pModel === "number" ? pModel : GetHashKey(pModel);
    
    if (HasModelLoaded(modelHash)) return true;
    
    RequestModel(modelHash);
    
    const hasTimedOut = await Utils.waitForCondition(() => HasModelLoaded(modelHash), 3000);
    return !hasTimedOut;
  };
  
  const LoadAnimationDictionary = async (pDict: string): Promise<boolean> => {
    if (HasAnimDictLoaded(pDict)) return true;
    
    RequestAnimDict(pDict);
    
    const hasTimedOut = await Utils.waitForCondition(() => HasAnimDictLoaded(pDict), 3000);
    return !hasTimedOut;
  };
  
  const LoadAnimationClipSet = async (pAnim: string): Promise<boolean> => {
    if (HasClipSetLoaded(pAnim)) return true;
    
    RequestClipSet(pAnim);
    
    const hasTimedOut = await Utils.waitForCondition(() => HasClipSetLoaded(pAnim), 3000);
    return !hasTimedOut;
  };
  
  const LoadTextureDictionary = async (pDict: string): Promise<boolean> => {
    if (HasStreamedTextureDictLoaded(pDict)) return true;
    
    RequestStreamedTextureDict(pDict, true);
    
    const hasTimedOut = await Utils.waitForCondition(() => HasStreamedTextureDictLoaded(pDict), 3000);
    return !hasTimedOut;
  };
  
  const LoadWeaponAsset = async (pWeaponAsset: number | string, p1: any, p2: any): Promise<boolean> => {
    const weaponHash = typeof pWeaponAsset === "number" ? pWeaponAsset : GetHashKey(pWeaponAsset);
    
    if (HasWeaponAssetLoaded(weaponHash)) return true;
    
    RequestWeaponAsset(weaponHash, p1, p2);
    
    const hasTimedOut = await Utils.waitForCondition(() => HasWeaponAssetLoaded(weaponHash), 3000);
    return !hasTimedOut;
  };
  
  const LoadNamedPtfxAsset = async (pFxName: string): Promise<boolean> => {
    if (HasNamedPtfxAssetLoaded(pFxName)) return true;
    
    RequestNamedPtfxAsset(pFxName);
    
    const hasTimedOut = await Utils.waitForCondition(() => HasNamedPtfxAssetLoaded(pFxName), 3000);
    return !hasTimedOut;
  };
  
  export const Streaming = {
    loadModel: _LoadEntityModel,
    loadTexture: LoadTextureDictionary,
    loadAnim: LoadAnimationDictionary,
    loadClipSet: LoadAnimationClipSet,
    loadWeaponAsset: LoadWeaponAsset,
    loadNamedPtfxAsset: LoadNamedPtfxAsset
  };