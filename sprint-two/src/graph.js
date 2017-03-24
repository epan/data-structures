

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return Object.keys(this).includes(node.toString());
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // pass removeEdge into forEachNode to delete all edges that contain said notes
  // TODO: Refactor this loop with .forEachNode
  for (var key in this) {
    if (typeof this[key] !== 'function') {
      this.removeEdge(key, node);
    }
  }
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].push(toNode);
  this[toNode].push(parseInt(fromNode));
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this[fromNode] = _.without(this[fromNode], toNode);
  this[toNode] = _.without(this[toNode], fromNode);
};

// Pass in a callback which will be executed on each node of the graph.
// TODO: Review for refactor
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    if (typeof this[key] !== 'function') {
      cb(key);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// .addNode(): Constant O(1)
// .contains(): Linear O(n)
// .removeNode(): Linear O(n) - must find node first
// .addEdge(): Linear O(n) - must find node first
// .hasEdge(): Linear O(n)  - must find node first
// .removeEdge(): Linear O(n) - must find node first
// .forEachNode(): Linear O(n) - must find node first
