// p: num
// r: num
// e: 0 0 1 1 2 4 7 13
//    0 1 2 3 4 5 6 7

// recursion O(n) O(n) W memo
const tribonacci = (n, memo = {}) => {
  if (n === 0 || n === 1) return 0;
  if (n === 2) return 1;
  if (n in memo) return memo[n];

  memo[n] =
    tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);

  return memo[n];
};

// // recursion O(n^3) O(n) WO memo ==> wrong
// // recursion O(3^n) O(n) WO memo
// const tribonacci = (n) => {
//   if (n === 0 || n === 1) return 0;
//   if (n === 2) return 1;

//   return tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3);
// };

// // iteration O(n-3) O(n)
// const tribonacci = (n) => {
//   if (n === 0 || n === 1) return 0;
//   if (n === 2) return 1;

//   const arr = [0, 0, 1];

//   for (let i = 3; i <= n; i++) {
//     arr[i] = arr[i-1] + arr[i-2] + arr[i-3]
//   }

//   return arr[n]
// };

// module.exports = {
//   tribonacci,
// };
