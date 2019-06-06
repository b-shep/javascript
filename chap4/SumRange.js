function range(start, end){
    let rangeArray = [];
    for (let i = start; i <= end; i++){
        rangeArray.push(i);
    }
    return rangeArray;
}

const readlineSync = require('readline-sync');
let start = readlineSync.questionFloat("Enter Start: ")
let end = eadlineSync.questionFloat("Enter End: ")
console.log(range(start, end));