/**
 * @param {string} s
 * @return {number}
 */

// p: string;
// r: int;

//      i
// MCMXCIVX
//      j
const regular = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const special = {
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
  let count = 0;
  while (i < s.length) {
    if (s[i] + s[j] in special) {
      console.log(s[i] + s[j]);
      count += special[s[i] + s[j]];
      i += 2;
      j += 2;
    } else {
      count += regular[s[i]];
      i++;
      j++;
    }
  }

  return count;
};

// console.log(romanToInt("III"));
// console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
