// https://structy.net/problems/count-paths

// p: grid
// r: num

// dfs iteration
// const lastX = grid[0].length - 1;
// const lastY = grid.length - 1;

const countPaths = (grid) => {
  const stack = [[0, 0]];

  while (stack.length > 0) {
    const [y, x] = stack.pop();
  }

  return grid;
};

// const grid = [
//   ["O", "O"],
//   ["O", "O"],
// ]; // -> 2

const grid = [
  ["O", "O", "X"],
  ["O", "O", "O"],
  ["O", "O", "O"],
]; // -> 5
console.log(countPaths(grid));
[
  [1, 1, "X"],
  [1, 2, 3],
  [2, 3, 4],
];

// // dfs iteration NOT WORKING
// const countPaths = (grid) => {
//     const stack = [[0, 0]];

//     while (stack.length > 0) {
//       const [y, x] = stack.pop();

//       if (grid[y][x] === "X") continue;
//       grid[0][0] = 1;
//       y === 0 && (grid[y][x] = 1);
//       x === 0 && (grid[y][x] = 1);

//       0 < x &&
//         0 < y &&
//         x + 1 < grid[0].length &&
//         y + 1 < grid.length &&
//         (grid[y][x] = grid[y - 1][x] + grid[y][x - 1]);

//       0 < x && x + 1 < grid[0].length && stack.push([y, x + 1]);
//       0 < y && y + 1 < grid.length && stack.push([y + 1, x]);
//     }

//     return grid;
//   };
