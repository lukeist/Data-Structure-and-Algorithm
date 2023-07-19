/**
 * @param {character[][]} grid
 * @return {number}
 */

// p: grid;
// r: number;
// e:
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
//
var numIslands = function (grid) {
  const visited = new Set();
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!visited.has(i + "," + j) && grid[i][j] === "1") count++;
      explore(grid, i, j, visited);
    }
  }

  return count;
};

const explore = (grid, y, x, visited) => {
  const yx = y + "," + x;
  const boundY = 0 <= y && y < grid.length;
  const boundX = 0 <= x && x < grid[0].length;
  if (!boundY || !boundX || visited.has(yx) || grid[y][x] === "0") return;
  visited.add(yx);

  explore(grid, y + 1, x, visited);
  explore(grid, y - 1, x, visited);
  explore(grid, y, x + 1, visited);
  explore(grid, y, x - 1, visited);
};
