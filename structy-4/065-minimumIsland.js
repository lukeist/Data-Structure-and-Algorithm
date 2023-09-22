// p: grid;
// r: number;
// e:
// ['W', 'L', 'W', 'W', 'W'],
// ['W', 'L', 'W', 'W', 'W'],
// ['W', 'W', 'W', 'L', 'W'],
// ['W', 'W', 'L', 'L', 'W'],
// ['L', 'W', 'W', 'L', 'L'],
// ['L', 'L', 'W', 'W', 'W'],
//

const minimumIsland = (grid) => {
  const visited = new Set();
  let min = Infinity;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const count = explore(grid, i, j, visited);
      if (count === 0) continue;
      min = Math.min(min, count);
    }
  }

  return min;
};

const explore = (grid, y, x, visited) => {
  const yx = y + "," + x;
  const boundY = 0 <= y && y < grid.length;
  const boundX = 0 <= x && x < grid[0].length;
  if (!boundY || !boundX || visited.has(yx) || grid[y][x] === "W") return 0;
  visited.add(yx);

  const n = explore(grid, y + 1, x, visited);
  const s = explore(grid, y - 1, x, visited);
  const e = explore(grid, y, x + 1, visited);
  const w = explore(grid, y, x - 1, visited);

  return 1 + n + s + e + w;
};

// // p: grid
// // r: number
// // e:
// //   ['W', 'L', 'W', 'W', 'W'],
// //   ['W', 'L', 'W', 'W', 'W'],
// //   ['W', 'W', 'W', 'L', 'W'],
// //   ['W', 'W', 'L', 'L', 'W'],
// //   ['L', 'W', 'W', 'L', 'L'],
// //   ['L', 'L', 'W', 'W', 'W'],
// // => 2

// const minimumIsland = (grid) => {
//   const visited = new Set();
//   let min = Infinity;

//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[0].length; j++) {
//       if (grid[i][j] === "W" || visited.has(i + "," + j)) continue;

//       min = Math.min(min, dfs(grid, i, j, visited));
//     }
//   }

//   return min;
// };

// const dfs = (grid, y, x, visited) => {
//   const yx = y + "," + x;
//   const boundY = 0 <= y && y < grid.length;
//   const boundX = 0 <= x && x < grid[0].length;
//   if (!boundY || !boundX || grid[y][x] === "W" || visited.has(yx)) return 0;
//   visited.add(yx);

//   const n = dfs(grid, y + 1, x, visited);
//   const s = dfs(grid, y, x + 1, visited);
//   const e = dfs(grid, y - 1, x, visited);
//   const w = dfs(grid, y, x - 1, visited);

//   return 1 + n + s + e + w;
// };
