import * as crypto_js from 'crypto-js';

const import_crypto_js2: any = require('crypto-js');

const GenerateKey = (length: number = 128): string => {
  return import_crypto_js2.lib.WordArray.random(length / 8).toString();
};

const EncodeAES = (payload: string, passphrase: string): string => {
  if (typeof payload !== 'string' || typeof passphrase !== 'string') {
    return '';
  }
  return crypto_js.AES.encrypt(payload, passphrase).toString();
};

const DecodeAES = (payload: string, passphrase: string): string => {
  if (typeof payload !== 'string' || typeof passphrase !== 'string') {
    return '';
  }
  return crypto_js.AES.decrypt(payload, passphrase).toString(crypto_js.enc.Utf8);
};

const EncodeBase64 = (payload: string): string => {
  if (typeof payload !== 'string') {
    return '';
  }
  return crypto_js.enc.Base64.stringify(crypto_js.enc.Utf8.parse(payload));
};

const HashHMACMD5 = (payload: string, secret: string): string => {
  return EncodeBase64(crypto_js.HmacMD5(payload, secret).toString());
};

const StringCache: any = {};

const EncodeString = (event: string, key: string = GenerateKey()): string => {
  if (StringCache[event] === void 0) {
    StringCache[event] = HashHMACMD5(event, key);
  }
  return StringCache[event];
};

const EncodePayload = (payload: any, key: string = GenerateKey()): string => {
  try {
    return EncodeAES(JSON.stringify(payload), key);
  } catch (e) {
    console.error('Failed to encode payload');
    return '';
  }
};

const DecodePayload = (payload: string, key: string = GenerateKey()): any => {
  try {
    console.log('Decoding Payload:', payload);
    console.log('Using Key:', key);

    return JSON.parse(DecodeAES(payload[0], key));
  } catch (e) {
    console.error('Failed to decode payload:', e.message);
    return { error: e.message, originalPayload: payload };
  }
};

export {
    GenerateKey,
    EncodeAES,
    DecodeAES,
    EncodeBase64,
    HashHMACMD5,
    StringCache,
    EncodeString,
    EncodePayload,
    DecodePayload
}