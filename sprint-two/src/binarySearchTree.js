var BinarySearchTree = function(value) {

  var binTree = {};
  binTree.value = value;
  binTree.left = undefined;
  binTree.right = undefined;

  _.extend(binTree, binTreeMethods);

  return binTree;
};

var binTreeMethods = {};

binTreeMethods.insert = function(value) {
  if (value < this.value) {
    if (this.left === undefined) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === undefined) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
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
