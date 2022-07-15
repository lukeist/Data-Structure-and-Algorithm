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

const sumPossible = (amount, numbers) => {
  //   // amount % num === 0
  //   for (let num of numbers) {
  //     if (amount % num === 0) return true;
  //   }
  // amount % num !== 0

  let rest = amount;

  for (let num of numbers) {
    if (num === 1) return true;
    // if (num > amount) return false;
    if (amount % num === 0) return true;
  }
};
