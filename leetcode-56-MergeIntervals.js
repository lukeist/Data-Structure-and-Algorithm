// https://leetcode.com/problems/merge-intervals/

// p: array of arrays (of intervals)
// r: array of arrays
// e:

// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

//      [1, 5], [3,6], [4,8]
// =>   [1,6], [4,8] => [1,8]

// [1,5] [3,8] => i[1] > j[0]
//                i[0] < j[0]

// 987890-fdcxv09opi[;'-
// =]7=-[0p;'oL?>']] nl/;'p[-0987867t5yrgfvbn mhj,k.lo;p['-0=
// merge([
//   [2, 3],
//   [4, 6],
//   [5, 7],
//   [3, 4],
// ]);

// merge([
//   [2, 3],
//   [4, 5],
//   [6, 7],
//   [8, 9],
//   [1, 10],
// ]);

// merge([
//   [1, 4],
//   [0, 2],
//   [3, 5],
// ]);

// merge([
//   [4, 5],
//   [1, 4],
//   [0, 1],
// ]);

// merge([
//   [2, 3],
//   [1, 4],
// ]);
merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]);

// => [[1,6],[8,10],[15,18]]
// 1 3
// 2 6
// 8 10

// merge([
//   [4, 5],
//   [1, 4],
// ]);
// =>[[1,6],[8,10],[15,18]]
// // [[1,5]]

// O(n^2)
// const merge = (intervals) => {
//     intervals.sort((a, b) => a[0] - b[0]);

//     for (i = 0; i < intervals.length; i++) {
//       for (j = 0; j < intervals.length; j++) {
//         if (i === j) continue;

//         let intervalI = intervals[i];
//         let intervalJ = intervals[j];

//         if (intervalI[0] <= intervalJ[0] && intervalI[1] >= intervalJ[0]) {
//           if (intervalI[1] <= intervalJ[1]) {
//             intervalJ[0] = intervalI[0];

//             intervalI[0] = "x";
//             intervalI[1] = "x";
//           } else {
//             intervalJ[0] = intervalI[0];
//             intervalJ[1] = intervalI[1];

//             intervalI[0] = "x";
//             intervalI[1] = "x";
//           }
//         }

//         console.log(intervals);
//       }
//     }
//     //   console.log(intervals.filter(([a, b]) => a !== 'x' && b !== 'x'));
//     return intervals.filter(([a, b]) => a !== "x" && b !== "x");
//   };
