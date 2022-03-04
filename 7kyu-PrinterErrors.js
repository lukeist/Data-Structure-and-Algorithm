// https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript

// p: str str.length >=1
// r: str
// examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

function printerError(s) {
  const color = "abcdefghijklm";
  // convert s to array
  // filter char that no in color: color.includes()
  // return new arr.length / s.length
  return `${s.split("").filter((c) => !color.includes(c)).length}/${s.length}`;
}
