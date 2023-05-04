// Create an array of numbers and write a function that returns the sum of all the numbers in the array.

const evenNumbers = [2,4,6,8,10,12,14,16];



const sumOfevenNums = (array) => {
    let sum = 0;
    for(let number of array){
        sum=sum+number;
    }
    return sum;
}



console.log(sumOfevenNums(evenNumbers));
