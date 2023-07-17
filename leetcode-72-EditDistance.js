/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

// p: string , string;
// r: number;
// e:
//
//
// horse
// ros
//                        i = index:  01234
//                        i = length: 12345
//                                        i
//                                    horse
//                                        j
//                                      ros
//                                      125
//                               /       |        \
//                             i          i           i
//                          horse     horse        horse
//                              j        j            j
//                            ros       ros          ros
//
//
//
//                                (3) horse
//                                      ros
//                      (remove) /         |(insert)          \(replace)
//                     (2)   hors          horse                   hors (3)
//                            ros             ro                     ro
//              (same) |                  /   \     \             /   /   \
//                 (2) hor              hors   horse   hors        hor   hors   hor  (2)
//                     ro                ro       r      r         ro      r     r
//     (remove) /   \    \                                                      |
//          (1) ho   hor  ho                                                    ho  (2)
//              ro     r   r                                                     x
//      (same) |
//              h (1)
//              r
//            / \ \ (replace)
//            x h  x (0)
//            r x  x
//

function minDistance(
  word1,
  word2,
  len1 = word1.length,
  len2 = word2.length,
  memo = {}
) {
  if (len1 === 0) return len2; // insert
  if (len2 === 0) return len1; // remove
  const len12 = len1 + "," + len2;
  if (len12 in memo) return memo[len12];

  let result;
  // if characters at last index of both are the same
  if (word1[len1 - 1] === word2[len2 - 1]) {
    result = minDistance(word1, word2, len1 - 1, len2 - 1, memo);
  } else {
    const remove = minDistance(word1, word2, len1 - 1, len2, memo);
    const insert = minDistance(word1, word2, len1, len2 - 1, memo);
    const replace = minDistance(word1, word2, len1 - 1, len2 - 1, memo);
    result = 1 + Math.min(remove, insert, replace);
  }

  memo[len12] = result;
  return result;
}

// function minDistance(word1, word2, i = word1.length, j = word2.length, memo = {}) {
//     if (i === 0) return j; // Operations to insert characters from word2 to an empty word1
//     if (j === 0) return i; // Operations to remove characters from word1 to form an empty word2
//     const ij = i + ',' + j;
//     if (ij in memo) return memo[ij];

//     let result;
//     if (word1[i - 1] === word2[j - 1]) {
//         result = minDistance(word1, word2, i - 1, j - 1, memo);
//     } else {
//         result = 1 + Math.min(
//             minDistance(word1, word2, i - 1, j, memo),     // Remove
//             minDistance(word1, word2, i, j - 1, memo),     // Insert
//             minDistance(word1, word2, i - 1, j - 1, memo)  // Replace
//         );
//     }

//     memo[ij] = result;
//     return result;
// }
