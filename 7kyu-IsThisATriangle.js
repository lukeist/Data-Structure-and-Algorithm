// https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript

// p: 3 int +
// r: boolean
// e: 3 3 3 => true / 337 false

function isTriangle(a, b, c) {
  return a + b > c && b + c > a && c + a > b;
}
