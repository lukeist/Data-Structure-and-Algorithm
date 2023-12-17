// https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript
// p: num int > 1
// r: normal num: [] / prime: str
// e:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

function divisors(integer) {
  // sqrt integer
  const sqrtInteger = Math.sqrt(integer);
  const arrDiv = [];
  // loop from 2 => sqrt, push divisors to arr
  // conditionals: if nothing to push -> return str : return []
  for (let i = 2; i <= sqrtInteger; i++) {
    if (integer % i === 0) {
      integer / i !== i ? arrDiv.push(i, integer / i) : arrDiv.push(i);
    }
  }
  return arrDiv.length > 0
    ? arrDiv.sort((a, b) => a - b)
    : `${integer} is prime`;
}
