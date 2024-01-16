/**
 * @param {number[]} nums
 * @return {boolean}
 */

// p: array;
// r: boolean;
// e: [1,5,11,5] => [1, 5, 5] and [11]
//
//       n
//      [1,2,3,3,4,5,6] sum = 24 / 2 => 12
//       i = 12
//
//
//                                      [1,5,11,5] (0)
// 1                                  /            \
//                              5,11,5 (1)         1,5,11,5 - (0)
// 5                         /        \            /         \
//                     11,5(6)       5,11,5(6)  1,11,5(5)    1,5,11,5 (0)
// 11                   /   \        /    \     /    \          /       \
//                    x     x        x     x  x       x    1,5,5 (11)     1,5,11,5 (0)
// 5
//

// TIME LIMIT EXCEEDED even with MEMO:
// [43,42,20,86,5,5,64,77,92,94,7,4,28,42,67,97,93,85,53,41,22,86,26,45,100,57,19,94,83,29,36,100,24,36,62,38,97,86,10,86,76,69,73,31,53,95,82,88,72,29,96,24,90,33,62,85,63,93,83,20,23,72,26,31,97,79,72,69,38,29,36,75,73,66,48,50,77,12,79,48,3,67,16,40,11,79,28,5,18,12,80,4,82,60,29,96,95,2,50,99]

// [39,23,98,68,3,18,60,62,51,65,60,40,70,7,60,22,62,25,96,4,58,36,32,72,73,16,63,89,98,62,47,61,25,85,66,78,32,23,56,33,87,43,77,16,14,70,89,8,20,15,56,76,72,60,78,35,49,31,84,28,8,93,29,39,3,96,25,30,79,36,98,32,93,48,58,17,16,86,15,69,83,100,53,52,98,35,10,53,93,27,58,11,68,71,53,3,45,39,75,99]

function canPartition(nums) {
  const sum = nums.reduce((a, c) => a + c, 0);
  if (sum % 2 !== 0) return false;

  const targetSum = sum / 2;

  function check(i, curSum, memo) {
    const ic = i + "," + curSum;
    if (ic in memo) return memo[ic];
    if (curSum === targetSum) return true;
    if (i === nums.length || curSum > targetSum) return false;

    const include = check(i + 1, curSum + nums[i], memo);
    const exclude = check(i + 1, curSum, memo);

    memo[ic] = include || exclude;
    return memo[ic];
  }

  return check(0, 0, {});
}

// //     n
// // e: [1,5,11,5] => [1, 5, 5] and [11]
// //
// //     0 1 2 3 4 5 6 7 8 9 1011
// //    [t,f,f,f,f,f,f,f,f,f,f,f] dp
// //                           i
// //          11 - 1
// function canPartition(nums) {
//     const totalSum = nums.reduce((sum, num) => sum + num, 0);
//     if (totalSum % 2 !== 0) return false;
//     const targetSum = totalSum / 2;

//     const dp = new Array(targetSum + 1).fill(false);
//     dp[0] = true;

//     for (const num of nums) {
//         for (let i = targetSum; i >= num; i--) {
//             dp[i] = dp[i] || dp[i - num];
//         }
//     }

//     return dp[targetSum];
// }
