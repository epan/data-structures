var Stack = function() {
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.index = 0;
  return obj;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.index] = value;
  this.index++;
}

stackMethods.pop = function () {
  var removed = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  this.index--;
  return removed;
}

stackMethods.size = function () {
  return Object.keys(this.storage).length;
}
