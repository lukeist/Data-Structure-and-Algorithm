// p: arr
// r: num

// f(i) = min (fi+fi-1, fi+fi-2)
//                           i

const findLowest = (arr) => {
  const result = [arr[0], arr[1]];

  for (let i = 2; i < arr.length; i++) {
    result[i] = arr[i] + Math.min(arr[i - 2], arr[i - 1]);
  }
  console.log(result);
  return Math.min(...result);
};
console.log(findLowest([10, 5, 2, 200, 5, 1]));

// function twoSort(s) {
//   console.log(s.sort());
//   return s.sort().splice(0, 1).split("").join("***");
// }

// twoSort("aaaa");
