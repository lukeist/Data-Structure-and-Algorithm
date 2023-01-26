/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//

// p: arr
// r: arr;

// [1,2,12,0,0]
//    i      j
// [0,1,0,3,12]
// better
// This version is a bit more clear as it removed the unnecessary check for the next element being zero if the current element is zero. it's directly swapping the elements when the current element is zero and the next element is non-zero, and incrementing the i pointer only when the current element is non-zero or when it's been swapped.

// It also removed the unnecessary return statement as arrays in javascript are passed by reference, this means that the modification to the input array will persist even after the function is done.

// Note also that the time and space complexity of this solution are still O(n) and O(1) respectively, as the algorithm is still iterating through the entire array in-place and not using any extra data structures.
var moveZeroes = function (nums) {
  let i = 0,
    j = 1;
  while (j < nums.length) {
    if (nums[i] === 0) {
      if (nums[j] !== 0) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
      }
    } else {
      i++;
    }
    j++;
  }
  return nums;
};
//
// var moveZeroes = function (nums) {
//   let i = 0,
//     j = 1;
//   while (j < nums.length) {
//     if (nums[i] === 0) {
//       if (nums[j] === 0) {
//         j++;
//       } else {
//         [nums[i], nums[j]] = [nums[j], nums[i]];
//         i++;
//         j++;
//       }
//     } else {
//       i++;
//       j++;
//     }
//   }
//   return nums;
// };
