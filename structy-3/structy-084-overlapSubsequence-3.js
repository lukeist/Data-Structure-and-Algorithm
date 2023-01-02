// p: str, str;
// r: num
//                            dogs
//                            daogt
//                              |1
//                              ogs
//                      0       aogt    2
//                     /                  \
//                 gs                     ogs
//                 aogt                   ogt
//             /      \                     |1
//                                          gs
//                                          gt
//                                           |1
//                                          s
//                                          t
//                                         /  \
//                                        x     s
//                                        t     x

const overlapSubsequence = (s1, s2, i = 0, j = 0, memo = {}) => {
  if (i === s1.length || j === s2.length) return 0;
  const ij = i + "," + j;
  if (ij in memo) return memo[ij];
  let count = 0;
  if (s1[i] === s2[j]) {
    count = 1 + overlapSubsequence(s1, s2, i + 1, j + 1, memo);
  } else {
    count = Math.max(
      overlapSubsequence(s1, s2, i + 1, j, memo),
      overlapSubsequence(s1, s2, i, j + 1, memo)
    );
  }
  memo[ij] = count;
  return count;
};

// const overlapSubsequence = (str1, str2, i = 0, j = 0) => {
//   if (i === str1.length || j === str2.length) return 0;

//   let count = 0;
//   if (str1[i] === str2[j]) {
//     count += 1 + overlapSubsequence(str1, str2, i + 1, j + 1);
//     console.log(count);
//   } else {
//     count += Math.max(
//       overlapSubsequence(str1, str2, i + 1, j),
//       overlapSubsequence(str1, str2, i, j + 1)
//     );
//   }

//   return count;
// };

console.log(overlapSubsequence("dogs", "daogt")); // -> 3
