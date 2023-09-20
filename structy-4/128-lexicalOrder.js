// p: string, string, string,
// r: boolean
// e:
// const alphabet = "abcdefghijklmnopqrstuvwxyz";
// lexicalOrder("apple", "dock", alphabet); // -> true
// apple
// dock
//  i
// apple
// ample
//
//     i
// apple
// appl
//
const lexicalOrder = (word1, word2, alphabet) => {
  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    const i1 = alphabet.indexOf(word1[i]);
    const i2 = alphabet.indexOf(word2[i]);
    if (i1 > i2) return false;
    if (i1 < i2) return true;
  }
  return true;
};
