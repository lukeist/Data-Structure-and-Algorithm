function findMedian(arr) {
  // Write your code here
  arr.sort();
  //   console.log(arr, (arr.length + 1) / 2, arr[(arr.length - 1) / 2]);

  return arr[(arr.length - 1) / 2];
}

findMedian([-7, -2, 0, 1, 2, 4, 6, 5, 3, 7, 7]);
