// https://www.codewars.com/kata/622de76d28bf330057cd6af8/train/javascript

function amountOfPages(summary) {
  let sum = 0;
  let sumStr = "";
  while (sumStr.length < summary) {
    sum++;
    sumStr = sumStr + sum;
  }
  return sum;
}

amountOfPages(25);
