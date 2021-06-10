function getWordPatternIsomorphic(pattern, str) {
  let comb = pattern.split('');
  let word = str.split(' ');
    if(comb.length != word.length) {
      return false;
    }
    const obj = {};

    for(let j = 0; j< comb.length ; j++){

      if(!obj[comb[j]]){
        obj[comb[j]] = word[j];
      }
      else if (obj[comb[j]] !== word[j]) {
        return false
      }
    }
    return true 
  }

  module.exports = getWordPatternIsomorphic;