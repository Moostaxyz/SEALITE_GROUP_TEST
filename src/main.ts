import { combinations } from "./common/defaults/combinations";
import { EAlienSymbol } from "./common/enums/test.enum";

function isValidAlienNumeral(s: string): boolean {
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const nextChar = s[i + 1] ?? "";
    const pair = char + nextChar;

    // Check if char is a key in EAlienSymbol or if pair is a key in combinations
    if (!(char in EAlienSymbol) && !combinations[pair]) {
      return false;
    }

    // If the pair is found in combinations, skip the next character
    if (combinations[pair] !== undefined) {
      i++;
    }
  }
  return true;
}

export async function alienToInt(s: string): Promise<number> {
  if (!isValidAlienNumeral(s))
    throw new Error("Input string contains invalid Alien numerals.");

  let result = 0;
  let i = 0;

  while (i < s.length) {
    if (i + 1 < s.length && combinations[s[i] + s[i + 1]] !== undefined) {
      // If a subtraction pair is found, add its value.
      result += combinations[s[i] + s[i + 1]];
      i += 2;
    } else {
      // If no subtraction pair, add the value of the single character.
      result += EAlienSymbol[s[i] as keyof typeof EAlienSymbol];
      i++;
    }
  }

  return result;
}
