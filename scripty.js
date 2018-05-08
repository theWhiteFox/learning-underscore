; (function () {
    // const people = ["Dian", "Stephen", "Jaime"];
    const dian = {name: "Dian", age: 36, gender: "male"};

    _.each(dian, function (name, key) {
        console.log(`Item: ${name} Key: ${key}`);

        // if (people[key] == "Dian") {
        //     alert(`Dian: ${key}`);
        // }

    });
})()