function isPrime(num) {
  //TODO
  if (num < 2) return false;
  //   if (num === 2) return true;
  const numSqrt = Math.sqrt(num);
  //   console.log(numSqrt);
  for (let i = 2; i <= numSqrt; i++) {
    if (num % i === 0) {
      console.log(num % i, false, "not prime");
      return false;
    }
  }
  console.log("prime", true);
  return true;
}

// isPrime(7);
// isPrime(75);
isPrime(2);
