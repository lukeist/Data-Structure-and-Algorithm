/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {};

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

// O(n) O(n)
// p: array of arrays; array
// r: array of arrays;
// e: [[1,3],[6,9]]
//
//                                                  i[0    1]
//  i    1    2     4    5       7     9             13    14           16    20
//  ----------------------------------------------------------------------------->
//                               7                   13
//                               0                   1
//  [[1,2],[4,5],]
//          0 1
//
var insert = function (intervals, newI) {
  const result = [];
  let i = 0;

  while (i < intervals.length && intervals[i][1] < newI[0]) {
    result.push(intervals[i]);
    i++;
  }

  while (i < intervals.length && intervals[i][0] <= newI[1]) {
    newI[0] = Math.min(newI[0], intervals[i][0]);
    newI[1] = Math.max(newI[1], intervals[i][1]);
    i++;
  }

  result.push(newI);

  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }

  return result;
};

// O(nlogn) O(n)
// // p: array of arrays; array
// // r: array of arrays;
// // e: [[1,3],[6,9]]
// //
// //
// //  i    1    2      4   5       7      9        12     14           16      20
// //  ----------------------------------------------------------------------------->
// //                               7                                         17
// //               lastA
// //  [[1,2],[4,5],[7,17]]
// //                0 1
// //
// var insert = function(intervals, newI) {
//     intervals.push(newI)
//     intervals.sort((a,b) => a[0] - b[0]);

//     const result = [intervals[0]];

//     for (let i = 1; i < intervals.length; i++) {
//         const curI = intervals[i];
//         const lastIndex = result.length - 1
//         const lastA = result[lastIndex];
//         if (lastA[1] < curI[0]) {
//             result.push(curI);
//         } else {
//             if (lastA[1] < curI[1]) result[lastIndex][1] = curI[1]
//         }
//     }

//     return result;
// };
