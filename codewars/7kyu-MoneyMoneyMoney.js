// https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript

// p: num, int & floatm, ++
// r: num / not print
// e
//1000, 0.05, 0.18, 1100 ==> 3

function calculateYears(principal, interest, tax, desired) {
  let year = 0;
  let gain = 0;
  // loop while gain < desired, get the yearly sum and add to gain
  while (principal < desired) {
    let interestTotal = principal * interest;
    let principalPlusInterest = principal + interestTotal;
    let taxAfterInterest = interestTotal * tax;
    principal = principalPlusInterest - taxAfterInterest;

    year++;
    console.log(
      interestTotal,
      principalPlusInterest,
      taxAfterInterest,
      principal,
      year
    );
  }
  return year;
}

// calculateYears(1000, 0.01625, 0.18, 1200);
calculateYears(1000, 0.05, 0.18, 1100);
