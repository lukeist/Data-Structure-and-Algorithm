const minimumIsland = (grid) => {
  const visited = new Set();
  let min = Infinity;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (visited.has(i + "," + j) || grid[i][j] === "W") continue;
      min = Math.min(min, explore(grid, i, j, visited));
    }
  }
  return min;
};

const explore = (grid, y, x, visited) => {
  const boundY = 0 <= y && y < grid.length;
  const boundX = 0 <= x && x < grid[0].length;
  const yx = y + "," + x;
  if (!boundY || !boundX || grid[y][x] === "W" || visited.has(yx)) return 0;
  visited.add(yx);

  const n = explore(grid, y + 1, x, visited);
  const s = explore(grid, y - 1, x, visited);
  const e = explore(grid, y, x + 1, visited);
  const w = explore(grid, y, x - 1, visited);

  return 1 + n + s + e + w;
};
