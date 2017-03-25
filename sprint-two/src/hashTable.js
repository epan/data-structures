

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
    // check if k is already present
      //if no,
      //then push [k,v] to bucket
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var result = '';
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      result = bucket[i][1];
    }
  }
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //for each
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
