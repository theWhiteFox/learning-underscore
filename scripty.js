(function() {
  const people = [
    { name: "Dian", age: 45 },
    { name: "Stephen", age: 31 },
    { name: "Jaime", age: 31 },
    { name: "Sean", age: 74 }
  ];

  let counted = JSON.stringify(_.countBy(people, "age"));

  let countedEvenOdd = JSON.stringify(
    _.countBy(people, function(val) {
        console.log("age: " + JSON.stringify(val.age));
      return val.age % 2 === 0 ? "even" : "odd";
    })
  );

  console.log(`Count: ${counted}`);
  console.log(`Count Even Odd: ${countedEvenOdd}`);
})();
