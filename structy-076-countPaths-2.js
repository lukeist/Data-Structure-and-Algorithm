// p: grid
// r: num

// base case: grid[y][x] = grid[y-1][x] + grid[y][x-1]

// [
// ["O", "O", "X"],
// ["O", "O", "O"],
// ["O", "O", "O"],
// ];

// [
// [0, 1, 0],
// [1, 2, 2],
// [1, 3, 5],
// ];
// // recursion O (m x n) O(m x n)
const countPaths = (
  grid,
  y = grid.length - 1,
  x = grid[0].length - 1,
  memo = {}
) => {
  const current = y + "," + x;
  if (current in memo) return memo[current];

  if (grid[y][x] === "X") return 0;
  if (y === 0 && x === 0) return 1;
  if (y === 0 && x > 0) return countPaths(grid, y, x - 1, memo);
  if (y > 0 && x === 0) return countPaths(grid, y - 1, x, memo);

  memo[current] =
    countPaths(grid, y, x - 1, memo) + countPaths(grid, y - 1, x, memo);
  return memo[current];
};

// // iteration O(m x n) O(1)
// const countPaths = (grid) => {
//   // base cases:
//   //   grid[0][0] = 0;
//   //   grid[0][1] = 1;
//   //   grid[1][0] = 1;
//   grid[0][0] = 1;

//   for (let y = 0; y < grid.length; y++) {
//     for (let x = 0; x < grid.length; x++) {
//       console.log(y, x);
//       if (grid[y][x] === "X") {
//         grid[y][x] = 0;
//         continue;
//       }

//       //   if (y === 0 && x > 1) grid[y][x] = grid[y][x - 1];
//       //   if (y > 1 && x === 0) grid[y][x] = grid[y - 1][x];
//       //   if (y > 0 && x > 0) grid[y][x] = grid[y - 1][x] + grid[y][x - 1];

//       if (y > 0 && x > 0) {
//         grid[y][x] = grid[y - 1][x] + grid[y][x - 1];
//       } else if (x > 0) {
//         grid[y][x] = grid[y][x - 1];
//       } else if (y > 0) {
//         grid[y][x] = grid[y - 1][x];
//       }
//     }
//   }

//   //   return grid[grid.length - 1][grid[0].length - 1];
//   return grid;
// };

const grid = [
  ["O", "O", "X", "O", "O", "O"],
  ["O", "O", "X", "O", "O", "O"],
  ["X", "O", "X", "O", "O", "O"],
  ["X", "X", "X", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O"],
];
console.log(countPaths(grid)); // -> 0
