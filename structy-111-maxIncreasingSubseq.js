// https://structy.net/problems/premium/max-increasing-subseq

// p: arr
// r: num+
// base cases:
// [1] => 1
// [a, b] => a < b: 2 // a >= b: 1
// [1, 2] => 2
// [1, 1, 1] => 1
// [1, 2, 2] => 2
// [2, 2, 1] => 1

// // recursion

// const numbers = [4, 18, 20, 10, 12, 15, 19]; // 4 10 12 15 19 -> 5
//                  1   2   3   2   3   4   6

// iteration
const maxIncreasingSubseq = (numbers) => {
  const firstNum = numbers[0];
  const map = {};
  map[firstNum] = 1;

  for (let i = 1; i < numbers.length; i++) {
    const num = numbers[i];

    map[num] = findMax(map, num);
  }

  let max = -Infinity;

  for (const key in map) {
    max = Math.max(max, map[key]);
  }

  return max;
};

const findMax = (map, num) => {
  let max = -Infinity;

  for (let key in map) {
    if (num >= +key) {
      max = Math.max(map[key], max);
    } else max = Math.max(max, 0);
  }

  if (max === map[num]) return max;
  return max + 1;
};

// const numbers = [4, 18, 20, 10, 12, 15, 19]; // 4 10 12 15 19 -> 5
// 4             1   2   3   2   3   4   6
// 18            0   2   3
// f(0) - f(i-1):
// f(i) = f(i-j) + 1
// const numbers = [12, 9, 2, 5, 4, 32, 90, 20]; // 2 4 32 90 -> 4
//                   1  1  2  2  2   3   4

const numbers = [42, 50, 51, 60, 55, 70, 4, 5, 70]; // -> 5
//                1   2  3   4    4   5  1   2  6
// const numbers = [42, 50, 51, 60, 55, 70, 4, 5, 60]; // -> 5
// //                1   2  3   4    4   5  1  2  5
// const numbers = [42, 50, 51, 60, 55, 55, 4, 5, 60]; // -> 5
// //                1   2  3   4    4   4  1  2  5
// const numbers = [42, 50, 60, 51, 55, 4, 5, 60]; // -> 5
// //                1  2   3   3   4   1  2  5

console.log(maxIncreasingSubseq(numbers));
