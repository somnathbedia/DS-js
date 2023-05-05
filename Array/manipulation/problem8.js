// Write a function that takes an array of strings and returns the longest string in the array.

const mixWords = ['function','greater','good','javaScript'];

const longestString = (collection) => {
    let greaterStr = collection[0].length;
    for(let i = 1; i < collection.length; i++){
        if(collection[i].length > greaterStr){
            greaterStr = collection[i];
        }
    }
    return {greaterStr};
}

console.log(longestString(mixWords));