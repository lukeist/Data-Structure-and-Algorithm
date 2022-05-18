function century(year) {
  // Finish this :)
  let cent = +year.toString().slice(0, -2);
  //   return year > 100 ? +year.toString().slice(0, -2) + 1 : 1;
  if (year < 100) return 1;
  return year % 100 === 0 ? cent : cent + 1;
}

century(1900);

//better: const century = year => Math.ceil(year/100)
