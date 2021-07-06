const getWordPatternIsomorphic = require('../exercices/wordPattern');

describe("Test isomorphism of 2 strings", () => { 
    it("respect a true simple schema", () => {
        expect(getWordPatternIsomorphic("abab", "truck car truck car")).toBe(true)
    })
    it("respect a bad length", () => {
        expect(getWordPatternIsomorphic("abab", "apple banana mango banana apple")).toBe(false)
    })
    it("respect a false simple schema", () => {
        expect(getWordPatternIsomorphic('aaaa', 'cat cat dog cat')).toBe(false)
    })
    it("respect a false medium schema", () => {
        expect(getWordPatternIsomorphic("ababccmc", "apple banana apple banana coconut coconut melon apple")).toBe(false)
    })
    it("respect a true simple schema with special character", () => {
        expect(getWordPatternIsomorphic('bbbabcb', 'c# c# c# javascript c# python c#')).toBe(true)
    })
    it("with an empty string(1)", () => {
        expect(getWordPatternIsomorphic('bbbabcb', 'banana banana banana apple banana coconut  ')).toBe(false)
    })
    it("with an empty string(2)", () => {
        expect(getWordPatternIsomorphic('bbbabcd', 'banana banana banana apple banana coconut  ')).toBe(false)
    })
    it("respect word integrity", () => {
        expect(getWordPatternIsomorphic('bbb', 'banana banana banan')).toBe(false)
    })
    it("tricky", () => {
        expect(getWordPatternIsomorphic('abba', 'dog dog dog dog')).toBe(false)
    })
});