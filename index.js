const generateHashtag = require('./exercices/hashtag.js');
const getRomanNumerals = require('./exercices/romanNumerals.js');
const getWordPatternIsomorphic = require('./exercices/wordPattern.js');

const result1 = generateHashtag(' To big');
console.log(`result 1: ${result1}`);

const result2 = getRomanNumerals('MMCX');
console.log(`result 2: ${result2}`);

const result3 = getWordPatternIsomorphic('acca', "toque toque toque toque");
console.log(`result 3: ${result3}`);