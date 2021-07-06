const mumbling = require('../exercices/mumbling');


describe("Test mumbling", () => {
    it( "Expect a string with Capital character on first, and a repeat", () =>{  
        expect(mumbling("abcd")).toBe("A-Bb-Ccc-Dddd")
    })
});