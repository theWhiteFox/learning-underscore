(function() {
  const numbers = [9, 21, 13, 10];
  const people = [
    { name: "Dian", age: 41 },
    { name: "Stephen", age: 21 },
    { name: "Jaime", age: 24 }
  ];

  let numMax = _.min(numbers);

  let ageMax = JSON.stringify(_.min(people, function(person) {
    return person.age;
  }));

  console.log(`Min: ${numMax}`);
  console.log(`Min Age: ${ageMax}`);
})();
