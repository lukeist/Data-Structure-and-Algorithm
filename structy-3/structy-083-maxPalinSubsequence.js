// p: str
// r: num
// e:                       luwxult
//                        5 /      \
//                      luwxul      uwxult
//                       3 |         /       \
//                      uwxu       uwxul      wxult
//                       1 |         /   \       /       \
//                       wx
//                      1/  \1
//                      w   x

const maxPalinSubsequence = (str, i = 0, j = str.length - 1, memo = {}) => {
  const ij = i + "," + j;
  if (ij in memo) return memo[ij];
  if (i === j) return 1;
  if (i > j) return 0;

  let count = 0;
  if (str[i] === str[j]) {
    count = 2 + maxPalinSubsequence(str, i + 1, j - 1, memo);
  } else {
    count = Math.max(
      maxPalinSubsequence(str, i, j - 1, memo),
      maxPalinSubsequence(str, i + 1, j, memo)
    );
  }
  memo[ij] = count;
  return count;
};

// const maxPalinSubsequence = (str, memo = {}) => {
//   if (str in memo) return memo[str];
//   if (str.length === 1) return 1;
//   if (str.length === 0) return 0;

//   let count = 0;
//   if (str[0] === str[str.length - 1]) {
//     count = 2 + maxPalinSubsequence(str.slice(1, str.length - 1), memo)
//   } else {
//     count = Math.max(maxPalinSubsequence(str.slice(1), memo),
//                     maxPalinSubsequence(str.slice(0, str.length - 1), memo))
//   }
//   memo[str] = count;
//   return count;
// };

module.exports = {
  maxPalinSubsequence,
};
