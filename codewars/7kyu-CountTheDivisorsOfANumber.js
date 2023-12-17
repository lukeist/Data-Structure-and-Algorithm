// https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript
//p: int num +
//r: num int +
// e:

// function getDivisorsCnt(n) {
//     // create empty array
//   //  if (n === 1) return 1;
//     let arrD = [];
//     // loop 1 => sqrt n
//     for (let i = 1; i<= n; i++) {
//       // add divisor to array
//       n % i === 0 && arrD.push(i);
//     }
//     return arrD.length;
//   }

function getDivisorsCnt(n) {
  // create empty array
  let arrD = [];
  // loop 1 => sqrt n
  for (let i = 1; i <= Math.sqrt(n); i++) {
    // add divisor to array
    if (n % i === 0) {
      n / i !== i ? arrD.push(n / i, i) : arrD.push(i);
    }
  }
  return arrD.length;
}
