function valueOfX(eq) {
  //   eq = eq.split(" ").map((x) => (isNaN(+x) ? x : +x));
  eq = eq.split(" = ");
  eqLeft = eq[0].split(" ");
  eqRight = eq[1].split(" ");
  let sumArr = [];

  const getNumEq = (eqArr, sumArr) => {
    let equationCalculator = 1;
    let tempArr = [];

    for (let i = 0; i < eqArr.length; ++i) {
      if (eqArr[i] === "x") {
        if (eqArr[i - 1] === "-") {
          equationCalculator = 1;
        } else if (eqArr[i - 1] === "+" || eqArr[i - 1] === undefined) {
          // undefined meaning there's no - or + before x
          equationCalculator = -1;
        }
        if (eqArr[i + 1] === undefined) {
          //   console.log(eqArr[i + 1]);
          tempArr.push(0);
        }
      }

      if (eqArr[i] === "-" && eqArr[i + 1] !== "x") {
        tempArr.push(-eqArr[i + 1]);
        eqArr.splice(i + 1, 1);
      } else if (eqArr[i] === "+") {
        tempArr.push(+eqArr[i + 1]);
        eqArr.splice(i + 1, 1);
      }

      if (!isNaN(+eqArr[i])) {
        tempArr.push(+eqArr[i]);
      }

      //   if (eqArr[i] === "-") {
      //     if (eqArr[i + 1] === "x") {
      //       equationCalculator = 1;
      //     } else {
      //       tempArr.push(-eqArr[i + 1]);
      //       eqArr.splice(i + 1, 1);
      //     }
      //   } else if (eqArr[i] === "+") {
      //     if (eqArr[i + 1] === "x") {
      //       equationCalculator = -1;
      //     } else {
      //       tempArr.push(+eqArr[i + 1]);
      //       eqArr.splice(i + 1, 1);
      //     }
      //   }
      //   if (!isNaN(+eqArr[i])) {
      //     tempArr.push(+eqArr[i]);
      //   }
    }

    tempArr = tempArr.map((x) => x * equationCalculator);
    tempArr = tempArr.reduce((p, c) => p + c, 0);
    console.log(tempArr);

    sumArr.push(tempArr);
  };

  getNumEq(eqLeft, sumArr);
  getNumEq(eqRight, sumArr);
  //   console.log(sumArr);

  console.log(sumArr.reduce((p, c) => p + c, 0));
  return sumArr.reduce((p, c) => p + c, 0);
}

// let eq = "x + 1 = - 9 - 2";
let eq = "- x = - 1";
valueOfX(eq);
