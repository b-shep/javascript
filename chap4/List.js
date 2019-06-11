const readlineSync = require('readline-sync');

function arrayToList(array){
    let list = null;
    for (let i = array.length; i >= 0; i--){
        list = {value: array[i], rest: list}
    }
    return list;
}

console.log(prepend(0, arrayToList([1,2,3,4,5,6,7])));

function listToArray(list){
    let array = [];
    for (let node = list; node; node = node.rest){
        if (node.rest != null){
            array.push(node.value);
        }
    }
    return array;
};

function prepend(element, list){
    let newList = {value: element, rest: list}
    return newList;
};

function nth(list, num){
        if(num != 0){
            if(list.rest != null){
                return nth(list.rest, num-1)
            } else{
                return undefined
            }
        }else{
            return list.value;
        }
    }

let list = arrayToList([1,2,3,4,5,6,7]);

console.log(nth(list, 90));