const generateHashtag = require('./exercices/hashtag.js');
const getRomanNumerals = require('./exercices/romanNumerals.js');
const getWordPatternIsomorphic = require('./exercices/wordPattern.js');
const getCakes = require('./exercices/bakerRecipes.js');
const getMumbling = require('./exercices/mumbling');
const getAddUpToK = require('./exercices/codeProblem1');
const getProductofArray = require('./exercices/codeProblem2');

// const result1 = generateHashtag(' To big');
// console.log(`result of hastag: ${result1}`);

// const result2 = getRomanNumerals('MMCX');
// console.log(`result of roman numerals: ${result2}`);

// const result3 = getWordPatternIsomorphic('acca', "toque toque toque toque");
// console.log(`result of Isomorphism: ${result3}`);

// const cakeResult = getCakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
// console.log(`result of get Cakes: ${cakeResult}`);

// const mumblingResult = getMumbling("cwAt")
// console.log(`result of Mumbling: ${mumblingResult}`);

// const kResult = getAddUpToK([10, 15, 3, 7, 25], 13)
// console.log(`result of k: ${kResult}`);
const productResult = getProductofArray([1,2,3,4,5])
console.log(`result of product array: ${productResult}`);
