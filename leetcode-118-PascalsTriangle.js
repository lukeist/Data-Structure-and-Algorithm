// p: num
// r: arr
// e:
// Input: numRows = 5
//                             i     j
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

//      [1] => [1,1]
// base case: 1 => [[1]]
// base case: 2 => [[1],[1,1]]
// n =
// recursion O(n^2) O(n^2)
// var generate = function (n) {
//   if (n === 1) return [[1]];
//   if (n === 2) return [[1], [1, 1]];

//   const previousSet = generate(n - 1);
//   const last = previousSet[previousSet.length - 1];
//   const tempA = [1];

//   for (let i = 1; i < last.length; i++) {
//     tempA.push(last[i - 1] + last[i]);
//   }
//   tempA.push(1);

//   previousSet.push(tempA);
//   return previousSet;
// };

var generate = function (n) {
  if (n === 1) return [[1]];
  const result = [[1], [1, 1]];
  for (let i = 3; i <= n; i++) {
    const last = result[i - 2];

    const arr = [1];
    for (let j = 1; j < last.length; j++) {
      arr.push(last[j - 1] + last[j]);
    }
    arr.push(1);
    result.push(arr);
  }

  return result;
};

console.log(generate(5));
