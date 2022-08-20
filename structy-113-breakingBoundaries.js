// https://structy.net/problems/premium/breaking-boundaries

// p: 5 nums
// r: num

// e: m 3 n 4:
// s x x x
// x x x x
// x x x x
// k = 2 => 4 ways

// recursion w MEMO
const breakingBoundaries = (m, n, k, r, c, count = 0, memo = {}) => {
  const boundY = 0 <= r && r < m;
  const boundX = 0 <= c && c < n;
  const krc = k + "," + r + "," + c;

  if (krc in memo) return memo[krc];

  if (!boundY || !boundX) return 1;
  if (k === 0) return count;

  const sk = breakingBoundaries(m, n, k - 1, r + 1, c, count, memo);
  const nk = breakingBoundaries(m, n, k - 1, r - 1, c, count, memo);
  const ek = breakingBoundaries(m, n, k - 1, r, c + 1, count, memo);
  const wk = breakingBoundaries(m, n, k - 1, r, c - 1, count, memo);

  memo[krc] = count + nk + sk + ek + wk;
  return count + nk + sk + ek + wk;
};

// // recursion wo MEMO
// const breakingBoundaries = (m, n, k, r, c, count = 0) => {
//   const boundY = 0 <= r && r < m;
//   const boundX = 0 <= c && c < n;

//   if (!boundY || !boundX) return 1;
//   if (k === 0) return count;

//   const sk = breakingBoundaries(m, n, k - 1, r + 1, c, count);
//   const nk = breakingBoundaries(m, n, k - 1, r - 1, c, count);
//   const ek = breakingBoundaries(m, n, k - 1, r, c + 1, count);
//   const wk = breakingBoundaries(m, n, k - 1, r, c - 1, count);

//   return count + nk + sk + ek + wk;
// };

// recursion NOt working
// const breakingBoundaries = (m, n, k, r, c, count = 0) => {
//     const boundY = 0 <= r && r < m;
//     const boundX = 0 <= c && c < n;

//     if (!boundY || !boundX) {
//       console.log(r, c);
//       return count + 1;
//     }
//     // if (boundY && boundX) return count;
//     if (k === 0) return;

//     breakingBoundaries(m, n, k - 1, r + 1, c, count);
//     breakingBoundaries(m, n, k - 1, r - 1, c, count);
//     breakingBoundaries(m, n, k - 1, r, c + 1, count);
//     breakingBoundaries(m, n, k - 1, r, c - 1, count);

//     return count;
//   };
///////////////////////////////////////////////////////
// iteration no MEMO - time limit exceeded
// const const n = breakingBoundaries(m, n, k, r, c) => {
//   //   const visited = new Set();
//   const memo = {}
//   const queue = [[r, c, k]];
//   let count = 0;

//   while (queue.length > 0) {
//     const [y, x, distance] = queue.shift();

//     if (distance === 0) break;

//     const deltas = [
//       [-1, 0],
//       [1, 0],
//       [0, -1],
//       [0, 1],
//     ];

//     for (const delta of deltas) {
//       const [a, b] = delta;
//       const neiY = y + a;
//       const neiX = x + b;
//       const nei = neiY + "," + neiX;

//       const boundY = 0 <= neiY && neiY < m;
//       const boundX = 0 <= neiX && neiX < n;
//       console.log(neiY, neiX, count, k);

//       if (!boundY || !boundX) {
//         count++;
//         // console.log(neiY, neiX, count, k);

//         continue;
//       }

//       boundY && boundX && queue.push([neiY, neiX, distance - 1]);
//     }
//   }

//   return count;
// };

// console.log(breakingBoundaries(3, 4, 2, 0, 0)); // -> 4

// e: m 3 n 4:
//
//
//         1 2 3
//      1  s 1 2 3
//      2  1 2 3 x
//      3  2 3 x x
//         3
// k = 3 => 11 ways
console.log(breakingBoundaries(3, 4, 3, 0, 0)); // -> 11

// Could someone please help me with this problem? https://structy.net/problems/premium/breaking-boundaries
// (I haven't seen the walkthrough yet. I want to work on it first.)

// So, how come the `test_02` return `11` intead of `7`: `breakingBoundaries(3, 4, 3, 0, 0); // -> 11`?

// This is how I understand the problem using BFS:
// ```
// //          1  2  3
// //      1  [s, 1, 2, 3]
// //      2  [1, 2, 3, x]
// //      3  [2, 3, x, x]
// //          3
// ```
// or maybe return `9` if these 2 paths are also counted:
// 1. `[0, 0]` -> `[1, 0]` -> `[0, 0]` -> `[-1, 0]`
// 2. `[0, 0]` -> `[0, 1]` -> `[0, 0]` -> `[0, -1]`

// How does it return `11`? Please let me know what I'm missing.

// Here is my code:
// ```
// const const n = breakingBoundaries(m, n, k, r, c) => {
//   const visited = new Set();
//   const queue = [[r, c, k]];
//   let count = 0;

//   while (queue.length > 0) {
//     const [y, x, distance] = queue.shift();

//     if (distance === 0) break;

//     const deltas = [[-1, 0], [1, 0], [0, -1], [0, 1]];

//     for (const delta of deltas) {
//       const [a, b] = delta;
//       const neiY = y + a;
//       const neiX = x + b;
//       const nei = neiY + "," + neiX;

//       const boundY = 0 <= neiY && neiY < m;
//       const boundX = 0 <= neiX && neiX < n;

//       if (!boundY || !boundX) {
//         if (visited.has(nei)) continue;

//         visited.add(nei);
//         count++;
//         continue;
//       }

//       boundY && boundX && queue.push([neiY, neiX, distance - 1]);
//     }
//   }

//   return count;
// };
// ```

// I appreciate it.

// -1 0 1 3 x
// 0 -1 2 3
// 1 -1 3 3
// -1 1 4 3
// -1 0 5 3 x
// 0 -1 6 3
// 3 0 7 3
// 2 -1 8 3
// -1 0 9 3 x
// 0 -1 10 3
// -1 2 11 3
