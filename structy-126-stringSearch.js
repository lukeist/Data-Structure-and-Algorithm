// https://sucty.net/problems/premium/sing-search

// p: arr (grid) & s
// r: boolean

const stringSearch = (grid, s) => {
  // todo

  //   const stack = [];
  const visited = new Set();

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      //   grid[y][x] === s[0] && stack.push([y, x]);
      if (explore(grid, s, y, x, visited)) return true;
    }
  }

  return false;
};

const explore = (grid, s, y, x, visited) => {
  if (s.length === 0) return true;

  const boundY = 0 <= y && y < grid.length;
  const boundX = 0 <= x && x < grid[0].length;
  const yx = y + "," + x;

  if (!boundY || !boundX) return false;

  if (grid[y][x] !== s[0]) return false;

  if (visited.has(yx)) return false;
  visited.add(yx);

  const sNew = s.slice(1);

  console.log(y, x, grid[y][x], s[0], sNew);

  if (explore(grid, sNew, y - 1, x, visited)) return true;
  if (explore(grid, sNew, y + 1, x, visited)) return true;
  if (explore(grid, sNew, y, x - 1, visited)) return true;
  if (explore(grid, sNew, y, x + 1, visited)) return true;

  return false;
};

// const grid = [
//   ["e", "y", "h", "i", "j"],
//   ["q", "x", "e", "r", "p"],
//   ["r", "o", "l", "l", "n"],
//   ["p", "r", "x", "o", "h"],
//   ["a", "a", "m", "c", "m"],
// ];
// console.log(stringSearch(grid, "hello")); // -> true

const grid = [
  ["e", "y", "h", "i", "j"],
  ["q", "x", "e", "r", "p"],
  ["r", "o", "l", "l", "n"],
  ["p", "r", "x", "o", "h"],
  ["a", "a", "m", "c", "m"],
]; // -> true
console.log(stringSearch(grid, "proxy")); // -> true

// while (stack.length > 0) {
//     const [y, x] = stack.pop();
//     s = s.slice(1);
//     if (s === 0) return true;

//     // const deltas = [[-1, 0], [1, 0], [0, -1], [0, 1]];
//     const deltas = [
//       [-1, 0],
//       [1, 0],
//       [0, -1],
//       [0, 1],
//     ];

//     for (const delta of deltas) {
//       const [m, n] = delta;
//       const neiY = y + m;
//       const neiX = x + m;
//       const nei = neiY + "," + neiX;

//       const boundY = 0 <= y && y < grid.length;
//       const boundX = 0 <= x && x < grid[0].length;

//       console.log(neiY, neiX, s);

//       boundY &&
//         boundX &&
//         !visited.has(nei) &&
//         grid[neiY][neiX] === s[0] &&
//         stack.push([neiY, neiX]) &&
//         visited.add(nei);
//     }
//   }

//   return false;
