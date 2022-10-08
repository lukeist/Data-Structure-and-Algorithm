// p: str
// r: boolean

// O(str.length) O(1)

const pairedParentheses = (str) => {
  if (str[0] === ")") return false;

  let count = 0;
  for (let c of str) {
    if (c === "(") count++;
    if (c === ")") count--;
  }

  return count === 0;
};
