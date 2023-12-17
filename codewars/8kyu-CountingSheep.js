function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  return arrayOfSheep
    .map((s) => (s === true ? 1 : 0))
    .reduce((p, c) => p + c, 0);

  //   better:   return arrayOfSheeps.filter(Boolean).length;
}

countSheeps([
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
]);
