// p: str
// r: str
// decompressBraces("2{q}{tu}v");
// // -> qqtututuv
// 2{q}3{tu}v
// 2q
// 2{3{ou}}s -> yoooyooos
// 2y3 ou
//

const decompressBraces = (s) => {
  const nums = "123456789";
  const stack = [];
  const resultS = "";

  let tempS = "";
  for (let c of s) {
    if (c !== "}") {
      if (c === "{") continue;
      stack.push(c);
    } else {
    }
  }
};
