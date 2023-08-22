// p: grid;
// r: number;
//
// ["O", "O", "X"],
// ["O", "O", "O"],
// ["O", "O", "O"],
// => 5
//
// [1, 1, 0],
// [1, 2, 2],
// [1, 3, 5],

// [1, 1],
// [1, 2],

// ["O", "X", "X"],
// ["X", "X", "O"],
// ["O", "O", "O"],

// const countPaths = (grid) => {
//   const tempGrid = grid.map(a => a.map(i => i));

//   for (let i = 0; i < tempGrid.length; i++) {
//     for (let j = 0; j < tempGrid[0].length; j++) {
//       if (tempGrid[i][j] === "X") {
//         tempGrid[i][j] = 0;
//       } else {
//         if (i === 0 && j === 0) {
//           tempGrid[i][j] = 1;
//         } else if (i === 0) {
//           tempGrid[i][j] = tempGrid[i][j - 1];
//         } else if (j === 0) {
//           tempGrid[i][j] = tempGrid[i - 1][j];
//         } else {
//           tempGrid[i][j] = tempGrid[i - 1][j] + tempGrid[i][j - 1];
//         }
//       }
//     }
//   }

//   return tempGrid[tempGrid.length - 1][tempGrid[0].length - 1]
// };

// this recursion works:
// const countPaths = (
//   grid,
//   i = grid.length - 1,
//   j = grid[0].length - 1,
//   memo = {}
// ) => {
//   if (grid[i][j] === "X") return 0;
//   if (i === 0 && j === 0) return 1;
//   const ij = i + "," + j;
//   if (ij in memo) return memo[ij];

//   if (i === 0) return countPaths(grid, i, j - 1, memo);
//   if (j === 0) return countPaths(grid, i - 1, j, memo);

//   memo[ij] =
//     countPaths(grid, i, j - 1, memo) + countPaths(grid, i - 1, j, memo);
//   return memo[ij];
// };

const countPaths = (
  grid,
  i = grid.length - 1,
  j = grid[0].length - 1,
  memo = {}
) => {
  if (grid[i][j] === "X") return 0;
  const ij = i + "," + j;
  if (ij in memo) return memo[ij];
  if (i === 0 && j === 0) {
    return 1;
  } else if (i === 0) {
    memo[ij] = countPaths(grid, i, j - 1, memo);
  } else if (j === 0) {
    memo[ij] = countPaths(grid, i - 1, j, memo);
  } else {
    memo[ij] =
      countPaths(grid, i, j - 1, memo) + countPaths(grid, i - 1, j, memo);
  }
  return memo[ij];
};
