/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// p: arr, arr, num, num
// r: arr;
// e:
//    3 2 1
//
//      i
// 3 [1,5,8,0,0,0]
//    j
// 3 [2,3,6]
//
//
// 0 [0]
// 1 [1]
//     i
// [1, 4,0,0,0,0]
//    j
// [1,2,3,5,6]

var merge = function (nums1, m, nums2, n) {
  let i = 0,
    j = 0;
  while (i < m) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else {
      nums1.splice(i, 0, nums2[j]);
      nums1.pop();
      console.log(nums1);
      i++;
      j++;
    }
  }

  while (j < n) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else {
      nums1.splice(i, 0, nums2[j]);
      nums1.pop();
      console.log(nums1);
      i++;
      j++;
    }
  }

  //   if (j < m + n) {
  //     for (let k = m + j; k < m + n; k++) {
  //       nums1[k] = nums2[j];
  //       j++;
  //     }
  //   }

  return nums1;
};

let nums1 = [4, 0, 0, 0, 0, 0];
let nums2 = [1, 2, 3, 5, 6];
console.log(merge(nums1, 1, nums2, 5));
