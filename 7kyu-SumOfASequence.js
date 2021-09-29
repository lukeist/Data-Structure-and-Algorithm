// https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript
// p: num +
// r: num
// e:
// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

const sequenceSum = (begin, end, step) => {
  // creat sum
  const sum = 0;
  // loop from begin to end with step

  for (let i = begin; i <= end; i += step) {
    sum += i;
  }
  return sum;
};
