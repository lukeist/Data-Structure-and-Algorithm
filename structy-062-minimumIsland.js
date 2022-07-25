// https://structy.net/problems/minimum-island

// p: grid
// r: num+

// dfs recursion
const minimumIsland = (grid) => {
  const visited = new Set();
  //   const count = {};

  let min = Infinity;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const current = i + "," + j;

      if (!visited.has(current) && grid[i][j] === "L") {
        // count[current] = explore(grid, i, j, visited);
        const size = explore(grid, i, j, visited);
        min = Math.min(size, min);
      }
    }
  }

  //   for (let key in count) {
  //     min = Math.min(min, count[key]);
  //   }

  return min;
};

const explore = (grid, y, x, visited) => {
  const boundY = 0 <= y && y < grid.length;
  const boundX = 0 <= x && x < grid[0].length;
  const current = y + "," + x;

  if (!boundX || !boundY) return 0;

  if (visited.has(current)) return 0;
  visited.add(current);

  if (grid[y][x] === "W") return 0;

  const n = explore(grid, y - 1, x, visited);
  const s = explore(grid, y + 1, x, visited);
  const w = explore(grid, y, x - 1, visited);
  const e = explore(grid, y, x + 1, visited);

  return 1 + n + w + s + e;
};

// dfs: iteration
// const minimumIsland = (grid) => {
//   const visited = new Set();
//   const count = {};

//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid.length; j++) {
//       if (grid[i][j] === "L") {
//         const stack = [[i, j]];

//         while (stack.length > 0) {
//           const [y, x] = stack.pop();
//           const current = y + "," + x;

//           if (visited.has(current)) continue;
//           visited.add(current);

//           const bountY = 0 < y && y < grid.length - 1;
//           const boundX = 0 < x && x < grid[0].length - 1;

//           if (bountY && boundX) {
//             stack.push([y + 1][x], [y - 1][x], [y][x + 1], [y][x - 1]);
//           } else if (bountY) {
//             // stack.push([y+1][x]);
//           } else if (boundX) {
//             //
//           } else if (y === 0 && x === 0) {
//             //
//           } else if (y === 0 && x === grid[0].length - 1) {
//             //
//           } else if (y === grid.length - 1 && x === 0) {
//             //
//           } else if (y === grid.length - 1 && x === grid[0].length - 1) {
//             //
//           }
//         }
//       }
//     }
//   }
// };

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

console.log(minimumIsland(grid)); // -> 2
