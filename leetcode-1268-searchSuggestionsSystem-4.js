/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
// "mobile","mouse","moneypot","monitor","mousepad"
//
//                      m [,,,,,,,,,,,,*,,,,,,,,,,,,,,,]
//                      |
//                      o [,,,,,,,,,,,,,,*,,,,,,,,,,,,,]
//                   /  |  \
//                  b   u   n
//                /     |    | \
//               i      s    i  e
//               |      |    |   |
//               l    * e    t    y
//               |      |    |   |
//             * e      p    o   p
//                      |    |   |
//                      a  * r   o
//                      |        |
//                    * d      * t

// "mobile","mouse","moneypot","monitor","mousepad"
// m:     ["mobile","moneypot","monitor"]
// mo:    ["mobile","moneypot","monitor"]
// mou:   ["mouse","mousepad"]
// mous:  ["mouse","mousepad"]
// mouse: ["mouse","mousepad"]

// create node for a Trie
class TrieNode {
  constructor() {
    this.isWord = false;
    this.children = new Array(26);
  }
}

// create a Trie
class Trie {
  constructor() {
    this.root = new TrieNode();
    this.alphabet = "abcdefghijklmnopqrstuvwxyz";
  }

  // add all words to trie
  insert(word) {
    const a = this.alphabet;
    let r = this.root;

    for (let c of word) {
      const i = a.indexOf(c);
      if (!r.children[i]) r.children[i] = new TrieNode();
      r = r.children[i];
    }

    r.isWord = true;
  }

  // use prefix to return an array of 3 first words
  addWordsWith(prefix) {
    const a = this.alphabet;
    let r = this.root;
    const result = [];
    // go to the end of each prefix
    for (let c of prefix) {
      const i = a.indexOf(c);
      if (!r.children[i]) return result;
      r = r.children[i];
    }
    // use dfs to get the word from prefix's end
    this.dfs(prefix, r, result);
    return result;
  }

  // dfs prefix to get full words for addWordsWith
  dfs(prefix, r, result) {
    if (result.length === 3) return;
    if (r.isWord) result.push(prefix);
    const a = this.alphabet;

    for (let i = 0; i < a.length; i++) {
      if (r.children[i]) this.dfs(prefix + a[i], r.children[i], result);
    }
  }
}
//

// create function
var suggestedProducts = function (products, searchWord) {
  const trie = new Trie();
  for (let product of products) {
    trie.insert(product);
  }

  const results = [];
  let prefix = "";
  for (let c of searchWord) {
    prefix += c;
    results.push(trie.addWordsWith(prefix));
  }

  return results;
};
