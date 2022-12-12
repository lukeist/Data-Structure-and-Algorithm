// p: str;
// r: str;
// e:
// 2c3a1t -> ccaaat
// s:
const uncompress = (s) => {
  let nums = "123456789";
  let r = "";
  let num = "";

  for (let c of s) {
    if (nums.includes(c)) {
      num += c;
    } else {
      r += c.repeat(+num);
      num = "";
    }
  }

  return r;
};

console.log(uncompress("2c3a1t"));
