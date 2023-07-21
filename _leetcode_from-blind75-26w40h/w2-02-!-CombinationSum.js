/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// p: array; num int;
// r: array;
// e: [2,3,6,7]
//                             7
//             2/         3/          6\            7\
//             5          4             1              0
//      2/  3/ 6\  7\   2/  3/ 6\ 7\      |
//      2   2   x   x   2   1  x  x       x
//     /

//                                     7
// 2               0x2/        1x2/           2x2\          \3x2
//                7              5              3              1
// 3      0x3/ 1x3/  \2x3    0x3/ \1x3       0x3/  \1x3 [[3]]
//       7       4      1       5       2        3       0
// 6  0x6/ \1x6  /0x6   |0x6    |0x6    |0x6     |0x6
//     7   1     4      1       5      2         3
// 7  /0x7 \1x7 [[7]]
//  7      0

// 1,2,3
//                              3
//  1               /0x1    \1x1  \1x2  \1x3 []
//                 ...      ...   ...      0

// MIXTURE OF structy's countingChange && exhaustive recursion?
var combinationSum = function (candidates, target, index = 0, memo = {}) {
  const ti = target + "," + index;
  if (ti in memo) return memo[ti];
  if (target === 0) return [[]];
  if (target < 0) return [];
  if (index === candidates.lengt) return [];

  const current = candidates[index];
  let result = [];
  for (let i = 0; i * current <= target; i++) {
    const getRest = combinationSum(
      candidates,
      target - i * current,
      index + 1,
      memo
    );
    const restWithCurrent = getRest.map((arr) => [
      ...arr,
      ...new Array(i).fill(current),
    ]);
    result = [...result, ...restWithCurrent];
  }
  memo[ti] = result;
  return result;
};

// var combinationSum = function(candidates, target) {
//     if (target === 0) return [[]];
//     if (target < 0) return [];

//     const first = candidates[0];
//     const rest = candidates.slice(1);
//     let result = [];
//     for (let i = 0; i * first <= target; i++) {
//         const getRest = combinationSum(rest, target - i * first);
//         const restWithFirst = getRest.map(arr => [...arr, ...new Array(i).fill(first)])
//         result = [...result, ...restWithFirst]
//     }

//     return result;
// };
