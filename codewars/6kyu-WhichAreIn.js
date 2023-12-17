// https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript
// p: arr
// r: arr
// e:
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// a1 = ["xyz", "live", "strong"] =>  ["live", "strong"]
// a1 = ["live", "strong", "arp"] => ["arp", "live", "strong"]
// a1 = ["tarp", "mice", "bull"] => []

function inArray(array1, array2) {
  // loop a2, check if each value a2 contain each value of a1
  const result = array1.filter((str) => {
    for (let i = 0; i < array2.length; ++i) {
      if (array2[i].includes(str)) return str;
    }
  });

  return result.sort();
}

inArray(
  ["arp", "live", "strong"],
  ["lively", "alive", "harp", "sharp", "armstrong"]
);

// better
// return array1.filter((a1) => array2.find((a2) => a2.match(a1))).sort();
