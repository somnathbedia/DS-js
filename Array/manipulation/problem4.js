// Write a function that takes an array of numbers and returns the largest and smallest numbers in the array.

let digits = [1,2,3,4,5,6,7,8];


const sumOfAllDigits = (digitContainer) => {
    let largest = digitContainer[0];
    let smallest = digitContainer[0];
    for(let digit of digitContainer){
        if(digit > largest){
            largest = digit;
        }
        if(digit < smallest){
            smallest = digit;
        }
    }
    return {largest,smallest};
}

console.log(sumOfAllDigits(digits));