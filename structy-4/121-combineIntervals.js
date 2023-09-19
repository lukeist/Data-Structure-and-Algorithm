// p: array;
// r: array;
// e:
// [1, 4],
// [12, 15],
// [3, 7],
// [8, 13],
//
//  1     4               12    15
//  ------------------------------------>
//     3      7     8       13
//
// [[1,7]]
//
//  1         4           12        15
//  ------------------------------------>
//     2  3            8       13
//
// [[1,4],[8,13]]
//

const combineIntervals = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const [intFirst, intSecond] = intervals[i];
    const lastI = result.length - 1;
    if (intFirst <= result[lastI][1]) {
      if (intSecond <= result[lastI][1]) {
        continue;
      } else {
        result[lastI][1] = intSecond;
      }
    } else {
      result.push(intervals[i]);
    }
  }

  return result;
};
