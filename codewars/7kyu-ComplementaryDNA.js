//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

// parameters : str uppercase / no no no
// return: string / no c.l
// examples: 'ATTGC' => 'TAACG' / 'GTAT' => CATA
const DNAStrand = (dna) => {
  // create complemennt object
  const compDNA = { A: "T", T: "A", C: "G", G: "C" };
  // map
  return dna
    .split("")
    .map((c) => compDNA[c])
    .join("");
};
