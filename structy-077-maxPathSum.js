// https://structy.net/problems/max-path-sum

// p: grid
// r: num

//
//

////////////////////////////////////////////////////////////////
// Framework for solving DP Problems
// 1. Define the objective function
//// f(n) is max sum travel
// 2. Identify base cases
//// y=0, x=0 => f(y,x)= f(y,x)
// 3. Write down: Recurrence Relation for the optimized objective function
// f(y,x) = max(f(y-1,x), f(y,x-1))
// 4. What's the order of execution?
//// bottom-up
// 5. Where to look for the answer?
//// f(n)
////////////////////////////////////////////////////////////////

// // recursion
// const maxPathSum = (grid, y = 0, x = 0, memo = {}) => {
//   if (y === grid.length || x === grid[0].length) return -Infinity;
//   if (y === grid.length - 1 && x === grid[0].length - 1) return grid[y][x];

//   const current = y + "," + x;
//   if (current in memo) return memo[current];

//   console.log(memo);

//   memo[current] =
//     grid[y][x] +
//     Math.max(
//       maxPathSum(grid, y + 1, x, memo),
//       maxPathSum(grid, y, x + 1, memo)
//     );

//   return memo[current];
// };

iteration;
const maxPathSum = (grid) => {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (y > 0 && x > 0) {
        grid[y][x] = grid[y][x] + Math.max(grid[y][x - 1], grid[y - 1][x]);
      } else if (y > 0) {
        grid[y][x] = grid[y][x] + grid[y - 1][x];
      } else if (x > 0) {
        grid[y][x] = grid[y][x] + grid[y][x - 1];
      }
    }
  }

  return grid[(grid.length - 1, grid[0].length - 1)];
};

const grid = [
  [1, 3, 12],
  [5, 1, 1],
  [3, 6, 1],
];

console.log(maxPathSum(grid)); // -> 18

// [
//   [1, 4, 16],
//   [6, 7, 17],
//   [9, 15, 18],
// ];
