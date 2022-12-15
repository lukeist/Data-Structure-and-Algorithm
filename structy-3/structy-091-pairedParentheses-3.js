// p: str
// r: boolean;

// ("(david)((abby))"); // -> true

const pairedParentheses = (str) => {
  const stack = [];
  const map = { "(": ")" };

  for (let c of str) {
    if (c in map) stack.push(map[c]);
    if (c === ")") {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  return stack.length === 0;
};
