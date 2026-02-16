import crypto from "crypto";

export const generateRandomRoken  = async()=>{
    return crypto.randomBytes(32).toString("hex");
}

export function sha256(input) {
    return crypto.createHash("sha256").update(input).digest("hex");
  }