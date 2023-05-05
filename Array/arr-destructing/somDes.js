const person = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY'
    }
};

const { name : originalName,address : resident,age } = person;

console.log(originalName);
console.log(`i live in ${resident.city}`);
console.log(age);