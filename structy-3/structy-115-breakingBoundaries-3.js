// p: 5 nums
// r: num

// e:
// x . . .
// . . . .
// . . . .
// => 4

const breakingBoundaries = (m, n, k, y, x, memo = {}) => {
  const kyx = k + "," + y + "," + x;
  if (kyx in memo) return memo[kyx];
  const boundY = 0 <= y && y < m;
  const boundX = 0 <= x && x < n;
  if (!boundY || !boundX) return 1;

  if (k === 0) return 0;

  const no = breakingBoundaries(m, n, k - 1, y + 1, x, memo);
  const so = breakingBoundaries(m, n, k - 1, y - 1, x, memo);
  const we = breakingBoundaries(m, n, k - 1, y, x + 1, memo);
  const ea = breakingBoundaries(m, n, k - 1, y, x - 1, memo);

  memo[kyx] = no + so + we + ea;
  return memo[kyx];
};

module.exports = {
  breakingBoundaries,
};
