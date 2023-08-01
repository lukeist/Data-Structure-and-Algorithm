// p: string
// r: boolean
// e: (){}[](()) // -> true
// (})()
// )())
// [

const befittingBrackets = (str) => {
  if (str.length % 2) return false;
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let c of str) {
    if (c in map) {
      stack.push(map[c]);
    } else {
      const lastIndex = stack.length - 1;
      if (c === stack[lastIndex]) {
        stack.pop();
      } else return false;
    }
  }

  return stack.length === 0;
};
