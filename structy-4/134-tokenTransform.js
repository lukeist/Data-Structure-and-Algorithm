// p: object, string;
// r:  string;
// e:
// const tokens = {
//   '$LOCATION$': '$ANIMAL$ park',
//   '$ANIMAL$': 'dog',
// };
//
//                  i
// Walk the $ANIMAL$ in the $LOCATION$!
//                   j
// Walk the dog in the
// // -> 'Walk the dog in the dog park!'
//

const tokenTransform = (s, tokens) => {
  let i = 0,
    j = 1;
  let newS = "";

  while (i < s.length) {
    if (s[i] === "$") {
      if (s[j] === "$") {
        const token = s.slice(i, j + 1);
        const subS = tokens[token];
        const newSub = tokenTransform(subS, tokens);
        tokens[token] = newSub;
        newS += newSub;
        i = j + 1;
        j = j + 2;
      } else {
        j++;
      }
    } else {
      newS += s[i];
      i++;
      j++;
    }
  }

  return newS;
};

const getTokens = (token) => {};
