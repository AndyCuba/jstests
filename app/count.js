exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var countStart = start;
    var timeout;

    function makeCount() {
      if (countStart > end) {
        clearTimeout(timeout);
      } else {
        timeout = setTimeout(makeCount, 100);
        // eslint-disable-next-line no-console
        console.log(countStart);
        countStart++;
      }
    }

    makeCount();

    return {
      cancel: function() {
        clearTimeout(timeout);
      }
    };
  }
};
