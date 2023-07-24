/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// p: array;
// r: array;
// e:
//               -1,0,1,2,-1,-4
//
//                0, 1, 2,3,4,5
//                        k
//               -4,-1,-1,0,1,2
//                          i
//                            j
// lastI = -1
// result [-1-12, -101]

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let k = 0; k < nums.length - 2; k++) {
    if (nums[k] === nums[k - 1]) continue;
    let i = k + 1,
      j = nums.length - 1;

    while (i < j) {
      let sum = nums[k] + nums[i] + nums[j];
      if (sum < 0) {
        i++;
      } else if (0 < sum) {
        j--;
      } else {
        result.push([nums[k], nums[i], nums[j]]);
        while (nums[i] === nums[i + 1]) i++;
        while (nums[j] === nums[j - 1]) j--;
        i++;
        j--;
      }
    }
  }

  return result;
};

// [3,0,-2,-1,1,2]

//   0  1 2 3 4 5
//      k
// [-2,-1,0,1,2,3]
//          i
//            j
//  lastI = 0
//  lastJ = 3
//
// -2-13 , -202
// var threeSum = function(nums) {
//     nums.sort((a, b) => a - b);
//     const result = [];

//     for (let k = 0; k < nums.length; k++) {
//         if (nums[k] === nums[k - 1]) continue;
//         let i = k + 1, j = nums.length -1;
//         let lastI = null;
//         let lastJ = null;

//         while (i < j) {
//             if (nums[i] === lastI) {
//                 i++;
//                 continue;
//             }
//             else if (nums[j] === lastJ) {
//                 j--;
//                 continue;
//             }
//             lastI = nums[i]; // =>>> wrong because it skips like this:
//             lastJ = nums[j]; // =>>> wrong because it skips like this:

//             //   0  1 2 3 4 5
//             //      k
//             // [-2,-1,0,1,2,3]
//             //        i
//             //              j
//             // 0 1 5 0
//             // 0 2 4 0
//             // 1 2 5 2
//             // 1 3 4 2
//             // 2 3 5 4
//             // 3 4 5 6
//             let sum = nums[k] + nums[i] + nums[j];
//             // console.log(lastI, lastJ)
//             console.log(k , i, j, sum)

//             if (sum < 0) {
//                 i++;
//             } else if (sum > 0) {
//                 j--;
//             } else {
//                 result.push([nums[k], nums[i], nums[j]]);
//                 i++;
//                 j--;
//             }
//         }
//     }

//     return result;
// };

// var threeSum = function(nums) {

//     for (let i = 0; i < nums.length - 2; i++) {
//         if (nums[i] === nums[i - 1]) continue;
//         let l = i + 1; r = nums.length - 1;

//         while (l < r) {
//             const sum = nums[i] + nums[l] + nums[r];
//             if (sum > 0) {
//                 r--;
//             } else if (sum < 0) {
//                 l++;
//             } else {
//                 result.push([nums[i], nums[l], nums[r]])
//                 while (nums[l] === nums[l + 1]) l++;
//                 while (nums[r] === nums[r - 1]) r--;
//                 l++;
//                 r--;
//             }
//         }
//     }

//     return result;
// }
