var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
 
  list.addToTail = function(value) {
    var newNode = Node(value);
    // Case: list is empty
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
    // Case: list is not empty
    list.tail.next = newNode;
    list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var output = list.head.value;
    list.head = list.head.next;
    return output;
  };

  list.contains = function(target) {
    var node = list.head;
    if (node.value === target) {
      return true;
    };
    while (node.value !== target) {
      if (node.next === null) {
        return false;
      }
      node = node.next;
      if (node.value === target) {
        return true;
      }
    }
  };
  
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// Complexity of .addToTail: Constant O(1)
// Complexity of .removeHead: Constant O(1)
// Complexity of .contains: Linear O(n)
