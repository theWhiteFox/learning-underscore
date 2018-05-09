(function() {
  const numbers = [1, 2, 3, 10];
  const people = [
    { name: "Dian", age: 41 },
    { name: "Stephen", age: 21 },
    { name: "Jaime", age: 21 }
  ];

  let numMax = _.max(numbers);

  let ageMax = JSON.stringify(_.max(people, function(person) {
    return person.age;
  }));

  console.log(`Max: ${numMax}`);
  console.log(`Max Age: ${ageMax}`);
})();
