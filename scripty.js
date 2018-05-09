(function() {
  const numbers = [1, 2, 3];

  function multiply(additionalMultiple, anotherOne) {
      return this * 2 * additionalMultiple * anotherOne;
  }

  const result = _.invoke(numbers, multiply, 2, 2);  

  console.log(`result: ${result}`);  

})();
