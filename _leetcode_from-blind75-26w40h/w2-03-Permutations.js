/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// p: array;
// r: array;
// e:
//                                          []
// 1                                        |
//                                          [1]
//                                         /   \
//                                  [1,2]                [2,1]
//                               /    |   \             /   \    \
//                           3,1,2  1,3,2   1,2,3    3,2,1 2,3,1   2,1,3
//                             0
var permute = function (nums) {
  if (nums.length === 0) return [[]];
  if (nums.length === 1) return [nums];

  const first = nums[0];
  const rest = permute(nums.slice(1));

  const result = [];
  for (let a of rest) {
    for (let i = 0; i <= a.length; i++) {
      result.push([...a.slice(0, i), first, ...a.slice(i)]);
    }
  }

  return result;
};
