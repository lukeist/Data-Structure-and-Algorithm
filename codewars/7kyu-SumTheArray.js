// https://www.codewars.com/kata/56bdf9d50d0b6433df001074/train/javascript

Array.prototype.sum = function () {
  if (this.length < 1) return 0;
  return this.reduce((p, c) => p + c, 0);
};

var arr = [10, 28, 14, 33];

arr.sum();
