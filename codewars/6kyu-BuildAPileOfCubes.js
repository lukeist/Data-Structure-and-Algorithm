// https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript

// p: num +
// r: num +-
// e:
// findNb(1071225) --> 45
// findNb(91716553919377) --> -1

function findNb(m) {
  let sum = 0;
  let count = 0;
  //  loop from sum to m

  while (sum < m) {
    count++;
    sum += count ** 3;
  }
  console.log(count, sum);

  return sum === m ? count : -1;
}
findNb(1071225);
