// https://leetcode.com/problems/binary-search/

// p: arr of ints +- & int
// r: int + or -1
// e:
// [1,6,8,11,55,64], 11 => 3
// [1,6,8,11,55,64], 2 => -1

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// You must write an algorithm with O(log n) runtime complexity.
var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    mid = Math.floor((high + low) / 2);
    console.log(mid);
    if (nums[mid] > target) {
      high = mid - 1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      console.log(mid);
      return mid;
    }
  }
  console.log(-1);

  return -1;
};
// search([-1, 0, 3, 5, 9, 12, 13, 15, 17, 22, 43, 65, 77], 0);
search([5], 5);

// Runtime: 61 ms, faster than 96.90% of JavaScript online submissions for Binary Search.
// Memory Usage: 45.2 MB, less than 32.02% of JavaScript online submissions for Binary Search.
// var search = function (nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   let mid;
//   while (left <= right) {
//     mid = Math.floor((left + right) / 2);
//     console.log(left, right, mid, nums[mid]);

//     if (nums[mid] === target) return mid;
//     if (nums[mid] < target) left = mid + 1;
//     if (nums[mid] > target) right = mid - 1;
//   }
//   return -1;
// };

// search([-1, 0, 3, 5, 9, 12], 8);
//       [ -1, 0, 3, 5, 9, 12 ] 9
// search([-1, 0, 5], -1);

// Runtime: 69 ms, faster than 86.01% of JavaScript online submissions for Binary Search.
// Memory Usage: 45 MB, less than 71.33% of JavaScript online submissions for Binary Search.
// var search = function (nums, target) {
//   return nums.indexOf(target);
// };

// // wrong - makes no sense
// var search = function (nums, target) {
//     let numsClone = [...nums];

//     while (numsClone.length > 1) {
//       console.log(numsClone);

//       const midNum = Math.floor(numsClone.length / 2);
//       console.log(midNum);

//       numsClone[midNum] > target
//         ? numsClone.splice(midNum)
//         : numsClone.splice(0, midNum);
//       console.log(numsClone);
//     }

//     return numsClone[0] === target ? nums.indexOf(numsClone[0]) : -1;
//   };
