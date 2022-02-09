const { addAbortSignal } = require("stream");

module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */

function Collection() {
    this.input = [];
     }

// Методы коллекции
Collection.prototype.append = function () {
  if ( !(arguments.length === 0) ){
    for (var i=0; i<arguments.length; i++){
    if (arguments[i] instanceof Collection){
       this.input = this.input.concat(Collection.prototype.values.call(arguments[i]));
    } else if ( Array.isArray(arguments[i]) ){
      this.input = this.input.concat(arguments[i]);
    } else this.input.push(arguments[i]);
  }
}
};




Collection.prototype.at = function () {
    if (arguments[0] <= 0 || typeof arguments[0] !== 'number' || arguments[0] > this.input.length ) {
        return null;
      }
      else {
        return this.input[arguments[0] - 1];
      }
};

Collection.prototype.count = function () {
    if (this.input.length > 0) {
    return this.input.length
    } else return 0;
}

Collection.prototype.values = function () {
    return this.input
}
// другие методы

Collection.prototype.removeAt = function () {
    if (arguments[0] <= 0 || typeof arguments[0] !== 'number' || arguments[0] > this.input.length ) {
        return false;
      }  else {
        this.input.splice( arguments[0] - 1 , 1);
        return true;
      }
}


/**
 * Создание коллекции из массива значений
 */
 Collection.from = function () {
     
  var collection = new Collection();

  if (arguments[0] instanceof Collection){
    collection.input = collection.input.concat(Collection.prototype.values.call(arguments[0]));
  }

  if ( arguments.length === 1 && Array.isArray(arguments[0]) ) {
  collection.input = collection.input.concat(arguments[0]);
  }

  if (arguments.length > 1){
  for (var i=0;i<arguments.length; i++){
    collection.input = collection.input.concat(arguments[i]);
  }

}
  return collection;
};