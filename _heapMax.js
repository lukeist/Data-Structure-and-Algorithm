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

function maxHeapify(arr, n, i) {
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
    // Swap arr[i] and arr[largest]
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    // Recursively heapify the affected sub-tree
    maxHeapify(arr, n, largest);
  }
}

function buildMaxHeap(arr) {
  const n = arr.length;

  // Build a max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    maxHeapify(arr, n, i);
  }
}

function heapSort(arr) {
  const n = arr.length;

  // Build a max heap
  buildMaxHeap(arr);

  // Extract elements one by one from the heap
  for (let i = n - 1; i > 0; i--) {
    // Move current root to the end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Call maxHeapify on the reduced heap
    maxHeapify(arr, i, 0);
    console.log(n, arr);
  }
  return arr;
}

const a = [null, 0, 5, 20, 6, 12, 65, 1, 4, 9, 3, 89, 22, 25, 28, 10];

// console.log(heapSort(a));
heapSort([12, 11, 13, 5, 6, 7]);
//                      89
//                    /    \
//                 12       65
//                /  \      /  \
//               9    5    25   28
//              / \ / \   / \   / \
//             4  6 3 0  22 20  1  10
//
