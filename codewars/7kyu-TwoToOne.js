// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
// parameters: str: a-z /
// return: str
// examples:
let a = "xyaabbbccccdefww";
let b = "xxxxyyyyabklmopq";
longest(a, b);
// -> "abcdefklmopqwxy"

function longest(s1, s2) {
  //   // concat s1+s2
  //   // convert to array
  //   // sort array
  //   // filter => remove duplicate char
  //   // join back to str
  //   const arr = (s1 + s2).split("").sort();
  //   return arr.filter((e, i, arr) => e !== arr[i + 1]).join("");
  //   better solution:
  console.log([...new Set(s1 + s2)].sort().join(""));
}
