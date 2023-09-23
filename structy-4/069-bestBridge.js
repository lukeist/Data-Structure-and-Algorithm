// p: grid;
// r: number;
// e:
// ["W", "W", "W", "L", "L"],
// ["L", "L", "W", "W", "L"],
// ["L", "L", "L", "W", "L"],
// ["W", "L", "W", "W", "W"],
// ["W", "W", "W", "W", "W"],
// ["W", "W", "W", "W", "W"],

const bestBridge = (grid) => {
  const firstIsland = new Set();

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      explore(grid, i, j, firstIsland);
      if (firstIsland.size > 0) break;
    }
    if (firstIsland.size > 0) break;
  }

  const queue = [];
  for (let l of firstIsland) {
    const [y, x] = l.split(",");
    queue.push([+y, +x, 0]);
  }

  const visited = new Set();
  let min = Infinity;
  while (queue.length > 0) {
    const [y, x, d] = queue.shift();
    if (!firstIsland.has(y + "," + x) && grid[y][x] === "L")
      min = Math.min(min, d);

    const deltas = [
      [y + 1, x],
      [y - 1, x],
      [y, x + 1],
      [y, x - 1],
    ];
    for (let delta of deltas) {
      const [neiY, neiX] = delta;
      const neiYX = neiY + "," + neiX;
      const boundY = 0 <= neiY && neiY < grid.length;
      const boundX = 0 <= neiX && neiX < grid[0].length;
      if (
        !!boundY &&
        !!boundX &&
        !visited.has(neiYX) &&
        !firstIsland.has(neiYX)
      ) {
        visited.add(neiYX);
        queue.push([neiY, neiX, d + 1]);
      }
    }
  }

  return min - 1;
};

const explore = (grid, y, x, visited) => {
  const yx = y + "," + x;
  const boundY = 0 <= y && y < grid.length;
  const boundX = 0 <= x && x < grid[0].length;
  if (!boundY || !boundX || visited.has(yx) || grid[y][x] === "W") return;
  visited.add(yx);

  explore(grid, y + 1, x, visited);
  explore(grid, y - 1, x, visited);
  explore(grid, y, x + 1, visited);
  explore(grid, y, x - 1, visited);
};

// const grid = [
//   ["W", "W", "W", "L", "L"],
//   ["L", "L", "W", "W", "L"],
//   ["L", "L", "L", "W", "L"],
//   ["W", "L", "W", "W", "W"],
//   ["W", "W", "W", "W", "W"],
//   ["W", "W", "W", "W", "W"],
// ];

// const bestBridge = (grid) => {
//   const firstIsland = new Set();

//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[0].length; j++) {
//       explore(grid, i, j, firstIsland);
//       if (firstIsland.size > 0) break;
//     }
//     if (firstIsland.size > 0) break;
//   }

//   let min = Infinity;

//   for (let l of firstIsland) {
//     const [i, j] = l.split(",");
//     const queue = [[+i, +j, 0]];
//     const visited = new Set();

//     while (queue.length > 0) {
//       const [y, x, d] = queue.shift();
//       if (!firstIsland.has(y + "," + x) && grid[y][x] === "L") {
//         min = Math.min(min, d);
//         break;
//       }

//       const deltas = [
//         [y + 1, x],
//         [y - 1, x],
//         [y, x + 1],
//         [y, x - 1],
//       ];
//       for (let delta of deltas) {
//         const [neiY, neiX] = delta;
//         const neiYX = neiY + "," + neiX;
//         const boundY = 0 <= neiY && neiY < grid.length;
//         const boundX = 0 <= neiX && neiX < grid[0].length;
//         if (
//           boundY &&
//           boundX &&
//           !firstIsland.has(neiYX) &&
//           !visited.has(neiYX)
//         ) {
//           queue.push([neiY, neiX, d + 1]);
//           visited.add(neiYX);
//         }
//       }
//     }
//   }
//   return min - 1;
// };

// const explore = (grid, y, x, visited) => {
//   const yx = y + "," + x;
//   const boundY = 0 <= y && y < grid.length;
//   const boundX = 0 <= x && x < grid[0].length;
//   if (!boundY || !boundX || visited.has(yx) || grid[y][x] === "W") return;
//   visited.add(yx);

//   explore(grid, y + 1, x, visited);
//   explore(grid, y - 1, x, visited);
//   explore(grid, y, x + 1, visited);
//   explore(grid, y, x - 1, visited);
// };
