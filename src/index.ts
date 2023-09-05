import { secp256k1 as secp, schnorr } from '@noble/curves/secp256k1'

export const noble = { secp, schnorr }

export * from './config.js'
export * from './ecc.js'
export * from './types.js'

export * as assert from './assert.js'
export * as CONST  from './const.js'
export * as ecdh   from './ecdh.js'
export * as hash   from './hash.js'
export * as hd     from './hd.js'
export * as keys   from './keys.js'
export * as math   from './math.js'
export * as proof  from './proof.js'
export * as pt     from './point.js'
export * as signer from './sig.js'
export * as util   from './util.js'
