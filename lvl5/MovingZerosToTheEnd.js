// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

function moveZeros(arr) {
  return arr.filter((v) => v !== 0).concat(arr.filter((v) => v === 0));
}

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
