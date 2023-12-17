function Xbonacci(signature, n) {
  //your code here
  const sigLength = signature.length;
  for (let i = sigLength; i < n; i++) {
    console.log(i);
    // for (value of sign) signature.push();
    let nextNum = 0;
    nextNum = signature
      .slice(i - sigLength, i)
      .reduce((p, c) => p + c, nextNum);
    console.log(nextNum);
    // }

    signature.push(nextNum);
  }
  console.log(signature);
  return signature.slice(0, n);
}

Xbonacci([1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 20);
