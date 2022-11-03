// p: grid, str;
// r: boolean;

// const grid = [
//   ['e', 'y', 'h', 'i', 'j'],
//   ['q', 'x', 'e', 'r', 'p'],
//   ['r', 'o', 'l', 'l', 'n'],
//   ['p', 'r', 'x', 'o', 'h'],
//   ['a', 'a', 'm', 'c', 'm']
// ];
// stringSearch(grid, 'hello'); // -> true

const stringSearch = (grid, s) => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (explore(grid, i, j, s, 0, new Set())) return true;
    }
  }

  return false;
};

const explore = (grid, y, x, s, i, visited) => {
  console.log(visited);

  const boundY = 0 <= y && y < grid.length;
  const boundX = 0 <= x && x < grid[0].length;
  if (!boundY || !boundX) return false;

  if (grid[y][x] !== s[i]) return false;

  const yx = y + "," + x;
  if (visited.has(yx)) return false;
  visited.add(yx);

  if (i === s.length - 1) return true;

  const no = explore(grid, y + 1, x, s, i + 1, visited);
  const so = explore(grid, y - 1, x, s, i + 1, visited);
  const ea = explore(grid, y, x + 1, s, i + 1, visited);
  const we = explore(grid, y, x - 1, s, i + 1, visited);

  if (no || so || ea || we) return true;

  return false;
};

// const grid = [
//   ["e", "y", "h", "i", "j"],
//   ["q", "x", "e", "r", "p"],
//   ["r", "o", "l", "l", "n"],
//   ["p", "r", "x", "o", "h"],
//   ["a", "a", "m", "c", "m"],
// ];

// console.log(stringSearch(grid, "proxy")); // true

const grid = [
  ["q", "w", "h", "i", "j"],
  ["q", "e", "r", "o", "p"],
  ["h", "y", "t", "x", "z"],
  ["k", "o", "m", "o", "p"],
];
console.log(stringSearch(grid, "qwerty")); // -> true
