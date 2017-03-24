var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.storage = [];

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.storage.length > 0) {
      list.storage[list.storage.length - 1].next = newNode.value;
    } 
    list.storage.push(newNode);
    list.tail = newNode; 
    if (list.storage.length === 1){
      list.head = newNode; 
    }

  };

  list.removeHead = function() {
    var output = list.storage.shift();
    if (list.storage.length === 0) {
      list.head = null;
      list.tail = null;
    } else {
      list.head = list.storage[0];
    }
    
    return output.value;
  };

  list.contains = function(target) {
    return list.storage.reduce(function (found, obj) {
      return found || obj.value === target;
    }, false);
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
