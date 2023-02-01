// p: array, array;
// r: array;
// [[1,2],[3,5],[6,7],[8,10],[12,16]]
// [4,8]
// => [[1,2],[3,10],[12,16]]

// interv [[1,2],[3,5],[4,8],[6,7],[8,10],[12,16]]
// result [[1,2],[3,10],[12,16]]
var insert = function (intervals, newInterval) {
  // O(n) O(n) with splice()
  let index = 0;
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] <= newInterval[0]) index = i + 1;
  }
  intervals.splice(index, 0, newInterval);
  // console.log(index, intervals);

  // O(nlogn) O(n) with sort()
  // intervals.push(newInterval);
  // intervals.sort((a, b)=> a[0] - b[0]);
  const result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const lastI = result.length - 1;
    if (result[lastI][1] < intervals[i][0]) {
      result.push(intervals[i]);
    } else {
      if (result[lastI][1] < intervals[i][1]) {
        result[lastI][1] = intervals[i][1];
      }
    }
  }

  return result;
};

// 2 pointers

// var insert = function(intervals, newInterval) {
//     let start = newInterval[0];
//     let end = newInterval[1];
//     let res = [];
//     let inserted = false;
//     for (let i = 0; i < intervals.length; i++) {
//         if (intervals[i][1] < start) {
//             res.push(intervals[i]);
//         } else if (intervals[i][0] > end) {
//             if (!inserted) {
//                 res.push([start, end]);
//                 inserted = true;
//             }
//             res.push(intervals[i]);
//         } else {
//             start = Math.min(start, intervals[i][0]);
//             end = Math.max(end, intervals[i][1]);
//         }
//     }
//     if (!inserted) {
//         res.push([start, end]);
//     }
//     return res;
// };
