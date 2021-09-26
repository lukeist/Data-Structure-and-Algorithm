// https://leetcode.com/problems/the-kth-factor-of-n/

// p: 2 + ints
// r: 1 +int or // -1
// e:
// Example 1:

// Input: n = 12, k = 3
// Output: 3
// Explanation: Factors list is [1, 2, 3, 4, 6, 12], the 3rd factor is 3.
// Example 2:

// Input: n = 7, k = 2
// Output: 7
// Explanation: Factors list is [1, 7], the 2nd factor is 7.
// Example 3:

// Input: n = 4, k = 4
// Output: -1
// Explanation: Factors list is [1, 2, 4], there is only 3 factors. We should return -1.

var kthFactor = function (n, k) {
  // find all factors of n => arr
  //// loop form 1 to n /2
  let arrI = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) arrI.push(i);
  }
  // sort arr
  const secondPartOfI = arrI.map((num) => n / num).reverse();
  //   console.log(arrI.concat(secondPartOfI));

  // return arr[k] or -1
  //   console.log(arrI, arrI[arrI.length - 1], secondPartOfI, secondPartOfI[0]);

  arrI =
    arrI[arrI.length - 1] === secondPartOfI[0]
      ? arrI.concat(secondPartOfI.slice(1))
      : arrI.concat(secondPartOfI);
  console.log(arrI[k - 1] ? arrI[k - 1] : -1);

  return arrI[k - 1] ? arrI[k - 1] : -1;
};

// kthFactor(12, 3);
kthFactor(4, 4);
