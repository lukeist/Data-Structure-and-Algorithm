// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
function findEvenIndex(arr) {
  //Code goes here!
  // let sum = arr.reduce((p, c, allIndex) => {
  //   if (allIndex > 3) {
  //     return p + c;
  //   } else {
  //     return 0; <<<<<<<<<<<<<<<<<<<< return p
  //   }
  // });
  // let sum = arr.reduce((p, c, allIndex) => {
  //   if (allIndex > 3 && allIndex < 6) {
  //     return p + c;
  //   } else {
  //     return 0;
  //   }
  // });
  //   let sum = arr.reduce((p, c, allIndex) => {
  //     if (allIndex > 3) {
  //       return 0;
  //     } else {
  //       return p + c;
  //     }
  //   });
  // let sum = arr.reduce((a, b, i) => (i > 0 && i < 4 ? a + b : a), 0);
  // console.log(sum);
  for (let i = 0; i < arr.length; i++) {
    const arrLeft = arr.slice(0, i);
    const arrRight = arr.slice(i + 1);
    // console.log(i, arrLeft, arrRight);
    let sumLeft;
    arrLeft.length < 1
      ? (sumLeft = 0)
      : (sumLeft = arrLeft.reduce((p, c) => p + c));
    let sumRight;
    arrRight < 1
      ? (sumRight = 0)
      : (sumRight = arrRight.reduce((p, c) => p + c));
    // console.log(sumLeft, sumRight);
    if (sumLeft === sumRight) {
      return i + 1;
    }
  }
  return -1;
}

let arr = [1, 2, 3, 4, 3, 2, 1];
findEvenIndex(arr);

// BETTER SOLUTION:
// function findEvenIndex(arr) {
//   var left = 0,
//     right = arr.reduce(function (pv, cv) {
//       return pv + cv;
//     }, 0);
//   for (var i = 0; i < arr.length; i++) {
//     if (i > 0) left += arr[i - 1];
//     right -= arr[i];

//     if (left == right) return i;
//   }

//   return -1;
// }
