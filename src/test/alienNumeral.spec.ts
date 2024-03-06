import { alienToInt } from "../main";

describe("alienToInt", () => {
  it("converts simple numeral AAA to 3", async () => {
    expect(await alienToInt("AAA")).toBe(3);
  });

  it("converts combined numeral LBAAA to 58", async () => {
    expect(await alienToInt("LBAAA")).toBe(58);
  });

  it("converts complex numeral RCRZCAB to 1994", async () => {
    expect(await alienToInt("RCRZCAB")).toBe(1994);
  });

  it("throws an error for invalid numeral", async () => {
    await expect(alienToInt("Invalid")).rejects.toThrow(
      "Input string contains invalid Alien numerals."
    );
  });
});
