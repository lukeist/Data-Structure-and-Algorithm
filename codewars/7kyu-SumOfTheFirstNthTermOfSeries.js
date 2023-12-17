// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript

// p: int +
// r: string of num.00
// examples:
// 1 --> 1/1 --> "1.00"
// 2 --> 1/1 + 1/4 --> "1.25"
// 5 --> 1/1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n) {
  // loop start with i= 1 , i <= n*3-2 , i+3
  let sum = 0;
  for (let i = 1; i <= n * 3 - 2; i += 3) {
    sum += 1 / i;
  }
  return (Math.round(sum * 100) / 100).toFixed(2);
  // convert to 2 decimal places
  // convert to str
}

SeriesSum(5);

// anotehr solution:
// for (var s = 0, i = 0; i < n; i++) {
//     s += 1 / (1 + i * 3)
//   }
