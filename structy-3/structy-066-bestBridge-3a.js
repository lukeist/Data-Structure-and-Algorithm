// p: grid
// r: num
// //
//   ["W", "W", "W", "L", "L"],
//   ["L", "L", "W", "W", "L"],
//   ["L", "L", "L", "W", "L"],
//   ["W", "L", "W", "W", "W"],
//   ["W", "W", "W", "W", "W"],
//   ["W", "W", "W", "W", "W"],

const bestBridge = (grid) => {
  const firstI = new Set();
  const secondI = new Set();

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[y][x] === "L") {
        explore(grid, y, x, firstI);
        break;
      }
    }
    if (firstI.size > 0) break;
  }

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (!firstI.has(y + "," + x) && grid[y][x] === "L") {
        explore(grid, y, x, secondI);
        break;
      }
    }
    if (secondI.size > 0) break;
  }

  const queue = [];
  for (let l of firstI) {
    const [i, j] = l.split(",");
    queue.push([+i, +j, 0]);
  }

  const visited = new Set();
  while (queue.length > 0) {
    const [y, x, distance] = queue.shift();
    // console.log(y, x);

    if (secondI.has(y + "," + x)) return distance - 1;

    const deltas = [
      [y + 1, x],
      [y, x + 1],
      [y - 1, x],
      [y, x - 1],
    ];
    for (let delta of deltas) {
      const [neiY, neiX] = delta;
      const neiYX = neiY + "," + neiX;
      const boundY = 0 <= neiY && neiY < grid.length;
      const boundX = 0 <= neiX && neiX < grid[0].length;
      if (boundY && boundX && !firstI.has(neiYX) && !visited.has(neiYX)) {
        queue.push([neiY, neiX, distance + 1]);
        visited.add(neiYX);
      }
    }
  }
};

const explore = (grid, y, x, visited) => {
  const boundY = 0 <= y && y < grid.length;
  const boundX = 0 <= x && x < grid[0].length;
  const yx = y + "," + x;
  if (!boundY || !boundX || grid[y][x] === "W" || visited.has(yx)) return;
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

const grid = [
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "L", "W", "W"],
  ["W", "W", "W", "W", "L", "L", "W", "W"],
  ["W", "W", "W", "W", "L", "L", "L", "W"],
  ["W", "W", "W", "W", "W", "L", "L", "L"],
  ["L", "W", "W", "W", "W", "L", "L", "L"],
  ["L", "L", "L", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
];
console.log(bestBridge(grid)); // -> 1
// 0 6
// 1 5
// 2 6
// 1 5
// 2 4
// 4 6
// 3 7
// 2 6
// 3 7
// 1 7
// 2 6
// 2 6
// 1 7
