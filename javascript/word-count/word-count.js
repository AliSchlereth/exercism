var Words = function() {};

  var cleanPhrase = function(phrase) {
    var cleanPunct = phrase.replace(/[-!$%^&*()_+|~=`{}\[\]:";<>?.¡¿@\/]/g, '');
    var cleanCase = cleanPunct.toLowerCase();
    var cleanNewLine = cleanCase.replace(/\r?\n|\t\r/g, " ");
    var cleanWhiteSpace = cleanNewLine.replace('\t', ' ').trim();
    return cleanWhiteSpace.split(/[ ,]+/);
  }

  var cleanQuotes = function(word) {
    if (word.indexOf("'") == 0) {
      word = word.replace(/[']/g, '');
    }
    return word;
  }

  var assignCount = function(word, wordCounts) {
    if (wordCounts[word]) {
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1;
    }
  }

  Words.prototype.count = function(phrase) {
    var words = cleanPhrase(phrase);
    var wordCounts = Object.create(null);
    words.forEach(function(word) {
      word = cleanQuotes(word);
      assignCount(word, wordCounts);
    });
    return wordCounts;
  }

module.exports = Words
