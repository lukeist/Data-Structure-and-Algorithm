// https://www.hackerrank.com/challenges/one-month-preparation-kit-diagonal-difference/

// p: arr
// r: int +
// e:
// 11 2 4
// 4 5 6
// 10 8 -12
// =>11 + 5 - 12 = 4 && 4 + 5 + 10 = 19
// => 15

// 20 11 02
function diagonalDifference(arr) {
  // loop to get sum of left to right
  const diagonalCalculator = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i][i];
    }
    return sum;
  };
  // loop to get sum of right to left
  return Math.abs(diagonalCalculator(arr) - diagonalCalculator(arr.reverse()));
}
