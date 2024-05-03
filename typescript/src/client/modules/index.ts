import { Utils } from "../../shared/utils";
import { NUI } from "./nui";

let _codename, _version, _resourceName, _projectName, _apiURL, _apiKey, _ready, _onReadyCallbacks, _init, initFn;

class Resource {
  constructor(resource) {
    _codename = new WeakMap();
    _version = new WeakMap();
    _resourceName = new WeakMap();
    _projectName = new WeakMap();
    _apiURL = new WeakMap();
    _apiKey = new WeakMap();
    _ready = new WeakMap();
    _onReadyCallbacks = new WeakMap();
    _init = new WeakSet();

    const info = {
        codename: resource,
        version: "1.0.0"
    };

    
    _codename.set(this, info.codename);
    _version.set(this, info.version);
    _resourceName.set(this, GetCurrentResourceName());
    _projectName.set(this, resource);

    emit("__npx_core:handshake", info, initFn.bind(this));
    
    NUI.register("__npx_core:handshake", async (info2) => {
      if (info2.codename !== _codename.get(this)) return;

      const timedOut = await Utils.waitForCondition(() => _ready.get(this), 10000);

      if (timedOut)
        return;

      return { API_URL: _apiURL.get(this), API_KEY: _apiKey.get(this) };
    });
  }

  get codename() {
    return _codename.get(this);
  }

  get version() {
    return _version.get(this);
  }

  get isReady() {
    return _ready.get(this);
  }

  onReady(callback) {
    if (_ready.get(this))
      callback();
    else
      _onReadyCallbacks.get(this).push(callback);
  }
}

_init = new WeakSet();
initFn = async function(handshake) {
  _apiURL.set(this, handshake.API_URL);
  _apiKey.set(this, handshake.API_KEY);
  _ready.set(this, true);

  for (const callback of _onReadyCallbacks.get(this))
    callback();
};

export { Resource };
