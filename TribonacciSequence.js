function tribonacci(signature, n) {
  //your code here
  if (n === 0) return [];
  for (let i = 0; i <= 3; i++) {
    if (n === i) {
      return signature.slice(0, i);
    }
  }
  for (let i = 3; i < n; i++) {
    signature.push(signature[i - 3] + signature[i - 2] + signature[i - 1]);
  }

  console.log(signature);
  return signature;
}

//better solution
function tribonacci(signature, n) {
  for (let i = 3; i < n; i++) {
    signature.push(signature[i - 3] + signature[i - 2] + signature[i - 1]);
  }

  console.log(signature);
  return signature.slice(0, n); //return trib - length of n
}

tribonacci([1, 2, 3], 3);
