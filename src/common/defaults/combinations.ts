import { EAlienSymbol } from "../enums/test.enum";

//default value
export const combinations: { [key: string]: number } = {
  AB: EAlienSymbol.A * 4, // Since AB represents 4, and A is 1, this is a way to derive its value.
  AZ: EAlienSymbol.Z - EAlienSymbol.A, // 9
  ZL: EAlienSymbol.L - EAlienSymbol.Z, // 40
  ZC: EAlienSymbol.C - EAlienSymbol.Z, // 90
  CD: EAlienSymbol.D - EAlienSymbol.C, // 400
  CR: EAlienSymbol.R - EAlienSymbol.C, // 900
};
