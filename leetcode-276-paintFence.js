// p: 2 nums int +
// r:  int+:  => f(i,k,j) is the number of ways to paint n post with k colors - ENDING WITH A POST PAINTED IN j (0 <= j < k)

// e:
// Input: n = 3, k = 2
// Output: 6
// Explanation: Take 1 as color 1, 2 as color 2. All possible ways are:
//             post1  post2  post3
//  -----      -----  -----  -----
//    1         1     1     2
//    2         1     2     1
//    3         2     1     1
//    4         2     2     1
//    5         2     1     2
//    6         1     2     2
// base cases:

// p1   p2
// 1   1
// 2   2
// 1   2
// 2   1

// p1   p2  p3  p4
// 1  1  2  2
// 1  2  1  2
// 2  1  1  2

// 1  2  2  1

// 2  2  1  1
// 2  1  2  1

// 1  1  2  1
// 1  2  1  1
// 2  1  2  2
// 2  2  1  2

// 1p => 1 => f(1,2) = 1*2
// 2p => 2 => f(2,2) = 2*2
// 3p => 6 => f(3,2) = 3*2

/////////////////////////////////////////////////////////////////// k colors
// recurrence func: f(i,j) = f(i-1, 1-j) + f(i-2, 1-j)
// order :bottoom up
// result f(n,0) + f(n,1)

const paintFence = (n, k) => {
  const fence = Array.from(Array(n + 1), (e) =>
    Array.from(Array(k), (el) => (el = 0))
  );

  // base cases:
  for (let i = 0; i < k; i++) {
    fence[1][i] = 1;
    fence[2][i] = 2;
  }

  for (let i = 3; i <= n; i++) {
    for (let j = 0; j < k; j++) {
      fence[i][j] = fence[i - 1][k - 1 - j] + fence[i - 2][k - 1 - j]; // k - 1: because j = 0 > k - 1
    }
  }

  console.log(fence);
  console.log(fence[n].reduce((p, c) => p + c, 0));
};
paintFence(6, 5);

// /////////////////////////////////////////////////////////////////// k = 2 colors
// // recurrence func: f(i,j) = f(i-1, 1-j) + f(i-2, 1-j)
// // order :bottoom up
// // result f(n,0) + f(n,1)

// const paintFence = (n, k) => {
//     const fence = Array.from(Array(n + 1), (e) =>
//       Array.from(Array(k), (el) => 0)
//     );

//     // for k = 2 only
//     //   base cases fence[numbers of posts][the last post is this color]
//     fence[1][0] = 1; // fence size of 1 - painted blue 0  => 1 way
//     fence[1][1] = 1; // fence size of 1 - painted green 1 => 1 way
//     fence[2][0] = 2; // fence size of 2 - painted blue 0  => 2 ways: 00 or 10
//     fence[2][1] = 2; // fence size of 2 - painted green 1 => 2 ways: 11 or 01

//     for (i = 3; i <= n; i++) {
//       for (j = 0; j < k; j++) {
//         fence[i][j] = fence[i - 1][1 - j] + fence[i - 2][1 - j];
//       }
//     }
//     console.log(fence[n][0] + fence[n][1]);
//   };
//   [
//     [0, 0],
//     [1, 1],
//     [2, 2],
//     [3, 3],
//     [5, 5],
//   ];
//   paintFence(4, 2);
