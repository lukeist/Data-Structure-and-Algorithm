// https://www.youtube.com/watch?v=7vM_RZEGUcw
// 9:00

////////////////////////////////////////////////////////////////
// Framework for solving DP Problems
// 1. Define the objective function
//// f(n) is the number of distinct ways => to reach n-th step
// 2. Identify base cases
//// base cases of k: f(0) = 1; f(1) = 1;
//// base cases of n: f(0) = 1; f(1) = 1; f(2) = 2; f(3) = 4; ...; f(k) = f(k-1) + f(k-2) + ... + f(0)
////
// 3. Write down: Recurrence Relation for the optimized objective function
//// f(n) = f(n-1) + f(n-2) + ... + f(n-k)
// 4. What's the order of execution?
//// bottom-up
// 5. Where to look for the answer?
//// f(n)
////////////////////////////////////////////////////////////////

const stairs = (n, k, redstair) => {
  const arr = [1, 1];
  for (let i = 1; i < k; ++i) {
    redstair.includes(i)
      ? (arr[i] = 0)
      : (arr[i] = arr.slice(0, i).reduce((p, c) => p + c, 0));
  }

  for (i = k; i <= n; ++i) {
    // arr[i] = arr[i-1] + arr[i-2] + ... + arr[i-k]
    redstair.includes(i)
      ? (arr[i] = 0)
      : (arr[i] = arr.slice(i - k, i).reduce((p, c) => p + c, 0));

    if (i === n) return arr[n];
  }
};

stairs(7, 3, [2, 3, 5]);

// stairs(6, 3, [1, 2, 3]); // => 1

// //
// 0 r1    => 1  =>  1
// 1 r1    => 1  =>  1
// 2 r1    => 1  =>  1
// 3 r1    => 2  =>  1 1
//                   2
// 3 r2    => 1  =>  1

// 4 r1    => 3  =>  1
