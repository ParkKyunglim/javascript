// number, string, boolean, null, undefined
// object
const obj = {
    name: 'ellie',
    age: 5,
};
console.log(obj.name);
console.log('---------');
obj.name = 'James';
console.log(obj.name);


// function
function add(num1, num2) {
    return num1 + num2;
}


function surprise(operator) {
    const result = operator(2, 3);
    console.log(result);
}

surprise(add);