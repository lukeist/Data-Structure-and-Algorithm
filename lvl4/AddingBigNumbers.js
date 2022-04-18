// function add(a, b) {
//   let totalSum = [];
//   for (let i = a.length, j = b.length; i > 0, j > 0; i = i - 10, j = j - 10) {
//     let strA = a.length < 10 ? a.slice(0, i) : a.slice(i - 10, i);
//     let strB = b.length < 10 ? b.slice(0, j) : b.slice(j - 10, j);

//     let sum = (+strA + +strB).toString(); // sum of 10 characters of strA and 10 characters of strB

//     a = a.slice(0, i - 10); // remove 10 characters above out of a and b
//     b = b.slice(0, j - 10);

//     totalSum.splice(0, 0, sum); // add sum to array totalSum
//   }

//   for (let i = totalSum.length - 1; i > 0; i--) {
//     if (totalSum[i].length > 10) {
//       // if, for example 500 + 500 = 1000, remove the 1, only take the 000 to current array[i] ([000.toString()])
//       let numberRemovedOneAtTheBeginning = totalSum[i].slice(
//         1,
//         totalSum[i].length
//       );
//       totalSum.splice(i, 1, numberRemovedOneAtTheBeginning);
//       // move & add the 1 above to the array index before it: array[i-1] ([(+xxx+1).toString()])
//       let numberBeforeiAddedOne = (+totalSum[i - 1] + 1).toString();
//       totalSum.splice(i - 1, 1, numberBeforeiAddedOne);
//     }
//   }
//   //   console.log(totalSum.join(""));
//   return totalSum.join("");
// }

// better solution: https://www.codewars.com/kata/525f4206b73515bffb000b21/solutions/javascript

function add(a, b) {
  var res = "",
    c = 0;
  a = a.split("");
  b = b.split("");
  //   console.log(a.length, b, res);

  while (a.length || b.length || c) {
    console.log(c);
    c += ~~a.pop() + ~~b.pop();
    console.log("this" + c);

    res = (c % 10) + res;
    c = c > 9;
  }
  //   return res;
  //   console.log(a, b, res);
}

add(
  "123456789022345678903234567890423",
  "123456789022345678903234567890423456789052345678906234567890"
);
