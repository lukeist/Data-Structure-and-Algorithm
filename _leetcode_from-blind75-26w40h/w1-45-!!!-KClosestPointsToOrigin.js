/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

// p: array, number;
// r: array;

// heap
//                         18
//                      /      \
//                   26          20
//                /    \       /     \
//               1     12     13     16
//
//
//
//  0    1   2  3  4    5   6
// [18, 26, 20, 1, 12, 13, 16]
//
//
// [1, 12, 13, 16, 18, 20, 26]
//
//

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

// p: array, number;
// r: array;

// heap
//                         18
//                      /      \
//                   26          20
//                /    \       /     \
//               1     12     13     16
//
//
//
//  0    1   2  3  4    5   6
// [18, 26, 20, 1, 12, 13, 16]
//
//
// [1, 12, 13, 16, 18, 20, 26]
//
//

// O(nlogk)
const minHeapify = (array, n, i) => {
  let left = i * 2 + 1;
  let right = i * 2 + 2;
  let smallest = i;
  let arraySmallest =
    Math.pow(array[smallest][0], 2) + Math.pow(array[smallest][1], 2);

  if (left < n) {
    let arrayLeft = Math.pow(array[left][0], 2) + Math.pow(array[left][1], 2);
    if (arraySmallest > arrayLeft) {
      smallest = left;
      arraySmallest = arrayLeft;
    }
  }

  if (right < n) {
    let arrayRight =
      Math.pow(array[right][0], 2) + Math.pow(array[right][1], 2);
    if (arraySmallest > arrayRight) {
      smallest = right;
    }
  }

  if (smallest !== i) {
    [array[i], array[smallest]] = [array[smallest], array[i]];
    minHeapify(array, n, smallest);
  }
};

const buildMinHeap = (array) => {
  let n = array.length;
  let leaves = Math.floor(n / 2);

  for (let i = leaves; i >= 0; i--) {
    minHeapify(array, n, i);
  }
};

var kClosest = function (points, k) {
  const result = [];
  const n = points.length;
  buildMinHeap(points);

  for (let i = n - 1; i >= 0; i--) {
    ///////////////// i >= 0 is SPECIFIC FOR THIS PROBLEM because of this example [[0,1],[1,0]], k = 2
    ///////////////// i > 0 is normally used because we want to keep the first untouched
    [points[0], points[i]] = [points[i], points[0]];

    /////////////////// SPECIFIC FOR THIS PROBLEM
    // Heap sort is indeed a more efficient approach for this problem, especially when k is much smaller than the total number of points.
    // The reason for using heap sort is that it allows you to maintain a priority queue efficiently, ensuring that you only keep track of the k smallest distances
    // without the need to sort the entire array.
    result.push(points[i]);
    k--;
    if (k === 0) break;
    ///////////////////

    minHeapify(points, i, 0);
  }

  return result;
};

// NOT GOOD: O(nlogn) =>> because of minHeaping the whole array points
// const minHeapify = (array, n, i) => {
//   let left = i * 2 + 1;
//   let right = i * 2 + 2;
//   let smallest = i;
//   let arraySmallest =
//     Math.pow(array[smallest][0], 2) + Math.pow(array[smallest][1], 2);

//   if (left < n) {
//     let arrayLeft = Math.pow(array[left][0], 2) + Math.pow(array[left][1], 2);
//     if (arraySmallest > arrayLeft) {
//       smallest = left;
//       arraySmallest = arrayLeft;
//     }
//   }

//   if (right < n) {
//     let arrayRight =
//       Math.pow(array[right][0], 2) + Math.pow(array[right][1], 2);
//     if (arraySmallest > arrayRight) {
//       smallest = right;
//     }
//   }

//   if (smallest !== i) {
//     [array[i], array[smallest]] = [array[smallest], array[i]];
//     minHeapify(array, n, smallest);
//   }
// };

// const buildMinHeap = (array) => {
//   let n = array.length;
//   let leaves = Math.floor(n / 2);

//   for (let i = leaves; i >= 0; i--) {
//     minHeapify(array, n, i);
//   }
// };

// var kClosest = function (points, k) {
//   const n = points.length;
//   buildMinHeap(points);

//   for (let i = n - 1; i > 0; i--) {
//     [points[0], points[i]] = [points[i], points[0]];
//     minHeapify(points, i, 0);
//   }

//   const result = [];
//   while (k > 0) {
//     result.push(points.pop());
//     k--;
//   }

//   return result;
// };

// O(nlogn) O(n)
// var kClosest = function(points, k) {
//     points.sort((a, b) => (a[0]*a[0] + a[1]*a[1]) - (b[0]*b[0] + b[1]*b[1]));
//     return points.slice(0, k)
// };
