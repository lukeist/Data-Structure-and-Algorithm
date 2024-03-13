/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// p: num float; num int;
// r: num float;
// e:

// 2*2*2*2*2*2*2*2*2*2
// n = 1
// r = 4*16*16
// x = 16*16
//
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// O(logn) O(1)
////////////////////////////////////////////////
function myPow(x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;
  if (n < 0) return 1 / myPow(x, -n);

  let r = 1;
  while (n > 0) {
    if (n % 2 === 1) {
      r *= x;
    }
    x *= x;
    n = Math.floor(n / 2);
  }
  return r;
}

// Time Limit Exceeded
// x = 2.00000
// n = -2147483648

// Time Limit Exceeded
// x = 1.00000
// n = 2147483647

// Time Limit Exceeded
// x = -1.00000
// n = 2147483647

//     2^5      2^5
//          |
// 2*2*2*2*2*2*2*2*2*2
//

//
// 2^2 2^2  2^2 2^2
//  2^4      2^4
//        |
// 2*2*2*2*2*2*2*2
//
//

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// // O(logn) O(logn)
////////////////////////////////////////////////
// var myPow = function(x, n) {
//     if (x === 1) return 1;
//     if (x === -1) return n % 2 === 0 ? 1 : -1;
//     const absN = Math.abs(n);

//     const findN = (x, n, memo) => {
//         if (n in memo) return memo[n];
//         if (n === 0) return 1;
//         if (n === 1) return x;
//         if (n === 2) {
//             memo[n] = x * x
//             return x * x
//         };
//         if (n % 2 === 1) {
//             let r = 1;
//             for (let i = 1; i <= n; i++) {
//                 r *= x;
//             }
//             memo[n] = r;
//             return r;
//         }
//         const half = findN(x, n / 2, memo)
//         memo[n] = half * half;
//         return memo[n];
//     }

//     const result = findN(x, absN, {})

//     if (n < 0) return 1 / result
//     return result;
// };

//     // Maximum call stack size exceeded
//     // x = 0.44528
//     // n = 0

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// O(n) O(1)
////////////////////////////////////////////////
// var myPow = function(x, n) {
//     if (x === 1) return x;
//     // if (x === 0) return 0;

//     let r = 1;
//     for (let i = 1; i <= Math.abs(n); i++) {
//         r *= x;
//     }

//     if (n < 0) {
//         return 1 / r;
//     } else return r;

// };
