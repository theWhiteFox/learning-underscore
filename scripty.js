; (function () {
    const numbers = [1, 2, 3];
    const names = ['Dian', 'Stephen', 'Jaime'];

    let sumOfNumbers = _.reduce(numbers, function(total, item, index, numbers) {
        if(index === 1) {
            console.log(numbers[0]);
        }
        console.log(item);
        return total + item;
    });

    let sumOfNames = _.reduce(names, function(output, item, index, numbers) {
        return output + " " + item;
    });

    console.log(`sum: ${sumOfNumbers}`);   
    console.log(`names: ${sumOfNames}`);   

})();