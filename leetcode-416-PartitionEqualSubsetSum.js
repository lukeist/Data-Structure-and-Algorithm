/**
 * @param {number[]} nums
 * @return {boolean}
 */
// p: array;
// r: boolean;
// e:
// [1,5,11,5]
//
// [1,6,6,11]
//                           12
// 1                     /          \
//                     11           12
// 6                /  \            /   \
//                 5   11           6    12
// 6             /  \  / \        / \       / \
//             -1   5  5  11     0   6     6   12
// 11         /  \  /  \ / \

// [1,1,1,1,1,1,1,1,1,1,]
//                              5
//1                           /    \
//                           4     5
//1                        / \    / \
//                       3  4     4  5
//
var canPartition = function (nums) {
  const sum = nums.reduce((a, c) => a + c, 0);
  if (sum % 2 !== 0) return false;
  const half = sum / 2;

  const dfsCheck = (nums, half, i, memo) => {
    if (half === 0) return true;
    if (half !== 0 && nums.length - 1 === i) return false;
    const ih = i + "," + half;
    if (ih in memo) return memo[ih];

    const inc = dfsCheck(nums, half - nums[i], i + 1, memo);
    const exc = dfsCheck(nums, half, i + 1, memo);
    memo[ih] = inc || exc;
    return memo[ih];
  };

  return dfsCheck(nums, half, 0, {});
};
