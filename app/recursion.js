exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var listOfFiles = [];
    var dirs = [];

    function processDir(dir) {
      var file;
      var files = dir.files;

      dirs.push(dir.dir);

      for (var i = 0; i < files.length; i++) {
        file = files[i];
        if (typeof file === 'string') {
          if (!dirName || dirs.indexOf(dirName) > -1) {
            listOfFiles.push(files[i]);
          }
        } else {
          processDir(files[i]);
        }
      }

      dirs.pop();
    }

    processDir(data);


    return listOfFiles;
  },

  permute: function(arr) {
    var temp = [];
    var answer = [];

    function logResult() {
      answer.push(temp.slice());
    }

    function doIt() {
      var item;

      for (var i = 0; i < arr.length; i++) {
        item = arr.splice(i, 1)[0];

        temp.push(item);

        if (arr.length) {
          doIt();
        } else {
          logResult();
        }

        arr.splice(i, 0, item);
        temp.pop();
      }

      return answer;
    }

    return doIt();
  },

  fibonacci: function(n) {
    if (n <= 1) {
      return n;
    }

    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  },

  validParentheses: function(n) {
    var result = [];
    function breathFirstSearch(str, left, right) {
      if (left === n && right === n) {
        result.push(str);
        return;
      }
      if (left !== n) {
        breathFirstSearch(str + '(', left + 1, right);
      }
      if (left > right) {
        breathFirstSearch(str + ')', left, right + 1);
      }
    }
    breathFirstSearch('', 0, 0);

    return result;
  }
};
