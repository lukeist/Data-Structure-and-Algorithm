// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

// return masked string

//prep
// parameters: str any cases
// return: str

// examples:
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""
function maskify(cc) {
  // slice str -4
  // slice / substr 0 -> -4
  return (
    cc
      .slice(0, -4)
      .split("")
      .map((s) => "#")
      .join("") + cc.slice(-4)
  );
  //   console.log(cc.slice(-4));
}

maskify("");
