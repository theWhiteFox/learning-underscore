; (function () {
    const numbers = [1, 2, 3];
    const names = ['Dian', 'Stephen', 'Jaime'];

    let find = _.find(numbers, function(num) {       
        return num % 3 == 0;
    });

    let filter = _.filter(numbers, function(num) {       
        return num % 3 == 0;
    });

    console.log(`find: ${find}`);   
    console.log(`filter: ${filter}`);   
})();