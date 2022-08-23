// https://structy.net/problems/premium/token-transform

// p: obj & str
// r: str
// /////////////////// ///////////////// recursion
const tokenTransform = (s, tokens) => {
  if (s.indexOf("$") === -1) return s;

  let newS = "";
  let i = 0;
  let j = 1;

  while (i < s.length) {
    if (s[i] !== "$") {
      newS += s[i];
      i++;
      j = i + 1;
    } else if (s[j] !== "$") {
      j++;
    } else {
      const nei = s.slice(i, j + 1);
      newS += tokenTransform(tokens[nei], tokens);
      i = j + 1;
      j = i + 1;
    }
  }

  return newS;
};

// const converter = (tokens, key) => {
//   if (tokens[key].indexOf("$") === -1) return tokens[key];

//   const s = tokens[key];
//   let newS = "";
//   let i = 0;
//   let j = 1;

//   while (i < s.length) {
//     if (s[i] !== "$") {
//       newS += s[i];
//       i++;
//       j = i + 1;
//     } else if (j[i] !== "$") {
//       j++;
//     } else {
//       const nei = s.slice(i, j + 1);
//       newS += converter(tokens, nei);
//       i = j + 1;
//       j = i + 1;
//     }
//   }

//   return newS;
// };

// /////////////////// /////////////////
// const tokenTransform = (s, tokens) => {
//   let newS = s;
//   let i = 0;
//   let j = 1;

//   while (i < newS.length) {
//     if (newS[i] !== "$") {
//       i++;
//       j = i + 1;
//     } else if (newS[j] !== "$") {
//       j++;
//     } else {
//       newS =
//         newS.slice(0, i) + tokens[newS.slice(i, j + 1)] + newS.slice(j + 1);

//       j = i + 1;
//     }
//   }

//   return newS;
// };
//"the $ADJECTIVE_1$ fox $ADVERBS$ $VERB$ward"
//     i           j

const tokens = {
  $ADJECTIVE_1$: "quick",
  $ADJECTIVE_2$: "eager",
  $ADVERBS$: "$ADJECTIVE_1$ly and $ADJECTIVE_2$ly",
  $VERB$: "hopped $DIRECTION$",
  $DIRECTION$: "North",
};

console.log(
  tokenTransform("the $ADJECTIVE_1$ fox $ADVERBS$ $VERB$ward", tokens)
); //    i           j

// -> 'the quick fox quickly and eagerly hopped Northward'
