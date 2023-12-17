function findOutlier(integers) {
  const iFilter = integers.filter((num) => num % 2 !== 0);
  return iFilter.length === 1
    ? iFilter[0]
    : integers.filter((num) => num % 2 === 0)[0];
}

findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);
