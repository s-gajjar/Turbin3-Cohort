import bs58 from "bs58";
const PromptSync = require("prompt-sync");
const prompt = PromptSync();
function base58_to_wallet() {
  try {
    const base58 = prompt("Enter the base58 encoded wallet address: ");
    const wallet = bs58.decode(base58.trim());
    console.log("Decoded wallet (byte array):", wallet);
  } catch (e) {
    console.error("An error occurred:", e);
  }
}
base58_to_wallet();

function wallet_to_base58() {
  try {
    const wallet: number[] = prompt("Enter the wallet address: ");
    const base58 = bs58.encode(Buffer.from(wallet)).toString();
    console.log("Encoded base58: ", base58);
  } catch (e) {
    console.log("An error occurred: ", e);
  }
}
wallet_to_base58();
