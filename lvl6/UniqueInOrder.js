// // https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

// var uniqueInOrder = function (iterable) {
//   //your code here - remember iterable can be a string or an array
//   if (iterable.length === 0) return [];
//   typeof iterable === "string" && (iterable = iterable.split(""));
//   const tempArr = [];
//   for (let i = 0; i < iterable.length; i++) {
//     iterable[i] !== iterable[i + 1] && tempArr.push(iterable[i]);
//   }
//   console.log(tempArr);
//   return tempArr;
// };

// better solutioin
var uniqueInOrder = function (iterable) {
  // // console.log(
  // // return [...iterable].filter((a, i) => {
  // //   console.log(iterable[i + 1]);
  // //   a !== iterable[i + 1];
  // // });
  // // );
  // // console.log(
  // return [...iterable].filter((a) => {
  //   console.log(iterable[iterable.indexOf(a) + 1]);
  //   a !== iterable[iterable.indexOf(a) + 1]; /////////////// this is not working because indexOf(a) will take the first a in iterable (when it loops through iterable), not the next index in iterable
  // });
  // // );

  console.log([...iterable].filter((a, i) => a !== iterable[i + 1]));
};
// uniqueInOrder("AAAABBCccccDDDDeeeEEDDDff");
uniqueInOrder("ABBCcADDD");
uniqueInOrder([1, 2, 2, 3, 3]);
uniqueInOrder([]);
