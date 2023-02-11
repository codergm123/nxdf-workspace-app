import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  Token,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import {
  Connection,
  PublicKey,
} from '@solana/web3.js';

export async function filterValidAccount(
  connection: Connection,
  mintAddress: string,
  toAddress: string,
) {
  if (!toAddress) return;

  let isValid = false;

  try {
    const mintPublicKey = new PublicKey(mintAddress);
    const destPublicKey = new PublicKey(toAddress);

    const associatedDestinationTokenAddr =
      await Token.getAssociatedTokenAddress(
        ASSOCIATED_TOKEN_PROGRAM_ID,
        TOKEN_PROGRAM_ID,
        mintPublicKey,
        destPublicKey
      );

    const receiverAccount = await connection.getAccountInfo(
      associatedDestinationTokenAddr
    );

    isValid = receiverAccount !== null;
    console.log(isValid, toAddress);
  } catch (error: any) {
    console.log(`failed: ${error.message}, ${toAddress}`);
  }

  // console.log(isValid, toAddress);
  return isValid;
}
