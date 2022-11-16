// // https://leetcode.com/problems/two-sum/

// p: arr, num
// r: arr
//
// e: [2,7,11,15], 9
// 2: 0
// 7:

// [3,2,4], 6
// 3: 0
// 2: 1
// 4:

// [3,3], 6
// 3: 0
// 3:
//

var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    let num2 = target - num1;

    if (num2 in map && map[num2] !== i) return [map[num2], i];
    map[num1] = i;
  }
};

// // p: arr of ints, int
// // r: arr int+
// // e:
// // Example 1:

// // Input: nums = [2,7,11,15], target = 9
// // Output: [0,1]
// // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// // Example 2:

// // Input: nums = [3,2,4], target = 6
// // Output: [1,2]
// // Example 3:

// // Input: nums = [3,3], target = 6
// // Output: [0,1]

// // i: [3,0,2,6] ; target = 6
// // o: [1,3]

// // var twoSum = function (nums, target) {
// //   for (let i = 0; i < nums.length; i++) {
// //     const numsClone = [...nums];
// //     numsClone.splice(i, 1, "null");
// //     // console.log(numsClone);
// //     for (let j = 0; j < numsClone.length; j++) {
// //       if (nums[i] + numsClone[j] === target) {
// //         console.log(i, j);
// //         return [i, j];
// //       }
// //     }
// //   }
// // };

// // better solution:
// const twoSum = (nums, target) => {
//   const map = {};

//   for (let i = 0; i < nums.length; i++) {
//     let oppositeNum = target - nums[i]; // [2, 11, 15, 7] => [7, -2, -6, 2]
//     if (oppositeNum in map) {
//       console.log([map[oppositeNum], i]);
//       return [map[oppositeNum], i];
//     }
//     map[nums[i]] = i;
//   }
// };

// twoSum([2, 11, 15, 7], 9);
// // twoSum([1, 0, 2, 6], 6);
// // twoSum([3, 3], 6);
// // twoSum([0, 4, 3, 0], 0);
