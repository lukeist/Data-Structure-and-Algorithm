// https://structy.net/problems/count-paths

// p: grid
// r: num

// dfs iteration
// const lastX = grid[0].length - 1;
// const lastY = grid.length - 1;

// DP recursion
const countPaths = (grid) => {};

// // DP https://www.youtube.com/watch?v=YcrXBDAeTCs&t=1223s
// const countPaths = (grid) => {
//   const m = grid.length - 1;
//   const n = grid[0].length - 1;
//   grid[0][0] = 1;

//   for (let y = 0; y <= m; y++) {
//     for (let x = 0; x <= n; x++) {
//       if (grid[y][x] === "X") {
//         grid[y][x] = 0;
//         continue;
//       }

//       //   if (y === 0 && x === 0) {
//       //   } else if (y === 0) {
//       //     grid[y][x] = grid[y][x - 1];
//       //   } else if (x === 0) {
//       //     grid[y][x] = grid[y - 1][x];
//       //   } else {
//       //     grid[y][x] = grid[y][x - 1] + grid[y - 1][x];
//       //   }

//       if (y > 0 && x > 0) {
//         grid[y][x] = grid[y][x - 1] + grid[y - 1][x];
//       } else if (y > 0) {
//         grid[y][x] = grid[y - 1][x];
//       } else if (x > 0) {
//         grid[y][x] = grid[y][x - 1];
//       }
//     }
//   }

//   return grid[m][n];
// };

// const grid = [
//   ["O", "O"],
//   ["O", "O"],
// ]; // -> 2

const grid = [
  ["O", "O", "X"],
  ["O", "O", "O"],
  ["O", "O", "O"],
]; // -> 5
console.log(countPaths(grid));

// [
//   [1, 1, 0],
//   [1, 2, 2],
//   [1, 3, 5],
// ];

// // dfs iteration NOT WORKING
// const countPaths = (grid) => {
//     const stack = [[0, 0]];

//     while (stack.length > 0) {
//       const [y, x] = stack.pop();

//       if (grid[y][x] === "X") continue;
//       grid[0][0] = 1;
//       y === 0 && (grid[y][x] = 1);
//       x === 0 && (grid[y][x] = 1);

//       0 < x &&
//         0 < y &&
//         x + 1 < grid[0].length &&
//         y + 1 < grid.length &&
//         (grid[y][x] = grid[y - 1][x] + grid[y][x - 1]);

//       0 < x && x + 1 < grid[0].length && stack.push([y, x + 1]);
//       0 < y && y + 1 < grid.length && stack.push([y + 1, x]);
//     }

//     return grid;
//   };
