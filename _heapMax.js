// // Original Array: [4, 10, 3, 5, 1]
// //                  4
// //               /    \
// //              10     3
// //             / \
// //            5   1

// // running [10, 4, 3, 5, 1]
// //          M      r
// //                  10
// //               /    \
// //              4     3
// //             / \
// //            5   1

// // Max Heap:
// //                 10
// //               /    \
// //              5      4
// //             / \
// //            3   1

// original  [null, 0, 5, 20, 6, 12, 65, 1, 4, 9, 3, 89, 22, 25, 28, 10];
//                         L
//                         i  l  r
// running   [null, 20, 5, 0, 6, 12, 65, 1, 4, 9, 3, 89, 22, 25, 28, 10];

const maxHeapify = (arr, n, i) => {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    maxHeapify(arr, n, largest);
  }
};

const buildMaxHeap = (arr) => {
  const n = arr.length;
  // Build a max heap
  // Math.floor(n / 2) - 1:
  // start the heapify process from the last non-leaf node in the array.
  // This speeds up the algorithm because leaf nodes,
  // which make up the bottom half of the heap,
  // do not need to be heapified since they have no children.
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    maxHeapify(arr, n, i);
  }
};

const heapSort = (arr) => {
  const n = arr.length;
  buildMaxHeap(arr);

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    maxHeapify(arr, i, 0);
  }

  return arr;
};

// const a = [null, 0, 5, 20, 6, 12, 65, 1, 4, 9, 3, 89, 22, 25, 28, 10];
const a = [0, 5, 20, 6, 12, 65, 1, 4, 9, 3, 89, 22, 25, 28, 10];
console.log(heapSort(a));
heapSort([12, 11, 13, 5, 6, 7]);
//                      89
//                    /    \
//                 12       65
//                /  \      /  \
//               9    5    25   28
//              / \ / \   / \   / \
//             4  6 3 0  22 20  1  10
//
