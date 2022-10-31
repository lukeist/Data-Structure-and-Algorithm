// p: array 2d
// r: num
// e:
// costs = [
//    t  j
// c [4, 3, 7],   [4, 3, 7],
// i [6, 1, 9],   [9, 5, 12],
//   [2, 5, 3]    [7, 14, 8]
// ]

// [1 2]
// [5 4] => 5
// arr[i][j] += min arr[i-1][!j]

// dp recursion                                     pos,lastPlant
//                                                    0,NULL
//                                           4 /        3 |             7\
//                                      1,0               1,1              1,2
//                                   1/    9\          6/    9\         6/      1 \
//                                2,1       2,2       2,0    2,2        2,0       2,1
//                             2/   3 \  2/    5\  5/    3\ 2/    5\  5/    3\  2/    3\
//                            3.0   3.2 3.0     3.1 3.1  3.2 3.0   3.1  3.1 3.2 3.0     3.2

// // recursive W memo
// const positioningPlants = (costs, i = 0, lastPlant = null, memo = {}) => {
//   const ij = i + "," + lastPlant;
//   if (ij in memo) return memo[ij];

//   if (i === costs.length) return 0;

//   let min = Infinity;
//   for (let j = 0; j < costs[0].length; j++) {
//     if (j === lastPlant) continue;

//     // min = costs[i][j] + Math.min(positioningPlants(costs, i + 1, j), min); >>>> WRONG
//     min = Math.min(costs[i][j] + positioningPlants(costs, i + 1, j, memo), min);
//   }

//   memo[ij] = min;
//   return min;
// };

// recursive WO memo
// const positioningPlants = (costs, i = 0, lastPlant = null) => {
//   if (i === costs.length) return 0;

//   let min = Infinity;
//   for (let j = 0; j < costs[0].length; j++) {
//     if (j === lastPlant) continue;

//     // min = costs[i][j] + Math.min(positioningPlants(costs, i + 1, j), min); >>>> WRONG
//     min = Math.min(costs[i][j] + positioningPlants(costs, i + 1, j), min);
//   }

//   return min;
// };

// dp iteration
const positioningPlants = (costs) => {
  for (let i = 1; i < costs.length; i++) {
    for (let j = 0; j < costs[0].length; j++) {
      const lastPlant = j;
      const min = Infinity;

      for (let k = 0; k < costs[0].length; k++) {
        if (k === lastPlant) continue;
        min = Math.min(min, costs[i][k]);
      }

      costs[i][j] += min;
    }
  }

  return Math.min(...costs[costs.length - 1]);
};

// // dp iteration O(n^m)
// const positioningPlants = (costs) => {
//   for (let i = 1; i < costs.length; i++) {
//     for (let j = 0; j < costs[0].length; j++) {
//       const lastRow = [...costs[i - 1]];
//       lastRow.splice(j, 1);
//       costs[i][j] += Math.min(...lastRow);
//     }
//   }

//   return Math.min(...costs[costs.length - 1]);
// };

console.log(
  positioningPlants([
    [4, 3, 7],
    [6, 1, 9],
    [2, 5, 3],
  ])
); // -> 7, by doing 4 + 1 + 2.
