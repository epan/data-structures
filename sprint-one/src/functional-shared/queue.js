var Queue = function() {
  var obj = {};
  obj.storage = {};
  obj.index = 0;
  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

queueMethods.dequeue = function() {
  var output;
  for (var i = 0; i <= this.index; i++) {
    if (this.storage[i]) {
      output = this.storage[i];
      delete this.storage[i];
      break;
    }
  }
  return output;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};
