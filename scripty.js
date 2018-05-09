(function() {
  const numbers = [9, 21, 13, 10];
  const people = [
    { name: "Dian", age: 41 },
    { name: "Stephen", age: 21 },
    { name: "Jaime", age: 24 }
  ];

  let numSort = _.sortBy(numbers);

  let nameLength = JSON.stringify(
    _.sortBy(people, function(person) {
      return person.name.length;
    })
  );

  let ageMax = JSON.stringify(_.sortBy(people, 'age'));

  console.log(`Sort Numbers: ${numSort}`);
  console.log(`Sort by name length: ${nameLength}`);
  console.log(`Sort by max age: ${ageMax}`);
})();
