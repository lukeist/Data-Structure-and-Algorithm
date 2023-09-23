// p: object, string;
// r: string;
// e:
// const tokens = {
//   '$LOCATION$': '$ANIMAL$ park',
//   '$ANIMAL$': 'dog',
// };
//                          i
// tokenTransform('Walk the $ANIMAL$ in the $LOCATION$!', tokens);
//                                 j
//
// -> 'Walk the dog in the dog park!'

const tokenTransform = (s, tokens) => {
  let i = 0,
    j = 1,
    newS = "";

  while (i < s.length) {
    if (s[i] === "$") {
      if (s[j] === "$") {
        const key = s.slice(i, j + 1);
        // newS += tokens[key]; // FOR -> normal situation
        // newS += tokenTransform(tokens[key], tokens); // FOR -> '$LO$': '$AN$ park' situation
        tokens[key] = tokenTransform(tokens[key], tokens); // FOR -> memo
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
