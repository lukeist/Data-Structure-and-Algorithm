// https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript

function productFib(prod) {
  // ...
  const sqrProd = Math.sqrt(prod);
  let arrFib = [0, 1];
  let numFib = 0;
  for (let i = 2; i <= arrFib.length; i++) {
    numFib = arrFib[i - 2] + arrFib[i - 1];
    numFib < sqrProd && arrFib.push(numFib);
    console.log(arrFib.length, numFib, i);
  }
  const lastNumFib = arrFib[arrFib.length - 1];
  const lastNumFibPlus1 = lastNumFib + arrFib[arrFib.length - 2];
  const lastNumFibPlus2 = lastNumFibPlus1 + lastNumFib;

  console.log(lastNumFib, lastNumFibPlus1, lastNumFibPlus2);
}

// productFib(714);
productFib(800);

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
