// https://structy.net/problems/tribonacci

// p: num
// r: num
// e: tribonacci(14); // -> 927

// f(n) = f(n-1) + f(n-2) + f(n-3)
// base: 0 0 1
// dp
const tribonacci = (n) => {
  const arr = [0, 0, 1];
  for (let i = 3; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
  }
  return arr[n - 1];
};

console.log(tribonacci(14)); // -> 927
