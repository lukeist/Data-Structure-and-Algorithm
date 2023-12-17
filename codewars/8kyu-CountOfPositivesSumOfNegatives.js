// https://www.codewars.com/kata/576bb71bbbcf0951d5000044

function countPositivesSumNegatives(input) {
  if (input === null || input.length < 1) return [];
  return [
    input.filter((n) => n > 0).length,
    input.filter((n) => n < 0).reduce((p, c) => p + c, 0),
  ];
}
