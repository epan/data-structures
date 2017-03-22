var Stack = function() {
  //initializing
  var someInstance = {};
  var index = 0; 

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[index] = value;
    index++; 
  };

  someInstance.pop = function() {
    var remove = storage[index-1];
    delete storage[index-1];
    index--;
    return remove;
  };

  someInstance.size = function() {
    return Object.keys(storage).length; 
  };

  return someInstance;
};
