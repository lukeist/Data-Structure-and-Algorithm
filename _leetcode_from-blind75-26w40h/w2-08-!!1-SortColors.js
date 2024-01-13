/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// p: array;
// r: array;
// e:
//                               l
//                              [0,0,2,1,1,2]
//                                 c
//                                       h
//
//
//
//                             l
//                          [0,1,1,1,1,1,0,2,2]
//                                       c
//                                       h
//
//                          [1,2,0,2,1,1,0,1,1]

var sortColors = function (nums) {
  let l = 0,
    c = 0,
    h = nums.length - 1;

  while (c <= h) {
    if (nums[c] === 2) {
      [nums[c], nums[h]] = [nums[h], nums[c]];
      h--;
    } else if (nums[c] === 0) {
      [nums[c], nums[l]] = [nums[l], nums[c]];
      l++;
      c++;
    } else {
      c++;
    }
  }
};

// var sortColors = function(nums) {
// if (nums.length === 1) return nums;

// const m = Math.floor(nums.length / 2);
// const left = sortColors(nums.slice(0, m));
// const right = sortColors(nums.slice(m));

// const result = [];
// let i = 0, j = 0;
// while (i < left.length || j < right.length) {
//     if (left[i] === undefined) result.push(right[j]);
//     if (right[j] === undefined) result.push(left[i]);

//     if (left[i] < right[j]) {
//         result.push(left[i]);
//         i++;
//     } else {
//         result.push(right[j]);
//         j++;
//     }
// }
// return result;
// };
