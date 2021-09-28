// https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/javascript

// p: num, num, string
// return num float
// e:
// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5

function arithmetic(a, b, operator) {
  //your code here!
  // use switch
  switch (operator) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
  }
}
