// p: string
// r: number;
//
// nestingScore("[[][][]]"); // -> 6
// [6]
//
// [][[]] -> 3
// [0,0

// [][[[]]] -> 5
// [[[]]] -> 5
// [5,
//
// ]
// [1 ,0
const nestingScore = (str) => {
  const stack = [0];

  for (let c of str) {
    if (c === "[") {
      stack.push(0);
    } else {
      const current = stack.pop();
      const lastI = stack.length - 1;

      if (current === 0) {
        stack[lastI]++;
      } else {
        stack[lastI] += current * 2;
      }
    }
  }

  return stack[0];
};
