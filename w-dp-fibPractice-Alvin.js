// https://www.youtube.com/watch?v=oBt53YbR9Kk

// UNIQUE PATHS ///////////////////////////////////////////////////// https://youtu.be/oBt53YbR9Kk?t=2339

// FIBONACCI /////////////////////////////////////////////////////
// 1. define func: f(n) fib num at position n
// 2. base cases:
// f(0) = 0; f(1) = 1
// 3. recurrence func: f(i) = f(i-1) + f(i-2)
// 4. order: bottom up
// 5. answer where: f(n)

// dp
// const fib = (n) => {
//   const arr = [1, 1];

//   for (let i = 2; i <= n; i++) {
//     arr[i] = arr[i - 1] + arr[i - 2];
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
