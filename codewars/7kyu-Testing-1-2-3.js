// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

// p: arr of strings
// r: arr of strings
// e:
// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

var number = function (array) {
  return array.map((c, i) => `${i + 1}: ${c}`);
};
