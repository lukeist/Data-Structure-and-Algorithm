function valueOfX(eq) {
  //   eq = eq.split(" ").map((x) => (isNaN(+x) ? x : +x));
  eq = eq.split(" = ");
  eqLeft = eq[0].split(" ");
  eqRight = eq[1].split(" ");

  let sumArr = [];
  let equationCalculator = 1;

  //   for (let i = 0; i < eqLeft.length; i++) {
  //     eqLeft[i] === "-"
  //       ? eqLeft[i + 1] === "x"
  //         ? (equationCalculator = -1)
  //         : sumArr.push(+eqLeft[i + 1])
  //       : eqLeft[i + 1] === "x"
  //       ? (equationCalculator = 1)
  //       : sumArr.push(-eqLeft[i + 1]);
  //   }

  //   for (let i = 0; i < eqRight.length; i++) {
  //     eqRight[i] === "-"
  //       ? eqRight[i + 1] === "x"
  //         ? (equationCalculator = -1)
  //         : sumArr.push(-eqRight[i + 1])
  //       : eqRight[i + 1] === "x"
  //       ? (equationCalculator = 1)
  //       : sumArr.push(eqRight[i + 1]);
  //   }
  console.log(eqRight);

  //   eqLeft = eqLeft.map((val, index, eqLeft) => {
  //     if (val === "-") {
  //       console.log(val);
  //       val = "aaa";
  //     } else {
  //       //   console.log(val);
  //       return (eqLeft[index + 1] = -eqLeft[index + 1]);
  //     }
  //   });

  //   eqRight = eqRight.map((val, index, eqRight) => {
  //     console.log(val, index);
  //     if (val === "-") {
  //       return (eqRight[index + 1] = -eqRight[index + 1]);
  //     }
  //   });

  for (let i = 0; i < eqRight.length; i++) {
    if (eqRight[i] === "-") {
      if (eqRight[i + 1] === "x") {
        equationCalculator = 1;
      } else {
        sumArr.push(-eqRight[i + 1]);
        eqRight.splice(i + 1, 1);
      }
    } else if (eqRight[i] === "+") {
      if (eqRight[i + 1] === "x") {
        equationCalculator = -1;
      } else {
        sumArr.push(eqRight[i + 1]);
        eqRight.splice(i + 1, 1);
      }
    }
    if (!isNaN(+eqRight[i])) {
      sumArr.push(+eqRight[i]);
    }
  }

  for (let i = 0; i < eqLeft.length; i++) {
    if (eqLeft[i] === "-") {
      if (eqLeft[i + 1] === "x") {
        equationCalculator = -1;
      } else {
        sumArr.push(-eqLeft[i + 1]);
        eqLeft.splice(i + 1, 1);
      }
    } else if (eqLeft[i] === "+") {
      if (eqLeft[i + 1] === "x") {
        equationCalculator = 1;
      } else {
        sumArr.push(+eqLeft[i + 1]);
        eqLeft.splice(i + 1, 1);
      }
    }
    if (!isNaN(+eqLeft[i])) {
      sumArr.push(+eqLeft[i]);
    }
  }

  console.log(sumArr.reduce((p, c) => p + c, 0));
}

let eq = "x + 1 = - 9 - 2";
valueOfX(eq);
