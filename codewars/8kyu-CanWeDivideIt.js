// https://www.codewars.com/kata/5a2b703dc5e2845c0900005a/train/javascript

// prep
// parameters: number, int +-, no null, undefined, [], strings, or funny input
// return boolean: true/false / not console.log
// examples: (12,1,3) true / (-13,2,13) false
function isDivideBy(number, a, b) {
  // good luck
  // conditionals
  // number % a === 0
  // number % b === 0
  return number % a === 0 && number % b === 0;
}
