

var HashTable = function() {

  this._limit = 8;
  this._storage = LimitedArray(this._limit);

  for (var i = 0; i < this._limit; i++) {
    this._storage.set(i, []);
  }
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket = this._storage.get(index);
  for (var i = 0; i < currentBucket.length; i++) {
    if (currentBucket[i][0] === k) {
      currentBucket.splice(i, 1);
    }
  }
  currentBucket.push([k, v]);
  this._storage.set(index, currentBucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var result = undefined;
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      result = bucket[i][1];
      break;
    }
  }

  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var originBucket = this._storage.get(index);
  for (var i = 0; i < originBucket.length; i++) {
    if (k === originBucket[i][0]) {
      originBucket.splice(i, 1);
      break;
    }
  }
  this._storage.set(index, originBucket);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 // .insert: Constant O(1)
 // .retrieve: Constant O(1)
 // .remove: Constant O(1)
