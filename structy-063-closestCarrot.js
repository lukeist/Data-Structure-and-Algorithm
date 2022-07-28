// https://structy.net/problems/premium/closest-carrot

// p: grid, num+, num+
// r: num+ / -1

// bfs
const closestCarrot = (grid, startRow, startCol) => {
  const queue = [[startRow, startCol, 0]];
  const visited = new Set();

  while (queue.length > 0) {
    const [y, x, distance] = queue.shift();

    if (grid[y][x] === "C") return distance;

    const deltas = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    for (const delta of deltas) {
      const [m, n] = delta;
      const neighborY = y + m;
      const neighborX = x + n;

      const boundY = 0 <= neighborY && neighborY < grid.length;
      const boundX = 0 <= neighborX && neighborX < grid[0].length;

      const current = neighborY + "," + neighborX;

      if (
        boundY &&
        boundX &&
        grid[neighborY][neighborX] !== "X" &&
        !visited.has(current)
      ) {
        queue.push([neighborY, neighborX, distance + 1]);
        visited.add(current);
      }
    }
  }

  return -1;
};

const grid = [
  ["O", "O", "O", "O", "O"],
  ["O", "X", "O", "O", "O"],
  ["O", "X", "X", "O", "O"],
  ["O", "X", "C", "O", "O"],
  ["O", "X", "X", "O", "O"],
  ["C", "O", "O", "O", "O"],
];

console.log(closestCarrot(grid, 1, 2)); // -> 4

[
  ["O", "O", "5", "4", "O"],
  ["O", "X", "S", "3", "4"],
  ["O", "X", "X", "2", "3"],
  ["O", "X", "C", "1", "2"],
  ["O", "X", "X", "2", "3"],
  ["C", "O", "O", "3", "4"],
];

[
  ["O", "O", "1", "O", "O"],
  ["O", "X", "S", "O", "O"],
  ["O", "X", "X", "O", "O"],
  ["O", "X", "C", "O", "O"],
  ["O", "X", "X", "O", "O"],
  ["C", "O", "O", "O", "O"],
];

// // dfs recustion
// const closestCarrot = (grid, startRow, startCol) => {
//   const visited = new Set();
//   //   let count = 0

//   grid[startRow][startCol] = 0;

//   explore(grid, startRow, startCol, visited);

//   return grid[y][x];
// };

// const explore = (grid, y, x, visited) => {
//   const boundY = 0 <= y && y < grid.length;
//   const boundX = 0 <= x && x < grid[0].length;
//   const current = x + "," + y;

//   if (!boundY || !boundX) return false;

//   if (visited.has(current)) return false;
//   visited.add(current);

//   if (grid[y][x] === "X") return false;

//   if (grid[y][x] === "C") return grid[y];

//   explore(grid, y - 1, x, visited) && (grid[y - 1][x] = grid[y][x] + 1);
//   explore(grid, y + 1, x, visited) && (grid[y + 1][x] = grid[y][x] + 1);
//   explore(grid, y, x - 1, visited) && (grid[y][x - 1] = grid[y][x] + 1);
//   explore(grid, y, x + 1, visited) && (grid[y][x + 1] = grid[y][x] + 1);

//   console.log(grid);
//   return grid[y][x];
// };

// const s = closestCarrot(grid, y + 1, x, visited);
// const w = closestCarrot(grid, y, x - 1, visited);
// const e = closestCarrot(grid, y, x + 1, visited);
// if (
//     grid[y - 1][x] === "C" ||
//     grid[y + 1][x] === "C" ||
//     grid[y][x - 1] === "C" ||
//     grid[y][x + 1] === "C"
//   ) {
//     return grid[y][x] + 1;
//   } else {
//     return 1 + n && 1 + s && 1 + w && 1 + e;
//   }
// // bfs iteration
// const closestCarrot = (grid, startRow, startCol) => {
//   const stack = [[startRow, startCol]];

//   while (stack.length > 0) {
//     const [y, x] = stack.pop();
//     const boundY = 0 < y && y < grid.length;
//     const boundX = 0 < x && x < grid[0].length;

//     if (!boundY || !boundX) // complicated with bound

//   }
// };

// const closestCarrot = (grid, startRow, startCol) => {
//     grid[startRow][startCol] = 0;

//     const queue = [[startRow, startCol]];
//     while (queue.length > 0) {
//       const [y, x] = queue.shift();
//       const current = y + "," + x;

//       const boundY = 0 < y && y < grid.length - 1;
//       const boundX = 0 < x && x < grid[0].length - 1;
//       const boundN = y === 0;
//       const boundS = y === grid.length - 1;
//       const boundE = x === 0;
//       const boundW = x === grid[0].length - 1;
//       const cornerTL = y === 0 && x === 0;
//       const cornerTR = y === 0 && x === grid[0].length - 1;
//       const cornerBL = y === grid.length - 1 && x === 0;
//       const cornerBR = y === grid.length - 1 && x === grid[0].length - 1;

//       if (boundY && boundX) {
//         grid[y - 1][x] = grid[y][x] + 1;
//         grid[y + 1][x] = grid[y][x] + 1;
//         grid[y][x - 1] = grid[y][x] + 1;
//         grid[y][x + 1] = grid[y][x] + 1;
//       } else if (boundY && boundE) {
//         grid[y - 1][x] = grid[y][x] + 1;
//         grid[y + 1][x] = grid[y][x] + 1;
//         grid[y][x + 1] = grid[y][x] + 1;
//       } else if (boundY && boundW) {
//         grid[y - 1][x] = grid[y][x] + 1;
//         grid[y + 1][x] = grid[y][x] + 1;
//         grid[y][x - 1] = grid[y][x] + 1;
//       }
//     }
//   };
