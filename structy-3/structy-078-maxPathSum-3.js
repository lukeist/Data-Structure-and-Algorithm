// p: grid
// r: num
// [1, 3, 12],
// [5, 1, 1],
// [3, 6, 1],
//

// f(y,x) += max(f(y-1,x), f(y,x-1))
// base case f(0,0) = f(0,0)

const maxPathSum = (grid) => {
  const g = grid.map((a) => []);

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      y === 0 && x === 0 && (g[y][x] = grid[y][x]);
      y !== 0 && x === 0 && (g[y][x] = grid[y][x] + g[y - 1][x]);
      y === 0 && x !== 0 && (g[y][x] = grid[y][x] + g[y][x - 1]);
      y !== 0 &&
        x !== 0 &&
        (g[y][x] = grid[y][x] + Math.max(g[y - 1][x], g[y][x - 1]));
    }
  }

  return g[g.length - 1][g[0].length - 1];
};

// const maxPathSum = (grid, y = grid.length - 1, x = grid[0].length - 1, memo = {}) => {
//   const yx = y + ',' + x;
//   if (yx in memo) return memo[yx];
//   if (y === 0 && x === 0) return grid[y][x];
//   if (y < 0 || x < 0) return 0;

//   memo[yx] = grid[y][x] + Math.max(maxPathSum(grid, y - 1, x, memo), maxPathSum(grid, y, x - 1, memo))
//   return memo[yx];
// };

module.exports = {
  maxPathSum,
};
