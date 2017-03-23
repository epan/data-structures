var Stack = function() {
  this.index = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

Stack.prototype.pop = function() {
  var output = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  this.index--;
  return output;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};