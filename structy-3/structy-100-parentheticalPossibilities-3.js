const parentheticalPossibilities = (s) => {
  if (s.length === 0) return [""];
  const [firsts, remaining] = pp(s);
  const remain = parentheticalPossibilities(remaining);
  const result = [];
  for (let r of remain) {
    for (let f of firsts) {
      result.push(f + r);
    }
  }

  return result;
};

const pp = (s) => {
  if (s[0] === "(") {
    const iClose = s.indexOf(")");
    return [s.slice(1, iClose).split(""), s.slice(iClose + 1)];
  } else {
    return [[s[0]], s.slice(1)];
  }
};

// p: str
// r: arr
//      x(mn)yz                 ''
//                              |
//       (mn)yz                 x
//                            /   \
//       yz                 xm    xn
//                          |       |
//                         xmy      xny
//                          |       |
//                         xmyz      xnyz
//+

//"(qr)ab(stu)c"                []
//                            /    \
//  ab(stu)c            q                 r
//                      |                 |
//                      qa                ra
//                      |                 |
//                      qab                rab
//                 /   /  \              /  \   \
//             qabs   qabt  qabu     rabs  rabt   rabu
//              |       |       |       |     |        |
//             qabsc   qabtc  qabuc     rabsc  rabtc   rabuc
//

// n = length of the string, m = length of largest parenthetical group
// Time: ~O(m^n)
// Space: ~O(m^n)
// const parentheticalPossibilities = (s) => {
//   if (!s) return [""];

//   const result = [];
//   let first = s[0];
//   if (first === "(") {
//     const closeP = s.indexOf(")");
//     for (let i = 1; i < closeP; i++) {
//       const sWOf = parentheticalPossibilities(s.slice(closeP + 1));
//       for (let a of sWOf) {
//         result.push(s[i] + a);
//       }
//     }
//   } else {
//     const sWOf = parentheticalPossibilities(s.slice(1));
//     for (let a of sWOf) {
//       result.push(first + a);
//     }
//   }

//   return result;
// };

// const parentheticalPossibilities = (s) => {
//   if (!s) return [""];
//   const { remaining, chars } = getOptions(s);
//   const result = [];
//   const sWOf = parentheticalPossibilities(remaining);
//   for (let str of sWOf) {
//     for (let c of chars) {
//       result.push(c + str);
//     }
//   }
//   return result;
// };

// const getOptions = (s) => {
//   if (s[0] === "(") {
//     const i = s.indexOf(")");
//     const remaining = s.slice(i + 1);
//     const chars = s.slice(1, i).split("");
//     return { remaining, chars };
//   } else {
//     const remaining = s.slice(1);
//     const chars = [s[0]];
//     return { remaining, chars };
//   }
// };

module.exports = {
  parentheticalPossibilities,
};
