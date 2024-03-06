import { alienToInt } from "../main";

describe("alienToInt", () => {
  it("converts simple numeral AA to 2", async () => {
    expect(await alienToInt("AA")).toBe(2);
  });

  it("converts simple numeral AAA to 3", async () => {
    expect(await alienToInt("AAA")).toBe(3);
  });

  it("converts simple numeral ZAA, to 12", async () => {
    expect(await alienToInt("ZAA")).toBe(12);
  });

  it("converts simple numeral ZZBAA, to 27", async () => {
    expect(await alienToInt("ZZBAA")).toBe(27);
  });

  it("converts combined numeral LBAAA to 58", async () => {
    expect(await alienToInt("LBAAA")).toBe(58);
  });

  it("converts complex numeral RCRZCAB to 1994", async () => {
    expect(await alienToInt("RCRZCAB")).toBe(1994);
  });

  it("converts complex numeral RCRZCABRCRZCABRCRZCAB to 5982", async () => {
    expect(await alienToInt("RCRZCABRCRZCABRCRZCAB")).toBe(5982);
  });

  it("throws an error for invalid numeral", async () => {
    await expect(alienToInt("Invalid")).rejects.toThrow(
      "Input string contains invalid Alien numerals."
    );
  });
});
