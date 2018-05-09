(function() {
  const people = [
    { name: "Dian", age: 45 },
    { name: "Stephen", age: 31 },
    { name: "Jaime", age: 31 },
    { name: "Sean", age: 74 }
  ];

  let shuffle = JSON.stringify(_.shuffle(people, "age"));

  console.log(`Count: ${shuffle}`);
})();
