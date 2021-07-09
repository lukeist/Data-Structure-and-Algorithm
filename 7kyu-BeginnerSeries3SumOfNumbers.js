// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
// parameters: num int +- /
// return: num
// examples
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// (3,-3)
// a=-468 & b=256: expected -77106 to equal -76850
function getSum(a, b) {
  sum = 0;
  const loop = (small, big) => {
    for (i = small; i <= big; i++) {
      sum += i;
      console.log(i, sum);
    }
  };
  a < b ? loop(a, b) : loop(b, a);
  console.log(sum);

  return sum;
}

getSum(-468, 256);
