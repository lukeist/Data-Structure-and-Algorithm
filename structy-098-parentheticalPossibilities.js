// https://structy.net/problems/premium/parenthetical-possibilities
// p: str
// r: arr

// time & space O(m^n) m: group size, n: numbers of groups
const parentheticalPossibilities = (s) => {
  if (s.length === 0) return [""];

  let c = s[0];
  let sWOc;

  if (c !== "(") {
    sWOc = parentheticalPossibilities(s.slice(1));
  } else {
    const closePaI = s.indexOf(")");
    c = s.slice(1, closePaI);
    sWOc = parentheticalPossibilities(s.slice(closePaI + 1));
  }

  let result = [];
  for (let char of c) {
    for (let str of sWOc) {
      result.push(char + str);
    }
  }

  return result;
};

// console.log(parentheticalPossibilities("xyz")); // ->
// // [ 'xyz' ]
console.log(parentheticalPossibilities("x(mn)yz")); // ->
// [ 'xmyz', 'xnyz' ]
// console.log(parentheticalPossibilities("(qr)ab(stu)c")); // ->
// // [ 'qabsc', 'qabtc', 'qabuc', 'rabsc', 'rabtc', 'rabuc' ]
