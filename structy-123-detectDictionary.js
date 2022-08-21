// https://structy.net/problems/premium/detect-dictionary

// p: arr & str
// r: boolean

const detectDictionary = (dictionary, alphabet) => {
  for (let i = 1; i < dictionary.length; i++) {
    const word = dictionary[i];
    const prevW = dictionary[i - 1];
    const maxLen = Math.max(word.length, prevW.length);

    for (let j = 0; j < maxLen; j++) {
      const indexPrevC = alphabet.indexOf(prevW[j]);
      const indexC = alphabet.indexOf(word[j]);

      if (indexPrevC > indexC) {
        return false;
      } else if (indexPrevC < indexC) {
        break;
      }
    }
  }

  return true;
};

const dictionary = ["zoo", "tick", "tack", "door"];
const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
console.log(detectDictionary(dictionary, alphabet)); // -> true
// z o  o
// 2-11-11
// t a c k
// 4-8-9-15
// t i c k
// 4-5-9-15
// door
// const dictionary = ["zoo", "tack", "tick", "door"];
// const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
// console.log(detectDictionary(dictionary, alphabet)); // -> false

//////////////////// not WORKING
// const detectDictionary = (dictionary, alphabet) => {
//     let maxLen = -Infinity;
//     for (const word of dictionary) {
//       maxLen = Math.max(maxLen, word.length);
//     }

//     const prevW = [];
//     const firstW = dictionary[0];

//     for (let i = 0; i < firstW.length; i++) {
//       const char = firstW[i];
//       prevW.push(alphabet.indexOf(char));
//     }

//     for (let i = 1; i < dictionary.length; i++) {
//       const word = dictionary[i];

//       for (let j = 0; j < maxLen; j++) {
//         const c = word[j];

//         const iCurrW = alphabet.indexOf(c);
//         const iPrevW = prevW[j];

//         if (iPrevW > iCurrW) {
//           console.log(word, c, iPrevW, iCurrW);
//           return false;
//         } else if (iPrevW < iCurrW) {
//           console.log(word, c, iPrevW, iCurrW);

//           prevW[j] = iCurrW;
//           break;
//         }
//       }

//       for (let j = 0; i < word.length; i++) {
//         prevW[i] = word[i];
//       }
//     }

//     return true;
//   };
