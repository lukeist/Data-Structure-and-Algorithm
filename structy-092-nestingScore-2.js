// p: str
// r: num
//

//nestingScore("[]"); // -> 1
//nestingScore("[][][]"); // -> 3
//nestingScore("[[][]]"); // -> 4
//nestingScore("[[[]][]]"); // -> 4

// [[[]][]][]
//        ]
// 6

// [][[][]][[]]
//1       2
//
// O(s.length) O(s.length)
const nestingScore = (str) => {
  const stack = [0];

  for (let c of str) {
    if (c === "[") {
      stack.push(0);
    } else {
      const popped = stack.pop();

      popped === 0
        ? (stack[stack.length - 1] += 1)
        : (stack[stack.length - 1] += popped * 2);
    }
  }

  return stack[0];
};
