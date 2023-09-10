// p: 6numbers;
// r: number;
// e:
// . . . . . . . .
// . . . . . . . .
// . . . x . x . .
// . . x . . . x .
// . . . . K . . .
// . . x . . P x .
// . . . x . x . .
// . . . . . . . .

//                            2,4,4
//            5,3/  /  /  /    \  \   \   \7,3
//            1                                       1
//   /5,5  / / / \ \ \  \                      / / / / \ \ \ \5,5
// 0                                                            0

const knightlyNumber = (n, m, kr, kc, pr, pc, memo = {}) => {
  const boundY = 0 <= kr && kr < n;
  const boundX = 0 <= kc && kc < n;
  const current = m + "," + kr + "," + kc;

  if (current in memo) return memo[current];
  if (!boundY || !boundX) return 0;
  if (m < 0) return 0;
  if (current in memo) return memo[current];

  if (m === 0 && kr === pr && kc === pc) return 1;

  const a = knightlyNumber(n, m - 1, kr + 2, kc + 1, pr, pc, memo);
  const b = knightlyNumber(n, m - 1, kr + 1, kc + 2, pr, pc, memo);
  const c = knightlyNumber(n, m - 1, kr - 1, kc + 2, pr, pc, memo);
  const d = knightlyNumber(n, m - 1, kr - 2, kc + 1, pr, pc, memo);
  const e = knightlyNumber(n, m - 1, kr - 2, kc - 1, pr, pc, memo);
  const f = knightlyNumber(n, m - 1, kr - 1, kc - 2, pr, pc, memo);
  const g = knightlyNumber(n, m - 1, kr + 1, kc - 2, pr, pc, memo);
  const h = knightlyNumber(n, m - 1, kr + 2, kc - 1, pr, pc, memo);

  memo[current] = a + b + c + d + e + f + g + h;
  return memo[current];
};

// . . . . . . . .
// . . . . . . . .
// . . . x . x . .
// . . x . . . x .
// . . . . K . . .
// . . x . . P x .
// . . . x . x . .
// . . . . . . . .
