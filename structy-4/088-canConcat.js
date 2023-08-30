// p: string, array;
// r: boolean;

// canConcat("oneisnone", ["one", "none", "is"]); // -> true
// canConcat("oneisnone", ["on", "e", "is", "n"]); // -> true

//                            oneisnone
//                                |on                          
//                              eisnone
//                              
//                              isnone
// canConcat("santahat", ["santah", "san", "hat", "tahat"]); // -> true
//                                  santahat
//                            santah/   san\
//                                at        tahat
//                                              \tahat
//                                                ''
const canConcat = (s, words, memo = {}) => {
    if (s.length === 0) return true;
    if (s in memo) return memo[s];
    
    for (let w of words) {
      if (s.indexOf(w) === 0 && !!canConcat(s.slice(w.length), words, memo)) {
        memo[s] = true;
        return true;
      }
    }
  
    memo[s] = false;
    return false;
};  