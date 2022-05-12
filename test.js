function twoSort(s) {
  console.log(s.sort());
  return s.sort().splice(0, 1).split("").join("***");
}

twoSort("aaaa");
