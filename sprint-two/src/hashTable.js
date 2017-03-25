

var HashTable = function() {

  this._limit = 8;
  this._storage = LimitedArray(this._limit);

  for (var i = 0; i < this._limit; i++) {
    this._storage[i] = [];
  }
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var oldBucket = this._storage[index];
  oldBucket.push([k, v]);
  this._storage.set(index, oldBucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var result = undefined;
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      result = bucket[i][1];
    }
  }
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var originBucket = this._storage[index];
  for (var i = 0; i < originBucket.length; i++) {
    if (k === originBucket[i][0]) {
      var tupleIndex = i;
    }
  }
  originBucket.splice(tupleIndex, 1);
  this._storage.set(index, originBucket);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
 // .insert: Constant O(1)
 // .retrieve: Constant O(1)
 // .remove: Constant O(1)
