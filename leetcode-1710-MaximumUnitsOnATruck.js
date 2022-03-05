// https://leetcode.com/problems/maximum-units-on-a-truck/

// p: array 2d
// r: num int +
// e:
// Example 1:

// Input: boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
// 3 4 3
// Output: 8
// Explanation: There are:
// - 1 box of the first type that contains 3 units.
// - 2 boxes of the second type that contain 2 units each.
// - 3 boxes of the third type that contain 1 unit each.
// You can take all the boxes of the first and second types, and one box of the third type.
// The total number of units will be = (1 * 3) + (2 * 2) + (1 * 1) = 8.
// Example 2:

// Input: boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10
// 10   5   7   9
// 5        2   3
// 50       14  27
// Output: 91

var maximumUnits = function (boxTypes, truckSize) {
  // map to smaller chunks

  //   sort arr based on unit
  boxTypes.sort((a, b) => b[1] - a[1]);
  // count boxes < truckSize
  let unit = 0;
  let count = 0;
  for (let i = 0; i < boxTypes.length; ++i) {
    for (j = 0; j < boxTypes[i][0]; ++j) {
      //   console.log(boxTypes[i]);
      if (count < truckSize) {
        unit += boxTypes[i][1];
        count += 1;
      } else {
        console.log(unit, count);
        return unit;
      }
    }
  }
  console.log(unit, count);
  return unit;
};

maximumUnits(
  [
    [1, 3],
    [5, 5],
    [2, 5],
    [4, 2],
    [4, 1],
    [3, 1],
    [2, 2],
    [1, 3],
    [2, 5],
    [3, 2],
  ],
  35
);
//76;

// maximumUnits(
//   [
//     [5, 10],
//     [2, 5],
//     [4, 7],
//     [3, 9],
//   ],
//   10
// );

// maximumUnits(
//   [
//     [1, 3],
//     [2, 2],
//     [3, 1],
//   ],
//   4
// );
