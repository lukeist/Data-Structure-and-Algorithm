/**
 * @param {number[]} nums
 * @return {number[]}
 */

// p: array;
// r: array;
// e:
//
// 0  1  2 3 4
//    i
// -4,-1,0,3,10
//         j
// 16,1,0,9,100
//

var sortedSquares = function (nums) {
  const result = [];
  let i = 0,
    j = nums.length - 1;

  while (i <= j) {
    const sqI = nums[i] * nums[i];
    const sqJ = nums[j] * nums[j];
    if (sqI < sqJ) {
      result.push(sqJ);
      j--;
    } else {
      result.push(sqI);
      i++;
    }
  }
  return result.reverse();
};
