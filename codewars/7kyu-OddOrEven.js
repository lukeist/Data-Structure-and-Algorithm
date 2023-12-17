// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
// p: []
// r: str
// e:
// []=> [0]=> 'even'
// [1,2,3] => 'even'
// [-13,0,5] => 'oodd'

function oddOrEven(array) {
  //enter code here
  // use reduce get sum
  //conditionals: if sum % 2 !== 0 : odd
  if (array.reduce((a, b) => a + b, 0) % 2 !== 0) return "odd";
  return "even";
}
