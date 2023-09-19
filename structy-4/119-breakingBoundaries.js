const breakingBoundaries = (m, n, k, r, c, memo = {}) => {
  const krc = k + "," + r + "," + c;
  if (k < 0) return 0;
  if (krc in memo) return memo[krc];
  const boundR = 0 <= r && r < m;
  const boundC = 0 <= c && c < n;
  if (!boundC || !boundR) return 1;

  const up = breakingBoundaries(m, n, k - 1, r + 1, c, memo);
  const down = breakingBoundaries(m, n, k - 1, r - 1, c, memo);
  const left = breakingBoundaries(m, n, k - 1, r, c + 1, memo);
  const right = breakingBoundaries(m, n, k - 1, r, c - 1, memo);

  memo[krc] = up + down + left + right;
  return memo[krc];
};
