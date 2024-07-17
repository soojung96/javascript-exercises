const removeFromArray = function(arr, ...args) {
    var newArr = [];
    for (let num of arr) {
        console.log('hi')
        if (!args.includes(num)) {
            newArr.push(num);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
