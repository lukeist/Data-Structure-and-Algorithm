// https://www.hackerrank.com/challenges/one-month-preparation-kit-lonely-integer

// p: arr of ints
// r: int
// e: [1,2,3,4,3,2,1] => 4

function lonelyinteger(a) {
  // find num with first index !=== last index
  for (const value of a) {
    if (a.indexOf(value) === a.lastIndexOf(value)) return value;
  }
}
