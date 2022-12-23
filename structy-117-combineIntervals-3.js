// p: arr
// r:
//   [1, 4],
//   [12, 15],
//   [3, 7],
//   [8, 13],
//          3     7       12    15
//      1     4       8     13
//    --------------------------------------->
//
//
const combineIntervals = (ints) => {
  ints.sort((a, b) => a[0] - b[0]);
  const result = [ints[0]];

  for (let i = 1; i < ints.length; i++) {
    const [fi, li] = ints[i];
    const [fr, lr] = result[result.length - 1];
    if (fi <= lr) {
      if (li <= lr) {
        continue;
      } else {
        result[result.length - 1][1] = li;
      }
    } else {
      result.push(ints[i]);
    }
  }

  return result;
};
