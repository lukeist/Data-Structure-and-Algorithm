// p: arr
// r: num
//               n
// [2, 4, 5, 12, 7]
// f(n) =
// base cases:
// [1]       max = 1
// [1,2]     max(1,2)
// [1,2,3]   max(1+3,2)
// [1,2,3,4] max(1+3, 1+4, 2+4)
// f(n) = f(n) + Math.max(f(n-2), f(n-3))

//                              [2, 4, 5, 12, 7]
//                             2 /             \
//                     5 12 7 *12                 4 5 12 7 * 16
//                  5/       \                     4/       \
//                7         12 7               12 7        5 12 7
//                        12/     \
//                        0         7
//
const nonAdjacentSum = (nums, i = 0, memo = {}) => {
  if (i in memo) return memo[i];
  if (i >= nums.length) return 0;
  const num = nums[i];
  const inc = num + nonAdjacentSum(nums, i + 2, memo);
  const exc = nonAdjacentSum(nums, i + 1, memo);

  memo[i] = Math.max(inc, exc);
  return memo[i];
};

// const nonAdjacentSum = (nums, i = nums.length - 1, memo = {}) => {
//   if (i < 0) return 0;
//   if (i === 0 || i === 1) return nums[i];
//   if (i in memo) return memo[i];
//   let curr = nums[i] + Math.max(nonAdjacentSum(nums, i - 2, memo), nonAdjacentSum(nums, i - 3, memo));
//   let prev = nums[i - 1] + Math.max(nonAdjacentSum(nums, i - 3, memo), nonAdjacentSum(nums, i - 4, memo));
//   memo[i] = Math.max(curr, prev);
//   return memo[i];
// }

// // O(n) O(n)
// const nonAdjacentSum = (nums) => {
//   if (nums.length === 1) return nums[0];
//   if (nums.length === 2) return Math.max(nums[0], nums[1]);
//   if (nums.length === 3) return Math.max(nums[0] + nums[2], nums[1]);

//   const arr = [nums[0], nums[1], nums[0] + nums[2]]

//   for (let i = 3; i < nums.length; i++) {
//     arr[i] = nums[i] + Math.max(arr[i - 2], arr[i - 3])
//   }

//   return Math.max(...arr)
// };
