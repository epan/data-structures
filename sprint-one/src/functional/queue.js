var Queue = function() {
  var someInstance = {};
  var index = 0; 

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[index] = value;
    index++; 
  };

  someInstance.dequeue = function() {
    var lastKey = Object.keys(storage);
    lastKey = parseInt(lastKey[lastKey.length - 1]);
    var remove; 
    for (var i = 0; i <= lastKey; i++) {
      if (storage[i]) {
        remove = storage[i];
        delete storage[i];
        break;
      }
    }
    return remove;
  };

  someInstance.size = function() {
    return Object.keys(storage).length; 
  };

  return someInstance;
};
