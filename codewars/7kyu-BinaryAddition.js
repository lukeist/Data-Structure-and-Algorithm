// https://www.codewars.com/kata/551f37452ff852b7bd000139

//p: numbers int +
//r: str
// examples:
// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

// function addBinary(a, b) {
//   let result = "";
//   let sum = a + b;
//   // sum a + b
//   // while loop => add each loop's result to str
//   while (sum > 0) {
//     result = (sum % 2).toString() + result;
//     sum = Math.floor(sum / 2);
//   }
//   return result;

// }

// better solution
function addBinary(a, b) {
  console.log((a + b).toString(16));
  return (a + b).toString(2);
}

addBinary(100, 0);
