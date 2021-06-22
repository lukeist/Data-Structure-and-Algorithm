// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
//prep
// parameters: string, lower case, spaces / no num, no array, no null no undefined no funny stuff? is there anything else that i'm unawared of?
// return: number / not print to console
// example: laiejfe => 4...

// function getCount(str) {
//   let vowelsCount = 0;
//   // put all vowels in a variable
//   //   const vowels = ["a", "o", "i", "e", "u"];
//   const vowels = "aoieu";
//   // filter string wit;h; only vowels to array
//   for (c of str) {
//     for (v of vowels) {
//       v === c && vowelsCount++;
//     }
//   }
//   return vowelsCount;
//   //   str = str.split("").filter((v) => {
//   //     for (const e of vowels) {
//   //       console.log(e, vowels);
//   //       return v === e;
//   //     }
//   //   });
//   //   console.log(str);
//   //   return str.length;
// }

// getCount("abracadabra");
getCount("o a kak ushakov lil vo kashu kakao");

// another solution:

function getCount(str) {
  const vowels = "aeiouAEIOU";
  return str.split("").filter((v) => vowels.includes(v)).length;
}
