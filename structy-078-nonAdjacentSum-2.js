// // recursive W memo O(n) O(n)
// const nonAdjacentSum = (nums, i = 0, memo = {}) => {
//   if (i >= nums.length) return 0;
//   if (i in memo) return memo[i];

//   const include = nums[i] + nonAdjacentSum(nums, i + 2, memo);
//   const exclude = nonAdjacentSum(nums, i + 1, memo);

//   memo[i] = Math.max(exclude, include);
//   return memo[i];
// }

// recursive W memo O(n) O(n)
// //           [2, 4, 5, 12, 7]
//          7 [2, 4, 5]    12 [2, 4]
//   5 [2]    4 []          4 []     2[]

// const nonAdjacentSum = (nums, memo = {}) => {
//   if (nums.length === 0) return 0;
//   if (nums.length === 1) return nums[0];
//   if (nums.length === 2) return Math.max(nums[0], nums[1]);
//   if (nums.length in memo) return memo[nums.length];

//   let firstLast = nums[nums.length - 1];
//   let secondLast = nums[nums.length - 2];

//   const firstLastNums = nonAdjacentSum(nums.slice(0, nums.length - 2), memo);
//   const secondLastNums = nonAdjacentSum(nums.slice(0, nums.length - 3), memo);

//   memo[nums.length] = Math.max(firstLast + firstLastNums, secondLast + secondLastNums);
//   return memo[nums.length];
// };

// // recursive WO memo O(n2) O(n)
// // //           [2, 4, 5, 12, 7]
// //          7 [2, 4, 5]    12 [2, 4]
// //   5 [2]    4 []          4 []     2[]

// const nonAdjacentSum = (nums) => {
//   if (nums.length === 0) return 0;
//   if (nums.length === 1) return nums[0];
//   if (nums.length === 2) return Math.max(nums[0], nums[1]);

//   let firstLast = nums[nums.length - 1];
//   let secondLast = nums[nums.length - 2];

//   const firstLastNums = nonAdjacentSum(nums.slice(0, nums.length - 2));
//   const secondLastNums = nonAdjacentSum(nums.slice(0, nums.length - 3));

//   return Math.max(firstLast + firstLastNums, secondLast + secondLastNums);
// };

// // [2, 4, 5, 12, 7]
// // [2, 4, 7, 16, 14]
// //

// iterative O(n) O(1)
const nonAdjacentSum = (nums) => {
  nums[2] += nums[0];

  for (let i = 3; i < nums.length; i++) {
    nums[i] += Math.max(nums[i - 2], nums[i - 3]);
  }

  return Math.max(nums[nums.length - 1], nums[nums.length - 2]);
};

// // [7, 5, 5, 12, 17, 29];
// // [7, 5, 12, 19, 29, 48];

// // [a,b] => max(a,b)
// // [a,b,c] => max(a+c, b)
// // [a,b,c,d] => max(a+c, a+c, b+d)
// // [a,b,c,d,e] => max(a+c, a+d, a+e, a+c+e, b+d, b+e)

// // f(i) = max(f(i-2), f(i-3))

// // iterative O(n) O(1)
// const nonAdjacentSum = (nums) => {
//   nums[2] += nums[0]

//   for (let i = 3; i < nums.length; i++) {
//     nums[i] += Math.max(nums[i-2], nums[i-3]);
//   }

//   return Math.max(...nums)
// };
