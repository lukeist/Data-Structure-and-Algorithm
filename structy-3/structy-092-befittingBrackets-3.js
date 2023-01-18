// p: str
// r: boolean
// ({[]})
// )}]
// ][][}
// |

const map = {
  "(": ")",
  "[": "]",
  "{": "}",
};

const befittingBrackets = (str) => {
  const stack = [];
  for (let c of str) {
    if (c in map) {
      stack.push(map[c]);
    } else {
      if (stack.length === 0) return false;
      stack[stack.length - 1] === c && stack.pop();
    }
  }

  return stack.length === 0;
};
