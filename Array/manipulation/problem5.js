
// Write a function that takes an array of strings and returns a new array with only the strings that contain the letter "a".

const randomWords = ['alphabet','apple','shelter','function','append'];

const specialWords = (wordBucket) => {
    let special = [];
    for(let i = 0; i < wordBucket.length; i++){
        if(wordBucket[i].includes('a')){
            special.push(wordBucket[i]);
        }
    }
    return special;
}

console.log(specialWords(randomWords));


// In addition to these exercises, you can also practice using different array methods like push(), pop(), shift(), unshift(), slice(), splice(), concat(), map(), filter(), reduce(), and more. Try using these methods to manipulate arrays and solve different problems.
