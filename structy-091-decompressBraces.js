// https://structy.net/problems/premium/decompress-braces

// p: str
// r: str
const decompressBraces = (s) => {
  const stack = [];

  for (const char of s) {
    if (char === "{") continue;

    if (char === "}") {
      let current;
      let temp = "";

      while (!checkNum(current)) {
        current = stack.pop();

        checkNum(current)
          ? (temp = temp.repeat(+current))
          : (temp = current + temp);
      }

      stack.push(temp);
      continue;
    }

    stack.push(char);
  }

  return stack.join("");
};

const checkNum = (char) => {
  if (char === undefined) return false;
  return char.toLowerCase() === char.toUpperCase();
};

// console.log(decompressBraces("2{q}3{tu}v"));
// -> qqtututuv
console.log(decompressBraces("aw2{q}3{tu}v"));

// -> awqqtututuv
// a w 1 1 { q } 3 { t u  }  v
// 0 1 2 3 4 5 6 7 8 9 10 11 12
