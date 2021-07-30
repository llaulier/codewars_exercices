const getProductofArray = require('../exercices/codingProblem2');

describe("Test Product", () => {
    it( "Expect the total product of the array each except index i", () =>{  
        expect(getProductofArray([1,2,3,4,5])).toEqual([120,60,40,30,24])
    });
    it( "Expect the total product of the array each except index i", () =>{  
        expect(getProductofArray([4,3,2,1])).toEqual([6,8,12,24])
    });
    it( "Expect the total product of the array each except index i", () =>{  
        expect(getProductofArray([3, 2, 1])).toEqual([2,3,6])
    });
    it( "Expect the total product of the array each except index i", () =>{  
        expect(getProductofArray([36, 25, 12])).toEqual([300,432,900])
    });
    it( "Expect the total product of the array each except index i", () =>{  
        expect(getProductofArray([10, 20, 30, 40, 50, 60])).toEqual([72000000,36000000,24000000,18000000,14400000,12000000])
    });
  });