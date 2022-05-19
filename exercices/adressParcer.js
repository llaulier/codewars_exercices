const addressTexts = [
    `89 rue des oies BP 4560 59160 Lomme`,
    `13 rue des canards verts résidence "les pins" CS455OO 60530 Crouy-en-Thelle`
    `95 bis avenue du port Chez Mmme Michèle Michu 14000 CAEN`,
    `45 allée des acacias "la petite prairie" 80000 Amiens`,
    `345 avenue des Amarres villa "Des marais" 34000 Sainte-Île-en-Bretagne`,
    `7 rue des anciens combattants et de la résistance 8233 Appartement 8 95120 Cergy`
  ];
  
  const parseAddress = addressText => /(?<addressnum>\d+)\s(?<address1>[a-zA-ZÂŒÉÈÊËÇèçéîÎêëàù’'ëâôœ ]{1,33}\s\b)(?<adress2>[a-zA-ZÂŒÉÈÊËÇèçéîÎêëàù’'ëâôœ "1-9]{1,}\D\b)(?<zip>\d{5})\s(?<city>[a-zA-ZÂŒÉÈÊËŸÿÇûèçôÔÎîéêëàù/’'"ëâôœ -]*)/gm.exec(addressText).groups;
  
  addressTexts.forEach(ele => console.log(parseAddress(ele)));