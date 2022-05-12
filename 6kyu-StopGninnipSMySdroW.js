// https://www.codewars.com/kata/5264d2b162488dc400000001

// function spinWords(string) {
//   //TODO Have fun :)

//   string = string.split(" ");

//   for (let i = 0; i < string.length; i++) {
//     if (string[i].length >= 5) {
//       string.splice(i, 1, string[i].split("").reverse().join(""));
//     }
//   }
//   return string.join(" ");
// }

spinWords("Just kidding there is still one more");
// better solution:
// use map
function spinWords(string) {
  return string
    .split(" ")
    .map((item) => (item.length < 5 ? item : item.split("").reverse().join("")))
    .join(" ");
}
