// p: obj;
// r: number;
// e: 
//          8
//          | \
//          0 - 5
//          |
//          1
//              2
//              | \
//              3 - 4


const connectedComponentsCount = (graph) => {
    const visited = new Set();
    let count = 0;
    
    for (let node in graph) {
      if (!!explore(graph, +node, visited)) count++;  
    }
    
    return count;
};
  
const explore = (graph, node, visited) => {
if (visited.has(node)) return false;
visited.add(node);

for (let nei of graph[node]) {
    explore(graph, nei, visited);
}

return true;
}
    