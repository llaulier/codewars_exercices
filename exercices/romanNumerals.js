// https://www.codewars.com/kata/51b6249c4612257ac0000005

// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.


const abacus = {
  M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
};
function getRomanNumerals(roman) {
  // let romanLength = roman.length
  // function emptyString (romanLength) {return " ".repeat(romanLength)}
  // console.log(emptyString(romanLength))
  return roman.length > 0 ? roman.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((symbol1, symbol2) => symbol1 + abacus[symbol2], 0) : 0;
}

module.exports = getRomanNumerals;