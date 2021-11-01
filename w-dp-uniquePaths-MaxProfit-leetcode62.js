// 1. objective func: f(n) return max profit
// 2. base cases:
// f([1,1]) = 1
// f([2,2]) = 2
// 3. recurrent func:
// f(y,x) = f[y][x] + Math.max(f(y-1,x) + f(x-1,y))

// 4. order:
// bottom up
// 5. result: f(y-1,x-1)

[
  [0, 2, 4, 5],
  [3, 4, 5, 6],
  [7, 11, 13, 13],
];
////////////////////////////////////// FIND MAX PROFIT
const traceMaxProfit = (grid) => {
  // get max profit
  for (y = 0; y < grid.length; y++) {
    for (x = 0; x < grid[y].length; x++) {
      grid[y][x] === "S" && (grid[y][x] = 0);
      grid[y][x] === "E" && (grid[y][x] = 0);

      if (grid[y - 1] === undefined && grid[y][x - 1] === undefined) {
        continue;
      } else if (grid[y - 1] === undefined) {
        grid[y][x] += grid[y][x - 1];
      } else if (grid[y][x - 1] === undefined) {
        grid[y][x] += grid[y - 1][x];
      } else {
        grid[y][x] += Math.max(grid[y - 1][x], grid[y][x - 1]);
      }
    }
  }

  // trace back to find path

  const stack = [[grid.length - 1, grid[0].length - 1]];

  while (stack.length > 0) {
    console.log(stack);

    let [y, x] = stack.pop();

    if (y === 0 && x === 0) {
      grid[y][x] = "x";
      break;
    }

    if (y === 0) {
      grid[y][x] = "x";
      stack.push([y, x - 1]);
      continue;
    }

    if (x === 0) {
      grid[y][x] = "x";
      stack.push([y - 1, x]);
      continue;
    }

    if (y > 0 && x > 0) {
      grid[y - 1][x] > grid[y][x - 1] &&
        (grid[y - 1][x] = "x") &&
        stack.push([y - 1, x]);
      grid[y - 1][x] < grid[y][x - 1] &&
        (grid[y][x - 1] = "x") &&
        stack.push([y, x - 1]);
      continue;
    }
  }

  console.log(stack);
  console.log(grid);
  //   for (y = grid.length - 1; y >= 0; y--) {
  //     for (x = grid[y].length - 1; x >= 0; x--) {
  //       if (y === 0 && x === 0) {
  //         grid[y][x] = "x";
  //       } else if (y === 0) {
  //         // grid[y][x] = "x";
  //         // continue;
  //       } else if (x === 0) {
  //         // grid[y][x] = "x";
  //         // continue;
  //       } else {
  //         grid[y - 1][x] > grid[y][x - 1] && (grid[y - 1][x] = "x");
  //         grid[y - 1][x] < grid[y][x - 1] && (grid[y][x - 1] = "x");
  //       }
  //     }
  //   }

  console.log(grid);
  return grid;
};

// const gridT = [
//   ["S", 2, 2, 1],
//   [3, 1, 1, 1],
//   [4, 4, 2, "E"],
// ];
const gridT = [
  ["S", 2, 2, 1],
  [3, 1, 1, 1],
  [4, 4, 2, "E"],
];

traceMaxProfit(gridT);
//
// ////////////////////////////////////// FIND MAX PROFIT
// const maxProfit = (grid) => {
//   for (y = 0; y < grid.length; y++) {
//     for (x = 0; x < grid[y].length; x++) {
//       grid[y][x] === "S" && (grid[y][x] = 0);
//       grid[y][x] === "E" && (grid[y][x] = 0);

//       if (grid[y - 1] === undefined && grid[y][x - 1] === undefined) {
//         continue;
//       } else if (grid[y - 1] === undefined) {
//         grid[y][x] += grid[y][x - 1];
//       } else if (grid[y][x - 1] === undefined) {
//         grid[y][x] += grid[y - 1][x];
//         console.log("222");
//       } else {
//         grid[y][x] += Math.max(grid[y - 1][x], grid[y][x - 1]);
//       }
//     }
//   }
//   console.log(grid[y - 1][x - 1]);
//   return grid[y - 1][x - 1];
// };

// const grid = [
//   ["S", 2, 2, 1],
//   [3, 1, 1, 1],
//   [4, 4, 2, "E"],
// ];
// maxProfit(grid);
