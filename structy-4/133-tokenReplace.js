// p: object, string;
// r: string;
// e:
// {
//   '$second$': 'beta',
//   '$first$': 'alpha',
//   '$third$': 'gamma',
// };
// i
// $first$second$third$
//       j

const tokenReplace = (s, tokens) => {
  let newS = "";
  let i = 0,
    j = 1;

  while (i < s.length) {
    if (s[i] === "$") {
      if (s[j] === "$") {
        let key = s.slice(i, j + 1);
        newS += tokens[key];
        i = j + 1;
        j = i + 1;
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
