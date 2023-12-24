/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// p: array;
// r: array of arrays;
//
// e:
//   i
// [-1,0,1,2,-1,-4]
//       j
//         k
//
//      i
// [-4,-1,-1,0,1,2]
//        j
//               k
// [[-1,-1,2],[-1,0,1]]
//
//
//   i
// [-4, -3, -3, 0, 1, 2, 2, 3, 4, 4, 4, 5, 7, 9]
//                    l
//                       r
//

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1]) continue;
    let l = i + 1;
    r = nums.length - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        result.push([nums[i], nums[l], nums[r]]);
        while (nums[l] === nums[l + 1]) l++;
        while (nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      }
    }
  }

  return result;
};
