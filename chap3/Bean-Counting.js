function countBs(string, wanted){
    let count = 0;
    for (let i =0; i < string.length - 1; i++){
        if (string[i] == wanted){
            count ++;
        }
    }
    return count;
}


const readlineSync = require('readline-sync');
let string = readlineSync.question("Enter String: ");
let wanted = readlineSync.question("Enter char: ");

console.log(countBs(string, wanted));