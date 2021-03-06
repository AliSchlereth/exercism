var Isogram = function(phrase) {
  this.phrase = phrase.toLowerCase().replace(/[\s-]/g, '');
};

Isogram.prototype.isIsogram = function() {
  var isogram = true;
  var chars = [];
  this.phrase.split('').forEach( function(char) {
    if (chars.includes(char)) {
      return isogram = false;
    } else {
      chars.push(char);
    }
  });
  return isogram;
}

module.exports = Isogram
