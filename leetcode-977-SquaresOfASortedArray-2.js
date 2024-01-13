/**
 * @param {number[]} nums
 * @return {number[]}
 */

// p: array;
// r: array;
//
// e: [-4,-1,0,3,10 ]
//         i
//    [16, 1,0,9,100]
//             j
var sortedSquares = function (nums) {
  const result = [];
  let i = 0,
    j = nums.length - 1;

  while (i <= j) {
    const n = nums[i] * nums[i];
    const m = nums[j] * nums[j];
    if (n < m) {
      result.push(m);
      j--;
    } else {
      result.push(n);
      i++;
    }
  }
  return result.reverse();
};
