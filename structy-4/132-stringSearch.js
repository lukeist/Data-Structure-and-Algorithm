// p: grid, string;
// r: boolean
// e:
// ['e', 'y', 'h', 'i', 'j'],
// ['q', 'x', 'e', 'r', 'p'],
// ['r', 'o', 'l', 'l', 'n'],
// ['p', 'r', 'x', 'o', 'h'],
// ['a', 'a', 'm', 'c', 'm']
// hello

// const grid = [
//   ['a', 'b', 'a'],
//   ['t', 'x', 'x'],
//   ['x', 'x', 'x'],
// ];
// stringSearch(grid, 'abat'); // -> true

const stringSearch = (grid, s) => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!!explore(grid, i, j, s, 0, new Set())) return true;
    }
  }
  return false;
};

const explore = (grid, y, x, s, i, visited) => {
  const boundY = 0 <= y && y < grid.length;
  const boundX = 0 <= x && x < grid[0].length;
  const yx = y + "," + x;
  if (
    !boundY ||
    !boundX ||
    visited.has(yx) ||
    i >= s.length ||
    grid[y][x] !== s[i]
  )
    return false;
  visited.add(yx);
  if (i === s.length - 1 && s[i] === grid[y][x]) return true;

  const no = explore(grid, y + 1, x, s, i + 1, visited);
  const so = explore(grid, y - 1, x, s, i + 1, visited);
  const ea = explore(grid, y, x + 1, s, i + 1, visited);
  const we = explore(grid, y, x - 1, s, i + 1, visited);

  return no || so || ea || we;
};
