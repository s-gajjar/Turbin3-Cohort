import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";
import wallet from "./dev-wallet.json";
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com");
(async () => {
  try {
    const tx = await connection.requestAirdrop(
      keypair.publicKey,
      2 * LAMPORTS_PER_SOL
    );
    console.log(
      `Success! Check out yout transaction here: https://explorer.solana.com/tx/${tx}?cluster=devnet `
    );
  } catch (error) {
    console.log("Something went wrong: ", error);
  }
})();