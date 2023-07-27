// p: number > 0
// r: boolean
// e:
// isPrime(2); // -> true
// p:

const isPrime = (n) => {
  if (n === 1) return false;
  console.log(n % 2);

  // loop thru n to sqrt(n)
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
};

// n = 4 => 2

isPrime(4);
