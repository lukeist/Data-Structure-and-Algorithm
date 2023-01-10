// p: str
// r: num
// e: [[][]][] => 5
//          i
// [4 0
const nestingScore = (str) => {
  const stack = [0];
  for (let c of str) {
    if (c === "[") {
      stack.push(0);
    } else {
      const current = stack.pop();
      if (current === 0) {
        stack[stack.length - 1] += 1;
      } else {
        stack[stack.length - 1] += current * 2;
      }
    }
  }

  return stack[0];
};
