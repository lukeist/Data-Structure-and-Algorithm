// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

function solution(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    (i % 3 === 0 || i % 5 === 0) && (sum += i);
  }
  console.log(sum);
  return sum;
}

solution(10);
