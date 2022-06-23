// https://leetcode.com/problems/k-closest-points-to-origin/

// p: array of ints && int k
// r: array of k arrays

// e:

// Input: points = [[1,3],[-2,2]], k = 1
// Output: [[-2,2]]
// Explanation:
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].

var kClosest = function (points, k) {
  // [[],[],[]]
  // calculate the distance between each point to ori

  for (let i = 0; i < points.length; i++) {
    let point = points[i];
    let distance = Math.sqrt(point[0] ** 2 + point[1] ** 2);

    points[i] = [distance, point];
  }

  // compare them to get the 1st min, 2nd min .... kth min
  points.sort((a, b) => a[0] - b[0]);
  // return [] of k maxes

  console.log(points.slice(0, k).map((e) => e[1]));
  return points.slice(0, k).map((e) => e[1]);
};

// kClosest(
//   [
//     [1, 3],
//     [-2, 2],
//   ],
//   1
// );

kClosest(
  [
    [3, 3],
    [5, -1],
    [-2, 4],
  ],
  2
);

// kClosest([
//   [0, 1],
//   [1, 0],
// ]);
