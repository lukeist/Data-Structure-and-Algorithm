// p: str
// r: str

// 2 pointers
const uncompress = (s) => {
  let i = 0;
  let j = 0;
  let resultS = "";

  while (i < s.length && j < s.length) {
    if (s[i].toLowerCase() === s[i].toUpperCase()) {
      i++;
    } else {
      resultS += s[i].repeat(+s.slice(j, i));
      i++;
      j = i;
    }
  }

  return resultS;
};

//    i
// 33n12e2z
//    j

// // O(m x n) O(m x n) m: num of groups, n: max num for any group => right
// // O(s.length) O(resultS.length) => wrong
// const uncompress = (s) => {
//   let resultS = "";
//   let num = "";

//   for (let i = 0; i < s.length; i++) {
//     if (s[i].toLowerCase() === s[i].toUpperCase()) {
//       num += s[i];
//     } else {
//       resultS += s[i].repeat(+num);
//       num = "";
//     }
//   }

//   return resultS;
// };

console.log(uncompress("3n12e2z")); // -> 'nnneeeeeeeeeeeezz'
