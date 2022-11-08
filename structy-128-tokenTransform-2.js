// p: obj, str
// r: str

// const tokens = {
//   '$LOCATION$': '$ANIMAL$ park',
//   '$ANIMAL$': 'dog',
// };                                       i
// tokenTransform('Walk the $ANIMAL$ in the $LOCATION$!', tokens);
//                                           j
// // -> 'Walk the dog in the dog park!'

// dp 2 pointers W memo
const tokenTransform = (s, tokens) => {
  let i = 0,
    j = 1;
  let result = "";

  while (i < s.length) {
    if (s[i] === "$") {
      if (s[j] === "$") {
        const key = s.slice(i, j + 1);
        const value = tokenTransform(tokens[key], tokens);
        tokens[key] = value; // memo, replace current value = 'the-end'-value
        result += tokens[key];

        i = j + 1;
        j = i + 1;
      } else {
        j++;
      }
    } else {
      result += s[i];
      i++;
      j++;
    }
  }

  return result;
};

// // WO memo
// const tokenTransform = (s, tokens) => {
//   let i = 0,
//     j = 1;
//   let result = "";

//   while (i < s.length) {
//     // console.log(s);
//     if (s[i] === "$") {
//       if (s[j] === "$") {
//         const newS = tokens[s.slice(i, j + 1)];
//         // console.log(newS);

//         result += tokenTransform(newS, tokens);
//         console.log(result);
//         i = j + 1;
//         j = i + 1;
//       } else {
//         j++;
//       }
//     } else {
//       result += s[i];
//       i++;
//       j++;
//     }
//   }

//   return result;
// };

// brute force
// const tokenTransform = (s, tokens) => {
//   let i = 0,
//     j = 1;
//   // let result = '';

//   while (i < s.length) {
//     if (s[i] === "$") {
//       if (s[j] === "$") {
//         s = s.slice(0, i) + tokens[s.slice(i, j + 1)] + s.slice(j + 1);
//         j = i + 1;
//       } else {
//         j++;
//       }
//     } else {
//       // result += c;
//       i++;
//       j++;
//     }
//   }

//   return s;
// };

const tokens = {
  $LOCATION$: "$ANIMAL$ park",
  $ANIMAL$: "dog",
};
// console.log(tokenTransform("Walk the!", tokens));
console.log(tokenTransform("Walk the $ANIMAL$ in the $LOCATION$!", tokens));
// -> 'Walk the dog in the dog park!'
