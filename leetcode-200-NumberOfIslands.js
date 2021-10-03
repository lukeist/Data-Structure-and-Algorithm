// /**
//  * @param {character[][]} grid
//  * @return {number}
//  */

// p: array: m x n 2d binary: string 1 land & 0 water
// r: num => f(n) numbers of islands (numbers of groups of '1')
// e:
// base cases:
// [['0']] => 0
// [['1']] => 1
// 1 1
// 1 1

// 1 1

// f(0,0) => 0
// f(1,1) => 0 1

// f(y,x) = f(y+1,x) && f(y,x+1)

// Input: grid = [
//     ["1","1","1","1","0"],
//     ["1","1","0","1","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","0","0"]
//   ]
//   Output: 1

//   Input: grid = [
//     ["1","1","0","0","0"],
//     ["1","1","0","0","0"],
//     ["0","0","1","0","0"],
//     ["0","0","0","1","1"]
//   ]
//   Output: 3

var numIslands = function (grid) {
  //
  const setOfGrid = new Set();
  //   for (let i = 1; i < grid.length; i++) {

  let count = 0;
  let stack = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1" && !setOfGrid.has(`${i},${j}`)) {
        stack.push([i, j]);
        count++;
      }
      //   console.log(i, j, setOfGrid.has(`${i},${j}`));

      while (stack.length > 0) {
        console.log(
          stack
          //   setOfGrid
          //   //  i, j, setOfGrid.has(`${i},${j}`)
        );
        const [y, x] = stack.pop();

        if (!setOfGrid.has(`${y},${x}`)) {
          setOfGrid.add(`${y},${x}`);

          y + 1 < grid.length &&
            grid[y + 1][x] === "1" &&
            stack.push([y + 1, x]);
          x + 1 < grid[0].length &&
            grid[y][x + 1] === "1" &&
            stack.push([y, x + 1]);

          y - 1 >= 0 && grid[y - 1][x] === "1" && stack.push([y - 1, x]);
          x - 1 >= 0 && grid[y][x - 1] === "1" && stack.push([y, x - 1]);
        }
      }
    }
  }

  console.log(count);
  return count;
};

// numIslands([
//   ["1", "1", "0", "0", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "1", "0", "0"],
//   ["0", "0", "0", "1", "1"],
// ]);

// numIslands([
//   ["1", "1", "1", "1", "0"],
//   ["1", "1", "0", "1", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "0", "0", "0"],
// ]);

numIslands([
  ["1", "1", "1"],
  ["0", "1", "0"],
  ["1", "1", "1"],
]);
