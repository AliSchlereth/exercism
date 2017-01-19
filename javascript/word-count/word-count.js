var Words = function() {};

  Words.prototype.count = function(phrase) {
    var cleanPunct = phrase.replace(/[-!$%^&*()_+|~=`{}\[\]:";<>?.¡¿@\/]/g, '')
    var cleanCase = cleanPunct.toLowerCase();
    var cleanNewLine = cleanCase.replace(/\r?\n|\t\r/g, " ");
    var cleanPhrase = cleanNewLine.replace('\t', ' ').trim();
    var words = cleanPhrase.split(/[ ,]+/);
    var wordCounts = Object.create(null);
    words.forEach(function(word) {
      if (word.indexOf("'") == 0) {
        var word = word.replace(/[']/g, '');
      }
      if (wordCounts[word]) {
        wordCounts[word] += 1
      } else {
        wordCounts[word] = 1
      }
    });
    return wordCounts
  }

module.exports = Words
