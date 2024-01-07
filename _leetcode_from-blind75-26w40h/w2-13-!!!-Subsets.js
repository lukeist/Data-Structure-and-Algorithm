/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// p: array;
// r: array of arrays;
// e:                                       [1,2,3]
//1                                         /     \
//                                       23        123
//2                                    /     \      /     \
//                                   3     23     13     123
//3                                 / \  /  \     / \    /  \
//                                 x  3  2  23   1   13  12  123

var subsets = function (nums) {
  if (nums.length === 0) return [[]];
  const first = nums[0];
  const result = [];
  const numsWoFirst = subsets(nums.slice(1));
  const numsWFirst = numsWoFirst.map((n) => [first, ...n]);
  result.push(...numsWoFirst);
  result.push(...numsWFirst);

  return result;
};

// var subsets = function(nums) {
//     if (nums.length === 0) return [[]];
//     const first = nums[0];
//     const numsWoFirst = subsets(nums.slice(1));
//     const numsWFirst = numsWoFirst.map(n => [first, ...n]);
//     return [...numsWoFirst,...numsWFirst];
// };

// var subsets = function(nums) {
//     if (nums.length === 0) return [[]];
//     const first = nums[0];
//     const result = []
//     const numsWoFirst = subsets(nums.slice(1));
//     for (let n of numsWoFirst) {
//         result.push(n, [first, ...n])
//     }
//     return result
// };
