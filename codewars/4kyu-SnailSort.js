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

// let array = [[1]];

// BETTER SOLUTIONS:
// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/solutions/javascript

snail = function (array) {
  let tempArr = [];
  if (array[0].length === 0) return [];
  // if (array[0].length === 1) console.log([1]);

  // row top to bottom
  let decreasedArrayLengthTopToBottom = array.length;
  const topArr = [];
  for (let i = 0; i < array.length; i++) {
    let rowTopToBottom = [];
    for (let j = i; j < decreasedArrayLengthTopToBottom; j++) {
      rowTopToBottom.push(array[i][j]);
    }
    decreasedArrayLengthTopToBottom = decreasedArrayLengthTopToBottom - 1;
    rowTopToBottom.length > 0 && topArr.push(rowTopToBottom);
  }

  // col right to left
  let decreasedArrayLengthRightToLeft = array.length;
  const rightArr = [];
  for (let j = 1; j < array.length; j++) {
    let colRightToLeft = [];

    for (let i = j; i < decreasedArrayLengthRightToLeft; i++) {
      colRightToLeft.push(array[i][array.length - j]);
    }
    decreasedArrayLengthRightToLeft = decreasedArrayLengthRightToLeft - 1;
    colRightToLeft.length > 0 && rightArr.push(colRightToLeft);
  }

  // row bottom to top
  const bottomArr = [];
  let increasedIdex = -1;
  for (let i = array.length - 1; i > increasedIdex; i--) {
    let rowBottomToTop = [];
    for (let j = i - 1; j > increasedIdex; j--) {
      rowBottomToTop.push(array[i][j]);
    }
    increasedIdex = increasedIdex + 1;
    rowBottomToTop.length > 0 && bottomArr.push(rowBottomToTop);
  }

  // col left to right
  let decreasedArrayLengthLeftToRight = array.length - 2;
  const leftArr = [];
  for (let j = 0; j < array.length; j++) {
    let colLeftToRight = [];

    for (let i = decreasedArrayLengthLeftToRight; i > j; i--) {
      colLeftToRight.push(array[i][j]);
    }

    decreasedArrayLengthLeftToRight = decreasedArrayLengthLeftToRight - 1;
    colLeftToRight.length > 0 && leftArr.push(colLeftToRight);
  }

  // let array = [
  //   [1, 2, 3, 4, 5, 6],
  //   [20, 21, 22, 23, 24, 7],
  //   [19, 32, 33, 34, 25, 8],
  //   [18, 31, 36, 35, 26, 9],
  //   [17, 30, 29, 28, 27, 10],
  //   [16, 15, 14, 13, 12, 11],
  // ];

  for (let i = 0; i < array.length; i++) {
    topArr[i] !== undefined && tempArr.push(topArr[i]);
    rightArr[i] !== undefined && tempArr.push(rightArr[i]);
    bottomArr[i] !== undefined && tempArr.push(bottomArr[i]);
    leftArr[i] !== undefined && tempArr.push(leftArr[i]);
  }

  let snailArr = [];
  for (let i = 0; i < tempArr.length; i++) {
    for (let j = 0; j < tempArr[i].length; j++) {
      snailArr.push(tempArr[i][j]);
    }
  }
  console.log(snailArr);
  return snailArr;
  // console.log(firstRow, lastRow);
};

// let array = [[]];

// let array = [
//   [1, 2, 3],
//   [8, 9, 4],
//   [7, 6, 5],
// ];

// 00 01 02 12 22 21 20 10 11
// 1 n-0
// 2 n-1
// 3 n-1
// 4 n-2
// 5 n-2

// let array = [
//   [1, 2, 3, 4],
//   [12, 13, 14, 5],
//   [11, 16, 15, 6],
//   [10, 9, 8, 7],
// ];

// 00 01 02 03 13 23 33
// 32 31 30 20 10
// 11 12 22
// 21

//   1 n-0
//   2 n-1
//   3 n-1
//   4 n-2
//   5 n-2
//   6 n-3
//   7 n-3

// let array = [
//   [1, 2, 3, 4, 5, 6],
//   [20, 21, 22, 23, 24, 7],
//   [19, 32, 33, 34, 25, 8],
//   [18, 31, 36, 35, 26, 9],
//   [17, 30, 29, 28, 27, 10],
//   [16, 15, 14, 13, 12, 11],
// ];

// 00 01 02 03 04 05 15 25 35 45 55
// 54 53 52 51 50 40 30 20 10
// 11 12 13 14 24 34 44
// 43 42 41 31 21
// 22 23 33
// 32

snail(array);
