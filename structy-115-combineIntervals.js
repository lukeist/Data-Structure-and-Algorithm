// https://structy.net/problems/premium/combine-intervals

// p: arr
// r: arr

const combineIntervals = (intervals) => {
  // intervals.sort(([a, b], [c, d]) => a - c);
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const lastResult = result[result.length - 1];
    const [lastL, lastR] = lastResult;
    const [l, r] = intervals[i];

    l <= lastR && lastR <= r && (lastResult[1] = r);
    l > lastR && result.push(intervals[i]);
  }

  return result;
};

// const combineIntervals = (intervals) => {
//   // todo

//   intervals.sort(([a, b], [c, d]) => a - c);
//   const result = [intervals[0]];

//   for (let i = 1; i < intervals.length; i++) {
//     const temp = [];
//     const lastResult = result[result.length - 1];
//     const [lastL, lastR] = lastResult;
//     const [l, r] = intervals[i];

//     l <= lastR && lastR <= r && (lastResult[1] = r);
//     // l <= lastR && r < lastR && (lastResult[1] = r)
//     lastR < l && temp.push(l, r);

//     temp.length > 0 && result.push(temp);
//   }

//   return result;
// };

// // ------------------------------->
// // [1     4]        [8      13]
// //    [3      7]        [12     15]
// // e:
// const intervals = [
//   [1, 4],
//   [12, 15],
//   [3, 7],
//   [8, 13],
// ];
// // -> [ [1, 7], [8, 15] ]

const intervals = [
  [6, 8],
  [2, 9],
  [10, 12],
  [20, 24],
];
// -> [ [2, 9], [10, 12], [20, 24] ]
// // ------------------------------->
// // [2     9] [10    12]
// //   [6 8]             [20   15]
console.log(combineIntervals(intervals));

// const [prevL, prevR] = prev;
// l <= prevR && temp.push(prevL);
// r <= prevR ? temp.push(prevR) : l < prevR && temp.push(r);
// prevR < l && prevR < r && temp.push(l, r);
