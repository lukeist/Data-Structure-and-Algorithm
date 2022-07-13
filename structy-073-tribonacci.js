// https://structy.net/problems/tribonacci

// p: num
// r: num
// e: tribonacci(14); // -> 927

// f(n) = f(n-1) + f(n-2) + f(n-3)
// base: 0 0 1
// tribonacci(37); // -> 1132436852

// recursion
const tribonacci = (n, list = {}) => {
  if (n === 0 || n === 1) return 0;
  if (n === 2) return 1;

  !(n in list) &&
    (list[n] =
      tribonacci(n - 1, list) +
      tribonacci(n - 2, list) +
      tribonacci(n - 3, list));

  return list[n];
};

// // dp
// const tribonacci = (n) => {
//   const arr = [0, 0, 1];
//   for (let i = 3; i <= n; i++) {
//     arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
//   }
//   return arr[n];
// };

// console.log(tribonacci(14)); // -> 927
console.log(tribonacci(37)); // -> 1132436852
