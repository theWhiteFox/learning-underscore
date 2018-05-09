(function() {
  const people = [
    "Dian",
    "Stephen",
    "Jaime",
    undefined,
    false,
    null,
    0,
    "",
    "Sean"
  ];

  // remove falsy values
  const justNames = JSON.stringify(_.compact(people));

  console.log(`last 2: ${justNames}`);
})();
