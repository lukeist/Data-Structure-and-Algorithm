// https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript
// p: arr: arr.length%2===1
// r: num int
// e:
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  // filter out

  const sameNum = numbers.filter((num, i, arr) => num === arr[i + 1])[0];
  console.log(numbers.indexOf(numbers[3]));
  console.log(numbers.lastIndexOf(numbers[3]));
  return numbers.filter((num) => num !== sameNum)[0];
}

//  const stray = (numbers) => numbers.filter(el => numbers.indexOf(el) === numbers.lastIndexOf(el))[0]

stray([17, 17, 3, 17, 17, 17, 17]);
