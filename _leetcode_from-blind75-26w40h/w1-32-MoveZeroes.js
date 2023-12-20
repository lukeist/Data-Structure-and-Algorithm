var moveZeroes = function(nums) {
  let i = 0, j = 1;
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

// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */

// // p: array
// // r: array
// // 
// // 
// //      i
// // [1,3,0,0,12]
// //          j    
// // 
// // [1,3,12,0,0]
// var moveZeroes = function(nums) {
//   let i = 0, j = 1;
//   while (j < nums.length) {
//       if (nums[i] === 0) {
//           if (nums[j] === 0) {
//               j++;
//           } else {
//               [nums[i], nums[j]] = [nums[j], nums[i]];
//               i++;
//               j++;
//           }
//       } else {
//           i++;
//           j++;
//       }
//   }

//   return nums;
// };