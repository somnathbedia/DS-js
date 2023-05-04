// Create an array of objects, each representing a person with properties like "name", "age", and "gender". Write a function that returns a new array of all the people who are over 30 years old.

const humans = [
    {
        name : 'Somnath Bedia',
        age : 22,
        gender : 'Male'
    },
    {
        name : 'Albert Einstien',
        age : 42,
        gender : 'Male'
    },
    {
        name : 'Erica karposepska',
        age : 52,
        gender : 'Female'
    },
    {
        name : 'Dewald Brevis',
        age : 21,
        gender : 'Male'
    }
];

const elderPerson = (humansObj) => {
    let olderPerson = [];
    for(let i = 0; i < humansObj.length; i++){
        if(humansObj[i].age > 30){
            olderPerson.push(humansObj[i]);
        }
    }
    return olderPerson;
}

console.log(elderPerson(humans));