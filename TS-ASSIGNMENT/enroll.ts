import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { Program, Wallet, AnchorProvider } from "@coral-xyz/anchor";
import { IDL, Turbine3Prereq } from "../programs/Turbine3_prereq";
import wallet from "./Turbine3-wallet.json";
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com");
const github = Buffer.from("s-gajjar", "utf-8");
const provider = new AnchorProvider(connection, new Wallet(keypair), {
  commitment: "confirmed",
});
const program: Program<Turbine3Prereq> = new Program(IDL, provider);
const enrollment_seeds = [Buffer.from("prereq"), keypair.publicKey.toBuffer()];
const [enrollment_key, _bump] = PublicKey.findProgramAddressSync(
  enrollment_seeds,
  program.programId
);

(async () => {
  try {
    const tx = await program.methods
      .complete(github)
      .accounts({ signer: keypair.publicKey })
      .signers([keypair])
      .rpc();

    console.log(
      `Success! Check out your transaction here: https://explorer.solana.com/tx/${tx}?cluster=devnet`
    );
  } catch (error) {
    console.log("Error occurred: ", error);
  }
})();
