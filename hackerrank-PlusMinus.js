function plusMinus(arr) {
  // Write your code here
  let arrLength = arr.length;
  let numPositive = 0;
  let numNegative = 0;
  let numZero = 0;
  for (let i = 0; i < arrLength; i++) {
    if (arr[i] > 0) {
      numPositive++;
      //   console.log(numPositive);
    } else if (arr[i] < 0) {
      numNegative++;
    } else {
      numZero++;
    }
  }

  const roundToSixAfterDecimal = (num) => {
    // Math.round((num + Number.EPSILON) * 1000000) / 1000000
    return num.toFixed(6);
  };

  let resultPositive = roundToSixAfterDecimal(numPositive / arrLength);
  let resultNegative = roundToSixAfterDecimal(numNegative / arrLength);
  let resultZero = roundToSixAfterDecimal(numZero / arrLength);
  console.log(resultPositive, resultNegative, resultZero);
}

plusMinus([-4, 3, -9, 0, 4, 1]);
