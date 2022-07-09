// https://structy.net/problems/fib

// p: n
// r: n

const fib = (n, map = {}) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n in map) return map[n];

  map[n] = fib(n - 1, map) + fib(n - 2, map);

  return map[n];
};

console.log(fib(46)); // -> 3

// 0 1 1 2 3 5 8 13
// fib(46); // -> 1836311903
