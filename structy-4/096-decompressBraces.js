// p: string;
// r: string;
// e: 2{q}3{tu}v
// [qq,3t u
// tu
// -> qqtututuv
// [qq,tututu,v
// 2{y3{o}}s
// -> [2yooo
// ooo
// 

const decompressBraces = (s) => {
    const stack = [];
  
    for (let c of s) {
      if (c === '}') {
        let sub = '';
        while (stack[stack.length - 1].toUpperCase() !== stack[stack.length - 1].toLowerCase()) {
          let newC = stack.pop();
          sub = newC + sub;
        }
        let num = stack.pop();
        stack.push(sub.repeat(+num));
      } else {
        if (c !== '{') stack.push(c);
      }
    }
    return stack.join('');
};  