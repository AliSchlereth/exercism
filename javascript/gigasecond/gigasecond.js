var Gigasecond = function(date) {

  Gigasecond.prototype.date = function() {
    var moment = new Date(date);
    if (moment.getFullYear() <= 1970) {
      moment.setHours(moment.getHours() - 1)
    }
      var gigasecond = 10**9
      moment.setSeconds(moment.getSeconds() + gigasecond)
      return moment;
  }
};

module.exports = Gigasecond;
