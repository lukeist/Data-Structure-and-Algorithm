/**
 * @param {string} s
 * @return {number}
 */

// p: string;
// r: number;
// //      i
// e: "MCMXCIV" -> 1994;
//       j
//        i
// e: "III" ;
//        j
const chars = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const specials = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};

var romanToInt = function (s) {
  let i = 0,
    j = 1;
  let sum = 0;

  while (i < s.length) {
    const ij = s[i] + s[j];
    if (ij in specials) {
      sum += specials[ij];
      i += 2;
      j += 2;
    } else {
      sum += chars[s[i]];
      i++;
      j++;
    }
  }

  return sum;
};
