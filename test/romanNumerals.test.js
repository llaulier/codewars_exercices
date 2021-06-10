const getRomanNumerals = require('../exercices/romanNumerals');

describe("Test roman numerals", () => { 
    it("Expect additionnal each element in order", () => {
        expect(getRomanNumerals("MCXVI")).toBe(1116)
    })
    it("Expect additionnal each element from higher to smaller", () => {
        expect(getRomanNumerals("XXIV")).toBe(24)
    })
    it("Expect additionnal a great number", () => {
        expect(getRomanNumerals("MMMMDCCCLXXXVIII")).toBe(4888)
    })
    it("Expect a year", () => {
        expect(getRomanNumerals("MMXXI")).toBe(2021)
    })
    // it("Expect return 0", () => {
    //     expect(getRomanNumerals("")).toBe(0)
    // })
    // it("Expect return 0", () => {
    //     expect(getRomanNumerals(" ")).toBe(0)
    // })
});
