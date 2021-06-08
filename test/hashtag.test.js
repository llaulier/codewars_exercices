const generateHashtag = require('../exercices/hashtag');


describe("Test Hashtag", () => {
    it( "Expect an empty string to return false", () =>{  
        expect(generateHashtag(" ")).toBe(false)
    });
    it( "Expected a Hashtag (#) at the beginning.", () =>{  
        expect(generateHashtag("Do We Have A Hashtag")).toBe("#DoWeHaveAHashtag")
    });
    it( "Should remove spaces.", () =>{  
        expect(generateHashtag("Codewars Is Nice")).toBe("#CodewarsIsNice")
    });
    it( "Still an empty string", () =>{  
        expect(generateHashtag(" ".repeat(200))).toBe(false)
    });
    it( "Should handle a single word.", () =>{  
        expect(generateHashtag("Codewars")).toBe("#Codewars")
    });
    it( "Should capitalize first letters of words.", () =>{  
        expect(generateHashtag("Codewars Is Nice")).toBe("#CodewarsIsNice")
    });
    it( "Should remove spaces", () =>{  
        expect(generateHashtag("code" + " ".repeat(140) + "wars")).toBe("#CodeWars")
    });
    it( "Should return false if the final word is longer than 140 chars.", () =>{  
        expect(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat")).toBe(false)
    });
    it( "Should work", () =>{  
        expect(generateHashtag("a".repeat(139))).toBe("#A" + "a".repeat(138))
    });
    it( "Too long", () =>{  
        expect(generateHashtag("a".repeat(140))).toBe(false)
    });
  });
  