function range(start, end, step){
    let rangeArray = [];
    for (let i = start; i <= end; i += step){
        console.log("i is currently" + i)
        rangeArray.push(i);
    }
    return rangeArray;
}

function sum(numArray){
    let sum = 0;
    for(let i = 0; i < numArray.length; i++){
        sum += numArray[i];
    }
    return sum;
}



const readlineSync = require('readline-sync');
let start = readlineSync.questionFloat("Enter Start: ");
let end = readlineSync.questionFloat("Enter End: ");
let step = readlineSync.questionFloat("Enter Step: ")
console.log(range(start, end, step));