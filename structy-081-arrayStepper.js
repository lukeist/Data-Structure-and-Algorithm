// https://structy.net/problems/array-stepper

// p: arr
// r: boolean

// recursion With MEMO
const arrayStepper = (nums, i = 0, memo = {}) => {
  if (nums[i] === 0 && i < nums.length - 1) return false;
  if (i + nums[i] === nums.length - 1) return true;

  if (i in memo) return memo[i];

  for (let j = 1; j <= nums[i]; j++) {
    if (arrayStepper(nums, i + j, memo)) {
      memo[i + j] = true;
      return true;
    }
  }

  memo[i] = false;
  return false;
};

// // recursion NO MEMO
// const arrayStepper = (nums, i = 0) => {
//   console.log(i, nums[i]);
//   if (nums[i] === 0 && i < nums.length - 1) return false;
//   if (i + nums[i] === nums.length - 1) return true;

//   for (let j = 1; j <= nums[i]; j++) {
//     if (arrayStepper(nums, i + j)) return true;
//   }

//   return false;
// };

// console.log(arrayStepper([2, 4, 2, 0, 0, 0])); // -> true
console.log(arrayStepper([2, 3, 2, 0, 0, 1])); // -> false
// console.log(arrayStepper([1, 1, 1, 1, 1, 0])); // -> true

//                  i0   2
//          i1  /            \ i2
//          4                 2
//   i2 / i3 / i4\  i5\      / \
//     2    0     0    1    0   0
//   /  \
//  0    0

//                  i0   1
//          i1  /
//              1
//          i2  /
//              1
//          i3  /
//              1
//          i4  /
//              1
//          i5  /
//              0
//

// const arrayStepper = (nums) => {
//     // todo
//     for (let i = 0; i < nums.length; i++) {
//       for (let j = 1; j <= nums[i]; j++) {}
//     }
//   };
