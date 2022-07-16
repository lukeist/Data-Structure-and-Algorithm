// https://structy.net/problems/sum-possible

// p: +num, arr
// r: boolean

// e: sumPossible(8, [5, 12, 4]); // -> true, 4 + 4
//                    3   3

// sumPossible(15, [6, 2, 10, 19]); // -> false
//                  9  7
//                  9  5
//                  9  3
//                  9  1
//                  3

// e: sumPossible(13, [5, 12, 4]); // -> true, 4 + 4 + 5

// base cases: 5 x 1
//  amount <= num

// recursion
const sumPossible = (amount, numbers, memo = {}) => {
  if (amount === 0) return true;
  if (amount < 0) return false;

  if (amount.toString() in memo) return memo[amount];

  for (let num of numbers) {
    if (sumPossible(amount - num, numbers, memo)) {
      //   memo[amount - num] = true;
      memo[amount] = true;

      console.log(memo);
      return true;
    }
  }

  memo[amount] = false;
  return false;
};

// not so clean
// const sumPossible = (amount, numbers, memo = {}) => {
//   if (amount === 0) return true;
//   if (amount < 0) return false;

//   for (let num of numbers) {
//     const newAmount = amount - num;
//     if (!(newAmount in memo)) {
//       memo[newAmount] = sumPossible(newAmount, numbers, memo);
//     }

//     if (memo[newAmount]) return true;
//   }

//   //   console.log(memo);
//   return false;
// };
// console.log(sumPossible(13, [5, 12, 4])); // -> true, 4 + 4 + 5
// console.log(sumPossible(4, [1, 2, 3])); // -> true
console.log(sumPossible(8, [5, 12, 4])); // -> true // -> true, 4 + 4
// console.log(sumPossible(15, [6, 2, 10, 19])); // -> false

// const sumPossible = (amount, numbers) => {
//     if (amount === 0) return true;
//     if (amount < 0) return false;

//     for (let num of numbers) {
//       if (sumPossible(amount - num, numbers)) return true;
//     }

//     return false;
//   };
