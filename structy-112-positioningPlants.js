// https://structy.net/problems/premium/positioning-plants

// p: arr (2d m x n)
// r: num

// costs[i][j] xxx cost[i+1][j]

const positioningPlants = (costs) => {
  let prevM;
  let prevP;

  for (let j = 0; j < costs[0].length; j++) {
    let min = Infinity;

    for (let i = 0; i < costs[0].length; i++) {
      i !== j && (min = Math.min(costs[1][j] + costs[0][i], min));
    }

    costs[1][j] = min;
  }

  // main func
  for (let i = 2; i < costs.length; i++) {
    prevM = Math.min(...costs[i - 1]);
    prevP = costs[i - 1].indexOf(prevM);

    let min = -Infinity;

    for (let j = 0; j < costs[0].length; j++) {
      j !== prevP ? (costs[i][j] += prevM) : (costs[i][j] = Infinity);
    }
  }

  //   return arr[arr.length - 1];
  return Math.min(...costs[costs.length - 1]);
};

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
    [4, 3, 7],
    [6, 1, 9],
    [2, 5, 3],
  ])
); // -> 7, by doing 4 + 1 + 2

// [
//   [4, x, 7],
//   [x, 1, 9],
//   [2, x, 3],
// ];

// base cases: f(i,j) = min( f(i,j) + f(i-1,j-1) )
