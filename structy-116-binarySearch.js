// p: arr & num
// r: +num/-1

// better:
const binarySearch = (numbers, target) => {
  let lo = 0;
  let hi = numbers.length - 1;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);

    if (numbers[mid] === target) {
      return mid;
    } else if (target < numbers[mid]) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return -1;
};

// const binarySearch = (numbers, target) => {
//   // 0 1 2 3
//   // 0 1 2 3 4
//   let start = 0;
//   let end = numbers.length - 1;
//   let midI = findMidI(start, end);

//   while (start < end) {
//     // console.log(start, midI, end);
//     if (target === numbers[midI]) {
//       return midI;
//     } else if (target < numbers[midI]) {
//       end = midI - 1;
//       midI = findMidI(start, end);
//     } else {
//       start = midI + 1;
//       midI = findMidI(start, end);
//     }
//   }

//   if (numbers[start] === target) return start;
//   if (numbers[end] === target) return end;

//   return -1;
// };

// const findMidI = (s, e) => Math.floor((s + e) / 2);

// console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 6)); // -> 6
console.log(binarySearch([0, 6, 8, 12, 16, 19, 20, 24, 28], 27)); // -> -1
// console.log(binarySearch([0, 6, 8, 12, 16, 19, 20, 24, 28], 28)); // -> 8
