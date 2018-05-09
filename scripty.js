(function() {
  const numbers = [9, 21, 13, 10];
  const names = ["Dian", "Stephen", "Jaime", "Sean"];
  const people = [
    { name: "Dian", age: 41 },
    { name: "Stephen", age: 21 },
    { name: "Jaime", age: 21 },
    { name: "Sean", age: 54 }
  ];

  let grouped = JSON.stringify(_.groupBy(names, "length"));

  let groupNameLength = JSON.stringify(
    _.groupBy(people, function(person) {
      return person.age;
    })
  );

  console.log(`Group by length: ${grouped}`);
  console.log(`Group by name length: ${groupNameLength}`);
})();
