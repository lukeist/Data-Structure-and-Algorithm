/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

// p: grid, num, num, num
// r: grid
// e:
//  Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
// [1,1,1],
// [1,1,0],
// [1,0,1]

// [[0,0,0], 1 0 2
//  [0,0,0]]

var floodFill = function (image, sr, sc, color) {
  const visited = new Set();
  _floodFill(image, sr, sc, color, image[sr][sc], visited);
  return image;
};

const _floodFill = (grid, y, x, c, o, visited) => {
  const boundY = 0 <= y && y < grid.length;
  const boundX = 0 <= x && x < grid[0].length;
  const yx = y + "," + x;

  if (!boundY || !boundX || visited.has(yx) || grid[y][x] !== o) return;
  visited.add(yx);

  grid[y][x] = c;

  _floodFill(grid, y + 1, x, c, o, visited);
  _floodFill(grid, y - 1, x, c, o, visited);
  _floodFill(grid, y, x + 1, c, o, visited);
  _floodFill(grid, y, x - 1, c, o, visited);
};

// var floodFill = function(image, sr, sc, color) {
//     const visited = new Set([`${sr},${sc}`]);
//     const stack = [[sr, sc]];
//     const c = image[sr][sc];

//     while (stack.length > 0) {
//         const [y, x] = stack.pop();
//         image[y][x] = color;

//         const deltas = [[y + 1, x], [y - 1, x], [y, x + 1], [y, x - 1]]
//         for (let d of deltas) {
//             const [neiY, neiX] = d;
//             const neiYX = neiY + ',' + neiX
//             const boundY = 0 <= neiY && neiY < image.length;
//             const boundX = 0 <= neiX && neiX < image[0].length;

//             if (boundY && boundX && !visited.has(neiYX) && image[neiY][neiX] === c) {
//                 stack.push([neiY, neiX]);
//                 visited.add(neiYX);
//             }
//         }
//     }

//     return image;
// };
