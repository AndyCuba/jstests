exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    return str.replace(/(\w)\1+/g, '$1'.repeat(amount));
  },

  wordWrap: function(str, cols) {
    var formatString = '',
      wordsArray = [];


    wordsArray = str.split(' ');

    formatString = wordsArray[0];

    for (var i = 1; i < wordsArray.length; i++) {
      if (wordsArray[i].length > cols) {
        formatString += '\n' + wordsArray[i];
      } else {
        // eslint-disable-next-line no-lonely-if
        if (formatString.length + wordsArray[i].length > cols) {
          formatString += '\n' + wordsArray[i];
        } else {
          formatString += ' ' + wordsArray[i];
        }
      }
    }

    return formatString;
  },

  reverseString: function(str) {
    return str.split('').reverse().
      join('');
  }
};
