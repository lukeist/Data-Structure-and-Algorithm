// p: array
// r: array
// e:
//
//  0 1 2 3 4
// [3,7,5,6,2];
//
//

function subsetA(arr) {
  arr.sort((a, b) => b - a);
  // console.log(arr)
  let ssA = [];
  let sumA = 0;
  let sumB = arr.reduce((a, c) => a + c, 0);
  console.log(sumB);
  for (let num of arr) {
    if (sumA <= sumB) {
      ssA.push(num);
      sumA += num;
      sumB -= num;
    } else {
      break;
    }
  }

  return ssA.sort((a, b) => a - b);
}
