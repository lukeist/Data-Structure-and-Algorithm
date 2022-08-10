// https://structy.net/problems/premium/nesting-score

// p: str
// r: num

// e:
// [] = 1 | 0 0
// [][][] = 3
// [[][]] = 4
// [[][]][] = 5 // |4

// [[][]][[]] = 6
// 2
// c1 1 1
// c2 2

const nestingScore = (str) => {
  const stack = [0];

  for (const char of str) {
    if (char === "[") stack.push(0);

    if (char === "]") {
      let curr = stack.pop();

      curr === 0 && stack[stack.length - 1]++;
      curr !== 0 && (stack[stack.length - 1] += curr * 2);
    }
  }

  return stack;
};

// console.log(nestingScore("[][][]")); // -> 3
// console.log(nestingScore("[[]]")); // -> 2
console.log(nestingScore("[][[][]][[]]")); // -> 7
//                       |1 4
// NOT WORKING
// const nestingScore = (str) => {
//   const stack = [];
//   let total = 0;
//   let count1 = 0;
//   let countX2 = 1;

//   lastNum = 0

//   for (let i = 0; i < str.length - 1; i++) {
//     if (str[i] === "[" && str[i + 1] === "]") stack.push(1);
//     if (str[i] === "[" && str[i + 1] === "[") stack.push(2);

//     let curr;
//     str[i] === "]" && (curr = stack.pop());
//     curr === 1 && lastNum === 1 && count1++;
//     if (curr === 2) {
//       countX2 = countX2 * 2;
//     }

//     console.log(stack);
//   }
//   return total;
// };
