const getCakes = require('../exercices/bakerRecipes');


describe("Test cakes", () => {
    it( "Expect 0", () =>{  
        expect(getCakes({"apples": 3, "flour": 300, "sugar": 150, "milk": 100, "oil": 100},{"sugar": 500, "flour": 2000, "milk": 2000})).toBe(0)
    });
    it( "Expect 2", () =>{  
        expect(getCakes({"flour": 500, "sugar": 200, "eggs": 1},{"flour": 1200, "sugar": 1200, "eggs": 5, "milk": 200})).toBe(2)
    });
    it( "Expect 11", () =>{  
        expect(getCakes({"cream":200,"flour":300,"sugar":150,"milk":100,"oil":100},{"sugar":1700,"flour":20000,"milk":20000,"oil":30000,"cream":5000})).toBe(11)
    });
});