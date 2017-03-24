var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // push value to this.children
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  // inner search function with 'this'
  // if target === this.value
    // return true
  // else call search with this.children
  // return false;
  var output = false;
  if (target === this.value) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    output = output || this.children[i].contains(target);
  }
  return output;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
// addChild: Constant O(1)
// contains: Linear O(n)
