// Destructure an object with default values: Write a function that takes an object with name and age properties and destructures them into separate variables called name and age, with default values of "Unknown" and 0 respectively. Then, log the variables to the console.

function destructure(object){
    const {name,age} = object;
    console.log(name);
    console.log(age);
}

destructure(person = {
    name : 'unknown',
    age : 0
});
