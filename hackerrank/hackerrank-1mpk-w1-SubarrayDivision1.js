// https://www.hackerrank.com/challenges/one-month-preparation-kit-the-birthday-bar
// p: s: array; d: int+; m: int+
// r: int +
// e:
// s= [2,2,1,3,2]
// d= 4
// m= 2
// => 2: [2,2] [1,3]
// function birthday(s, d, m) {
//   let count = 0;
//   // loop s
//   console.log(s);
//   for (let i = 0; i < s.length - m + 1; i++) {
//     let sClone = [...s].splice(i, m).reduce((p, c) => p + c, 0);
//     if (sClone === d) {
//       count++;
//       s.splice(i, m - 1);
//     }
//     console.log(s, count);
//   }
//   return count;
// }
// birthday([2, 2, 1, 3, 2], 4, 2);

function birthday(s, d, m) {
  let count = 0;
  for (let i = 0; i < s.length - m + 1; i++) {
    console.log(s, s.slice(i, i + m));
    if (s.slice(i, i + m).reduce((a, b) => a + b, 0) == d) count++;
  }
  return count;
}
birthday([1, 2, 1, 3, 2], 3, 2);
