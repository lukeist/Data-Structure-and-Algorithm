// https://leetcode.com/problems/flood-fill/

// p: 1 array axb & 3 ints
// r: array axb
// e:
// Example 1:
// Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]
// Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

// Example 2:
// Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 2
// Output: [[2,2,2],[2,2,2]]

// Recursion
// Runtime: 80 ms, faster than 83.53% of JavaScript online submissions for Flood Fill.
// Memory Usage: 43.9 MB, less than 89.34% of JavaScript online submissions for Flood Fill.
var floodFill = function (image, y, x, newColor) {
  const redPixel = image[y][x];
  if (redPixel === newColor) {
    console.log(image);
    return image;
  }
  //   image[y].splice(x, 1, null);
  image[y][x] = newColor;
  x - 1 > -1 &&
    redPixel === image[y][x - 1] &&
    floodFill(image, y, x - 1, newColor);
  x + 1 < image[y].length &&
    redPixel === image[y][x + 1] &&
    floodFill(image, y, x + 1, newColor);
  y - 1 > -1 &&
    redPixel === image[y - 1][x] &&
    floodFill(image, y - 1, x, newColor);
  y + 1 < image.length &&
    redPixel === image[y + 1][x] &&
    floodFill(image, y + 1, x, newColor);

  console.log(image);
  return image;
};

// // BFS NO MAP
// // Runtime: 77 ms, faster than 87.84% of JavaScript online submissions for Flood Fill.
// // Memory Usage: 44.5 MB, less than 32.41% of JavaScript online submissions for Flood Fill.
// var floodFill = function (image, sr, sc, newColor) {
//   const redPixel = image[sr][sc];
//   if (redPixel === newColor) return image;
//   const queue = [[sr, sc]];

//   while (queue.length > 0) {
//     const [y, x] = queue.shift();
//     image[y][x] = newColor;

//     y - 1 > -1 && redPixel === image[y - 1][x] && queue.push([y - 1, x]);
//     y + 1 < image.length &&
//       redPixel === image[y + 1][x] &&
//       queue.push([y + 1, x]);
//     x - 1 > -1 && redPixel === image[y][x - 1] && queue.push([y, x - 1]);
//     x + 1 < image[y].length &&
//       redPixel === image[y][x + 1] &&
//       queue.push([y, x + 1]);
//   }

//   console.log(image);
//   return image;
// };

floodFill(
  [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  1,
  1,
  2
);

floodFill(
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  0,
  0,
  2
);
floodFill(
  [
    [0, 0, 0],
    [0, 1, 1],
  ],
  1,
  1,
  1
);
// floodFill(
//   [
//     [1, 1, 1], //          01              y-1
//     [1, 1, 0], // 11 => 10 11 12 =>    x-1 xy  x+1
//     [1, 0, 1], //          21              y+1
//   ],
//   1,
//   1,
//   2
// );
////////////////////////////////////////////////////
// // BFS
// // Runtime: 89 ms, faster than 67.84% of JavaScript online submissions for Flood Fill.
// // Memory Usage: 44.4 MB, less than 39.57% of JavaScript online submissions for Flood Fill.
// var floodFill = function (image, sr, sc, newColor &&
//   const redPixel = image[sr][sc];
//   const queue = [[sr, sc]];

//   while (queue.length > 0 &&
//     const current = queue.shift();
//     const y = current[0];
//     const x = current[1];
//     image[y].splice(x, 1, null);

//     y - 1 > -1 && redPixel === image[y - 1][x] && queue.push([y - 1, x]);
//     y + 1 < image.length &&
//       redPixel === image[y + 1][x] &&
//       queue.push([y + 1, x]);
//     x - 1 > -1 && redPixel === image[y][x - 1] && queue.push([y, x - 1]);
//     x + 1 < image[y].length &&
//       redPixel === image[y][x + 1] &&
//       queue.push([y, x + 1]);
//   }
//   console.log(image.map((arr) => arr.map((n) => (n === null ? newColor : n))));

//   return image.map((arr) => arr.map((n) => (n === null ? newColor : n)));
// };

// // 2 loops to find ij
// for (let i=0; i< image.length;++i &&
//     for (let j=0 ; j < image[i].length;++j){
//         image[]
//     }
// }

// check 4-directionally pixels (following ij) => if same color => push to an array?

// create a function to run all item in the new array?
//

// // DFS
// // Runtime: 99 ms, faster than 52.55% of JavaScript online submissions for Flood Fill.
// // Memory Usage: 44.4 MB, less than 39.57% of JavaScript online submissions for Flood Fill.
// var floodFill = function (image, sr, sc, newColor &&
//     const stack = [[sr, sc]];
//     const redPixel = image[sr][sc];

//     while (stack.length > 0 &&
//       const current = stack.pop();
//       const y = current[0];
//       const x = current[1];
//       image[y].splice(x, 1, null);

//       x - 1 > -1 && redPixel === image[y][x - 1] && stack.push([y, x - 1]);
//       x + 1 < image[y].length &&
//         redPixel === image[y][x + 1] &&
//         stack.push([y, x + 1]);
//       y - 1 > -1 && redPixel === image[y - 1][x] && stack.push([y - 1, x]);
//       y + 1 < image.length &&
//         redPixel === image[y + 1][x] &&
//         stack.push([y + 1, x]);
//     }
//     console.log(image.map((arr) => arr.map((n) => (n === null ? newColor : n))));
//     return image.map((arr) => arr.map((n) => (n === null ? newColor : n)));
//   };

// // Recursion
// // Runtime: 91 ms, faster than 64.88% of JavaScript online submissions for Flood Fill.
// // Memory Usage: 43.8 MB, less than 89.34% of JavaScript online submissions for Flood Fill.
// var floodFill = function (image, y, x, newColor) {
//     const redPixel = image[y][x];
//     //   image[y].splice(x, 1, null);
//     image[y][x] = null;
//     console.log(image);
//     x - 1 > -1 &&
//       redPixel === image[y][x - 1] &&
//       floodFill(image, y, x - 1, newColor);
//     x + 1 < image[y].length &&
//       redPixel === image[y][x + 1] &&
//       floodFill(image, y, x + 1, newColor);
//     y - 1 > -1 &&
//       redPixel === image[y - 1][x] &&
//       floodFill(image, y - 1, x, newColor);
//     y + 1 < image.length &&
//       redPixel === image[y + 1][x] &&
//       floodFill(image, y + 1, x, newColor);

//     console.log(image.map((arr) => arr.map((n) => (n === null ? newColor : n))));
//     return image.map((arr) => arr.map((n) => (n === null ? newColor : n)));
//   };
