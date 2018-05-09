(function() {
  const people = [
    { name: "Dian", age: 45 },
    { name: "Stephen", age: 31 },
    { name: "Jaime", age: 31 },
    { name: "Sean", age: 74 }
  ];

  const arr = JSON.stringify(_.toArray(people).splice(2));

  console.log(`arr: ${arr}`);
})();
