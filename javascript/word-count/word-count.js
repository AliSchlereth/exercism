var Words = function() {};

  Words.prototype.count = function(phrase) {
    var cleanPhrase = phrase.replace(/[^\w\,\s]/g, '').toLowerCase();
    var words = cleanPhrase.split(/[ ,]+/);
    var wordCounts = {}
    words.forEach(function(word) {
      if (wordCounts[word]) {
        wordCounts[word] += 1
      } else {
        wordCounts[word] = 1
      }
    });
    return wordCounts
  }

module.exports = Words
