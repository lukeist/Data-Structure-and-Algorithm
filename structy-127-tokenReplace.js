// https://structy.net/problems/premium/token-replace

// p: obj & str
// r: str
// alvins two pointers
const tokenReplace = (s, tokens) => {
  let newS = [];
  let i = 0;
  let j = 1;

  while (i < s.length) {
    if (s[i] !== "$") {
      newS.push(s[i]);
      i++;
      j = i + 1;
    } else if (s[j] !== "$") {
      j++;
    } else {
      const key = s.slice(i, j + 1);
      newS.push(tokens[key]);
      console.log(key);
      i = j + 1;
      j = i + 1;
    }
  }

  return newS.join("");
};
// // alvins two pointers
// const tokenReplace = (s, tokens) => {
//   let newS = "";
//   let i = 0;
//   let j = 1;

//   while (i < s.length) {
//     console.log(newS, s[i], s[j]);

//     if ((s[i] !== "$" && s[j] !== "$") || (s[i] !== "$" && s[j] === "$")) {
//       newS += s[i];
//       i++;
//       j = i + 1;
//     } else if (s[i] === "$" && s[j] !== "$") {
//       j++;
//     } else {
//       const key = s.slice(i, j + 1);
//       newS += tokens[key];
//       console.log(key);
//       i = j + 1;
//       j = i + 1;
//     }
//   }

//   return newS;
// };

// // two pointers
// const tokenReplace = (s, tokens) => {
//   let newS = "";

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "$") {
//       for (let j = i + 1; j < s.length; j++) {
//         if (s[j] === "$") {
//           newS += tokens[s.slice(i, j + 1)];

//           i = j;
//           break;
//         }
//       }
//     } else {
//       newS += s[i];
//     }
//   }

//   return newS;
// };

// const tokens = {
//   $ADJECTIVE$: "quick",
//   $VERB$: "hopped",
//   $DIRECTION$: "North",
// };
// console.log(
//   tokenReplace(
//     "the $ADJECTIVE$ fox $VERB$ $ADJECTIVE$ly $DIRECTION$ward",
//     tokens
//   )
// );
// // -> 'the quick fox hopped quickly Northward'

///////////////////////////////////////
const tokens = {
  $second$: "beta",
  $first$: "alpha",
  $third$: "gamma",
};
console.log(tokenReplace("$first$second$third$", tokens));
// -> 'alphasecondgamma'
// alphabetagamma

///////////////////////////////////////
// passed all tests:
// const tokenReplace = (s, tokens) => {
//   let token = "";
//   let newS = "";

//   for (const c of s) {
//     if ((c === "$" && token.length === 0) || token.length !== 0) {
//       token += c;

//       if (token[token.length - 1] === "$" && token.length > 1) {
//         newS += tokens[token];
//         token = "";
//       }
//     } else {
//       newS += c;
//     }
//   }

//   return newS;
// };

// NOT WORKING FOR test_05
// const tokenReplace = (s, tokens) => {
//     arr = s.split("$");

//     for (let i = 0; i < arr.length; i++) {
//       let token = "$" + arr[i] + "$";
//       if (token in tokens) {
//         arr[i] = tokens[token];
//       }
//     }

//     return arr.join("");
//   };
