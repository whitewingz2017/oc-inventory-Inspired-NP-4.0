//@ts-ignore
import * as crypto_js from 'crypto-js'

export const GenerateKey = (_0x515a6f = 128) => {
    return crypto_js.lib.WordArray.random(_0x515a6f / 8).toString()
}
export const EncodeAES = (_0x1398e1: any, _0x29e95c: any) => {
    if (typeof _0x1398e1 !== 'string' || typeof _0x29e95c !== 'string') {
        return ''
    }
    return crypto_js.AES.encrypt(_0x1398e1, _0x29e95c).toString()
}
export const DecodeAES = (_0x1929f3: any, _0x595e48: any) => {
    if (typeof _0x1929f3 !== 'string' || typeof _0x595e48 !== 'string') {
        return ''
    }
    return crypto_js.AES.decrypt(_0x1929f3, _0x595e48).toString(crypto_js.enc.Utf8)
}
export const EncodeBase64 = (_0x4cf655: any) => {
    if (typeof _0x4cf655 !== 'string') {
        return ''
    }
    return crypto_js.enc.Base64.stringify(crypto_js.enc.Utf8.parse(_0x4cf655))
}
export const DecodeBase64 = (_0x1005f1: any) => {
    if (typeof _0x1005f1 !== 'string') {
        return ''
    }
    return crypto_js.enc.Utf8.stringify(crypto_js.enc.Base64.parse(_0x1005f1))
}
export const HashHMACMD5 = (_0x298b7b: any, _0x186768: any) => {
    return EncodeBase64((0, crypto_js.HmacMD5)(_0x298b7b, _0x186768).toString())
}
const StringCache: any = {}
export const EncodeString = (_0xb0ce4b: any, _0x411fc3 = GenerateKey()) => {
    return StringCache[_0xb0ce4b] === void 0 && (StringCache[_0xb0ce4b] = HashHMACMD5(_0xb0ce4b, _0x411fc3)), StringCache[_0xb0ce4b]
}
export const EncodePayload = (_0x59e2cd: any, _0x1990df = GenerateKey()) => {
    try {
        return EncodeAES(JSON.stringify(_0x59e2cd), _0x1990df)
    } catch (_0x23c422) {
        console.error('Failed to encode payload')
    }
}
export const DecodePayload = (_0x27fdd1: any, _0x4115fb = GenerateKey()) => {
    try {
        return JSON.parse(DecodeAES(_0x27fdd1, _0x4115fb))
    } catch (_0x3b7e55) {
        console.error('Failed to decode payload')
    }
}
