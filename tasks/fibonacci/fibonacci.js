function fibonacci (n) {
    var results = [0, 1, 1];
  
    if (n > 2) {
      for (var i = 2; i < n; i++) {
        results[i] = results[i - 2] + results[i - 1];
      }
    }
      return results[n - 1];
  };

  module.exports = fibonacci;