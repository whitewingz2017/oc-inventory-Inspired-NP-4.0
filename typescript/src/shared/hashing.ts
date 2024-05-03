import * as import_crypto_js from 'crypto-js';

// Helper function to check Duplicity version
function isDuplicityVersion(): boolean {
  // Implement your Duplicity version check logic here
  return false; // Placeholder, replace with actual version check logic
}

class Hashing {
  private _H?: string;
  private _I?: string;
  private _O?: string;
  private _cache: Record<string, Record<string, string>> = {};

  private _hashKey(): string {
    return this._H ?? this._generateKey();
  }

  private _decodeKey(): string {
    return this._I ?? this._generateKey();
  }

  private _encodeKey(): string {
    return this._O ?? this._generateKey();
  }

  private _encodeBase64(payload: string): string {
    if (typeof payload !== "string") return "";
    return import_crypto_js.enc.Base64.stringify(import_crypto_js.enc.Utf8.parse(payload));
  }

  private _decodeBase64(payload: string): string {
    if (typeof payload !== "string") return "";
    return import_crypto_js.enc.Utf8.stringify(import_crypto_js.enc.Base64.parse(payload));
  }

  private _encodeAES(payload: string, passphrase: string): string {
    if (typeof payload !== "string" || typeof passphrase !== "string") return "";
    return import_crypto_js.AES.encrypt(payload, passphrase).toString();
  }

  private _decodeAES(payload: string, passphrase: string): string {
    if (typeof payload !== "string" || typeof passphrase !== "string") return "";
    return import_crypto_js.AES.decrypt(payload, passphrase).toString(import_crypto_js.enc.Utf8);
  }

  private _generateKey(length: number = 128): string {
    return import_crypto_js.lib.WordArray.random(length / 8).toString();
  }

  constructor(pToken: string, pSecret: string) {
    this._H = this._decodeBase64(pToken);
    const decoded = this._decodeAES(pToken, pSecret);
    [this._H, this._I, this._O] = decoded.split(":").map((v) => (v.length > 0 ? v : undefined));
  }

  public hashString(string: string): string {
    const key = this._hashKey();
    const cache = this._cache[key]?.[string];

    if (cache) return cache;

    if (!this._cache[key]) this._cache[key] = {};

    const hash = string;

    this._cache[key][string] = hash;

    if (isDuplicityVersion()) {
      console.log(`[SDK] Hash Debug | Event: ${string} | Hash: ${hash}`);
    }

    return hash;
  }

  public encode(payload: any): string {
    let encoded: string | undefined;
    const key = this._encodeKey();

    try {
      encoded = this._encodeAES(JSON.stringify(payload), key);
    } catch (e) {
      console.error("Failed to encode payload");
    }

    return encoded ?? "";
  }

  public decode(payload: string): any {
    let decoded: any;
    const key = this._decodeKey();

    try {
      decoded = JSON.parse(this._decodeAES(payload, key));
    } catch (e) {
      console.error("Failed to decode payload");
    }

    return decoded;
  }
}

export default Hashing;
