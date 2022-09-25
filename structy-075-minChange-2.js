// p: num, arr
// r: num
// e:
// minChange(13, [1, 9, 5, 14, 30]); // -> 5
//                  13
//          (1   9   5   14    30)
//          12  4   8   -1    -27
//         (1 9 5 14 30)

const minChange = (amount, coins) => {
  let min = findMin(amount, coins);

  return min === Infinity ? -1 : min;
};

// recursion W memo O(coins.length x amount) O(coins.length x amount)
const findMin = (amount, coins, memo = {}) => {
  if (amount < 0) return Infinity;
  if (amount === 0) return 0;

  if (amount in memo) return memo[amount];

  let min = Infinity;

  for (let coin of coins) {
    min = Math.min(min, 1 + findMin(amount - coin, coins, memo));
  }

  memo[amount] = min;
  return min;
};

// // recursion WO memo O(coins.length^amount) O(coins.length^amount)
// const findMin = (amount, coins) => {
//   if (amount < 0) return Infinity;
//   if (amount === 0) return 0;

//   let min = Infinity;

//   for (let coin of coins) {
//     min = Math.min(min, 1 + findMin(amount - coin, coins));
//   }

//   return min;
// }

// console.log(minChange(3, [4, 2, 10])); // -> -1
// console.log(minChange(8, [1, 5, 4, 12])); // -> 2
console.log(minChange(13, [1, 9, 5, 14, 30]));
// -> 5

//   module.exports = {
//     minChange,
//   };
