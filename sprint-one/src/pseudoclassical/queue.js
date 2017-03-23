var Queue = function() {
  this.index = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.index] = value;
  this.index++; 
};

Queue.prototype.dequeue = function() {
  var output;
  for (var i = 0; i < this.index; i++) {
    if (this.storage[i]) {
      output = this.storage[i];
      delete this.storage[i];
      break;
    }
  }
  return output;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;  
};
