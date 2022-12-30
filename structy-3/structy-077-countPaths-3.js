// p: grid
// r: num;
//
// ["O", "O", "X"],
// ["O", "O", "O"],
// ["O", "O", "O"],
// f(y,x) = f(y-1,x) + f(y,x-1)
const countPaths = (grid) => {
  const g = grid.map((a) => []);

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[y][x] === "X") {
        g[y][x] = 0;
        continue;
      }
      y === 0 && x === 0 && (g[y][x] = 1);
      y !== 0 && x === 0 && (g[y][x] = g[y - 1][x]);
      y === 0 && x !== 0 && (g[y][x] = g[y][x - 1]);
      y !== 0 && x !== 0 && (g[y][x] = g[y - 1][x] + g[y][x - 1]);
    }
  }

  return g[g.length - 1][g[0].length - 1];
};

// const countPaths = (
//   grid,
//   y = grid.length - 1,
//   x = grid[0].length - 1,
//   memo = {}
// ) => {
//   const yx = y + "," + x;
//   if (yx in memo) return memo[yx];
//   if (y === 0 && x === 0) return 1;
//   if (y < 0 || x < 0 || grid[y][x] === "X") return 0;

//   memo[yx] =
//     countPaths(grid, y - 1, x, memo) + countPaths(grid, y, x - 1, memo);
//   return memo[yx];
// };

const grid = [
  ["O", "O", "X"],
  ["O", "O", "O"],
  ["O", "O", "O"],
];

// console.log(countPaths(grid)); // -> 5
console.log(grid[grid.length - 1]); // -> 5

// NOT WORKING?
//   const countPaths = (grid) => {
//   let grid[0][0] = 1;

//   const queue = [[0,0,1]];

//   while (queue.length > 0) {
//     const [y, x] = stack.shift();

//     const two = [[y + 1, x], [y, x + 1]];
//     for (let t of two) {
//       const [neiY, neiX] = t;
//       const boundY = 0 <= neiY && neiY <= grid.length;
//       const boundX = 0 <= neiX && neiX <= grid[0].length;
//       if ()
//     }
//   }

//   // todo
// };
