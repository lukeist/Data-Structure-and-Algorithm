// p: obj, string;
// r: string

//   $LOCATION$: "park",
//   $ANIMAL$: "dog",
//                  i
// Walk the $ANIMAL$ in the $LOCATION$!
//                   j

const tokenReplace = (s, tokens) => {
  let i = 0,
    j = 1,
    str = "";

  while (i < s.length) {
    if (s[i] === "$") {
      if (s[j] === "$") {
        const token = s.slice(i, j + 1);
        str += tokens[token];
        i = j + 1;
        j = i + 1;
      } else {
        j++;
      }
    } else {
      str += s[i];
      i++;
      j++;
    }
  }
  return str;
};

// const tokens = {
//   $LOCATION$: "park",
//   $ANIMAL$: "dog",
// };
// console.log(tokenReplace("Walk the $ANIMAL$ in the $LOCATION$!", tokens));
// // -> 'Walk the dog in the park!'

// const tokens = {
//   '$ADJECTIVE$': 'quick',
//   '$VERB$': 'hopped',
//   '$DIRECTION$': 'North'
// };
// console.log(tokenReplace('the $ADJECTIVE$ fox $VERB$ $ADJECTIVE$ly $DIRECTION$ward', tokens));
// // -> 'the quick fox hopped quickly Northward'

// const tokens = {
//   '$greeting$': 'hey programmer',
// };
// console.log(tokenReplace('his greeting is always $greeting$.', tokens));
// // -> 'his greeting is always hey programmer.'

// const tokens = {
//   '$A$': 'lions',
//   '$B$': 'tigers',
//   '$C$': 'bears',
// };
// console.log(tokenReplace('$A$$B$$C$, oh my.', tokens));
// // -> 'lionstigersbears, oh my.'

// const tokens = {
//   '$A$': 'lions',
//   '$B$': 'tigers',
//   '$C$': 'bears',
// };
// console.log(tokenReplace('$B$', tokens));
// // -> 'tigers'

// const tokens = {
//   '$second$': 'beta',
//   '$first$': 'alpha',
//   '$third$': 'gamma',
// };
// console.log(tokenReplace('$first$second$third$', tokens));
// // -> 'alphasecondgamma'
