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

var floodFill = function (image, sr, sc, newColor) {
  let y = sr;
  let x = sc;
  let imageLength = image.length;
  for (let i = 0; i < imageLength; ++i) {
    image[y][x];
  }

  // // 2 loops to find ij
  // for (let i=0; i< image.length;++i) {
  //     for (let j=0 ; j < image[i].length;++j){
  //         image[]
  //     }
  // }

  // check 4-directionally pixels (following ij) => if same color => push to an array?

  // create a function to run all item in the new array?
};

//
floodFill(
  [
    [1, 1, 1], //          01              y-1
    [1, 1, 0], // 11 => 10 11 12 =>    x-1 xy  x+1
    [1, 0, 1], //          21              y+1
  ],
  1,
  1,
  2
);
