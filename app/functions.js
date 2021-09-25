exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
    // return fn(...arr);
  },

  speak: function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction: function(str) {
    return function(str2) {
      return str + ', ' + str2;
    };
  },

  makeClosures: function(arr, fn) {
    return arr.map(function(item) {
      return function() { return fn(item); };
    });
  },

  partial: function(fn, str1, str2) {
    return function(arg) {
      return fn(str1, str2, arg);
    };
  },

  useArguments: function() {
    var result = 0;

    for (var i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }

    return result;
  },

  callIt: function(fn) {
    var args = [];

    for (var i = 1; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    return fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {
    var args = [];

    for (var i = 1; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    return function () {
      for (var j = 0; j < arguments.length; j++) {
        args.push(arguments[j]);
      }
      return fn.apply(null, args);
    };
  },

  curryIt: function(fn) {

    function getAllArgs(newArgs, length) {
      return function(arg) {
        newArgs.push(arg);

        if (length === newArgs.length) {
          return fn.apply(null, newArgs);
        }

        return getAllArgs(newArgs, length);
      };
    }

    return getAllArgs([], fn.length);
  }
};
