// https://www.codewars.com/kata/56269eb78ad2e4ced1000013

// p: num int +
// r: num int +-
// e:
// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

function findNextSquare(sq) {
  // conditionals: check if sq is perfect: sqrt(sq) % 1 ===0
  //// if is: return (sqrt(sq)+1 )*(sqrt(sq)+1 )
  //// if not: return -1
  return Math.sqrt(sq) % 1 === 0
    ? (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1)
    : -1;
}
