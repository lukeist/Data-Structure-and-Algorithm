/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

// p: array; array;
// r: num int;
// e:
// index    0 1 2 3 4
//                  i
// gas+  = [1,2,3,4,5],
// cost- = [3,4,5,1,2]
// totalGas 15
// totalCost 15
// tank 3
// start 3

function canCompleteCircuit(gas, cost) {
  let totalGas = 0;
  let totalCost = 0;
  let tank = 0;
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i];
    totalCost += cost[i];
    tank += gas[i] - cost[i];

    if (tank < 0) {
      start = i + 1;
      tank = 0;
    }
  }

  return totalGas - totalCost >= 0 ? start : -1;
}
