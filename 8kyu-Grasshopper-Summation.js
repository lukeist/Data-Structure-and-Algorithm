var summation = function (num) {
  // Code here
  console.log([...Array(num + 1).keys()].reduce((p, c) => p + c));

  // better solution
  //   return (num * (num + 1)) / 2;
};

summation(8);
