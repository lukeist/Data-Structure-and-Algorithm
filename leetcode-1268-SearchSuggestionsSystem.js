// https://leetcode.com/problems/search-suggestions-system/
// 2 p: arr ; str
// r: arr of arr

// e:
// Example 1:

// Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
// Output: [
// ["mobile","moneypot","monitor"],
// ["mobile","moneypot","monitor"],
// ["mouse","mousepad"],
// ["mouse","mousepad"],
// ["mouse","mousepad"]
// ]
// Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"]
// After typing m and mo all products match and we show user ["mobile","moneypot","monitor"]
// After typing mou, mous and mouse the system suggests ["mouse","mousepad"]
// Example 2:

// Input: products = ["havana"], searchWord = "havana"
// Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]
// Example 3:

// Input: products = ["bags","baggage","banner","box","cloths"], searchWord = "bags"
// Output: [["baggage","bags","banner"],["baggage","bags","banner"],["baggage","bags"],["bags"]]

var suggestedProducts = function (products, searchWord) {
  let searchWordLength = searchWord.length;
  const result = [];
  products.sort();
  for (let i = 1; i <= searchWordLength; i++) {
    // slice each str from 0 to searchWordLength => match?
    const productsFiltered = products.filter(
      (str) => str.slice(0, i) === searchWord.slice(0, i)
    );

    // productsFiltered.sort();

    result.push(
      productsFiltered.slice(0, 3)
      //   productsFiltered.length === 0
      //     ? []
      //     : productsFiltered.length >= 3
      //     ? [productsFiltered[0], productsFiltered[1], productsFiltered[2]]
      //     : productsFiltered.length === 2
      //     ? [productsFiltered[0], productsFiltered[1]]
      //     : [productsFiltered[0]]
    );
  }

  console.log(result);
  return result;
};

// suggestedProducts(
//   ["mobile", "mouse", "moneypot", "monitor", "mousepad"],
//   "mouse"
// );

// suggestedProducts(["havana"], "havana");
suggestedProducts(["havana"], "tatiana");
// suggestedProducts(["bags", "baggage", "banner", "box", "cloths"], "bags");
