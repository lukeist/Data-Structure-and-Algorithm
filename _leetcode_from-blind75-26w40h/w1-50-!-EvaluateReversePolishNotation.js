/**
 * @param {string[]} tokens
 * @return {number}
 */

// p: array,
// r: num int
// e:
//
// "10","6","9","3","+","-11","*","/","*","17","+","5","+"
// [17,5
// result = 12
//
//
// "2","1","+","3","*"
// [2,1]
//
var evalRPN = function (tokens) {
  const stack = [];
  const operators = "+-*/";
  for (let t of tokens) {
    if (operators.indexOf(t) >= 0) {
      const second = stack.pop();
      const first = stack.pop();
      const result = calc(t, first, second);
      stack.push(result);
    } else {
      stack.push(parseInt(t));
    }
  }

  return stack[0];
};

const calc = (operator, a, b) => {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return parseInt(a / b);
  }
};
