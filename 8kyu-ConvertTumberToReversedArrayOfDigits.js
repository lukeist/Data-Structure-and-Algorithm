// https://www.codewars.com/kata/5583090cbe83f4fd8c000051

function digitize(n) {
  //code here
  return n
    .toString()
    .split("")
    .reverse()
    .map((n) => +n);
}
