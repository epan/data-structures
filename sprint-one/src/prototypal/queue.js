var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.index = 0;
  obj.storage = {};
  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.index] = value;
  this.index++;
};

queueMethods.dequeue = function () {
  for (var i = 0; i < this.index; i++) {
    if (this.storage[i]) {
      var output = this.storage[i];
      delete this.storage[0];
      break;
    };
  }
  return output;
};

queueMethods.size = function () {
  return Object.keys(this.storage).length;
};