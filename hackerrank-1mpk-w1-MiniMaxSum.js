// https://www.hackerrank.com/challenges/one-month-preparation-kit-mini-max-sum/

// p: array of 5 num int+
// r: print console 2 nums
// e: [1,3,5,7,9] => 16 24

function miniMaxSum(arr) {
  // avoid O(n^2) using reduce inside for loop:
  // sum all nums
  const sumAllOf5 = arr.reduce((p, c) => p + c, 0);
  const arrOfSumOf4 = [];
  // loop through all numbers and use sum-num
  for (let i = 0; i < arr.length; i++) {
    arrOfSumOf4.push(sumAllOf5 - arr[i]);
  }

  console.log(Math.min(...arrOfSumOf4) + " " + Math.max(...arrOfSumOf4));
}
