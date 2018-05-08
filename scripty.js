; (function () {
    // const people = ["Dian", "Stephen", "Jaime"];
    const numbers = [1, 2, 3];

    let numbersMultiplied = _.map(numbers, function(value, index, items) {
        items[index] = items[index] * 2;
        return value * 3;
    });

    console.log(numbers);
    console.log(numbersMultiplied);
})();