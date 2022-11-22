// p: arr, str
// r: boolean
//

const detectDictionary = (words, al) => {
  for (let i = 1; i < words.length; i++) {
    if (!checkTwo(words[i - 1], words[i], al)) return false;
  }

  return true;
};

const checkTwo = (w1, w2, al) => {
  let i = 0;
  while (i < w1.length && i < w2.length) {
    console.log(w1[i], w2[i]);
    if (al.indexOf(w1[i]) < al.indexOf(w2[i])) return true;
    if (al.indexOf(w1[i]) > al.indexOf(w2[i])) return false;
    i++;
  }

  return w1.length <= w2.length ? true : false;
};

// const dictionary = ["zoo", "tick", "tack", "door"];
// const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
// // detectDictionary(dictionary, alphabet); // -> true

// const detectDictionary = (dictionary, alphabet) => {
//   for (let i = 1; i < dictionary.length; i++) {
//     if (!compareW(dictionary[i - 1], dictionary[i], alphabet)) return false;
//   }

//   return true;
// };

// const compareW = (w1, w2, alphabet) => {
//   const maxLen = Math.max(w1.length, w2.length);

//   for (let i = 0; i < maxLen; i++) {
//     if (alphabet.indexOf(w1[i]) > alphabet.indexOf(w2[i])) return false;
//     if (alphabet.indexOf(w1[i]) < alphabet.indexOf(w2[i])) return true;
//   }

//   return true;
// };

// //i
// //door
// //tack
// //tick
// //zoo

// // lastI < currI => remove lastW
// // lastI > currI => return false
// // lastI = currI => wait til the end => return true

const dictionary = ["zoo", "tick", "tack", "door"];
// const dictionary = ["zoo", "tack", "tick", "door"];
const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
console.log(detectDictionary(dictionary, alphabet)); // -> true
