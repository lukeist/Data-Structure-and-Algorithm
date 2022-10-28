// p: arr
// r: num
// [4]
//  1
//  [4, 18]    [18, 4]
//  1   2       1   1
//  [4, 28, 20]
//  1   2   2
//              i
// [4, 18, 20, 10, 12, 15, 19]; => 5
//  1   2  3   2
//         j

//               i
// [12, 9, 2, 5, 4, 32, 90, 20]
//  1   1  1  2  2   3  4    4
//         j

// const maxIncreasingSubseq = (nums) => {
//   const map = {};
//   map[nums[0]] = 1;

//   for (let i = 1; i < nums.length; i++) {
//     let max = -Infinity;

//     //                 i
//     //  nums      [4, 18, 20, 10, 12, 15, 19]
//     //  map keys   4
//     //  map vals   1
//     //  max           1

//     for (let key in map) {
//       if (nums[i] >= +key) {
//         max = Math.max(map[key], max);
//       } else max = Math.max(max, 0);
//     }

//     max !== map[nums[i]] && //////////////////////
//       (map[nums[i]] = max + 1);
//   }

//   let max = -Infinity;

//   for (const key in map) {
//     max = Math.max(max, map[key]);
//   }

//   return max;
// };

// console.log(maxIncreasingSubseq([4, 18, 20, 10, 12, 15, 19]));
// console.log(maxIncreasingSubseq([12, 9, 2, 5, 4, 32, 90, 20]));

// not working

//////////////////
const maxIncreasingSubseq = (numbers) => {
  const map = {};
  map[numbers[0]] = 1;

  for (let i = 1; i < numbers.length; i++) {
    let max = -Infinity;
    let num = numbers[i];

    for (let key in map) {
      if (num >= +key) {
        // if num >= key: max = the greatest number next to num
        max = Math.max(max, map[key]);
      } else {
        console.log(num, key, max);
        // if num < key:
        //// if num < all keys: max = 0;
        //// if num < some keys: max = max of key before the current key
        max = Math.max(max, 0);
      }
    }
    //                             [1,  2,  3,  4,  4,  5,  1, 2, 6];
    // if key === max -> keep max, [42, 50, 51, 60, 55, 70, 4, 5, 70] else:
    max !== map[num] && (map[num] = max + 1);
  }

  let max = -Infinity;
  for (let key in map) {
    max = Math.max(max, map[key]);
  }

  return max;
};

// console.log(maxIncreasingSubseq([42, 50, 51, 60, 55, 70, 4, 5, 70]));
//                              [1,  2,  3,  4,  4,  5,  1, 2, 6];

console.log(maxIncreasingSubseq([4, 18, 20, 10, 12, 15, 19]));
//                              [1, 2,  3,  2,  3,  4,  6];
// { '4': 1, '10': 1, '12': 1, '15': 1, '18': 2, '19': 1, '20': 3 }

// console.log(maxIncreasingSubseq([12, 9, 2, 5, 4, 32, 90, 20]));
//                                 [1,  -, -, -, -, 6, 7, 6];
// console.log(
//   maxIncreasingSubseq([
//     1, 2, 3, 4, 5, 12, 6, 30, 7, 8, 9, 10, 11, 12, 13, 10, 18, 14, 15, 16, 17,
//     18, 19, 20, 21, 100, 104,
//   ])
// );

// [4, 18, 20, 10, 12, 15, 19]
//  1   2   3  2
//
//                                                        i
// 1, 2, 3, 4, 5, 12, 6, 30, 7, 8, 9, 10, 11, 12, 13, 10, 18, 14, 15, 16, 17, 18, 19, 20, 21, 100, 104, // -> 23
//
// 1, 2, 3, 4, 5, 6,  6, 7,  7, 8, 9, 10, 11, 12, 13, 10, 11, 11, 12, 13, 14, 15, 16, 17, 18, 19,  20,
//                                                     j  14  14

// not working
// const maxIncreasingSubseq = (numbers) => {
//   // const arr = [1];
//   const map = {};
//   map[numbers[0]] = 1;

//   for (let i = 1; i < numbers.length; i++) {
//     // arr[i] = 1;

//     for (let j = 0; j < i; j++) {
//       numbers[i] > numbers[j] &&
//         (map[numbers[i]] =
//           Math.max(map[numbers[i]], map[numbers[j]]) || map[numbers[j]] + 1); //
//     }
//   }
//   // return Math.max(...arr);
//   let max = -Infinity;
//   for (const key in map) {
//     max = Math.max(max, map[key]);
//   }

//   return max;
// };

// not working
// const maxIncreasingSubseq = (numbers) => {
//   const arr = [1];

//   for (let i = 1; i < numbers.length; i++) {
//     arr[i] = 1;

//     for (let j = 0; j < i; j++) {
//       numbers[i] > numbers[j] && (arr[i] = arr[j] + 1);
//     }
//   }
//   return Math.max(...arr);
// };
