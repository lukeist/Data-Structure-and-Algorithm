// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:

// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

snail = function (array) {
  // enjoy
  let snailArr = [];
  //   let snailArr = [...array[0]];
  //   snailArr.push(array[1][array.length - 1]);

  // row 1
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; i++) {
      snailArr.push(array[i][j]);
    }
  }
  console.log(snailArr);
};

let array = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];

snail(array);
// 00 01 02 12 22 21 20 10 11
// 1 n-0
// 2 n-1
// 3 n-1
// 4 n-2
// 5 n-2

// let array2 = [
//   [1, 2, 3, 4],
//   [12, 13, 14, 5],
//   [11, 16, 15, 6],
//   [10, 9, 8, 7],
// ];

// 00 01 02 03 13 23 33 32 31 30 20 10 11 12 22 21

//   1 n-0
//   2 n-1
//   3 n-1
//   4 n-2
//   5 n-2
//   6 n-3
//   7 n-3
