// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

// THIS IS MISUNDERSTOOD THE INSTRUCTIONS
function comp(array1, array2) {
  const tempArr = [];
  //   your code here
  if (array1 === null || array2 === null) return false;
  if (array1.some((value) => value < 0)) return false;
  //
  for (const value2 of array2) {
    //   console.log(value2);

    // console.log(array1.every((value1) => 132 !== value1 * value1));
    if (array1.every((value1) => value1 * value1 !== value2)) {
      //   console.log(array2.some((value2) => Math.sqrt(value2) === value1));
      tempArr.push(false);
    } else {
      //   console.log(array2.some((value2) => Math.sqrt(value2) === value1));
      tempArr.push(true);
    }
    // {
    //   console.log(false);
    //   return false;
  }
  console.log(array1);
  console.log(array2.map((value) => Math.sqrt(value)));
  console.log(tempArr);
  if (tempArr.some((value) => value === false)) {
    return false;
  }
  return true;
}
//   return true;

// let a = [121, 144, 19, 161, 19, 144, 19, 11];
// let b = [14641, 20736, 361, 25921, 361, 20736, 361, 132];

//////////////////////////
// let a = [
//   6, 3, 7, 6, 6, 3, 6, 0, 2, 6, 1, 6, 6, 3, 10, 2, 4, 10, 7, 10, 7, 7, 7, 3, 3,
// ];
// let b = [
//   0, 49, 16, 36, 36, 36, 9, 4, 5, 49, 9, 49, 1, 49, 9, 36, 9, 100, 36, 100, 36,
//   100, 9, 36, 49,
// ];
/////////////////////////////\
// let a = [6, 3, 6, 1, 7, 4, 0, 5, 2, 0];
// let b = [4, 16, 49, 36, 9, 1, 1, 25, 36, 0];

let a = [3, 3, 8, 3, 10, 8, 4, 0, 0, 7, 6, 5, 10, 1, 10, 2, 1, 2, 4, 4, 8, 2];
let b = [1, 100, 64, 4, 16, 16, 4, 100, 0, 9, 64, 100, 4, 64, 9, 49, 36, 25, 1];
comp(a, b);

// good solution
function compArr(array1, array2) {
  if (array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  return array1.map((v) => v * v).every((v, i) => v == array2[i]);
}
