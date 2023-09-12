// p: 2d array;
// r: number;
// e:
//   [4, 3, 7],
//   [6, 1, 9],
//   [2, 5, 3]

//   [4, 3, 7],
//   [9, 5, 12],
//   [7, 14, 8]

const positioningPlants = (costs) => {
  const arr = costs.map((cost) => cost.map((c) => c));

  for (let i = 1; i < costs.length; i++) {
    for (let j = 0; j < costs[0].length; j++) {
      arr[i][j] =
        costs[i][j] +
        Math.min(...arr[i - 1].slice(0, j), ...arr[i - 1].slice(j + 1));
    }
  }

  return Math.min(...arr[arr.length - 1]);
};

console.log(
  positioningPlants([
    [4, 3, 7],
    [6, 1, 9],
    [2, 5, 3],
  ]) // -> 7, by doing 4 + 1 + 2.
);
// [
//   [4, 3, 7],
//   [7, 8, 16],
//   [5, 8, 8],
// ];

// memoization
//   [4, 3, 7],
//   [6, 1, 9],
//   [2, 5, 3]
//                          0,null
//                   4/       3\       7\
//                  1,0      1,1        1,2
//                1/  9\    6/  9\     6/  1\
//              2,1  2,2   2,0   2,2   2,0   2,1
//           2/ \3  2/ 5\  5/ \3  /2 \5
//         3,1  3,2

// const positioningPlants = (costs, i = 0, lastPlant = null, memo = {}) => {
//     if (i === costs.length) return 0;
//     const pairs = i + ',' + lastPlant;
//     if (pairs in memo) return memo[pairs];

//     let min = Infinity;

//     for (let j = 0; j < costs[0].length; j++) {
//       if (j === lastPlant) continue;
//       min = Math.min(min, costs[i][j] + positioningPlants(costs, i + 1, j, memo))
//     }
//     memo[pairs] = min
//     return min;
//   };
