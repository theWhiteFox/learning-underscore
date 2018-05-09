(function() {
  const people = [
    { name: "Dian", age: 45 },
    { name: "Stephen", age: 31 },
    { name: "Jaime", age: 31 },
    { name: "Sean", age: 74 }
  ];

  const first = JSON.stringify(_.first(people, 2));

  console.log(`first: ${first}`);
})();
