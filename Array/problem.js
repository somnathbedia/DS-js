// Second Largest Number
// GIven an array of size N ,print second largest disticnt element from an array

let numberList = [12,35,1,10,34,1,100];
let userArray = [13,34,56,89,11,500];
let randomNums = [1,2,3,4,5,6];
const findSecondLargest = (array) => {
   
    let maxItem = array[0];
    let tempArray = [];
    for(let i = 1; i < array.length ; i++){
       
        if(array[i] > maxItem){
            maxItem=array[i];
            tempArray.push(maxItem);
        }
    }
    
    return tempArray[tempArray.length - 2];
}

// console.log(findSecondLargest(numberList));

// Returns numbers and their index which are greater than 30

const specialNums = [20,40,22,99,12,90,11,33,35,12];

const specialFunction = (array) => {
    let tempObj = {};
    for(let i = 0; i < array.length; i++){
        if(array[i] > 30){
          tempObj[array[i]] = i;
        }
    }

    return tempObj;
}

console.log(specialFunction(specialNums));