const generateHashtag = require('./exercices/hashtag.js');
const getRomanNumerals = require('./exercices/romanNumerals.js');
const getWordPatternIsomorphic = require('./exercices/wordPattern.js');
const getCakes = require('./exercices/bakerRecipes.js');
const getMumbling = require('./exercices/mumbling');

const result1 = generateHashtag(' To big');
console.log(`result of hastag: ${result1}`);

const result2 = getRomanNumerals('MMCX');
console.log(`result of roman numerals: ${result2}`);

const result3 = getWordPatternIsomorphic('acca', "toque toque toque toque");
console.log(`result of Isomorphism: ${result3}`);

const result4 = getCakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
console.log(`result of get Cakes: ${result4}`);

const mumblingResult = getMumbling("cwAt")
console.log(`result of Mumbling: ${mumblingResult}`);