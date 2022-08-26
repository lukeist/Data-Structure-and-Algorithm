// NO str slice - with MEMO
const maxPalinSubsequence = (
  str,
  firstI = 0,
  lastI = str.length - 1,
  max = 0,
  memo = {}
) => {
  if (firstI === lastI) return 1;
  if (firstI > lastI) return 0;

  const current = firstI + "," + lastI;
  if (current in memo) return memo[current];

  if (str[firstI] === str[lastI]) {
    max = 2 + maxPalinSubsequence(str, firstI + 1, lastI - 1, max, memo);
  } else {
    max = Math.max(
      maxPalinSubsequence(str, firstI, lastI - 1, max, memo),
      maxPalinSubsequence(str, firstI + 1, lastI, max, memo)
    );
  }

  memo[current] = max;
  return max;
};

// // NO str slice - withouth MEMO
// const maxPalinSubsequence = (
//   str,
//   firstI = 0,
//   lastI = str.length - 1,
//   max = 0
// ) => {
//   if (firstI === lastI) return 1;
//   if (firstI > lastI) return 0;

//   if (str[firstI] === str[lastI]) {
//     max = 2 + maxPalinSubsequence(str, firstI + 1, lastI - 1, max);
//   } else {
//     max = Math.max(
//       maxPalinSubsequence(str, firstI, lastI - 1, max),
//       maxPalinSubsequence(str, firstI + 1, lastI, max)
//     );
//   }

//   return max;
// };

// // with MEMO: O(str.length) O(str.length)
// const maxPalinSubsequence = (str, max = 0, memo = {}) => {
//   if (str.length === 1) return 1;
//   if (str.length === 0) return 0;
//   if (str in memo) return memo[str];

//   if (str[0] === str[str.length - 1]) {
//     max = 2 + maxPalinSubsequence(str.slice(1, str.length - 1), max, memo);
//   } else {
//     max = Math.max(
//       maxPalinSubsequence(str.slice(0, str.length - 1), max, memo),
//       maxPalinSubsequence(str.slice(1), max, memo)
//     );
//   }

//   memo[str] = max;
//   return max;
// };

// without MEMO
// const maxPalinSubsequence = (str, max = 0) => {
//   if (str.length === 1) return 1;
//   if (str.length === 0) return 0;

//   if (str[0] === str[str.length - 1]) {
//     max = 2 + maxPalinSubsequence(str.slice(1, str.length - 1), max);
//     console.log(str);
//   } else {
//     max = Math.max(
//       maxPalinSubsequence(str.slice(0, str.length - 1), max),
//       maxPalinSubsequence(str.slice(1), max)
//     );
//   }

//   return max;
// };

console.log(maxPalinSubsequence("luwxult")); // -> 5
