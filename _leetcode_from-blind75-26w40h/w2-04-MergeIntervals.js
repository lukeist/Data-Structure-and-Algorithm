/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// p: array;
// r: array;
// e: [[1,3],[2,6],[8,10],[15,18]]
//
//
//       1      3     [5      7]   [8        12]       15   18
// ---------------------------------------------------------------------->
//                       [6         8]  [9 10]
//                                      c0 c1
//       l 0 1
// [[1,3],[5,12],]

// [[1,4],[0,4]]
//    l0        l1
//    0          4
//  ---------------------->
//       1       4
//       c0      c1
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const curr = intervals[i];
    const lastI = result.length - 1;
    const last = result[lastI];

    if (last[1] < curr[0]) {
      result.push(curr);
    } else {
      if (last[1] < curr[1]) {
        result[lastI][1] = curr[1];
      } else {
        continue;
      }
    }
  }
  return result;
};
