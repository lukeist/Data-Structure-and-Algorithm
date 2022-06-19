const fib = (n) => {
  if ((n = 0)) return 0;
  if ((n = 1) || (n = 2)) return 1;

  return fib(n - 1) + fib(n - 2);
};

console.log(fib(4));
