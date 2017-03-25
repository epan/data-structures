var BinarySearchTree = function(value) {

  var binTree = {};
  binTree.value = value;
  binTree.left = undefined;
  binTree.right = undefined;

  _.extend(binTree, binTreeMethods);

  return binTree;
};

var binTreeMethods = {};

binTreeMethods.insert = function(value, currNode) {
  var newNode = BinarySearchTree(value);
  if (currNode === undefined) {
    currNode = this;
  }

  if (value < currNode.value) {
    if (currNode.left === undefined) {
      currNode.left = newNode;
    } else {
      currNode.left.insert(value, currNode.left)
    }
  } else if (value > currNode.value) {
    if (currNode.right === undefined) {
      currNode.right = newNode;
    } else {
      currNode.right.insert(value, currNode.right)
    }
  }

  // start at current node (this)
  // if input value is less than current node
    // go to left child node
    // if left child node is undefined
      // save the new node here
    // else recurse with left child node as current node
  // else if input value is greater than current node
    // go to right child node
    // if right child node is undefined
      // save the new node here
    // else recurse with right child node as current node

// call .insert with highest this.value;
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
