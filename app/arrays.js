exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce(function(acc, value) { return acc + value; });
  },

  remove: function(arr, item) {
    return arr.filter(function(arrItem) { return arrItem !== item; });
  },

  removeWithoutCopy: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }

    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var i = 0;
    arr.forEach(function(arrItem) {
      if (arrItem === item) { i++; }
    });
    return i;
  },

  duplicates: function(arr) {
    // var duplicateCounts = {};
    // var duplicates = [];

    // arr.forEach(function(item) {
    //   if (duplicateCounts[item]) {
    //     duplicateCounts[item] += 1;
    //   } else {
    //     duplicateCounts[item] = 1;
    //   }
    // });

    // for (var prop in duplicateCounts) {
    //   if (duplicateCounts[prop] > 1) {
    //     duplicates.push(Number(prop));
    //   }
    // }

    // return duplicates;

    var arrItems = [];
    var duplicates = [];

    arr.forEach(function(item) {
      if (arrItems.includes(item)) {
        if (!duplicates.includes(item)) {
          duplicates.push(item);
        }
      } else {
        arrItems.push(item);
      }
    });

    return duplicates;
  },

  square: function(arr) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
      newArr.push(Math.pow(arr[i], 2));
    }

    return newArr;
  },

  findAllOccurrences: function(arr, target) {
    var targetIndices = [];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        targetIndices.push(i);
      }
    }

    return targetIndices;
  }
};
