// p: str
// r: num

//                        luwxult
//                      /         \
//               luwxul  5       3  uwxult
//                  |             /           \
//                uwxu 3         3 uwxul         wxult
//                 |              /    \       /   \
//                wx  1      3 uwxu   wxul    wxul      xult
//                / \          / \     / \    / \         / \
//                w  x        w  x  wxu  xul wxu  xul    xul  ult
//  1  1    1  1  1  1  1  1  1  1

//                        uu
//                      /    \
//

// // dp 2 pointers recu W memo O(n^2) O(n^2)  ------------------- GOOD
const maxPalinSubsequence = (str, i = 0, j = str.length - 1, memo = {}) => {
  if (i === j) return 1;
  if (i > j) return 0;
  const ij = i + "," + j;
  if (ij in memo) return memo[ij];

  let count = 0;
  if (str[i] === str[j]) {
    count += 2;
    count += maxPalinSubsequence(str, i + 1, j - 1, memo);
  } else {
    let wFirst = maxPalinSubsequence(str, i + 1, j, memo);
    let wLast = maxPalinSubsequence(str, i, j - 1, memo);

    count += Math.max(wFirst, wLast);
  }

  memo[ij] = count;
  return count;
};
// // dp recu WO memo O(2^n) O(2^n)  ------------------- BAD
// const maxPalinSubsequence = (str, memo = {}) => {
//   if (str.length === 1) return 1;
//   if (str.length === 0) return 0;
//   if (str in memo) return memo[str];

//   let count = 0;

//   if (str[0] === str[str.length - 1]) {
//     count += 2;
//     count += maxPalinSubsequence(str.slice(1, str.length - 1), memo);

//     memo[str] = count;
//     return count;

//   } else {
//     let strWOfirst = maxPalinSubsequence(str.slice(1), memo);
//     let strWOlast = maxPalinSubsequence(str.slice(0, str.length - 1), memo);
//     count += Math.max(strWOfirst, strWOlast);

//     memo[str] = count;
//     return count;
//   }
// };

// // NO str slice - with MEMO
// const maxPalinSubsequence = (
//   str,
//   firstI = 0,
//   lastI = str.length - 1,
//   max = 0,
//   memo = {}
// ) => {
//   if (firstI === lastI) return 1;
//   if (firstI > lastI) return 0;

//   const current = firstI + "," + lastI;
//   if (current in memo) return memo[current];

//   if (str[firstI] === str[lastI]) {
//     max = 2 + maxPalinSubsequence(str, firstI + 1, lastI - 1, max, memo);
//   } else {
//     max = Math.max(
//       maxPalinSubsequence(str, firstI, lastI - 1, max, memo),
//       maxPalinSubsequence(str, firstI + 1, lastI, max, memo)
//     );
//   }

//   memo[current] = max;
//   return max;
// };

// // // NO str slice - withouth MEMO
// // const maxPalinSubsequence = (
// //   str,
// //   firstI = 0,
// //   lastI = str.length - 1,
// //   max = 0
// // ) => {
// //   if (firstI === lastI) return 1;
// //   if (firstI > lastI) return 0;

// //   if (str[firstI] === str[lastI]) {
// //     max = 2 + maxPalinSubsequence(str, firstI + 1, lastI - 1, max);
// //   } else {
// //     max = Math.max(
// //       maxPalinSubsequence(str, firstI, lastI - 1, max),
// //       maxPalinSubsequence(str, firstI + 1, lastI, max)
// //     );
// //   }

// //   return max;
// // };

// // // with MEMO: O(str.length) O(str.length)
// // const maxPalinSubsequence = (str, max = 0, memo = {}) => {
// //   if (str.length === 1) return 1;
// //   if (str.length === 0) return 0;
// //   if (str in memo) return memo[str];

// //   if (str[0] === str[str.length - 1]) {
// //     max = 2 + maxPalinSubsequence(str.slice(1, str.length - 1), max, memo);
// //   } else {
// //     max = Math.max(
// //       maxPalinSubsequence(str.slice(0, str.length - 1), max, memo),
// //       maxPalinSubsequence(str.slice(1), max, memo)
// //     );
// //   }

// //   memo[str] = max;
// //   return max;
// // };

// // without MEMO
// // const maxPalinSubsequence = (str, max = 0) => {
// //   if (str.length === 1) return 1;
// //   if (str.length === 0) return 0;

// //   if (str[0] === str[str.length - 1]) {
// //     max = 2 + maxPalinSubsequence(str.slice(1, str.length - 1), max);
// //     console.log(str);
// //   } else {
// //     max = Math.max(
// //       maxPalinSubsequence(str.slice(0, str.length - 1), max),
// //       maxPalinSubsequence(str.slice(1), max)
// //     );
// //   }

// //   return max;
// // };

// console.log(maxPalinSubsequence("luwxult")); // -> 5
