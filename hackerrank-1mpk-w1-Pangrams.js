// https://www.hackerrank.com/challenges/one-month-preparation-kit-pangrams
// p: string
// r: string 'pangram' or 'not pangram'
// e:
// 'We promptly judged antique ivory buckles for the prize' => 'not pangram' (no 'x')
// 'We promptly judged antique ivory buckles for the next prize' => 'pangram'

function pangrams(s) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  // check every & includes
  // conditionals p / not p
  return alpha.split("").every((c) => s.toLowerCase().includes(c))
    ? "pangram"
    : "not pangram";
}

// pangrams("We promptly judged antique ivory buckles for the next prize");
pangrams("We promptly judged antique ivory buckles for the prize");
