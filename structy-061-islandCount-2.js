// p: grid
// r: +num
// e:
// const grid = [
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'W', 'W', 'L', 'W'],
//   ['W', 'W', 'L', 'L', 'W'],
//   ['L', 'W', 'W', 'L', 'L'],
//   ['L', 'L', 'W', 'W', 'W'],
// ];

// iteration O(n x m) O(n x m)
const islandCount = (grid) => {
  const visited = new Set();
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const current = i + "," + j;
      if (visited.has(current)) continue;

      if (grid[i][j] === "L") {
        visited.add(current);
        count++;
        const stack = [[i, j]];

        while (stack.length > 0) {
          const [y, x] = stack.pop();

          const deltas = [
            [y + 1, x],
            [y - 1, x],
            [y, x + 1],
            [y, x - 1],
          ];
          for (let delta of deltas) {
            const [neiY, neiX] = delta;
            const neiYX = neiY + "," + neiX;
            const boundY = 0 <= neiY && neiY < grid.length;
            const boundX = 0 <= neiX && neiX < grid.length;

            if (
              boundY &&
              boundX &&
              grid[neiY][neiX] !== "W" &&
              !visited.has(neiYX)
            ) {
              visited.add(neiYX);
              stack.push([neiY, neiX]);
            }
          }
        }
      }
    }
  }

  return count;
};

// // recursion O(m x n) O(m x n)
// const islandCount = (grid) => {
//   const visited = new Set();
//   let count = 0;

//   for (let y = 0; y < grid.length; y++) {
//     for (let x = 0; x < grid[0].length; x++) {
//       if (explore(grid, y, x, visited)) count++;
//     }
//   }

//   return count;
// };

// const explore = (grid, y, x, visited) => {
//   const current = y + ',' + x;
//   if (visited.has(current)) return false;
//   visited.add(current);

//   let boundY = 0 <= y && y < grid.length;
//   let boundX = 0 <= x && x < grid[0].length;
//   if (!boundY || !boundX) return false;

//   if (grid[y][x] === 'W') return false;

//   explore(grid, y + 1, x, visited)
//   explore(grid, y - 1, x, visited)
//   explore(grid, y, x + 1, visited)
//   explore(grid, y, x - 1, visited)

//   return true;
// }
