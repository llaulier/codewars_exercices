
// abab', 'truck car truck car'


const getWordPatternIsomorphic = require('../exercices/wordPattern');

describe("Test isomorphism of 2 strings", () => { 
    it("respect a true simple schema", () => {
        expect(getWordPatternIsomorphic("abab", "truck car truck car")).toBe(true)
    })
    it("respect a bad length", () => {
        expect(getWordPatternIsomorphic("abab", "apple banana mango banana apple")).toBe(false)
    })
    it("respect a false simple schema", () => {
        expect(getWordPatternIsomorphic("abab", "apple banana banana apple")).toBe(false)
    })
    it("respect a false simple schema", () => {
        expect(getWordPatternIsomorphic("ababccmc", "apple banana apple banana coconut coconut melon apple")).toBe(false)
    })

});