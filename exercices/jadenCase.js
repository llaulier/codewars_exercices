

exports.toJadenCase = () => {
    let tabJaden = this.split("");
    let jaden = tabJaden;
    for (let i = 0; i < tabJaden.length; i++) {
    jaden[0] = tabJaden[0].toUpperCase();
      if (tabJaden[i] === " ") {
        j = i + 1;
        jaden[j] = tabJaden[j].toUpperCase();
      }
      
  }
  return jaden.join("")};