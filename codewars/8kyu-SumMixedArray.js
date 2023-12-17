// https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.
// prep
// parameters: array []'7', 7, ... // always array, no null, no undefined, no num, no string, no funny stuff
// return: sum: numbers / not console.log
// examples ['7', 7] = 14
//

function sumMix(x) {
  // map all strings in array to nums
  // sum all nums
  return x.map((v) => +v).reduce((p, c) => p + c, 0);
}
