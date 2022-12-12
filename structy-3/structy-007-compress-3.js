// p: str
// r: str
//         i
// e: ccaaatsss
//  => 2c3at3s
//             i
// e: ccaaatssi

const compress = (s) => {
  let r = "";
  let count = 1;

  for (let i = 1; i <= s.length; i++) {
    if (s[i - 1] !== s[i]) {
      count === 1 ? (r += s[i - 1]) : (r = r + count + s[i - 1]);
      count = 1;
    } else {
      count++;
    }
  }

  return r;
};

module.exports = {
  compress,
};
