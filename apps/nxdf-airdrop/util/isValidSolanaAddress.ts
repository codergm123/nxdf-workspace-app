import { PublicKey } from '@solana/web3.js'

/**
 * Throw Exception when
 */

export const getIsValidSolanaAddress = (address: string) => {
  try {
    new PublicKey(address)
    return true
  } catch (e) {
    return false
  }
}
