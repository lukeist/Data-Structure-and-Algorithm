const knightlyNumber = (n, m, y, x, pr, pc, memo = {}) => {
  if (m === 0 && y === pr && x === pc) return 1;
  const boundY = 0 <= y && y < n;
  const boundX = 0 <= x && x < n;
  if (!boundY || !boundX || m === 0) return 0;
  const myx = m + "," + y + "," + x;
  if (myx in memo) return memo[myx];

  const m1 = knightlyNumber(n, m - 1, y - 2, x - 1, pr, pc, memo);
  const m2 = knightlyNumber(n, m - 1, y - 2, x + 1, pr, pc, memo);
  const m3 = knightlyNumber(n, m - 1, y - 1, x - 2, pr, pc, memo);
  const m4 = knightlyNumber(n, m - 1, y - 1, x + 2, pr, pc, memo);
  const m5 = knightlyNumber(n, m - 1, y + 1, x - 2, pr, pc, memo);
  const m6 = knightlyNumber(n, m - 1, y + 1, x + 2, pr, pc, memo);
  const m7 = knightlyNumber(n, m - 1, y + 2, x - 1, pr, pc, memo);
  const m8 = knightlyNumber(n, m - 1, y + 2, x + 1, pr, pc, memo);

  memo[myx] = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8;
  return memo[myx];
};
