// Write a function that takes two arrays of equal length as input and returns a new array that contains the sum of corresponding elements in the two arrays.

const values1 = [1,2,3,4,5,6];
const values2 = [7,8,9,10,11,12];

const correspondingSum = (array1,array2) => {
    let newArray = [];
    if(array1.length === array2.length){
        for(let i = 0; i < array1.length; i++){
            newArray.push(array1[i]+array2[i]);
        }
    } else {
        return false;
    }

    return newArray;
}

console.log(correspondingSum(values1,values2));