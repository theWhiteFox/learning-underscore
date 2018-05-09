(function() {
  const people = [
    { name: "Dian", age: 34 },
    { name: "Stephen", age: 21 },
    { name: "Jaime", age: 21 }
  ];

  let names = _.pluck(people, 'name');

  console.log(`names: ${names}`);

})();
