// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

// function findOdd(A) {
//   let sortA = [...A].sort();
//   let mainValueInA = sortA.filter((v, i) => v !== sortA[i + 1]);

//   for (value of mainValueInA) {
//     let temp = 0;

//     for (v of A) {
//       if (value === v) temp++;
//     }

//     if (temp % 2 !== 0) return value;
//   }
// }

const findOdd = (xs) =>
  xs.reduce((a, b) => {
    a ^ b;
    console.log(b, a ^ b);
  });

findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);
