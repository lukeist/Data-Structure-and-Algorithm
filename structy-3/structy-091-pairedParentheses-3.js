const pairedParentheses = (str) => {
  const stack = [];

  for (let c of str) {
    if (c === "(") stack.push(")");
    if (c === ")") {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  return stack.length === 0;
};
