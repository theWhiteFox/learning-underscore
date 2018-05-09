(function() {
  const people = [
    { name: "Dian", age: 45 },
    { name: "Stephen", age: 31 },
    { name: "Jaime", age: 31 },
    { name: "Sean", age: 74 }
  ];

  const last2 = JSON.stringify(_.last(people, 2));

  console.log(`last 2: ${last2}`);
})();
