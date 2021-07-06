function mumbling(s) {
    let arrayS = [...s];
    let letter = [];
    for (let i = 0; i< arrayS.length ; i++){
      letter[i] = arrayS[i].repeat(i+1).toLowerCase();
      
    }
    let upperLetter = letter.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('-');
    return upperLetter;
  }

  module.exports = mumbling

  // function accum(s) {
  //   return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  // }