/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

// p: array; num int;
// r: array;
// e: [[3,3],[5,-1],[-2,4]]
//       18    26     20
// if k is a small number (~ 2 || 3 in a big array)
//                           0  1  2  3 4  5
//                          [18,26,20,7,10,8]
//                                  18
//                                /    \
//                              26 la    20
//                           /   \      /
//                          7     10   8

//                          [26,20,18,10,8,7]
//                                  26
//                                /    \
//                              20       18
//                           /   \      /
//                          10    8    7

//                          [7,20,18,10,8,26]
//                                  7
//                                /    \
//                              20       18
//                           /   \      /
//                          10    8    26

//
//
//

const buildMinHeap = (arr) => {
  const n = arr.length;
  const leaves = Math.floor(n / 2);
  for (let i = leaves - 1; i >= 0; i--) {
    minHeapify(arr, n, i);
  }
};

const minHeapify = (arr, n, i) => {
  const l = i * 2 + 1;
  const r = i * 2 + 2;
  let smallest = i;
  let arrSmallest =
    arr[smallest][0] * arr[smallest][0] + arr[smallest][1] * arr[smallest][1];

  if (l < n) {
    let arrL = arr[l][0] * arr[l][0] + arr[l][1] * arr[l][1];
    if (arrL < arrSmallest) {
      arrSmallest = arrL;
      smallest = l;
    }
  }

  if (r < n) {
    let arrR = arr[r][0] * arr[r][0] + arr[r][1] * arr[r][1];
    if (arrR < arrSmallest) {
      smallest = r;
    }
  }

  if (smallest !== i) {
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    minHeapify(arr, n, smallest);
  }
};

var kClosest = function (points, k) {
  const n = points.length;
  buildMinHeap(points);
  const result = [];

  for (let i = n - 1; i >= 0; i--) {
    [points[i], points[0]] = [points[0], points[i]];
    result.push(points[i]);
    k--;
    if (k === 0) return result;
    minHeapify(points, i, 0);
  }
};
//
//
//
//
//
// const minHeapify = (arr, n, i) => {
//     const l = i * 2 + 1;
//     const r = i * 2 + 2;
//     let smallest = i;
//     let arrSmallest = arr[smallest][0] * arr[smallest][0] + arr[smallest][1] * arr[smallest][1];

//     if (l < n) {
//         let arrL = arr[l][0] * arr[l][0] + arr[l][1] * arr[l][1];
//         if (arrSmallest > arrL) {
//             smallest = l;
//             arrSmallest = arrL;
//         };
//     }

//     if (r < n) {
//         let arrR = arr[r][0] * arr[r][0] + arr[r][1] * arr[r][1];
//         if (arrSmallest > arrR) smallest = r;
//     }

//     if (smallest !== i) {
//         [arr[i], arr[smallest]] = [arr[smallest], arr[i]]
//         minHeapify(arr, n, smallest);
//     }
// }

// const buildMinHeap = (arr) => {
//     const leaves = Math.floor(arr.length / 2)
//     for (let i = leaves - 1; i >= 0 ; i--) {
//         minHeapify(arr, arr.length, i);
//     }
// }

// var kClosest = function(points, k) {
//     const n = points.length;
//     const result = [];

//     buildMinHeap(points);

//     for (let i = n - 1; i >= 0; i--) {
//         [points[i], points[0]] = [points[0], points[i]];
//         result.push(points[i]);
//         k--;
//         if (k === 0) return result;
//         minHeapify(points, i, 0);
//     }
// };

// failed with [[0,1],[1,0]] k = 2

// if k is a big number (~ points.length)
// var kClosest = function(points, k) {
//     return points.sort((a, b) => (a[0] * a[0] + a[1] * a[1]) - (b[0] * b[0] + b[1] * b[1])).slice(0, k);
// };
