/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
// p: array of arrays, array;
// r: array of arrays,
// e: [[1,3],[6,9]] [2,5]
//                                       i[0   1]
//   1   3    4   5     6   7  8   12     13   15
//   --------------------------------------------------------->
// original newIn 5            8
//      newIn 4                     12
//         newIn [0            1]
//
//
//       i [0           1]
//          1           5
//   --------------------------------------------------------->
//              2   3
//
//
var insert = function (intervals, newInterval) {
  // if (intervals.length === 0) return [newInterval];
  const result = [];
  let i = 0;

  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  result.push(newInterval);

  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }

  return result;
};
