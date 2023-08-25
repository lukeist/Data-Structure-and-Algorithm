// p: string
// r: string;

// e:
//   i
// ccaaatsss => 2c3at3s
//      j
// ppoppppp => 2po5p

const compress = (s) => {
  let n = "";
  let i = 0,
    j = 1;

  while (j <= s.length) {
    if (s[i] !== s[j]) {
      const diff = j - i;
      if (diff === 1) {
        n += s[i];
      } else {
        n += diff + s[i];
      }
      i = j;
      j++;
    } else {
      j++;
    }
  }

  return n;
};
