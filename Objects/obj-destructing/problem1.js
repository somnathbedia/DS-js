// Destructure an object into variables: Write a function that takes an object with firstName and lastName properties and destructures them into separate variables called first and last. Then, log the variables to the console.

const printNameSeparately = (object) =>{
    const {firstName,lastName} = object;
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
}


printNameSeparately({
    firstName: "John",
    lastName: "Doe"
  }
  );