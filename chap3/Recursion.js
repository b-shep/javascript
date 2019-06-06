const readlineSync = require('readline-sync');
let num = readlineSync.questionFloat("Enter Number: ")
console.log(isEven(num));

function isEven(num){
    if (num > 1 || num < -1){
        if (num > 0){
            return isEven(num-2);
        }else{
            return isEven(num+2);
        }
    } else if (num == 0){
        return true;
    } else {
        return false;
    }
}

