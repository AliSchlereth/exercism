//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  // console.log(input.match(/[[A-Z]/))
  if (input.toUpperCase() === input && input.match(/[A-Z]/)) {
    return 'Whoa, chill out!';
  }
  if (input.indexOf("?") >= 0) {
    return 'Sure.';
  }
  if (input === '') {
    return 'Fine. Be that way!';
  }
  return 'Whatever.';
};

module.exports = Bob;
