const readlineSync = require('readline-sync');

function reverseArray(array){
    let newArray = [];
    for (i = 0; i < array.length; i++){
        newArray.unshift(array[i]);
    }
    return newArray
};

function reverseArrayInPlace(array){
    for(i = 0; i < (array.length/2); i++){
        let first = array[i];
        console.log(first)
        let last = array[(array.length - 1)-i];
        console.log(last);
        array[i] = last;
        array[(array.length-1) - i] = first;
        console.log("new last is " + array[(array.length-1) - i]);
        console.log(array);

    }
    return array;
}

let cont = "y";
let array = [];
while(cont == "y"){
    let num = readlineSync.questionFloat("Enter number: ");
    array.push(num);
    cont = readlineSync.question("Continue?");
}
console.log(array);
console.log(reverseArrayInPlace(array));