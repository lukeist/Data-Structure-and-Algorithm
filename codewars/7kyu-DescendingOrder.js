// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

// parameters: number + int / no - no arr, no str, no null no undefined, no funny stuff.
// return number / no console log or print
// examples: 56461 => 66541
function descendingOrder(n) {
  // conveert to string
  // convert to array
  // sort array
  // convert back to string
  // convert back to number
  return +n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
  //...
}
