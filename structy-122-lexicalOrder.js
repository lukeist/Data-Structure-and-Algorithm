// p: 3 strings
// r: boolean
const lexicalOrder = (word1, word2, alphabet) => {
  const len = Math.max(word1.length, word2.length);

  for (let i = 0; i < len; i++) {
    const c1 = word1[i];
    const c2 = word2[i];

    if (alphabet.indexOf(c1) > alphabet.indexOf(c2)) {
      return false;
    } else if (alphabet.indexOf(c1) < alphabet.indexOf(c2)) {
      return true;
    }
  }

  return true;
};
// const lexicalOrder = (word1, word2, alphabet) => {
//   const len = word1.length < word2.length ? word1.length : word2.length;

//   for (let i = 0; i < len; i++) {
//     const c1 = word1[i];
//     const c2 = word2[i];

//     console.log(c1, alphabet.indexOf(c1), c2, alphabet.indexOf(c2));
//     if (alphabet.indexOf(c1) === alphabet.indexOf(c2)) {
//       continue;
//     } else if (alphabet.indexOf(c1) > alphabet.indexOf(c2)) {
//       return false;
//     } else return true;
//   }

//   return true;
// };

const alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log(lexicalOrder("apple", "dock", alphabet)); // -> true

console.log(lexicalOrder("apple", "ample", alphabet)); // -> false
