var BinarySearchTree = function(value) {

  var binTree = {};
  binTree.value = value;
  binTree.left = undefined;
  binTree.right = undefined;

  _.extend(binTree, binTreeMethods);

  return binTree;
};

var binTreeMethods = {};

binTreeMethods.insert = function() {

};

binTreeMethods.contains = function() {

};

binTreeMethods.depthFirstLog = function() {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
 // .insert: Log O(logn), worst case Linear O(n)
 // .contains: Log O(logn), worst case Linear O(n)
 // .depth: Linear O(n)
