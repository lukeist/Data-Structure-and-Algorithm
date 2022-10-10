// bfs & dfs O(row x col) O(r x c)

const bestBridge = (grid) => {
  const visited = new Set();

  loop1: for (let i = 0; i < grid.length; i++) {
    loop2: for (let j = 0; j < grid[0].length; j++) {
      if (explore(grid, i, j, visited)) break loop1;
    }
  }

  let min = Infinity;

  for (let land of visited) {
    const visitedWater = new Set();
    let distance = findDistance(grid, land, visited, visitedWater);
    min = Math.min(min, distance);
  }

  return min;
};

const explore = (grid, y, x, visited) => {
  const currentYX = y + "," + x;
  const boundY = 0 <= y && y < grid.length;
  const boundX = 0 <= x && x < grid[0].length;

  if (!boundY || !boundX) return false;
  if (grid[y][x] === "W") return false;
  if (visited.has(currentYX)) return false;
  visited.add(currentYX);

  explore(grid, y + 1, x, visited);
  explore(grid, y - 1, x, visited);
  explore(grid, y, x + 1, visited);
  explore(grid, y, x - 1, visited);

  return true;
};

const findDistance = (grid, land, visited, visitedWater) => {
  const queue = [[land, 0]];

  while (queue.length > 0) {
    const [current, distance] = queue.shift();
    const [y, x] = current.split(",");
    console.log(current, distance, grid[y][x]);

    if (!visited.has(current) && grid[y][x] === "L") return distance - 1;

    const deltas = [
      [+y + 1, +x],
      [+y - 1, +x],
      [+y, +x + 1],
      [+y, +x - 1],
    ];
    for (let delta of deltas) {
      const [neiY, neiX] = delta;
      const neiYX = neiY + "," + neiX;

      const boundY = 0 <= neiY && neiY < grid.length;
      const boundX = 0 <= neiX && neiX < grid[0].length;

      if (boundY && boundX && !visited.has(neiYX) && !visitedWater.has(neiYX)) {
        queue.push([neiYX, distance + 1]);
        visitedWater.add(neiYX);
      }
    }
  }

  return Infinity;
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

// const grid = [
//   ["W", "W", "W", "W", "W"],
//   ["W", "W", "W", "W", "W"],
//   ["L", "L", "W", "W", "L"],
//   ["W", "L", "W", "W", "L"],
//   ["W", "W", "W", "L", "L"],
//   ["W", "W", "W", "W", "W"],
// ];
// console.log(bestBridge(grid)); // -> 2
