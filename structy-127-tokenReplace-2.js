// p: obj, str
// r: str

//                      i
// "the $ADJECTIVE$ fox $VERB$ $ADJECTIVE$ly $DIRECTION$ward",
//                       j
const tokenReplace = (str, tokens) => {
  let i = 0;
  let j = 1;

  let result = "";
  while (i < str.length) {
    if (str[i] === "$") {
      if (str[j] === "$") {
        console.log(i, j);
        // str = str.slice(0, i) + tokens[str.slice(i, j + 1)] + str.slice(j + 1);
        result += tokens[str.slice(i, j + 1)];
        i = j + 1;
        j = i + 1;
      } else {
        j++;
      }
    } else {
      result += str[i];
      i++;
      j++;
    }
  }
  return result;
};

// const tokens = {
//   $LOCATION$: "park",
//   $ANIMAL$: "dog",
// };
// //    i
// console.log(tokenReplace("Walk the $ANIMAL$ in the $LOCATION$!", tokens));
// //   j
// // -> 'Walk the dog in the park!'

// const tokens = {
//   $second$: "beta",
//   $first$: "alpha",
//   $third$: "gamma",
// };
// console.log(tokenReplace("$first$second$third$", tokens));
// // -> 'alphasecondgamma'

const tokens = {
  $ADJECTIVE$: "quick",
  $VERB$: "hopped",
  $DIRECTION$: "North",
};
console.log(
  tokenReplace(
    "the $ADJECTIVE$ fox $VERB$ $ADJECTIVE$ly $DIRECTION$ward",
    tokens
  )
);
// -> 'the quick fox hopped quickly Northward'
