// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

// preps
// parameters: number
// return: boolean / no c.l
const isSquare = (num) => {
  if (num < 0) return false;
  if (num === 0) return true;
  return num % Math.sqrt(num) === 0;

  // better solution:   return Math.sqrt(n) % 1 === 0;
};
