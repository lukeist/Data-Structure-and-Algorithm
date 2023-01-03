/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */

// p: arr, str
// r: arr

//                                      m
//                                      |
//                                      o
//                              /       /        \
//                              b      n         u
//                              |      / \         |
//                               i     e  i          s
//
// create a class TrieNode
class TrieNode {
  constructor() {
    this.isWord = false;
    this.children = new Array(26).fill(null);
  }
}
//             a b c d e f g h i j k l m n o p
// children = [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]
// create a class Trie
class Trie {
  constructor() {
    this.root = new TrieNode();
    this.alphabet = "abcdefghijklmnopqrstuvwxyz";
  }

  // insert words from arr to class Trie
  insert(word) {
    let c = this.root;
    let a = this.alphabet;
    for (let w of word) {
      let i = a.indexOf(w);
      !c.children[i] && (c.children[i] = new TrieNode());
      c = c.children[i];
    }
    c.isWord = true;
  }

  // add words to result array following each prefix
  getWordsStartWith(prefix) {
    let c = this.root;
    let a = this.alphabet;
    const result = [];
    for (let p of prefix) {
      let i = a.indexOf(p);
      if (!c.children[i]) return result;
      c = c.children[i];
    }

    this.dfsGetWords(prefix, c, result);
    return result;
  }

  // dfs to get words following prefixes
  dfsGetWords(prefix, c, result) {
    if (result.length === 3) return;
    c.isWord && result.push(prefix);
    let a = this.alphabet;
    for (let i = 0; i < a.length; i++) {
      c.children[i] && this.dfsGetWords(prefix + a[i], c.children[i], result);
    }
  }
}

var suggestedProducts = function (products, searchWord) {
  // create new Trie
  const trie = new Trie();
  // insert words
  for (let p of products) {
    trie.insert(p);
  }
  const result = [];
  let prefix = "";
  // add words to result array
  for (let w of searchWord) {
    prefix += w;
    result.push(trie.getWordsStartWith(prefix));
  }

  // return result array
  return prefix;
};

const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const searchWord = "mouse";
console.log(suggestedProducts(products, searchWord));
