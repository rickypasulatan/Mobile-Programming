// Chapter 3 JavaScript ES6

const person = {
    firstName: "John",
    lastName: "Doe",
    Age: 33
}

// person.firstName = "Ricky"

// console.log(person)


//Arrow Function

// Function Declaration
function sayHello() {}
// Function Expression
const sayHello2 = function () {}


const sayHello3 = (param1, param2) => `Hello ${param1} ${param2}`

console.log (sayHello3(person.firstName, person.lastName))

//Rest Parameter & Spread Operator
//Rest Parameter
const display = (...params) => {
    console.log (params)
}
display(1,2,3,4,5,6)

//Spread Parameter
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [7,8,9]
const arr4 = [0,0,0]

// const newArr = [...arr1]
// console.log (newArr)
const combineArr = arr1.concat(arr2.concat(arr3.concat(arr4)))
console.log(combineArr)

let person2 = {
    firstName: "Ricky",
    lastName: "Pasulatan",
    Age: 20
}

person2 = {
    ...person2, 
    address: "Bitung",
}
console.log(person2)