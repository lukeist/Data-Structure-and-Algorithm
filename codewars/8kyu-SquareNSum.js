function squareSum(numbers) {
  return numbers.map((n) => n * n).reduce((p, c) => p + c, 0);
  //   better   return numbers.reduce((sum,num) => sum + (num * num), 0);
}
