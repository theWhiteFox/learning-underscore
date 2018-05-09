(function() {
  const people = [
    { name: "Dian", age: 45 },
    { name: "Stephen", age: 31 },
    { name: "Jaime", age: 31 },
    { name: "Sean", age: 74 }
  ];

  let sample = JSON.stringify(_.sample(people, 3));

  console.log(`Sample: ${sample}`);
})();
