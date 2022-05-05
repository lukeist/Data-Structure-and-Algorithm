// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  if (iterable.length === 0) return [];
  typeof iterable === "string" && (iterable = iterable.split(""));
  const tempArr = [];
  for (let i = 0; i < iterable.length; i++) {
    iterable[i] !== iterable[i + 1] && tempArr.push(iterable[i]);
  }
  console.log(tempArr);
  return tempArr;
};

uniqueInOrder("ABBCcAD");
uniqueInOrder([1, 2, 2, 3, 3]);
uniqueInOrder([]);
