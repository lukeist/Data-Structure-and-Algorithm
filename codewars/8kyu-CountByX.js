// https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript

function countBy(x, n) {
  return Array.from(Array(n), (e, i) => (i = (i + 1) * x));
}
