// Destructure an object with a rest parameter: Write a function that takes an object with name, age, and email properties and destructures name and email into separate variables. Use the rest parameter syntax to capture the remaining properties in a variable called info. Then, log the variables to the console.

function destructure (obj) {
    const {name,email, ...rest} = obj;
    console.log(name);
    console.log(email);
    console.log(rest);
}



destructure({
    name: "John",
    age: 30,
    email: "john@example.com",
    occupation: "Web Developer"
  });