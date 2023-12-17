// https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript
// p: int +
// r: +int or -1 / not print console
// e:
// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

//Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

function digPow(n, p) {
  // split n into arr of [a,b,c,d,...]
  // use map index to make a^p
  // reduce to find sum
  const sum = n
    .toString()
    .split("")
    .map((n, i) => n ** (p + i))
    .reduce((p, c) => p + c, 0);

  // conditional: if sum % n === 0 => k // if not return -1
  return sum % n === 0 ? sum / n : -1;
}

//  var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
