const subsets = (elements) => {
  if (elements.length === 0) return [[]];

  const firstE = elements[0]; // a
  const eWOfirstE = subsets(elements.slice(1)); // [[], [b]]
  const eWfirstE = eWOfirstE.map((e) => [firstE, ...e]);

  return [...eWOfirstE, ...eWfirstE];
};
