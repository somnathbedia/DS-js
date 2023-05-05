// Write a function that takes an array of numbers and returns the sum of all the even numbers in the array.



const numbers = [1,2,3,4,5,6,7,8,9,10];

const sumOfAllEvenNums = (array) => {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            sum=sum+array[i];
        }
    }
    return {sum};
}

console.log(sumOfAllEvenNums(numbers));