/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// p: num int, num int;
// r: num int

// r 1 1
// 1 2 f

// grid[y][x] = grid[y - 1] + grid[x - 1]

var uniquePaths = function (m, n) {
  const countPaths = (y, x, memo) => {
    const boundY = 0 <= y && y < m;
    const boundX = 0 <= x && x < n;
    if (!boundY || !boundX) return 0;
    const yx = y + "," + x;
    if (yx in memo) return memo[yx];
    if (y === 0 && x === 0) return 1;

    memo[yx] = countPaths(y - 1, x, memo) + countPaths(y, x - 1, memo);
    return memo[yx];
  };

  return countPaths(m - 1, n - 1, {});
};
