// p: grid
// r: number;
// e:
// const grid = [
//   [1, 3, 12],
//   [5, 1, 1],
//   [3, 6, 1],
// ];
// => 18

//   [1, 4, 16],
//   [6, 7, 17],
//   [9, 15, 18],

// // iterative
// const maxPathSum = (grid) => {
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[0].length; j++) {
//       if (i === 0 && j === 0) {
//         continue;
//       } else if (i === 0) {
//         grid[i][j] += grid[i][j - 1];
//       } else if (j === 0) {
//         grid[i][j] += grid[i - 1][j];
//       } else {
//         grid[i][j] += Math.max(grid[i - 1][j], grid[i][j - 1]);
//       }
//     }
//   }
//   return grid[grid.length - 1][grid[0].length - 1];
// };

//   [1, 3, 12],
//   [5, 1, 1],
//   [3, 6, 1],

// recursive
// // no memo
// const maxPathSum = (grid, i = grid.length - 1, j = grid[0].length - 1) => {
//   if (i === 0 && j === 0) return grid[i][j];
//   if (i < 0) return 0;
//   if (j < 0) return 0;

//   return (
//     grid[i][j] +
//     Math.max(maxPathSum(grid, i, j - 1), maxPathSum(grid, i - 1, j))
//   );
// };

// with memo
const maxPathSum = (
  grid,
  i = grid.length - 1,
  j = grid[0].length - 1,
  memo = {}
) => {
  if (i === 0 && j === 0) return grid[i][j];
  if (i < 0) return 0;
  if (j < 0) return 0;

  const ij = i + "," + j;
  if (ij in memo) return memo[ij];

  memo[ij] =
    grid[i][j] +
    Math.max(
      maxPathSum(grid, i, j - 1, memo),
      maxPathSum(grid, i - 1, j, memo)
    );
  return memo[ij];
};
