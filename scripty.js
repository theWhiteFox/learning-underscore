(function() {
  const people = [
    { name: "Dian", age: 34 },
    { name: "Stephen", age: 21 },
    { name: "John", age: 21 },
    { name: "Jaime", age: 41 }
  ];
  
  let personTemplate = _.template(
    '<% _.each(people, function(person, index, people) { %>' +
    '<li><%= person %></li>)' +
    '<% }); %>'
    ),
    content = personTemplate({
      person: person
  });
  
  var container = 		document.createElement('ol');
  container.innerHTML = content;
  document.body.appendChild(container); 
 
})();
