// p: str
// r: arr

//                  (qr)ab(stu)c                                    (qr)ab(stu)c                []
//              q /           \ r                                                       q /             \ r
//            qab(stu)c       rab(stu)c                             ab(stu)c            q                r
//     s/    t /   \u          s/   t\     u \                                          a |                |a
//  qabsc   qabtc   qabuc   rabsc   rabtc   rabuc                    b(stu)c           qa                 ra
//        i                                                                                |                   |
// xxxx(qr)ab(stu)c                                                      (stu)c           qab                  rab
//     m                                                                         s/     t/      u\        s/    t/     u\
//                                                                   c      qabs    qabt     qabu      rabs    rabt    rabu
// base case s = '' => ['']                                                 c|       c|       c|        c|       c|       c|
//                                                                         qabsc    qabtc     qabuc     rabsc    rabtc   rabuc

// recursive O(n^m) O(n^m)
const parentheticalPossibilities = (s) => {
  if (s === "") return [""];
  const result = [];

  let firstC = s[0];
  let charsInBrackets;
  let remains;

  if (firstC === "(") {
    const lastI = s.indexOf(")");
    charsInBrackets = s.slice(1, lastI).split("");
    remains = parentheticalPossibilities(s.slice(lastI + 1));
  } else {
    charsInBrackets = [firstC];
    remains = parentheticalPossibilities(s.slice(1));
  }

  for (let c of charsInBrackets) {
    for (let r of remains) {
      result.push(c + r);
    }
  }

  return result;
};

// console.log(parentheticalPossibilities("x(mn)yz"));
console.log(parentheticalPossibilities("(qr)ab(stu)c"));

// // brute force  m: # of brackets, n: max brackets length  O(m ^ n)  O(m ^ n)
// const parentheticalPossibilities = (s) => {
//   if (s.length === 0) return [""];
//   let result = [""];
//   let m = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") {
//       m = i;
//     } else if (s[i] === ")") {
//       let newArr = [];

//       for (let j = m + 1; j < i; j++) {
//         for (let res of result) {
//           let newS = res + s[j];

//           newArr.push(newS);
//         }
//       }
//       result = [...newArr];
//       m = i + 1;
//     } else {
//       if (s[m] !== "(" && s[m] !== ")") {
//         for (let j = 0; j < result.length; j++) {
//           result[j] += s[i];
//         }
//         m = i;
//       } else if (s[m] === "(") {
//         continue;
//       }
//     }
//   }

//   return result;
// };
