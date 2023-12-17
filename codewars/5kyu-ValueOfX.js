function valueOfX(eq) {
  //   eq = eq.split(" ").map((x) => (isNaN(+x) ? x : +x));
  eq = eq.split(" = ");
  eqLeft = eq[0].split(" ");
  eqLeftCalculation = 1;
  eqRight = eq[1].split(" ");
  eqRightCalculation = 1;

  if (eqLeft.indexOf("x") > -1) {
    if (eqLeft[eqLeft.indexOf("x") - 1] === "-") {
      eqLeftCalculation = 1;
      eqRightCalculation = -1;
    } else if (eqLeft[eqLeft.indexOf("x") - 1] !== "-") {
      eqLeftCalculation = -1;
    }
  }

  if (eqRight.indexOf("x") > -1) {
    if (eqRight[eqRight.indexOf("x") - 1] === "-") {
      eqRightCalculation = 1;
      eqLeftCalculation = -1;
    } else if (eqRight[eqRight.indexOf("x") - 1] !== "-") {
      eqRightCalculation = -1;
    }
  }

  let sumArr = [];

  const getNumEq = (eqArr, sumArr) => {
    let tempArr = [];
    for (let i = 0; i < eqArr.length; ++i) {
      if (eqArr[i] === "x") {
        // if there's only x on this side of equation
        if (eqArr[i + 1] === undefined || eqArr[i - 2] === undefined) {
          tempArr.push(0);
        }
      }

      if (eqArr[i] === "-" && eqArr[i + 1] !== "x") {
        tempArr.push(-eqArr[i + 1]);
        eqArr.splice(i + 1, 1);
      } else if (eqArr[i] === "+" && eqArr[i + 1] !== "x") {
        tempArr.push(+eqArr[i + 1]);
        eqArr.splice(i + 1, 1);
      }

      if (!isNaN(+eqArr[i])) {
        tempArr.push(+eqArr[i]);
      }
    }

    sumArr.push(tempArr);
  };

  getNumEq(eqLeft, sumArr);
  getNumEq(eqRight, sumArr);
  sumArr[0] = sumArr[0]
    .map((x) => x * eqLeftCalculation)
    .reduce((p, c) => p + c, 0);
  sumArr[1] = sumArr[1]
    .map((x) => x * eqRightCalculation)
    .reduce((p, c) => p + c, 0);
  console.log(sumArr);

  console.log(sumArr.reduce((p, c) => p + c, 0));
  return sumArr.reduce((p, c) => p + c, 0);
}

// let eq = "- x + 1 = - 9 - 2";
// let eq = "- x = - 1";
// let eq = "10 + x = 77";
let eq = "+ 123 - 104 = - 42 + x";
valueOfX(eq);
