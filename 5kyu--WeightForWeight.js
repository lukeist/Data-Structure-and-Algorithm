function orderWeight(str) {
  // your code

  str = str.split(" ");
  //   for (let value of str) {
  //     let tempValue = value
  //       .split("")
  //       .reduce((p, c) => +p + +c, 0)
  //       .toString();
  //     console.log(value);
  //   }

  str = str.map(
    (v) => (v = v.split("").reduce((p, c) => +p + +c, 0))
    // .toString()
  );

  console.log(str, str.sort());
}

orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123");
