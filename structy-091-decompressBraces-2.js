const decompressBraces = (str) => {
  const stack = [];

  for (let c of str) {
    if (c !== "}") {
      c !== "{" && stack.push(c);
    } else {
      let s = "";
      while (
        stack[stack.length - 1].toLowerCase() !==
        stack[stack.length - 1].toUpperCase()
      ) {
        const current = stack.pop();
        s = current + s;
      }

      const num = stack.pop();
      stack.push(s.repeat(+num));
    }
  }

  return stack.join("");
};

console.log(decompressBraces("2{q}3{tu}v"));
// worst case 9{9{9{9{ab}}}} => 2 x 9 x 9 x 9 x 9
//
//
//
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// // p: str
// // r: str
// // decompressBraces("v3{tu}"); -> qqtu
// //  [v|tututu
// //

// // 2{q}3{tu}v
// // [v
// // qqtututu

// // 2{y3{o}}s -> yoooyooos
// // 2yououou

// // worst case: 9{9{o}} = 81*o  9^(sum of all numbers) * (sum of all characters)

// // s = length of string
// // m = count of brace pairs
// // Time: O((9^m) * s)
// // Space: O((9^m) * s)

// // const decompressBraces = (s) => {
// //   const nums = "123456789";
// //   const stack = [];
// //   for (let char of s) {
// //     if (nums.includes(char)) {
// //       stack.push(Number(char));
// //     } else {
// //       if (char === "}") {

// //         let segment = "";
// //         while (typeof stack[stack.length - 1] !== "number") {
// //           const popped = stack.pop();
// //           segment = popped + segment;
// //         }

// //         const number = stack.pop();

// //         stack.push(repeat(segment, number));

// //     } else if (char !== "{") {
// //         stack.push(char);
// //       }

// //     }
// //   }

// //   return stack.join("");
// // };

// // const repeat = (str, n) => {
// //   let result = "";
// //   for (let i = 0; i < n; i += 1) {
// //     result += str;
// //   }
// //   return result;
// // };

// // //////////////////////////////////////////////////////
// const decompressBraces = (s) => {
//   const nums = "123456789";
//   const stack = [];

//   for (let c of s) {
//     if (c === "{") continue;

//     if (c !== "}") {
//       console.log(c, stack);
//       nums.includes(c) ? stack.push(+c) : stack.push(c);
//     } else {
//       let subs = "";

//       while (typeof stack[stack.length - 1] !== "number") {
//         let current = stack.pop();
//         subs = current + subs;
//       }

//       let num = stack.pop();
//       stack.push(subs.repeat(num));
//     }
//   }

//   return stack.join("");
// };

// /////////////////////////////////////////////////////

// // const decompressBraces = (s) => {
// //   const nums = "123456789";
// //   const stack = [];
// //   let resultS = "";

// //   for (let c of s) {
// //     if (c === "{") continue;

// //     if (c !== "}") {
// //       stack.push(c);
// //     } else {
// //       let subs = "";
// //       let current = null;

// //       while (!nums.includes(current)) {
// //         current = stack.pop();
// //         console.log(current);
// //         subs = current + subs;
// //       }

// //       subs = subs.slice(1).repeat(+subs[0]);

// //       stack.length === 0 ? (resultS += subs) : stack.push(subs);
// //     }
// //   }

// //   stack.length === 1 ? (resultS += stack[0]) : (resultS += stack.join(""));

// //   return resultS;
// // };

// // console.log(decompressBraces("2{q}3{tu}v"));
// // console.log(decompressBraces("2{y3{o}}s"));
// console.log(decompressBraces("2{y3{o}}v3{tu}"));
