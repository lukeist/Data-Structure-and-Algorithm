// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript
// P: arr of arrays of ints
// r: num int +
// e:
// [[10,0],[3,5],[5,8]]) => 5

var number = function (busStops) {
  // get in bus = sum all arr[0]
  // get out bus = sum all arr[1]
  // last ppl on bus = sum arr[0] - sum arr[1]
  return (
    busStops.reduce((p, c) => p + c[0], 0) -
    busStops.reduce((p, c) => p + c[1], 0)
  );
};
