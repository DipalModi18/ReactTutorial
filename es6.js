// Vanilla JavaScript: var; 
// ES6: let, const
let myName = "Dipal"

// Arrow function
const printMyName = (name) => {
    // No more need to use the "this" keyword
    console.log(myName);
}

// OR 
// const printMyName = name => {
//     // Parenthesis can be ommitted for single argument
//     console.log(myName);
// }
// If you have single statement which is a return statement, it can be written as
// const multiple = x => x*2
printMyName(myName);

class Person {
    name = "Dipal"
    call = () => {
        return 10;
    }
}


// Spread operator(...): Use to split up array elements or object properties
oldArray = [1, 2, 3];
newArray = [...oldArray, 4, 5];
console.log("newArray: "+newArray);
oldObject = {name: 'Dipal', age: 22};
newObject = {...oldObject, surname: 'Modi'};
console.log("oldObject: "+oldObject);