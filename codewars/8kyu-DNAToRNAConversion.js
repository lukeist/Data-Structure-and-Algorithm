// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  return dna
    .split("")
    .map((v) => (v === "T" ? "U" : v))
    .join("");
}

// better solution:   return dna.split("T").join("U");
