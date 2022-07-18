// https://structy.net/problems/min-change

// p: num & arr
// r: num / -1
// e: minChange(8, [1, 5, 4, 12]); // -> 2, because 4+4 is the minimum coins possible
// e: minChange(8, [1, 5, 4, 12]); // -> 2, because 4+4 is the minimum coins possible

const minChange = (amount, coins) => {
  let num = _minChange(amount, coins);
  return num === Infinity ? -1 : num;
};

const _minChange = (amount, coins, memo = {}) => {
  if (amount === 0) return 0;
  if (amount < 0) return Infinity;

  if (amount in memo) return memo[amount];

  let min = Infinity;

  for (let coin of coins) {
    const numCoin = 1 + _minChange(amount - coin, coins, memo);
    min = Math.min(min, numCoin);
  }

  memo[amount] = min;
  return min;
};

console.log(minChange(8, [1, 5, 4, 12])); // -> 2
// console.log(minChange(4, [1, 2, 3])); // -> 2

// const minChange = (amount, coins, memo = {}) => {
//     if (amount === 0) return true;
//     if (amount < 0) return false;
//     if (amount in memo) return memo[amount];

//     for (const coin of coins) {
//       if (minChange(amount - coin, coins, memo)) {
//         memo[amount] = true;
//         return true;
//       }
//     }

//     memo[amount] = false;
//     return false;
//   };
