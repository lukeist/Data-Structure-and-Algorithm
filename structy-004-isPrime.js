// p: num
// r: boolean

// O(sqrt(n)) O(1)
const isPrime = (n) => {
  if (n === 1) return true;
  const sqrtN = Math.sqrt(n);

  for (let i = 2; i <= sqrtN; i++) {
    if (n % i === 0) return false;
  }

  return true;
};
