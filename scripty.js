(function() {
  const people = [
    { name: "Dian", age: 34 },
    { name: "Stephen", age: 21 },
    { name: "John", age: 21 },
    { name: "Jaime", age: 41 }
  ];

  const removeDups = JSON.stringify(_.uniq(people, false, function(person) {
    return person.age;
  }));

  console.log(`Remove Duplicates: ${removeDups}`);
})();
