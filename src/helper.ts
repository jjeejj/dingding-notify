import { createHmac } from "crypto";

/**
 * 对给定的字符串进行  sha256 签名
 * @param {string} str 待签名的字符串
 * @param {string} secret sha256 的密钥
 * @param {string}
 */
export function hmacSHA256(str: string, secret: string): string {
    return createHmac("sha256",secret).update(str).digest("base64")
}

/**
 * 对给定的 字符串进行 urlEncode 
 */
export function urlEncode(str: string): string {
    return encodeURIComponent(str);
}