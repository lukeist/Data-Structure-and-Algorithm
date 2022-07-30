// https://structy.net/problems/counting-change

// p: num & arr
// r: num+
// e: countingChange(4, [1,2,3]) -> 4
// 1111 112 22 13

const countingChange = (amount, coins, i = 0, memo = {}) => {
  const key = amount + "," + i;
  if (key in memo) return amount[key];

  if (amount === 0) return 1;

  if (count in memo) return memo[amount];
  const coin = coins[i];
  let count = 0;

  for (let qty = 0; coin * qty <= amount; qty++) {
    let newAmount = amount - coin * qty;
    count += countingChange(newAmount, coins, i + 1);
  }

  amount[key] = count;
  return amount[key];
};

// // recursion without MEMO
// const countingChange = (amount, coins, i = 0) => {
//   if (amount === 0) return 1;

//   const coin = coins[i];
//   let count = 0;

//   for (let qty = 0; coin * qty <= amount; qty++) {
//     let newAmount = amount - coin * qty;
//     count += countingChange(newAmount, coins, i + 1);
//   }

//   return count;
// };

console.log(countingChange(4, [1, 2, 3])); // -> 4

// //
// const countingChange = (amount, coins) => {
//     if (amount === 0) return 1;
//     //   if (amount !== 0) return 0;

//     //   let count = 0;
//     //   for (const coin of coins) {
//     //     for (let i = 0; i <= amount; i++) {
//     //       count = countingChange(amount - coin * i, coins);
//     //       console.log(amount);
//     //     }
//     //   }

//     return count;
//   };

// // working solution but not good
// const countingChange = (amount, coins) => {
//   const arrs = explore(amount, coins);
//   const map = {};

//   for (const arr of arrs) {
//     for (let i = 0; i < arr.length - 1; i++) {
//       arr[i] = arr[i] - arr[i + 1];
//     }
//     arr.pop();
//     arr.sort();
//     let temp = arr.join();
//     map[temp] = (map[temp] || 0) + 1;
//   }

//   let count = 0;
//   for (const key in map) {
//     count++;
//   }
//   return count;
// };

// const explore = (amount, coins) => {
//   if (amount === 0) return [[amount]];
//   if (amount < 0) return [];
//   let arrs = [];

//   for (const coin of coins) {
//     // if (amount < 0) continue;

//     let a = explore(amount - coin, coins);
//     arrs = arrs.concat(a);
//   }

//   for (const arr of arrs) {
//     arr.unshift(amount);
//   }

//   return arrs;
// };
//                       4
//               1       2       3
//          1 2 3      1 2 3    1 2 3

// const countingChange = (amount, coins, memo = {}) => {
//     if (amount === 0) return 1;
//     if (amount < 0) return 0;
//     if (amount in memo) return
//     let count = 0;

//     for (const coin of coins) {
//       count = count + countingChange(amount - coin, coins);
//       console.log(coin, count);
//     }

//     return count;
//   };
//   //
