// https://structy.net/problems/premium/compress

// p: str
// r: str
// e: compress('ccaaatsss'); // -> '2c3at3s'

const compress = (s) => {
  const result = [];
  let j = 1;

  for (let i = 1; i <= s.length; i++) {
    if (s[i] !== s[i - 1]) {
      console.log(result);
      result.push(j === 1 ? s[i - 1] : j + s[i - 1]);
      j = 1;
    } else {
      j++;
    }
  }
  console.log(result);
  return result.join("");
};

compress("ccaaatsss");
