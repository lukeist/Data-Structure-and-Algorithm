// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

// p: str
// r: str
// e:
// 'Success' => )())())
//"(( @"     =>  "))(("

function duplicateEncode(word) {
  // map based on conditionals indexOf & lastIndexOf
  return word
    .toLowerCase()
    .split("")
    .map((c, i, arr) => (arr.indexOf(c) === arr.lastIndexOf(c) ? "(" : ")"))
    .join("");
}
