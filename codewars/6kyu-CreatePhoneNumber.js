// function createPhoneNumber(numbers) {
//   console.log(
//     `(${[...numbers].splice(0, 3).join("")}) ${[...numbers]
//       .splice(3, 3)
//       .join("")}-${[...numbers].splice(6).join("")}`
//   );
// }

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => returns "(123) 456-7890"

//better solution:
function createPhoneNumber(numbers) {
  var format = "(xxx) xxx-xxxx";

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }

  return format;
}
