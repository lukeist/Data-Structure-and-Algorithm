const quarterOf = (month) => {
  // Your code here
  return month < 4
    ? 1
    : 3 < month && month < 7
    ? 2
    : 6 < month && month < 10
    ? 3
    : 4;
};
