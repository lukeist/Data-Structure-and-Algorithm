// p: arr, num
// r: num

// WRONG
//                                 4
//                      [1         2         3]
//                    3           2             1
//              [1   2   3]    [1  2  3]     [1 2 3]
//          2       1    0       1  0  x     0 x x
//      [1  2  3]    [[1,1],[2]]
//      1   0  x
//    [123]         [[1]]
//     0xx

// RIGHT
//                                4                             amount
//       1            0/     1|      2|     3 \     4\          j * coins[0]
//                 a 4        3       2       1        0        amount - j * coins[0]
//      2        0/ 1\ 2\   0/ 1\   0/  1\                       j * coins[1]
//              4  2    0   3        2   0                      amount - j * coins[1]
//     3                  0/ 1\                                  j * coins[2]
//                        3   0

// recursive W memo O(amount x #coins)
const countingChange = (amount, coins, i = 0, memo = {}) => {
  const current = amount + "," + i;
  if (current in memo) return memo[current];
  if (amount === 0) return 1;
  if (i === coins.length) return 0;

  let count = 0;

  for (let j = 0; j * coins[i] <= amount; j++) {
    count += countingChange(amount - j * coins[i], coins, i + 1, memo);
  }

  memo[current] = count;
  return count;
};

// // recursive WO memo O(amount) ??
// const countingChange = (amount, coins, i = 0) => {
//   if (amount === 0) return 1;
//   if (i === coins.length) return 0;

//   let count = 0;

//   for (let j = 0; j * coins[i] <= amount; j++) {
//     count += countingChange(amount - j * coins[i], coins, i + 1);
//   }

//   return count;
// };

console.log(countingChange(4, [1, 2, 3])); // -> 4
