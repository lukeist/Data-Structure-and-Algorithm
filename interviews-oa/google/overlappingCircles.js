// https://leetcode.com/discuss/interview-question/4831503/google-questions/2291792

// Problem: A circle is define by x-axis position, y-axis position, and a
// radius. A circle group is a collection of circles that overlap. Given a
// list of circles, figure out if they belong to a single circle group

// . . . . . . . . . . . . . . . . . . . . .
// . . . . . . . . . . 9 . . . . . . . . . .
// . . . . . . . . . . 8 . . . . . . . . . .
// . . . . . . . . . . 7 . . . . . . . . . .
// . . . . . . . . . . 6 . . . . . . . . . .
// . . . . . . . . . . 5 . . . . . . . . . .
// . . . . . . x . . . 4 . . . . . . . . . .
// . . . . . . . . . . 3 x . . . . . . . . .
// . . . . . . . . . . 2 . . . . . . . . . .
// . . . . . . . . . . 1 . . . . . . . . . .
// - 9 8 7 6 5 4 3 2 1 0 1 2 3 4 5 6 7 8 9 -
// . . . . . . . . . . 1 . . . . . . . . . .
// . . . . . . . . . . 2 . . . . . . . . . .
// . . . . . . . . . . 3 . . . . . . . . . .
// . . . . . . . . . . 4 . . . . . . . . . .
// . . . . . . . . . . 5 . . . . . . . . . .
// . . . . . . . . . . 6 . . . . . . . . . .
// . . . . . . . . . . 7 . . . . . . . . . .
// . . . . . . . . . . 8 . . . . . . . . . .
// . . . . . . . . . . 9 . . . . . . . . . .
// . . . . . . . . . . . . . . . . . . . . .

/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////

// p: array of arrays;
// r: boolean;
// e:
//
//   [4, -4, 3],
//   [3, 1, 4],
//    1  5 7
// d = sqrt(abs((x1 - x2)*(x1 - x2)) + abs((y1 - y2)*(y1 - y2)))
// d <= sum of radiuses ? true : fales

const checkCircle = (circles) => {
  for (let i = 1; i < circles.length; i++) {
    const [x1, y1, r1] = circles[i - 1];
    const [x2, y2, r2] = circles[i];
    const x = Math.abs(x1 - x2);
    const y = Math.abs(y1 - y2);
    const sumR = r1 + r2;

    const d = Math.sqrt(x * x + y * y);
    if (d > sumR) return false;
  }

  return true;
};

const c1 = [
  [4, -4, 3],
  [3, 1, 4],
  [-2, -2, 5],
]; // true
const c2 = [
  [4, -4, 3],
  [4, 1, 1],
]; // false
const c3 = [
  [4, -4, 3],
  [3, 1, 4],
  [-2, -2, 5],
  [-100, -2, 5],
]; // true

console.log(checkCircle(c1));
console.log(checkCircle(c2));
console.log(checkCircle(c3));
