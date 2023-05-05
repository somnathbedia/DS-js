// write a function that takes two arrays of numbers and returns a new array with the elements that appear in both arrays.

const first = [2, 4, 6, 8, 9, 10];
const second = [2, 4, 6, 8, 9, 10];

function interSection(firstSet, secondSet) {
    let dataCollector = [];
    for (let i = 0; i < firstSet.length; i++) {
        for (let j = 0; j < secondSet.length; j++) {
            if (firstSet[i] === secondSet[j]) {

                dataCollector.push(firstSet[i]);


            }
        }
    }

    return dataCollector;
}



console.log(interSection(first, second));


