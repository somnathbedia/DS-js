const person = {
    name : "Somnath",
    DOB : 22,
}

const record = ["Sweet","Banana",person,12,15.2,"🍎",person];

// console.log(record.indexOf(person));

// create a function that chekcs if in an array two of the element are same or not

const verify = (array) => {
    for(let i = 0; i < array.length - 1; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i] === array[j]){
                return `Matching elements are presents at ${i} and ${j}`;
            }
        }
    }
}

console.log(verify(record));