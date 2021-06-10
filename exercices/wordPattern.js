// https://www.codewars.com/kata/562846dd1f77ab7c00000033/train/javascript
// That given a pattern and a string str, find if str follows the same sequence as pattern.
// Note: Each letter in the pattern stands for a distinct word => no empty string !

//ISOPMORPHISM
function getWordPatternIsomorphic(pattern, str) {
  let comb = pattern.split('');
  let word = str.split(' ');
    if(comb.length != word.length) {
      return false;
    }
    const obj1 = {};
    const obj2 = {};
    for(let j = 0; j< comb.length ; j++){
      if(!obj1[comb[j]]){
        obj1[comb[j]] = word[j]
      }
      else if (obj1[comb[j]] !== word[j]) {
        return false
      } 
    }
    for(let j = 0; j< word.length ; j++){
      if(!obj2[word[j]]){
        obj2[word[j]] = comb[j]
      }
      else if (obj2[word[j]] !== comb[j]) {
        return false
      } 
    }
    if(Object.keys(obj1).length != Object.keys(obj2).length){
      return false
    }

    return true 
  }

  module.exports = getWordPatternIsomorphic;