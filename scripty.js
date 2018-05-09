(function() {
  const people = [
    { name: "Dian", age: 45 },
    { name: "Stephen", age: 31 },
    { name: "Jaime", age: 31 },
    { name: "Sean", age: 74 }
  ];

  const size = JSON.stringify(_.size(people));

  console.log(`Size: ${size}`);
})();
