// p: num, num, num, num, num
// r: num // null
// e:
//    x o x o x x x x
//    o x x x o x x x
//    x x O x x x x x
//    o x x x o x x x
//    x o x o x x x x
//    x x x x x x x x
//    x x x x x P x x
//    x x x x x x x x
//
//  o x x
//  x x x
//  x 1 x

// [ y + 2,x + 1 ],
// [ y + 1,x + 2 ],
// [ y - 1,x + 2 ],
// [ y - 2,x + 1 ],
// [ y - 2,x - 1 ],
// [ y - 1,x - 2 ],
// [ y + 1,x - 2 ],
// [ y + 2,x - 1 ],

// dfs O(rxc) O(rxc)

const knightlyNumber = (n, m, kr, kc, pr, pc, memo = {}) => {
  const move = kr + "," + kc + "," + m;
  if (move in memo) return memo[move];
  const boundY = 0 <= kr && kr < n;
  const boundX = 0 <= kc && kc < n;
  if (!boundY || !boundX) return 0;
  if (m === 0 && kr === pr && kc === pc) return 1;
  if (m < 0) return 0;

  const a = knightlyNumber(n, m - 1, kr + 2, kc + 1, pr, pc, memo);
  const b = knightlyNumber(n, m - 1, kr + 1, kc + 2, pr, pc, memo);
  const c = knightlyNumber(n, m - 1, kr - 1, kc + 2, pr, pc, memo);
  const d = knightlyNumber(n, m - 1, kr - 2, kc + 1, pr, pc, memo);
  const e = knightlyNumber(n, m - 1, kr - 2, kc - 1, pr, pc, memo);
  const f = knightlyNumber(n, m - 1, kr - 1, kc - 2, pr, pc, memo);
  const g = knightlyNumber(n, m - 1, kr + 1, kc - 2, pr, pc, memo);
  const h = knightlyNumber(n, m - 1, kr + 2, kc - 1, pr, pc, memo);

  memo[move] = a + b + c + d + e + f + g + h;
  return memo[move];
};

module.exports = {
  knightlyNumber,
};
