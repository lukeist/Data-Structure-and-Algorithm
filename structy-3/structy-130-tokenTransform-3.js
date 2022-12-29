// p: obj, str;
// r: str
// e
// const tokens = {
//   '$LOCATION$': '$ANIMAL$ park',
//   '$ANIMAL$': 'dog',
// };
//          i
// Walk the $ANIMAL$ in the $LOCATION$!
//                 j
const tokenTransform = (s, tokens) => {
  let r = "";
  let i = 0,
    j = 1;

  while (i < s.length) {
    if (s[i] === "$") {
      if (s[j] === "$") {
        const key = s.slice(i, j + 1);
        const value = tokenTransform(tokens[key], tokens);
        tokens[key] = value;
        r += value;
        i = j + 1;
        j = i + 1;
      } else {
        j++;
      }
    } else {
      r += s[i];
      i++;
      j++;
    }
  }

  return r;
};
