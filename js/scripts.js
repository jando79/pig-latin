function pigLatin(letter) {
  let vowelPigLatinizer = "way";
  return letter + vowelPigLatinizer;
}

function pigLatin(letter) {
  let vowelPigLatinizer = "way";
  let consonantPigLatinizer = "ay";
  let quPigLatinizer = "ay";
  if letter = ["a", "e", "i", "o", "u"] {
  return letter + vowelPigLatinizer;
  } if letter = [any consonant]
  return letter + consonantPigLatinizer;
  if letter = ["qu"]
  return letter + quPigLatinizer;
}

function pigLatin(word) {
 let wordArray = word.split()
 //wordArray = [w, o, r, d]
 wordArray[0] = wordArray[0] + "ay"
 //wordArray = [way, o, r, d]
 let conjugatedWord = wordArray.join("")
 return conjugatedWord
 //cojugatedWord= "wayord"
}

function pigLatin(word) {
  let wordArray = word.split()
  //wordArray = [w, o, r, d]
  if wordArray[0] = (a, e, i, o, u)
  then wordArray[0] = wordArray[0] + vowelPigLatinizer
}


