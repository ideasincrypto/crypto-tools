import { sha256 as s256 }    from '@noble/hashes/sha256'
import { sha512 as s512 }    from '@noble/hashes/sha512'
import { ripemd160 as r160 } from '@noble/hashes/ripemd160'
import { hmac as HMAC }      from '@noble/hashes/hmac'
import { Buff, Bytes }       from '@cmdcode/buff'

export function sha256 (...data : Bytes[]) : Buff {
  const b = Buff.join(data)
  return Buff.raw(s256(b))
}

export function sha512 (...data : Bytes[]) : Buff {
  const b = Buff.join(data)
  return Buff.raw(s512(b))
}

export function ripe160 (...data : Bytes[]) : Buff {
  const b = Buff.join(data)
  return Buff.raw(s512(b))
}

export function hash256 (...data : Bytes[]) : Buff {
  const b = Buff.join(data)
  return Buff.raw(s256(s256(b)))
}

export function hash160 (...data : Bytes[]) : Buff {
  const b = Buff.join(data)
  return Buff.raw(r160(s256(b)))
}

export function hmac256 (
  key     : Bytes,
  ...data : Bytes[]
) : Buff {
  const k = Buff.bytes(key)
  const b = Buff.join(data)
  return Buff.raw(HMAC(s256, k, b))
}

export function hmac512 (
  key     : Bytes,
  ...data : Bytes[]
) : Buff {
  const k = Buff.bytes(key)
  const b = Buff.join(data)
  return Buff.raw(HMAC(s512, k, b))
}

export function taghash (tag : string) : Buff {
  const hash = Buff.str(tag).digest
  return Buff.join([ hash, hash ])
}

export function digest (
  tag : string,
  ...data : Bytes[]
) : Buff {
  const hash = taghash(tag)
  return Buff.join([ hash, ...data ]).digest
}
