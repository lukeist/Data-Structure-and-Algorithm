// https://www.youtube.com/watch?v=oBt53YbR9Kk

// UNIQUE PATHS ///////////////////////////////////////////////////// https://youtu.be/oBt53YbR9Kk?t=2339
// 1. define func: f(n) = numbers of unique paths
// 2. base cases:
// f(0,0) = 1
// f(1,1) = 2
// 3. recurrence func: f(y,x) = f(y-1,x) + f(y,x-1)
// 4. order: bottom up
// 5. result where: f(n)
// const uniquePaths = (m, n) => {
//     if (m === 0 && n === 0) return 1;

//     if (m === 0) return;
//   };

// DP
const uniquePaths = (m, n, memo = {}) => {
  const key = m + "," + n;
  if (key in memo) {
    return memo[key];
  }
  if (m === 1 && n === 1) {
    return 1;
  } else if (m === 1) {
    return 1;
  } else if (n === 1) {
    return 1;
  }

  memo[key] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);

  return memo[key];

  // console.log(arr[m - 1][n - 1]);
};
uniquePaths(4, 4);
console.log(uniquePaths(4, 4));

console.log(uniquePaths(18, 18));
// uniquePaths([
//   [1, 1, 0, 0, 0],
//   [1, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
// ]);

// // DP
// const uniquePaths = (m, n) => {
//     const arr = Array.from(Array(m), (e) => Array.from(Array(n), (e) => 0));

//     for (let y = 0; y < m; y++) {
//       for (let x = 0; x < n; x++) {
//         if (x === 0 && y === 0) {
//           arr[y][ax] = 1;
//           continue;
//         }
//         if (y === 0) {
//           arr[y][x] = arr[y][x - 1];
//         } else if (x === 0) {
//           arr[y][x] = arr[y - 1][x];
//         } else {
//           arr[y][x] = arr[y - 1][x] + arr[y][x - 1];
//         }
//       }
//     }

//     console.log(arr[m - 1][n - 1]);
//   };

// FIBONACCI /////////////////////////////////////////////////////
// 1. define func: f(n) fib num at position n
// 2. base cases:
// f(0) = 0; f(1) = 1
// 3. recurrence func: f(x) = f(x-1) + f(x-2)
// 4. order: bottom up
// 5. answer where: f(n)

// dp
// const fib = (n) => {
//   const arr = [1, 1];

//   for (let x = 2; x <= n; x++) {
//     arr[x] = arr[x - 1] + arr[x - 2];
//   }
//   return arr[n];
// };

// recursion
// const fib = (n, memo = {}) => {
//   if (n in memo) return memo[n];
//   if (n <= 2) return 1;
//   memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
//   //   console.log(memo[n]);
//   return memo[n];
// };

// console.log(fib(520));
