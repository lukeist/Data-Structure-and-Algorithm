// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

// p: str, empty str
// r: boolean
// e:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
  // get ending.length
  // slice str followed ending.length
  // check if both matched
  return ending === "" ? true : str.slice(-ending.length) === ending;
}

// better:   return str.endsWith(ending);
