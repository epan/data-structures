var Stack = function() {
  var obj = Object.create(Stack.prototype);
  obj.storage = {};
  obj.index = 0;
  return obj;
};

var stackMethods = {};

Stack.prototype.push = function (value) {
  // body...
}

Stack.prototype.pop = function () {
  // body...
}

Stack.prototype.size = function () {
  return Object.keys(this.storage).length;
}