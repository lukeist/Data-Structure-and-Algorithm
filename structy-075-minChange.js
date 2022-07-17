// https://structy.net/problems/min-change

// p: num & arr
// r: num / -1
// e: minChange(8, [1, 5, 4, 12]); // -> 2, because 4+4 is the minimum coins possible
// e: minChange(8, [1, 5, 4, 12]); // -> 2, because 4+4 is the minimum coins possible

// const minChange = (amount, coins, memo = {}) => {
//   if (amount <= 0) return 0;
//   if (amount in memo) return memo[amount];

//   for (let coin of coins) {
//     {
//       memo[amount] = minChange(amount - coin, coins, memo) + 1;
//     }
//     console.log(memo);
//   }

//   return memo[amount];
// };

const minChange = (amount, coins, memo = {}) => {
  if (amount === 0) return true;
  if (amount < 0) return false;
  if (amount in memo) return memo[amount];

  for (let coin of coins) {
    if (minChange(amount - coin, coins, memo)) {
      memo[amount] = true;
      return true;
    }
    console.log(memo);
  }

  memo[amount] = false;
  return false;
};

console.log(minChange(8, [1, 5, 4, 12])); // -> 2
