(function() {
  // const numbers = [1, 2, 3];
  const people = [
    { name: "Dian", age: 34 },
    { name: "Stephen", age: 21 },
    { name: "Jaime", age: 21 }
  ];

  let where = JSON.stringify(_.where(people, { age: 21 })); 

  let findWhere = JSON.stringify(_.findWhere(people, { age: 21 })); 

  console.log(`where: ${where}`);
  console.log(`findWhere: ${findWhere}`);

})();
