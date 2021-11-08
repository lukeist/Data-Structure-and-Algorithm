// https://leetcode.com/problems/unique-paths/

// p: 2 nums int
// r: num (of possible unique paths)
// e:
// Example 1:
// Input: m = 3, n = 7
// Output: 28

// Example 2:
// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

// 1. objtive func: f(m,n) find max unique paths
// 2. base cases:
//// 1 1 => 1           f(1,1) = 1
//// 2 2 => x x => 2    f(2,2) = 2
////        x x
//// 2 3 => x x x => 3
////        x x x
//// 3 3 => x x x => 4
//          x x x
//          x x x
//// 4 4 => x x x x => 8
////        x x x x
////        x x x x
////        x x x x
//// f(m,n) = 1
//// f(m,n-1) = 1
//// f(m-1,n) = 1
//// f(m,n-2) = 1

// 3. recurrent relations:
//// f(i,j) = f(i-1,j) + f(j,i-1)
// 4. order
// 5. answer where:

// WITH RED SQUARE
const uniquePaths = function (m, n, red) {
  const arr = Array.from(Array(m), (e) => Array.from(Array(n), (el) => 0));
  arr.map((e) => e.map((_, i, a) => (a[0] = 1)));
  arr[0] = arr[0].map((e) => (e = 1));

  for (let [a, b] of red) {
    arr[a][b] = undefined;
  }
  //   console.log(arr);

  //   loops thru m and x
  for (let y = 0; y < m; ++y) {
    for (let x = 0; x < n; ++x) {
      if (arr[y][x] === undefined) {
        console.log(x, y);
        arr[y][x] = 0;
        continue;
      }

      if (arr[y][x - 1] === undefined) {
        // arr[y][x] = 1;
        continue;
      }
      if (arr[y - 1] === undefined) {
        // arr[y][x] = 1;
        continue;
      }

      arr[y][x] = arr[y][x - 1] + arr[y - 1][x];
    }
  }
  console.log(arr);

  //   console.log(arr[m - 1][n - 1]);
  return arr[m - 1][n - 1];
};

uniquePaths(7, 3, [
  [1, 2],
  [5, 1],
  [3, 0],
]);

// // WITHOUT RED SQUARE
// const uniquePaths = function (m, n) {
//     const arr = Array.from(Array(m), (e) => Array.from(Array(n), (el) => 0));
//     arr.map((e) => e.map((_, i, a) => (a[0] = 1)));
//     arr[0] = arr[0].map((e) => (e = 1));

//     //   loops thru m and x
//     for (let y = 1; y < m; ++y) {
//       for (let x = 1; x < n; ++x) {
//         arr[y][x] = arr[y][x - 1] + arr[y - 1][x];
//       }
//     }
//     return arr[m - 1][n - 1];
//   };

//   uniquePaths(7, 3);
