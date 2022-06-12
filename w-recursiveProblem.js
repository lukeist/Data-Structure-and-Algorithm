// https://www.youtube.com/watch?v=ngCos392W4w
// 1.

const sumAll = (n) => {
  //   let sum = 0;
  //   for (i = 0; i <= n; ++i) {
  //     sum += i;
  //   }
  if (n === 0) {
    return 0;
  } else {
    console.log(n + sumAll(n - 1));
    return n + sumAll(n - 1);
  }
};

// sumAll(2);

// sumAll(0) = 0
// sumAll(1) = 1
// sumAll(2) = 3
// sumAll(3) = 6
sumAll(4);
