// p: num, arr
// r: num
// e:
// minChange(13, [1, 9, 5, 14, 30]); // -> 5
//                  13
//          (1   9   5   14    30)
//          12  4   8   -1    -27
//         (1 9 5 14 30)

const minChange = (amount, coins) => {
  let min = Infinity;

  const explore = (amount, coins, count = 0) => {
    if (amount < 0) return false;
    if (amount === 0) return true;

    // count++;
    for (let coin of coins) {
      if (explore(amount - coin, coins, count + 1)) {
        min = Math.min(min, count);
        console.log(true, min);
        return true;
      }
    }

    return false;
  };

  if (explore(amount, coins, min)) return min;

  return -1;
};

// console.log(minChange(3, [4, 2, 10])); // -> -1
console.log(minChange(8, [1, 5, 4, 12])); // -> 2
// console.log(minChange(13, [1, 9, 5, 14, 30]));
// -> 5

//   module.exports = {
//     minChange,
//   };
