import { crypto } from "https://deno.land/std@0.214.0/crypto/crypto.ts";

export const key = await crypto.subtle.generateKey(
  { name: "HMAC", hash: "SHA-512" },
  true,
  ["sign", "verify"]
);
