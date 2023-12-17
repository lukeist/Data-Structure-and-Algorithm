// https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript

// function productFib(prod) {
//   // ...
//   let arrFib = [0, 1];
//   let numFib = 0;
//   for (let i = 2; i <= arrFib.length; i++) {
//     numFib = arrFib[i - 2] + arrFib[i - 1];
//     numFib * arrFib[i - 1] < prod && arrFib.push(numFib);
//     console.log(arrFib.length, numFib, i);
//   }
//   const lastNumFib = arrFib[arrFib.length - 1];
//   const lastNumFibPlus1 = lastNumFib + arrFib[arrFib.length - 2];
//   const arrTrue = [lastNumFib, lastNumFibPlus1, true];
//   const arrFalse = [lastNumFib, lastNumFibPlus1, false];

//   console.log(prod % lastNumFib === 0 ? arrTrue : arrFalse);
// }
// // productFib(714);
// // productFib(447577); //[610, 987, false]
// productFib(84049690); //[10946, 17711, false]

// better solution:
function productFib(prod) {
  let n = 0;
  let nPlus = 1;
  while (n * nPlus < prod) {
    nPlus = n + nPlus;
    n = nPlus - n;
  }
  console.log(n, nPlus, prod % n === 0);
}
// productFib(447577); //[610, 987, false]
productFib(714);
// productFib(84049690); //[10946, 17711, false]

//////////////////////////////////////////////////////////////////// bad solutions:
// function productFib(prod) {
//     // ...
//     const sqrProd = Math.sqrt(prod);
//     console.log(sqrProd);
//     let arrFib = [0, 1];
//     let numFib = 0;

//     for (let i = 2; i < arrFib.length + 1; i++) {
//       numFib = arrFib[i - 2] + arrFib[i - 1];
//       numFib < sqrProd && arrFib.push(numFib);
//       // console.log(arrFib.length, numFib, i);
//     }
//     console.log(
//       prod % arrFib[arrFib.length - 1] === 0
//         ? [arrFib[arrFib.length - 1], prod / arrFib[arrFib.length - 1], true]
//         : [
//             prod - (prod % arrFib[arrFib.length - 1]),
//             arrFib[arrFib.length - 1] + prod / arrFib[arrFib.length - 1],
//             false,
//           ]
//     );
//     return prod % arrFib[arrFib.length - 1] === 0
//       ? [arrFib[arrFib.length - 1], prod / arrFib[arrFib.length - 1], true]
//       : [
//           prod - (prod % arrFib[arrFib.length - 1]),
//           arrFib[arrFib.length - 1] + prod / arrFib[arrFib.length - 1],
//           false,
//         ];
//   }

// function productFib(prod) {
//     // ...
//     const sqrProd = Math.sqrt(prod);
//     let arrFib = [0, 1];
//     let numFib = 0;
//     for (let i = 2; i <= arrFib.length; i++) {
//       numFib = arrFib[i - 2] + arrFib[i - 1];
//       numFib < sqrProd && arrFib.push(numFib);
//       console.log(arrFib.length, numFib, i);
//     }
//     const lastNumFib = arrFib[arrFib.length - 1];
//     const lastNumFibPlus1 = lastNumFib + arrFib[arrFib.length - 2];
//     const lastNumFibPlus2 = lastNumFibPlus1 + lastNumFib;
//     const arrTrue = [lastNumFib, lastNumFibPlus1, true];
//     const arrFalse =
//       sqrProd < lastNumFibPlus1
//         ? [lastNumFib, lastNumFibPlus1, false]
//         : [lastNumFibPlus1, lastNumFibPlus2, false];

//     console.log(sqrProd);
//     console.log(prod % lastNumFib === 0 ? arrTrue : arrFalse);
//     return prod % lastNumFib === 0 ? arrTrue : arrFalse;

//     //   console.log(lastNumFib, lastNumFibPlus1, lastNumFibPlus2);
//   }
