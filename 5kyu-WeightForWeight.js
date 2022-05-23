// https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript
// prep
// parameters: sring
// return: string
// examples: "56 65 74 100 99 68 86 180 90" =>"100 180 90 56 65 74 68 86 99"

// // my solution
// function orderWeight(str) {
//   // split to array
//   // sum each item in the array using map & reduce
//   // sort the array
//   // join back to string
//   return str
//     .split(" ")
//     .map((v) => [v, v.split("").reduce((p, c) => +p + +c, 0)])
//     .sort((a, b) => {
//       const numDiff = a[1] - b[1];
//       if (numDiff) return numDiff;
//       return a[0].localeCompare(b[0]);
//     })
//     .map((v) => v[0])
//     .join(" ");
// }

// orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"); // '11 11 2000 10003 22 123 1234000 44444444 9999'
// orderWeight("56 65 74 100 99 68 86 180 90");
orderWeight(
  "99297 150 391875 67 67307 187 201397 163 368805 70 92986 181 72858 189 309226 15 418042 182 241651 33 18"
);
// '150 15 33 70 18 163 181 182 67 187 189 241651 418042 201397 309226 67307 368805 72858 391875 92986 99297'
// '15 150 33 70 18 163 181 182 67 187 189 241651 418042 201397 309226 67307 368805 72858 391875 92986 99297'
// '15 33 150 70 18 163 181 182 67 187 189 241651 418042 201397 309226 67307 72858 368805 391875 92986 99297'

// better solutions ?
//// 1
// function orderWeight(strng) {
//   const sum = (str) => str.split("").reduce((sum, el) => sum + +el, 0);

//   console.log(
//     strng.split(" ").sort((a, b) => {
//       let sumA = sum(a);
//       let sumB = sum(b);
//       return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
//     })
//   );
//   return strng
//     .split(" ")
//     .sort((a, b) => {
//       let sumA = sum(a);
//       let sumB = sum(b);
//       return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
//     })
//     .join(" ");
// }
//// 2
// function orderWeight(str) {
//   const sum = (x) => x.split("").reduce((res, cur) => res + +cur, 0);
//   return str
//     .split(" ")
//     .sort((a, b) => {
//       // const diff = sum(a) - sum(b);
//       return sum(a) - sum(b) == 0 ? (a > b ? 1 : -1) : sum(a) - sum(b);
//     })
//     .join(" ");
// }

// my solution with sum(x)
function orderWeight(str) {
  const sum = (x) => x.split("").reduce((p, c) => +p + +c, 0);
  console.log(
    str
      .split(" ")
      .sort((a, b) => sum(a) - sum(b))
      .join(" ")
  );
  return str
    .split(" ")
    .sort((a, b) => {
      sum(a) - sum(b);
    })
    .join(" ");
}
