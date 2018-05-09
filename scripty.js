(function() {
  const people = [
    { name: "Dian", age: 45 },
    { name: "Stephen", age: 41 },
    { name: "Jaime", age: 31 },
    { name: "Sean", age: 74 }
  ];

  let indexed = JSON.stringify(_.indexBy(people, "age"));

  console.log(`Indexed: ${indexed}`);

})();
