(function() {
  const people = [
    { name: "Dian", age: 45 },
    { name: "Stephen", age: 31 },
    { name: "Jaime", age: 31 },
    { name: "Sean", age: 74 }
  ];

  const part = JSON.stringify(_.partition(people, function(person) {
      return person.name.length > 5;
  }));

  console.log(`Part: ${part}`);
})();
