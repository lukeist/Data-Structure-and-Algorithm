// p: grid
// r: num
//  ["W", "W", "W", "L", "L"],
//  ["L", "L", "W", "W", "L"],
//  ["L", "L", "L", "W", "L"],
//  ["W", "L", "W", "W", "W"],
//  ["W", "W", "W", "W", "W"],
//  ["W", "W", "W", "W", "W"],

const bestBridge = (grid) => {
  const i1 = new Set();
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "L") {
        explore(grid, i, j, i1);
        break;
      }
    }
    if (i1.size > 0) break;
  }

  const queue = [];
  for (let i of i1) {
    const [a, b] = i.split(",");
    queue.push([+a, +b, 0]);
  }

  const visited = new Set();
  while (queue.length > 0) {
    const [y, x, d] = queue.shift();
    if (!i1.has(y + "," + x) && grid[y][x] === "L") return d - 1;

    const deltas = [
      [y + 1, x],
      [y - 1, x],
      [y, x + 1],
      [y, x - 1],
    ];
    for (let delta of deltas) {
      const [neiY, neiX] = delta;
      const neiYX = neiY + "," + neiX;
      if (inbound(grid, neiY, neiX) && !visited.has(neiYX) && !i1.has(neiYX)) {
        visited.add(neiYX);
        queue.push([neiY, neiX, d + 1]);
      }
    }
  }
};

const explore = (grid, y, x, i) => {
  const yx = y + "," + x;
  if (!inbound(grid, y, x) || grid[y][x] === "W" || i.has(yx)) return;
  i.add(yx);

  explore(grid, y + 1, x, i);
  explore(grid, y - 1, x, i);
  explore(grid, y, x + 1, i);
  explore(grid, y, x - 1, i);
};

const inbound = (grid, neiY, neiX) => {
  const boundY = 0 <= neiY && neiY < grid.length;
  const boundX = 0 <= neiX && neiX < grid[0].length;
  return boundY && boundX;
};

const grid = [
  ["W", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "L"],
  ["L", "L", "L", "W", "L"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
];
console.log(bestBridge(grid)); // -> 1
