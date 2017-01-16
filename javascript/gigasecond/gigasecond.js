var Gigasecond = function(date) {
  var moment = date;

  Gigasecond.prototype.date = function() {
    var gigasecond = 10**9
    moment.setSeconds(moment.getSeconds() + gigasecond)
    return moment;
  }
};

module.exports = Gigasecond;
