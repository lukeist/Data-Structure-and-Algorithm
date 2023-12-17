// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

function persistence(num) {
  //code me
  let numberOfTimes = 0;
  num = num.toString();
  while (num.length > 1) {
    num = num.split("").reduce((a, c) => +a * +c);
    num = num.toString();
    numberOfTimes++;
    console.log(num);
  }
  //   console.log(num);
  return numberOfTimes;
}

persistence(999);
