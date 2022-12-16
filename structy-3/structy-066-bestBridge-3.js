// p: grid;
// r: num;

// const grid = [
//   ["W", "W", "W", "L", "L"],
//   ["L", "L", "W", "W", "L"],
//   ["L", "L", "L", "W", "L"],
//   ["W", "L", "W", "W", "W"],
//   ["W", "W", "W", "W", "W"],
//   ["W", "W", "W", "W", "W"],
// ];
// bestBridge(grid); // -> 1

// const bestBridge = (grid) => {
//   const visited = new Set();
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[0].length; j++) {
//       if (grid[i][j] === "L") {
//         explore(grid, i, j, visited);
//         break;
//       }
//     }
//     if (visited.size > 0) break;
//   }
//   console.log(visited);

//   let min = Infinity;
//   for (let v of visited) {
//     const [i, j] = v.split(",");

//     const visiting = new Set([i + "," + j]);
//     const queue = [[+i, +j, 0]];

//     while (queue.length > 0) {
//       const [y, x, d] = queue.shift();
//       if (!visited.has(y + "," + x) && grid[y][x] === "L") {
//         min = Math.min(min, d);
//         console.log(visited, i, j, y, x);
//       }

//       const deltas = [
//         [y + 1, x],
//         [y - 1, x],
//         [y, x + 1],
//         [y, x - 1],
//       ];
//       for (let delta of deltas) {
//         const [neiY, neiX] = delta;
//         const boundY = 0 <= neiY && neiY < grid.length;
//         const boundX = 0 <= neiX && neiX < grid[0].length;
//         const neiYX = neiY + "," + neiX;
//         if (boundY && boundX && !visited.has(neiYX) && !visiting.has(neiYX)) {
//           visiting.add(neiYX);
//           queue.push([neiY, neiX, d + 1]);
//         }
//       }
//     }
//   }

//   return min - 1;
// };

// const explore = (grid, y, x, visited) => {
//   const boundY = 0 <= y && y < grid.length;
//   const boundX = 0 <= x && x < grid[0].length;
//   if (!boundY || !boundX) return;
//   if (grid[y][x] === "W") return;
//   const yx = y + "," + x;
//   if (visited.has(yx)) return;
//   visited.add(yx);

//   explore(grid, y + 1, x, visited);
//   explore(grid, y - 1, x, visited);
//   explore(grid, y, x + 1, visited);
//   explore(grid, y, x - 1, visited);
// };

// const grid = [
//   ["W", "W", "W", "L", "L"],
//   ["L", "L", "W", "W", "L"],
//   ["L", "L", "L", "W", "L"],
//   ["W", "L", "W", "W", "W"],
//   ["W", "W", "W", "W", "W"],
//   ["W", "W", "W", "W", "W"],
// ];

const grid = [
  ["W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
  ["L", "L", "W", "W", "L"],
  ["W", "L", "W", "W", "L"],
  ["W", "W", "W", "L", "L"],
  ["W", "W", "W", "W", "W"],
];

console.log(bestBridge(grid)); // -> 1
