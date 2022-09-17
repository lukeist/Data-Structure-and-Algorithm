// p: +num, arr
// r: boolean

// recursive W memo: O(amount*numbers.length) O(amount)
const sumPossible = (amount, numbers, memo = {}) => {
    if (amount < 0) return false;
    if (amount === 0) return true;
    if (amount in memo) return memo[amount];
    
  //   console.log(amount.toString() in memo);
  
    for (let num of numbers) {
      if (sumPossible(amount - num, numbers, memo)) {
        memo[amount] = true;
        return true;
    }
  
    //   console.log(amount, memo, memo[amount]);
    memo[amount] = false;
    return false;
  };

console.log(sumPossible(103, [6, 20, 1])); // -> true
// console.log(sumPossible(271, [10, 8, 265, 24])); // -> false

// // recursive WO memo: O(numbers.length^amount) O(amount)
// const sumPossible = (amount, numbers) => {
//   if (amount < 0) return false;
//   if (amount === 0) return true;

//   for (let num of numbers) {
//     if (sumPossible(amount - num, numbers)) return true;
//   }

//   return false;
// };

//             8
//      5 /   12|     4\
//      3     -4        4
//    /|\               /|\
//  -2 -9 -1         -1 -8 0

//             13
//      6 /    2|     1\
//      7      9        12
//    /|\     /|\      /|\
//  1  5  6
// / |\
//-5 -1 0

// module.exports = {
//   sumPossible,
// };
