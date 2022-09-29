// p: grid
// r: num

// // recursive O(r x c) O(r x c)
const minimumIsland = (grid) => {
  const visited = new Set();
  let min = Infinity;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let size = explore(grid, i, j, visited);
      console.log(i, j, size);
      min = Math.min(min, size === 0 ? Infinity : size);
    }
  }

  return min;
};

const explore = (grid, y, x, visited) => {
  const boundY = 0 <= y && y < grid.length;
  const boundX = 0 <= x && x < grid[0].length;
  if (!boundY || !boundX) return 0;

  if (grid[y][x] === "W") return 0;

  const curYX = y + "," + x;
  if (visited.has(curYX)) return 0;
  visited.add(curYX);

  //   if (grid[y][x] === "L") return 1;

  const n = explore(grid, y + 1, x, visited);
  const s = explore(grid, y - 1, x, visited);
  const e = explore(grid, y, x + 1, visited);
  const w = explore(grid, y, x - 1, visited);

  return 1 + n + s + e + w;
};

// // iterative O(r x c) O(r x c)
// const minimumIsland = (grid) => {
//   const visited = new Set();
//   let min = Infinity;

//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[0].length; j++) {
//       const currentIJ = i + "," + j;
//       if (visited.has(currentIJ) || grid[i][j] === "W") continue;

//       let size = 0;
//       visited.add(currentIJ);

//       const stack = [[i, j, size]];

//       while (stack.length > 0) {
//         const [y, x] = stack.pop();
//         size++;

//         const deltas = [
//           [y + 1, x],
//           [y - 1, x],
//           [y, x + 1],
//           [y, x - 1],
//         ];

//         for (let delta of deltas) {
//           const [neiY, neiX] = delta;
//           const boundY = 0 <= neiY && neiY < grid.length;
//           const boundX = 0 <= neiX && neiX < grid[0].length;
//           const neiYX = neiY + "," + neiX;

//           if (
//             boundY &&
//             boundX &&
//             !visited.has(neiYX) &&
//             grid[neiY][neiX] !== "W"
//           ) {
//             stack.push([neiY, neiX]);
//             visited.add(neiYX);
//           }
//         }
//       }

//       min = Math.min(min, size);
//     }
//   }

//   return min;
// };

// const grid = [
//   ["W", "L", "W", "W", "W"],
//   ["W", "L", "W", "W", "W"],
//   ["W", "W", "W", "L", "W"],
//   ["W", "W", "L", "L", "W"],
//   ["L", "W", "W", "L", "L"],
//   ["L", "L", "W", "W", "W"],
// ];

const grid = [
  ["L", "L", "L"],
  ["L", "L", "L"],
  ["L", "L", "L"],
]; // --> 9

console.log(minimumIsland(grid));

// // iterative: WRONG BECAUSE of the stack: this method can be used ONLY for BFS
// 1. loop  [ [ 0, 0, 1 ] ]
// 2. loop  [ [ 1, 0, 2 ], [ 0, 1, 2 ] ]
// 3. loop  [ [ 1, 0, 2 ], [ 1, 1, 3 ], [ 0, 2, 3 ] ]
// 4. loop  [ [ 1, 0, 2 ], [ 1, 1, 3 ], [ 1, 2, 4 ] ]
// 5. loop  [ [ 1, 0, 2 ], [ 1, 1, 3 ], [ 2, 2, 5 ] ]
// 6. loop  [ [ 1, 0, 2 ], [ 1, 1, 3 ], [ 2, 1, 6 ] ]
// 7. loop  [ [ 1, 0, 2 ], [ 1, 1, 3 ], [ 2, 0, 7 ] ]
// 8. loop  [ [ 1, 0, 2 ], [ 1, 1, 3 ] ]
// 9. loop  [ [ 1, 0, 2 ] ]

// const minimumIsland = (grid) => {
//     const visited = new Set();
//     let min = Infinity;

//     for (let i = 0; i < grid.length; i++) {
//       for (let j = 0; j < grid[0].length; j++) {
//         const currentIJ = i + ',' + j;
//         if (visited.has(currentIJ) || grid[i][j] === 'W') continue;
//         let size = 1;

//       // travese thru lands
//         visited.add(currentIJ);
//         const stack = [[i, j, size]]

//         while (stack.length > 0) {
//           const [y, x, count] = stack.pop();
//           size = count;

//           const deltas = [[y + 1, x], [y - 1, x], [y, x + 1], [y, x - 1]];
//           for (let delta of deltas) {
//             const [neiY, neiX] = delta;
//             const boundY = 0 <= neiY && neiY < grid.length;
//             const boundX = 0 <= neiX && neiX < grid[0].length;
//             const neiYX = neiY + ',' + neiX;

//             if (boundY && boundX && !visited.has(neiYX) && grid[neiY][neiX] !== 'W') {
//               stack.push([neiY, neiX, count + 1]);
//               visited.add(neiYX);
//             }
//           }
//         }

//         min = Math.min(min, size);
//       }
//     }

//     return min;
//   };
