// Time complexity : O(M) to build the trie where M is total number of characters in products
// For each prefix we find its representative node in O(len(prefix))
// and dfs to find at most 3 words which is an O(1) operation.
// Thus the overall complexity is dominated by the time required to build the trie.

// In Java there is an additional complexity of O(m^2) due to Strings being immutable, here m is the length of searchWord.
// Space complexity : O(26n)=O(n). Here n is the number of nodes in the trie.
// 26 is the alphabet size. Space required for output is O(m) where m is the length of the search word.

class TrieNode {
  constructor() {
    this.isWord = false;
    this.children = new Array(26).fill(null);
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
    this.alphabet = "abcdefghijklmnopqrstuvwxyz";
  }

  insert(word) {
    let c = this.root;
    const a = this.alphabet;
    for (let w of word) {
      const i = a.indexOf(w);
      !c.children[i] && (c.children[i] = new TrieNode());
      c = c.children[i];
    }
    c.isWord = true;
  }

  getWordsStartWith(prefix) {
    let c = this.root;
    let a = this.alphabet;
    let result = [];

    for (let p of prefix) {
      const i = a.indexOf(p);
      if (!c.children[i]) return result; // prefix of searchWord is not in trie => return [];
      c = c.children[i]; // prefix of searchWord is in trie => set current node to this position => get to the last char of prefix (because all the ones before are already in results);
    }
    this.dfsWithPrefix(c, prefix, result);
    return result;
  }

  dfsWithPrefix(c, word, result) {
    if (result.length === 3) return;
    c.isWord && result.push(word);
    let a = this.alphabet;
    for (let i = 0; i < a.length; i++) {
      if (c.children[i]) {
        this.dfsWithPrefix(c.children[i], word + a[i], result);
      }
    }
  }
}

const suggestedProducts = (products, searchWord) => {
  const trie = new Trie();
  const result = [];
  let prefix = "";

  for (let p of products) {
    trie.insert(p);
  }
  for (let c of searchWord) {
    prefix += c;
    result.push(trie.getWordsStartWith(prefix));
  }
  return result;
};

const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const searchWord = "mouse";
console.log(suggestedProducts(products, searchWord));
