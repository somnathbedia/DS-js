// The map() method is a higher-order function in JavaScript that creates a new array by applying a callback function to each element in an existing array. The map() method doesn't change the original array, but it returns a new array with the modified values.

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(num => num * 2);

// console.log(doubledNumbers);

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

const namesOnly = people.map((person) => {
    return person.name;
});

console.log(namesOnly);

