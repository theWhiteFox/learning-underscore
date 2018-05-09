(function() {
  const numbers = [1, 2, 3, 4, 5, 6];

  const truth = _.some(numbers, function(number) {
    return number > 3;
  });  

  console.log(`truth: ${truth}`);  

})();
