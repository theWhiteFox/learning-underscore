(function() {
  const numbers = [1, 2, 3, 4, 5, 6];

  const oodNumbers = _.reject(numbers, function(number) {
    return number % 2 === 0;
  });  
  
  console.log(`oodNumbers: ${oodNumbers}`);  

})();
