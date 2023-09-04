// p: string, string;
// r: number;
// e: "dogs", "daogt"
//                                      dogs
//                                      daogt
//                                        |
//                                       ogs
//                                       aogt
//                                     1/    \2
//                                     gs    ogs
//                                    ogt    ogt
//                                  /   \1      |
//                                 s     gs     s
//                                ogt    gt     t
//                               /  \    |
//                              ''   s   s
//                              ogt  gt  t

const overlapSubsequence = (str1, str2, i = 0, j = 0, memo = {}) => {
  if (i === str1.length || j === str2.length) return 0;
  const ij = i + "," + j;
  if (ij in memo) return memo[ij];
  let max = 0;

  if (str1[i] === str2[j]) {
    max = 1 + overlapSubsequence(str1, str2, i + 1, j + 1, memo);
  } else {
    const sub1 = overlapSubsequence(str1, str2, i + 1, j, memo);
    const sub2 = overlapSubsequence(str1, str2, i, j + 1, memo);
    max = Math.max(sub1, sub2);
  }
  memo[ij] = max;
  return max;
};
