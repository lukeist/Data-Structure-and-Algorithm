// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage(marks) {
  //TODO : calculate the downward rounded average of the marks array

  return Math.floor(marks.reduce((p, c) => p + c, 0) / marks.length);
}
