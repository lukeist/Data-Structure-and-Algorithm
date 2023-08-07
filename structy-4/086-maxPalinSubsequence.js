// p: string;
// r: number
// e:
//                                yzxxzy
//                               xyzaxxzy
//                               /      \
//                          yzaxxzy      xyzaxxzy
//                              | 2
//                           zaxxz
//                              | 2
//                             axx
//                            /  \
//                          ax   xx
//                       /  \     | 2
//                       a  x     ''
//                       1  1     0
//

//                                boabcdefop
//                            /             \
//                     oabcdefop               boabcdefo
//                     /     \                    /        \
//             abcdefop       oabcdefo      oabcdefo      boabcdef
//            /         \      /      \         | 2        /        \
//       bcdefop   abcdefo   oabcdef  abcdefo  abcdef    boabcde   oabcdef

// // without memo
// const maxPalinSubsequence = (str) => {
//   if (str.length === 1) return 1;
//   if (str.length === 0) return 0;
//   let count = 0;

//   if (str[0] === str[str.length - 1]) {
//     count = 2 + maxPalinSubsequence(str.slice(1, str.length - 1))
//   } else {
//     count += Math.max(maxPalinSubsequence(str.slice(1)), maxPalinSubsequence(str.slice(0, str.length - 1)))
//   }

//   return count;
// };

// // with memo
// const maxPalinSubsequence = (str, memo = {}) => {
//   if (str.length === 1) return 1;
//   if (str.length === 0) return 0;
//   if (str in memo) return memo[str];
//   let count = 0;

//   if (str[0] === str[str.length - 1]) {
//     count = 2 + maxPalinSubsequence(str.slice(1, str.length - 1), memo);
//   } else {
//     count += Math.max(
//       maxPalinSubsequence(str.slice(1), memo),
//       maxPalinSubsequence(str.slice(0, str.length - 1), memo)
//     );
//   }

//   memo[str] = count;
//   return count;
// };
//                                i        j
//                                boabcdefop

const maxPalinSubsequence = (str, i = 0, j = str.length - 1, memo = {}) => {
  if (i === j) return 1;
  if (i > j) return 0;
  const ij = i + "," + j;
  if (ij in memo) return memo[ij];
  let count = 0;

  if (str[i] === str[j]) {
    count = 2 + maxPalinSubsequence(str, i + 1, j - 1, memo);
  } else {
    count = Math.max(
      maxPalinSubsequence(str, i + 1, j, memo),
      maxPalinSubsequence(str, i, j - 1, memo)
    );
  }
  memo[ij] = count;
  return count;
};
