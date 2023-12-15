/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

// p: grid, number, number, number
// r: grid
// e: 1, 1, 2
// [[1,1,1],
//  [1,1,0],
//  [1,0,1]]
// =>
// [[2,2,2],
//  [2,2,0],
//  [2,0,1]]

// 1, 0, 2
// [[0,0,0],
//  [1,0,0]]

var floodFill = function (image, sr, sc, color) {
  const original = image[sr][sc];
  const visited = new Set();

  const explore = (y, x) => {
    const boundY = 0 <= y && y < image.length;
    const boundX = 0 <= x && x < image[0].length;
    const yx = y + "," + x;
    if (!boundY || !boundX || visited.has(yx) || image[y][x] !== original)
      return;
    visited.add(yx);

    image[y][x] = color;

    explore(y + 1, x);
    explore(y - 1, x);
    explore(y, x + 1);
    explore(y, x - 1);
  };
  explore(sr, sc);

  return image;
};

// var floodFill = function (image, sr, sc, color) {
//   const visited = new Set();
//   const original = image[sr][sc];

//   explore(image, sr, sc, color, original, visited);

//   return image;
// };

// const explore = (grid, y, x, color, original, visited) => {
//   const boundY = 0 <= y && y < grid.length;
//   const boundX = 0 <= x && x < grid[0].length;
//   const yx = y + "," + x;
//   if (!boundY || !boundX || visited.has(yx) || grid[y][x] !== original) return;
//   visited.add(yx);
//   grid[y][x] = color;

//   explore(grid, y + 1, x, color, original, visited);
//   explore(grid, y - 1, x, color, original, visited);
//   explore(grid, y, x + 1, color, original, visited);
//   explore(grid, y, x - 1, color, original, visited);
// };
