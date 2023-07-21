/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// p: array, num int;
// r: number;
// e:
// [0,1,2,4,5,6,7]
//
//  0 1 2 3 4 5 6
//        m
// [4,5,6,7,0,1,2] 3
//  l
//              r
//
//
//  0 1 2 3 4 5 6 7
//        m
// [6,7,8,0,1,2,3,4] 8
//  l
//                r
//
//  0 1 2 3 4 5 6
//        m
// [7,0,1,2,3,4,5] - t = 7
//  l
//              r
//

//    m
// [3,5,1] t=3
//  l
//      r
var search = function (nums, target) {
  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (nums[m] === target) return m;

    if (nums[l] <= nums[m]) {
      // if l half is sorted:
      if (nums[l] <= target && target < nums[m]) {
        // if l <= t < m // if target in l half => search l half
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else {
      // if r half is sorted
      if (nums[m] < target && target <= nums[r]) {
        // if m < t <= r // if target in r half => search r half
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
  }

  return -1;
};

// test cases:
// nums = [1,3]
// target = 3
//           r
//         l
// nums = [3,1]
//         m
// target = 1

// nums = [5,1,3]
// target = 3

// nums = [3,5,1]
// target = 3
