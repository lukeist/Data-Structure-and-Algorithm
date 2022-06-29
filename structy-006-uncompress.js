// https://structy.net/problems/premium/uncompress

// p: str
// r: str
// e: uncompress("2c3a1t"); // -> 'ccaaat'
// two pointers, using array for space complexity bcuz string concat creates another string
const uncompress = (s) => {
  let result = [];
  let indexOfLastChar = 0;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let times = s.slice(indexOfLastChar, i);

    if (char.toLowerCase() !== char.toUpperCase()) {
      result.push(char.repeat(times));
      indexOfLastChar = i + 1;
    }
  }

  console.log(result.join(""));
  return result.join("");
};

// uncompress("2c3a1t");

uncompress("3n12e2z");

// const uncompress = (s) => {
//   let result = "";
//   let indexOfLastChar = 0;
//   for (let i = 0; i < s.length; i++) {
//     let char = s[i];
//     let times = s.slice(indexOfLastChar, i);
//     console.log(indexOfLastChar, times);

//     if (char.toLowerCase() !== char.toUpperCase()) {
//       result = result + char.repeat(times);
//       indexOfLastChar = i + 1;
//     }
//   }

//   console.log(result);
//   return result;
// };
