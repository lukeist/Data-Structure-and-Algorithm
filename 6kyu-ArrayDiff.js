// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

// function arrayDiff(a, b) {
//   for (item of b) {
//     a = a.filter((v) => v !== item);
//   }
//   return a;
// }
arrayDiff([1, 2, 2, 2, 3], [2]);
//better solution
function arrayDiff(a, b) {
  return a.filter((v) => b.indexOf(v) === -1);
}
