// index:  0, 1, 2,  3, 4,  5,  6, 7, 8, 9, 10, 11, 12, 13, 14];
const a = [0, 5, 20, 6, 12, 65, 1, 4, 9, 3, 89, 22, 25, 28, 10];
// heapSort([12, 11, 13, 5, 6, 7]);

// s                              0
//                            /        \
//                          5           20
//                     /    \          /    \
//                   6      12        65     1
//                /  \    /  \      /  \    /  \
//              4    9   3   89   22   25  28  10

// current: i
// left = i * 2 + 1
// right = i * 2 + 2
// parent = Math.floor((i - 1) / 2)
// leaves = Math.floor(n / 2) to (n - 1)

const maxHeapify = (arr, n, i) => {
  let left = i * 2 + 1;
  let right = i * 2 + 2;
  let largest = i;

  if (left < n && arr[largest] < arr[left]) {
    largest = left;
  }

  if (right < n && arr[largest] < arr[right]) {
    largest = right;
  }

  // heapSort([12, 11, 13, 5, 6, 7]);
  //                                i
  // s                              12
  //                         l   /        \  r L
  //                          11           13
  //                     /    \          /
  //                   5      6         7

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    //                                i
    // s                              13
    //                         l   /        \  r L
    //                          11           12
    //                     /    \          /
    //                   5      6         7
    maxHeapify(arr, n, largest);
  }
};

const buildMaxHeap = (arr) => {
  const n = arr.length;
  const leaves = Math.floor(n / 2);
  for (let i = leaves - 1; i >= 0; i--) {
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

console.log(heapSort(a));
