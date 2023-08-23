// p: number, array;
// r: boolean;
//
// sumPossible(8, [5, 12, 4]); // -> true, 4 + 4
//                            8
//                        5/   12|    4\
//                      3     -4       4
//                                      5/   12|    4\
//                                      x    x      0
//

const sumPossible = (amount, numbers, memo = {}) => {
  if (amount === 0) return true;
  if (amount < 0) return false;
  if (amount in memo) return memo[amount];

  for (let n of numbers) {
    if (!!sumPossible(amount - n, numbers, memo)) {
      memo[amount] = true;
      return true;
    }
  }

  memo[amount] = false;
  return false;
};
