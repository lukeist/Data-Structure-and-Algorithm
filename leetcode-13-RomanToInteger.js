// const dic = {
//   'I': 1,
//   'V': 5,
//   'X': 10,
//   'L': 50,
//   'C': 100,
//   'D': 500,
//   'M': 1000,
// }

// const spe = {
//   'IV': 4,
//   'IX': 9,
//   'XL': 40,
//   'XC': 90,
//   'CD': 400,
//   'CM': 900,
// }

// var romanToInt = function(s) {
//   let i = 0, j = 1, count = 0;

//   while (i < s.length) {
//       let ij = s[i] + s[j];

//       if (ij in spe) {
//           count += spe[ij];
//           i += 2;
//           j += 2;
//       } else {
//           count += dic[s[i]];
//           i++;
//           j++;
//       }
//   }

//   return count;
// };

const regular = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (regular[s[i]] < regular[s[i + 1]]) {
      total -= regular[s[i]];
    } else {
      total += regular[s[i]];
    }
  }

  return total;
};

// const special = {
//   IV: 4,
//   IX: 9,
//   XL: 40,
//   XC: 90,
//   CD: 400,
//   CM: 900,
// };

// var romanToInt = function(s) {
//     let total = 0;
//     let i = 0;
//     while (i < s.length) {
//         const temp = s[i] + s[i + 1];
//         if (temp in special) {
//             total += special[temp];
//             i += 2;
//         } else {
//             total += regular[s[i]]
//             i++;
//         }
//     }
//     return total;
// };

// TRASH vvvvv
// const regular = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000,
// };

// const special = {
//   IV: 4,
//   IX: 9,
//   XL: 40,
//   XC: 90,
//   CD: 400,
//   CM: 900,
// };

// var romanToInt = function (s) {
//   let i = 0,
//     j = 1;
//   let count = 0;
//   while (i < s.length) {
//     if (s[i] + s[j] in special) {
//       console.log(s[i] + s[j]);
//       count += special[s[i] + s[j]];
//       i += 2;
//       j += 2;
//     } else {
//       count += regular[s[i]];
//       i++;
//       j++;
//     }
//   }

//   return count;
// };

// // console.log(romanToInt("III"));
// // console.log(romanToInt("LVIII"));
// console.log(romanToInt("MCMXCIV"));
