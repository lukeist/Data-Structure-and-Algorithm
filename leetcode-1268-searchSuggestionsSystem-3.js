/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */

// ["mobile","mouse","moneypot","monitor","mousepad"]
//                                     root
//                                      |           [-,-,-,-,-,-,-,-,-,-,-,-,*,-,-,-,-,-,-,-,-,-,-,-,-,-,]
//                                      m
//                                      |           [-,-,-,-,-,-,-,-,-,-,-,-,-,-,*,-,-,-,-,-,-,-,-,-,-,-,]
//                                      o
//                                     /  \  \      [-,*,-,-,-,-,-,-,-,-,-,-,-,*,-,-,-,-,-,-,*,-,-,-,-,-,]
//                                    b    u  n
//                                    |    |   | \
//                                    i    s   e  i
//                                    |    |   |   |
//                                    l    e*  y   t
//                                    |    |   |   |
//                                    e*   p   p   o
//

// abcdefghijklmnopqrstuvwxyz
//
// create TrieNode
// [-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,]
class TrieNode {
  constructor() {
    this.children = new Array(26);
    this.isWord = false;
  }
}

// create Trie from TrieNode
class Trie {
  constructor() {
    this.alphabet = "abcdefghijklmnopqrstuvwxyz";
    this.root = new TrieNode();
  }

  // insert all products into the Trie
  insert(word) {
    let r = this.root;
    let a = this.alphabet;
    for (let w of word) {
      let i = a.indexOf(w);
      !r.children[i] && (r.children[i] = new TrieNode());
      r = r.children[i];
    }
    r.isWord = true;
  }

  // return an array for each prefix;
  wordsStartWith(prefix) {
    let r = this.root;
    let a = this.alphabet;
    const result = [];
    // go to the last char of prefix
    for (let p of prefix) {
      let i = a.indexOf(p);
      // check if prefix has words
      if (!r.children[i]) return result;
      r = r.children[i];
    }
    this.dfs(prefix, r, result);
    return result;
  }

  // dfs through the Trie and mark isWord: true;
  dfs(prefix, r, result) {
    if (result.length === 3) return;
    r.isWord && result.push(prefix);
    const a = this.alphabet;
    for (let i = 0; i < r.children.length; i++) {
      r.children[i] && this.dfs(prefix + a[i], r.children[i], result);
    }
  }
}

var suggestedProducts = function (products, searchWord) {
  const results = [];
  const trie = new Trie();
  // insert products
  for (let product of products) {
    trie.insert(product);
  }
  // add the returned array to result;
  let prefix = "";
  for (let w of searchWord) {
    prefix += w;
    results.push(trie.wordsStartWith(prefix));
  }
  return results;
};
