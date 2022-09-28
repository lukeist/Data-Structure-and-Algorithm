// p: grid
// r: +num
// e:
// const grid = [
//   [1, 3, 12],
//   [5, 1, 1],
//   [3, 6, 1],
// ];
// const grid = [
//   [1, 4, 16],
//   [6, 7, 17],
//   [9, 15, 18],
// ];
// base func: grid[y][x] += max(grid[y-1][x] , grid[y][x-1])

// recursion W memo: O(m x n) O(m x n)
const maxPathSum = (
  grid,
  y = grid.length - 1,
  x = grid[0].length - 1,
  memo = {}
) => {
  const current = y + "," + x;
  if (current in memo) return memo[current];

  if (y < 0 || x < 0) return -Infinity;
  if (y === 0 && x === 0) return grid[y][x];

  const top = maxPathSum(grid, y - 1, x, memo);
  const left = maxPathSum(grid, y, x - 1, memo);

  memo[current] = grid[y][x] + Math.max(top, left);
  return memo[current];
};

// // recursion WO memo: O(m^2) O(m x n)
// const maxPathSum = (grid, y = grid.length - 1, x = grid[0].length - 1) => {
//   if (y === 0 && x === 0) return grid[y][x];
//   if (y < 0 || x < 0) return -Infinity;
//   // if (y === 0 && x > 0) return grid[y][x] + grid[y][x - 1];
//   // if (y > 0 && x === 0) return grid[y][x] + grid[y - 1][x];

//   const top = maxPathSum(grid, y - 1, x);
//   const left = maxPathSum(grid, y, x - 1);

//   // console.log(y, x, top, left);
//   console.log(
//     y,
//     x,
//     "top",
//     top,
//     "+ left",
//     left,
//     "=",
//     grid[y][x] + Math.max(top, left)
//   );
//   return grid[y][x] + Math.max(top, left);
// };

// // iteration O(m x n) O(1)
// const maxPathSum = (grid) => {

//   for (let y = 0; y < grid.length; y++) {
//     for (let x = 0; x < grid[0].length; x++) {
//       if (y > 0 && x > 0) {
//         grid[y][x] += Math.max(grid[y-1][x], grid[y][x-1]);
//       } else if (y > 0) {
//         grid[y][x] += grid[y-1][x];
//       } else if (x > 0) {
//         grid[y][x] += grid[y][x-1];
//       }
//     }
//   }

//   return grid[grid.length - 1][grid[0].length - 1]
// };

const grid = [
  [1, 3, 12],
  [5, 1, 1],
  [3, 6, 1],
];
console.log(
  maxPathSum(grid) // -> 18
);
