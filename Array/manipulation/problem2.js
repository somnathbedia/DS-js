// Create an array of strings and write a function that returns a new array with all the strings capitalized.

const names = ['indranil','somnath','ashish','suraj'];

const transform = (names) => {
    let transform = [];
    for(let i = 0; i < names.length; i++){
        transform.push(names[i].toUpperCase());
    }
    return transform;
}

console.log(transform(names));