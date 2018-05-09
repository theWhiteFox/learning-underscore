(function() {
  const numbers = [1, 2, 3, 4, 5];

  const exclude = _.without(numbers, 2, 3);

  console.log(`Exclude: ${exclude}`);
})();
