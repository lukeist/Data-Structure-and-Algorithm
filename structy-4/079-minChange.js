// p: number, array;
// r: number;
//                          8
//                 1/     5/    4 \   12 \
//                 7      3     4        -4
//            1/ 5/ 4\   1/     1/ 4\ 

const minChange = (amount, coins) => {
    const count = _minChange(amount, coins);
    return count === Infinity ? -1 : count;
};
  
const _minChange = (amount, coins, memo = {}) => {
    if (amount === 0) return 0;
    if (amount < 0) return Infinity;
    if (amount in memo) return memo[amount]
    let count = Infinity;
    for (let c of coins) {
    count = Math.min(count, _minChange(amount - c, coins, memo))
    }
    memo[amount] = count + 1;
    return count + 1;
};
    