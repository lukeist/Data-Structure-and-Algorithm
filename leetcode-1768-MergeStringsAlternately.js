/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

// p: string, string;
// r: string
// e:
//  i
// ab
// j
// pqrs
//

var mergeAlternately = function (word1, word2) {
  let w = "",
    i = 0,
    j = 0;

  while (i < word1.length || j < word2.length) {
    if (i < word1.length) {
      w += word1[i];
      i++;
    }

    if (j < word2.length) {
      w += word2[j];
      j++;
    }
  }

  return w;
};

// var mergeAlternately = function(word1, word2) {
//     let w = '', i = 0, j = 0, count = 0;

//     while (i < word1.length && j < word2.length) {
//         if (count % 2 === 0) {
//             w += word1[i];
//             i++;
//             count++;
//         } else {
//             w += word2[j];
//             j++;
//             count++;
//         }
//     }

//     if (i === word1.length) w += word2.slice(j);
//     if (j === word2.length) w += word1.slice(i);

//     return w;
// };
