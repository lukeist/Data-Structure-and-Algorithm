// p: grid, str
// r: boolean;
// [
//   ['e', 'y', 'h', 'i', 'j'],
//   ['q', 'x', 'e', 'r', 'p'],
//   ['r', 'o', 'l', 'l', 'n'],
//   ['p', 'r', 'x', 'o', 'h'],
//   ['a', 'a', 'm', 'c', 'm']
// ];
// hello => true
const stringSearch = (grid, s) => {
  // const visited = new Set();

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (s[0] === grid[i][j] && explore(grid, i, j, s, 0)) return true;
    }
  }

  return false;
};

const explore = (grid, y, x, s, i, visited = new Set()) => {
  const boundY = 0 <= y && y < grid.length;
  const boundX = 0 <= x && x < grid[0].length;
  if (!boundY || !boundX) return false;
  if (s[i] !== grid[y][x]) return false;
  const yx = y + "," + x;
  if (visited.has(yx)) return false;
  visited.add(yx);

  if (i === s.length - 1 && s[i] === grid[y][x]) return true;
  if (i === s.length) return false;

  const no = explore(grid, y + 1, x, s, i + 1, visited);
  const so = explore(grid, y - 1, x, s, i + 1, visited);
  const ea = explore(grid, y, x + 1, s, i + 1, visited);
  const we = explore(grid, y, x - 1, s, i + 1, visited);

  return no || so || ea || we;
};
