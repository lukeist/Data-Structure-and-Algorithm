// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digital_root(n) {
  //   console.log(n);
  n = n.toString().split("");
  for (let i = 0; i < +n.join(""); i++) {
    n = n
      .reduce((p, c) => +p + +c, 0)
      .toString()
      .split("");
    // console.log(n);
  }
  console.log(+n.join(""));
  return +n.join("");
}

digital_root(996798);

//better solution
function digital_root(n) {
  return ((n - 1) % 9) + 1; // how? why?
}
