// https://leetcode.com/problems/maximum-subarray/

// p: array of ints
// r: num
// e:
// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:
// Input: nums = [1]
// Output: 1

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Time Limit Exceeded
var maxSubArray = function (nums) {
  let maxSum = -Infinity;
  let arr = [];
  arr[0] = nums[0];

  for (let i = 1; i < nums.length; ++i) {
    arr[i] = arr[i - 1] + i;
    console.log(arr[i]);
  }

  console.log(arr);
  return maxSum;
};

// nums[0] =

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// maxSubArray([1]);
// maxSubArray([5, 4, -1, 7, 8]);

// 0 1 2 3 4 5 6
// 0 -
// 0 1 -
// 0 1 2
// 0 1 2 3
// 0 1 2 3 4
// 0 1 2 3 4 5
// 0 1 2 3 4 5 6 -
//   1 -
//   1 2 -
//   1 2 3
//   1 2 3 4
//   1 2 3 4 5
//   1 2 3 4 5 6 -
//     2 -
//     2 3 -
//     2 3 4
//     2 3 4 5
//     2 3 4 5 6 -
//       3 -
//       3 4 -
//       3 4 5
//       3 4 5 6 -
//         4 -
//         4 5 -
//         4 5 6 -
//           5 -
//           5 6 -
//             6 -
// // Time Limit Exceeded
// var maxSubArray = function (nums) {
//     let maxSum = -Infinity;
//     for (let i = 0; i < nums.length; ++i) {
//       let sum = 0;
//       for (let j = i; j < nums.length; ++j) {
//         sum += nums[j];
//         maxSum = Math.max(maxSum, sum);
//       }
//     }
//     console.log(maxSum);
//     return maxSum;
//   };
