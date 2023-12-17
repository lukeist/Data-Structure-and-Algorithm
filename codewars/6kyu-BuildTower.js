// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

// p: num int +
// r: array
// e:
//  3 =>
//  [
//   "  *  ",
//   " *** ",
//   "*****"
// ]

// 6 =>
// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

function towerBuilder(nFloors) {
  // create arr with nFloors strings => map string.length = nFloors*2- 1 with *
  // map using index to remove space?

  return Array.from(
    Array(nFloors),
    // (e) => (e = "*".repeat(nFloors * 2 - 1))
    (e, i) =>
      " ".repeat(nFloors - i - 1) +
      "*".repeat(i * 2 + 1) +
      " ".repeat(nFloors - i - 1)
  );
}
