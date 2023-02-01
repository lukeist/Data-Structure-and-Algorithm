// https://leetcode.com/problems/maximum-subarray/

// p: array of ints
// define func: f(n)
// r: num
// e:
// base cases:
// [1]        => max = 1                                          => 1
// [1,2]      => max = (1,2,1+2)                                  => 2+1, 2
// [1,2,3]    => max = (1,2,3,1+2,2+3,1+2+3)                      => 3, 3+2, 3+2+1
// [1,2,3,4]  => max = (1,2,3,4,1+2,2+3,3+4,1+2+3,2+3+4,1+2+3+4)  => 4, 4+3, 4+3+2, 4+3+2+1

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

var maxSubArray = function (nums) {
  let maxSum = nums[0],
    curSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    curSum = Math.max(nums[i], curSum + nums[i]);
    maxSum = Math.max(maxSum, curSum);
  }
  return maxSum;
};
// Example 2:
// Input: nums = [1]
// Output: 1

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23

//   -Infinity
//     /   \
// -Infinity -2
//         /   \
//      -2       1
//             /   \
//            1     -3
//                 /   \
//               1       1

// //
// var maxSubArray = function (nums) {
//   let maxSum = nums[0];
//   let curSum = 0;

//   for (let num of nums) {
//     console.log(curSum);
//     if (curSum < 0) curSum = 0;
//     curSum += num;
//     maxSum = Math.max(curSum, maxSum);
//   }
//   // console.log(maxSum);
//   return maxSum;
// };

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]); //6
maxSubArray([1]); //1
maxSubArray([5, 4, -1, 7, 8]); //23

// 0 1 2 3 4 5 6
// 0 - a
// 0 1 - b
// 0 1 2 - c
// 0 1 2 3 - d
// 0 1 2 3 4 - e
// 0 1 2 3 4 5 - f
// 0 1 2 3 4 5 6 - g
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

// // Time Limit Exceeded
// var maxSubArray = function (nums) {
//   let maxSum = -Infinity;
//   let arr = [];
//   arr[0] = nums[0];

//   for (let i = 1; i < nums.length; ++i) {
//     sumi= arr[i] = arr[i] + ;
//     console.log(arr[i]);
//   }

//   console.log(arr);
//   return maxSum;
// };
// // Time Limit Exceeded: DP 2 for loops
// var maxSubArray = function (nums) {
//   let maxSum = -Infinity;

//   for (let i = 0; i < nums.length; i++) {
//     let arr = nums.slice(0, i + 1);

//     // console.log(arr);
//     for (let j = arr.length - 2; j >= 0; j--) {
//       arr[j] += arr[j + 1];
//       // console.log(j);
//     }
//     maxSum = Math.max(maxSum, Math.max(...arr));
//   }
//   console.log(maxSum);
//   return maxSum;
// };
