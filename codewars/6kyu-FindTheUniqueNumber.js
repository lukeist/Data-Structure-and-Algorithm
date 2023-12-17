// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
  return arr.filter((n, i, arr) => arr.indexOf(n) === arr.lastIndexOf(n))[0];
}
