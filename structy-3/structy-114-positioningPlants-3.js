const positioningPlants = (costs, y = 0, x = null, memo = {}) => {
  const yx = y + "," + x;
  if (yx in memo) return memo[yx];
  if (y === costs.length) return 0;

  let min = Infinity;
  for (let i = 0; i < costs[0].length; i++) {
    if (i === x) continue;
    min = Math.min(min, costs[y][i] + positioningPlants(costs, y + 1, i, memo));
  }

  memo[yx] = min;
  return min;
};

// const positioningPlants = (costs) => {
//   const arr = costs.map((a) => []);
//   arr[0] = costs[0];

//   for (let i = 0; i < costs[0].length; i++) {
//     arr[0][i] = costs[0][i];
//   }

//   for (let i = 1; i < costs.length; i++) {
//     let fMin = Math.min(...arr[i - 1]);
//     let sMin = Infinity;

//     // [6, 3, 20, 3],
//     let count = 1;
//     for (let j = 0; j < costs[0].length; j++) {
//       if (count === 1 && arr[i - 1][j] === fMin) {
//         count++;
//         continue;
//       }

//       sMin = Math.min(sMin, arr[i - 1][j]);
//     }

//     for (let j = 0; j < costs[0].length; j++) {
//       arr[i - 1][j] !== fMin
//         ? (arr[i][j] = costs[i][j] + fMin)
//         : (arr[i][j] = costs[i][j] + sMin);
//     }
//   }

//   return Math.min(...arr[arr.length - 1]);
// };

// function positioningPlants(costs) {
//   const n = costs.length;
//   const m = costs[0].length;
//   const dp = new Array(n);

//   for (let i = 0; i < n; i++) {
//     dp[i] = new Array(m).fill(0);
//   }

//   // base case: cost of planting the first flower
//   for (let j = 0; j < m; j++) {
//     dp[0][j] = costs[0][j];
//   }

//   for (let i = 1; i < n; i++) {
//     // find minimum cost of planting flower j at position i-1
//     let minCost = Math.min(...dp[i - 1]);
//     // find second minimum cost of planting flower j at position i-1
//     let secondMinCost = Number.MAX_VALUE;
//     for (let j = 0; j < m; j++) {
//       if (dp[i - 1][j] > minCost) {
//         secondMinCost = Math.min(secondMinCost, dp[i - 1][j]);
//       }
//     }

//     for (let j = 0; j < m; j++) {
//       // if flower j was the minimum cost at position i-1, use the second minimum cost
//       if (dp[i - 1][j] === minCost) {
//         dp[i][j] = secondMinCost + costs[i][j];
//       } else {
//         dp[i][j] = minCost + costs[i][j];
//       }
//     }
//   }

//   // find the minimum cost among all flower types at the last position
//   let result = Math.min(...dp[n - 1]);
//   return result;
// }

console.log(
  positioningPlants([
    [12, 14, 5],
    [6, 3, 2],
  ])
); // -> 8
//  position / type   0  1  2
//      0            [2, 4, 5],
//      1            [6, 3, 2],

console.log(
  positioningPlants([
    [12, 14, 5, 13],
    [6, 3, 20, 3],
    [24, 12, 7, 2],
    [4, 80, 45, 3],
    [104, 13, 5, 14],
    [38, 19, 7, 6],
    [12, 2, 1, 2],
  ]) // -> 26
); // -> 7, by doing 4 + 1 + 2

// O(n*m*m) O(n*m)
// const positioningPlants = (costs) => {
//   const arr = costs.map(a => a);

//   for (let i = 1; i < costs.length; i++) {
//     for (let j = 0; j < costs[0].length; j++) {
//       let min = Infinity;
//       for (let k = 0; k < costs[0].length; k++) {
//         if (k === j) continue;
//         min = Math.min(min, arr[i - 1][k]);
//       }
//       arr[i][j] += min
//     }
//   }

//   return Math.min(...arr[arr.length - 1])
// };
