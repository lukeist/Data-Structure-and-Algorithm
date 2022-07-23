// https://structy.net/problems/island-count

// p: grid
// r: num

// alvin's nested for loop + dfs
const islandCount = (grid) => {
  const m = grid.length;
  const n = grid[0].length;

  const visited = new Set();
  let count = 0;

  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (explore(grid, y, x, visited)) {
        count++;
      }
    }
  }

  return count;
};

const explore = (grid, y, x, visited) => {
  const boundY = 0 <= y && y < grid.length;
  const boundX = 0 <= x && x < grid[0].length;
  if (!boundY || !boundX) return false;

  if (grid[y][x] === "W") return false;

  const currentNode = y + "," + x;
  if (visited.has(currentNode)) return false;
  visited.add(currentNode);

  explore(grid, y - 1, x, visited);
  explore(grid, y + 1, x, visited);
  explore(grid, y, x - 1, visited);
  explore(grid, y, x + 1, visited);

  return true;
};

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

console.log(islandCount(grid)); // -> 3

// working solution but the code is bad:
// const islandCount = (grid) => {
//     const m = grid.length;
//     const n = grid[0].length;

//     const visited = new Set();
//     let count = 0;

//     for (let y = 0; y < m; y++) {
//       for (let x = 0; x < m; x++) {
//         if (grid[y][x] === "L") {
//           if (!visited.has(`${y}, ${x}`)) {
//             visited.add(`${y}, ${x}`);
//             const stack = [[y, x]];

//             count++;

//             while (stack.length > 0) {
//               console.log(stack);

//               const [i, j] = stack.pop();

//               !visited.has(`${i + 1}, ${j}`) &&
//                 i + 1 < m &&
//                 grid[i + 1][j] === "L" &&
//                 visited.add(`${i + 1}, ${j}`) &&
//                 stack.push([i + 1, j]);

//               !visited.has(`${i}, ${j - 1}`) &&
//                 j - 1 > 0 &&
//                 grid[i][j - 1] === "L" &&
//                 visited.add(`${i}, ${j - 1}`) &&
//                 stack.push([i, j - 1]);

//               !visited.has(`${i}, ${j + 1}`) &&
//                 j + 1 < n &&
//                 grid[i][j + 1] === "L" &&
//                 visited.add(`${i}, ${j + 1}`) &&
//                 stack.push([i, j + 1]);
//             }

//             console.log(visited);
//           } else {
//             continue;
//           }
//         }
//       }
//     }

//     return count;
//   };
