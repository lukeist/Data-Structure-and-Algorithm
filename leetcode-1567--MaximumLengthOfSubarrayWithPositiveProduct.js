// https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/

// p: array of ints
// r: int
// f(n) max length with sub arr with +int

// e:
// [1,-3,5,7,-5,2] =>
// Input: nums = [-1,-2,-3,0,1]
// 2
// Example 1:
// Input: nums = [1,-2,-3,4] =>
// base cases
// f(1): 1, 4
// f(2): -2*-3,
// f(3): 1*-2*-3, -2*-3*4
// f(4): all
// Output: 4
// Explanation: The array nums already has a positive product of 24.

// Example 2:
// Input: nums = [0,1,-2,-3,-4]
// Output: 3

// Explanation: The longest subarray with positive product is [1,-2,-3] which has a product of 6.
// Notice that we cannot include 0 in the subarray since that'll make the product 0 which is not positive.
// recurrent func: max = max(max, indexOf(j) - indexOf(j-i) +1))
// bottom up
// answer: max
// base cases:
// [0]
// [-1]
// [1]

//      0 1  -2  -3 0 -4

//      0 1 -2 -3 -4
// p    0 1     1
// n        -1   0  1
// p

//   1 -2 2 0 5 1 -2 0 2  1 6 98 4 8 5 0  1 5 5 5 5 5 5 -3 5 5 5
// //

// function getMaxLen(nums) {
//   let max = 0,
//     pos = 0,
//     neg = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == 0) {
//       [pos, neg] = [0, 0];
//     } else if (nums[i] < 0) {
//       [pos, neg] = [neg > 0 ? neg + 1 : 0, pos + 1];
//     } else {
//       [pos, neg] = [pos + 1, neg > 0 ? neg + 1 : 0];
//     }
//     max = Math.max(max, pos);
//   }
//   console.log(max);

//   return max;
// }

function getMaxLen(nums) {
  let max = 0,
    pos = 0,
    neg = 0;
  for (let num of nums) {
    if (num === 0) {
      pos = 0;
      neg = 0;
    } else if (num > 0) {
      [pos, neg] = [pos + 1, pos === 0 ? 0 : neg + 1];
      //   neg = 1 + neg;
    } else {
      //   pos = 1 + neg;
      //   neg = 1 + pos;
      [pos, neg] = [neg === 0 ? 0 : 1 + neg, 1 + pos];
    }
    console.log(pos, neg);
    max = Math.max(max, pos);
  }
  console.log(max);
  return max;
}
// getMaxLen([5, 1, -2, -5, -3, 5, 2, 0, -4]); //

getMaxLen([0, 1, -2, -3, -4]); // 3
// pos   0    1   1   3   3
// neg   0    0   2   2   4

// pos   0    1   2   3  4
// neg   0    1   2   3  4

// getMaxLen([1, -2, -3, 4]); // 4
// pos 0   1   1   3  4
// neg 0   0   2   2  2

// getMaxLen([-1, -2, -3, 0, 1]); // 2
// pos  0   1   2   3
// neg  0   1   2   3
// getMaxLen([-16, 0, -5, 2, 2, -13, 11, 8]); //6
// pos  0   0   0   0  1  2   4    5  6
// neg  0   1   0   1  2  3   3    4  5
// [1,2,3,5,-6,4,0,10]

// getMaxLen([-1]);
// getMaxLen([0, 0, 0, 0, 0]);

// // Time limit exceeded: DP
// var getMaxLen = function (nums) {
//     let max = -Infinity;

//     let max,
//       pos,
//       neg = 0;

//     for (let i = 0; i < nums.length; i++) {
//       for (let j = i; j < nums.length; j++) {
//         let product = nums.slice(i, j + 1).reduce((p, c) => p * c);
//         product > 0 && (max = Math.max(max, j - i + 1));
//         //   console.log(i, "xxx", j, "=", product, j - i + 1);
//       }
//     }

//     console.log(max === -Infinity ? 0 : max);
//     return max === -Infinity ? 0 : max;
//   };

// getMaxLen([0, 1, -2, -3, -4]); // 3
// getMaxLen([1, -2, -3, 4]); // 4
//   // getMaxLen([-1, -2, -3, 0, 1]); // 2
//   getMaxLen([-1]);
//   getMaxLen([0, 0, 0, 0, 0]);

// sol 2: divide
// var getMaxLen = function (nums) {
//   let max = -Infinity;
//   let indexAfter0 = 0;

//   // loop thru nums
//   // if num = 0 => split arr to 2 parts: before & after 0
//   //// reduce => check each part if + or -
//   ////// => if + => compare to max
//   ////// => if - => split that part into 2 smaller parts: from begin to - (inclusive) & from - (inclusive) to end
//   //////// => compare 2 smaller parts to max
//   // return max

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       let arrBetween0 = nums.slice(indexAfter0, i);
//       let isNeg = arrBetween0.reduce((p, c) => p * c);
//       //   console.log(arrBetween0);

//       if (isNeg > 0) {
//         max = Math.max(max, i - indexAfter0);
//       } else {
//         let allNegs = arrBetween0.filter((n) => n < 0);
//         let firstNegIndex = arrBetween0.indexOf(allNegs[0]);
//         let lastNegIndex = arrBetween0.indexOf(allNegs[allNegs.length - 1]);

//         const firstNegPart = lastNegIndex - firstNegIndex;
//         const lastNegPart = arrBetween0.length - 1 - firstNegIndex;
//         max = Math.max(max, firstNegPart, lastNegPart);
//         // console.log(firstNegPart, lastNegPart, max);
//       }
//       indexAfter0 = i + 1;
//     }
//   }

//   if (!nums.includes(0)) {
//     let isNeg = nums.reduce((p, c) => p * c);

//     if (isNeg > 0) {
//       max = nums.length;
//     } else {
//       let allNegs = nums.filter((n) => n < 0);
//       let firstNegIndex = nums.indexOf(allNegs[0]);
//       let lastNegIndex = nums.indexOf(allNegs[allNegs.length - 1]);

//       max = Math.max(max, firstNegIndex + 1, nums.length - lastNegIndex);
//       // console.log(firstNegIndex, lastNegIndex);
//     }
//   }

//   console.log(max);
//   return max;
// };
