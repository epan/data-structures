var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.index = 0; 
  _.extend(obj, stackMethods);
  return obj; 
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.index] = value;
  this.index++;
};

stackMethods.pop = function () {
  var output = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  this.index > 0 ? this.index-- : this.index = 0;
  return output;
};

stackMethods.size = function () {
  return Object.keys(this.storage).length;
};

