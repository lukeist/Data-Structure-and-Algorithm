// p: string
// r: string
// e: 2c3a1t => ccaaat
//    2p1o5p => ppoppppp
//    12p    => pppppppppppp

const uncompress = (s) => {
  let newS = "";
  let num = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i].toLowerCase() !== s[i].toUpperCase()) {
      newS += s[i].repeat(+num);
      num = "";
    } else {
      num += s[i];
    }
  }

  return newS;
};

// const uncompress = (s) => {
//   let nums = '123456789'
//   let newS = '';
//   let num = '';

//   for (let i = 0; i < s.length; i++) {
//     if (!nums.includes(s[i])) {
//       newS += s[i].repeat(+num);
//       num = '';
//     } else {
//       num += s[i];
//     }
//   }

//   return newS;
// };
