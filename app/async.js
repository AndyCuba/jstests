exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    // eslint-disable-next-line no-undef
    return new Promise(function(resolve, reject) {
      resolve(value);
    });
  },

  manipulateRemoteData: function(url) {
    // eslint-disable-next-line no-undef
    return new Promise(function(resolve, reject) {
      return fetch(url).then(function(response) {
        return response.json();
      }).
      then(function(data) {
        var sorted = data.people.map(function(people) {
          return people.name;
        }).sort();
        resolve(sorted);
      });
    });
  }

};
