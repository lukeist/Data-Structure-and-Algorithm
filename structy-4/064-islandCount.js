// p: grid;
// r: number;
// e:
//  [
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'W', 'W', 'L', 'W'],
//   ['W', 'W', 'L', 'L', 'W'],
//   ['L', 'W', 'W', 'L', 'L'],
//   ['L', 'L', 'W', 'W', 'W'],
// ];
// => 3

const islandCount = (grid) => {
  const visited = new Set();
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!!explore(grid, i, j, visited)) count++;
    }
  }

  return count;
};

const explore = (grid, y, x, visited) => {
  const boundY = 0 <= y && y < grid.length;
  const boundX = 0 <= x && x < grid[0].length;
  const yx = y + "," + x;
  if (!boundY || !boundX || grid[y][x] === "W" || visited.has(yx)) return false;
  visited.add(yx);

  explore(grid, y + 1, x, visited);
  explore(grid, y - 1, x, visited);
  explore(grid, y, x + 1, visited);
  explore(grid, y, x - 1, visited);

  return true;
};
