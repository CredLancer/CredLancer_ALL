import { Pbkdf2Response } from "@railgun-community/shared-models";
import { pbkdf2 } from "@railgun-community/wallet";

export const hashPasswordString = async (secret: string, salt: string, iterations: number): Promise<Pbkdf2Response> => {
  return pbkdf2(secret, salt, iterations);
};
