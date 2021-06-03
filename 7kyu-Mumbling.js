// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

// parameters: string / no num no array no object no null undefined or funny stuff.
// return string / no print to console
// examples : 'aeF' => A-Ee-Fff
const accum = (s) => {
  // split string to array
  // map each item in array to an array with n items
  //// join all items
  //   return s
  //     .split("")
  //     .map((v, i) =>
  //       Array.from(Array(i + 1), (e, i) => (e = v.toLowerCase())).join("")
  //     )
  //     .map((v, i) => v[0].toUpperCase() + v.slice(1))
  //     .join("-");

  // better solutoin:
  return s
    .split("")
    .map((e, i) => e.toUpperCase() + e.repeat(i).toLowerCase())
    .join("-");
};

accum("asdfEE");
