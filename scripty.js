(function() {
  const people = [
    { name: "Dian", age: 45 },
    { name: "Stephen", age: 31 },
    { name: "Jaime", age: 31 },
    { name: "Sean", age: 74 }
  ];

  const initial2 = JSON.stringify(_.initial(people, 2));

  console.log(`initial2: ${initial2}`);
})();
