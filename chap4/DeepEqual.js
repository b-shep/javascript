
function deepEqual(this1, this2){
    //assess if both objects
    if (typeof this1 == "object" && this1 != null && typeof this2 == "object" && this2 != null){
        //assess if objects have same number of properties
        if(Object.keys(this1).length == Object.keys(this2).length){
            //loop over all keys of this1
            for (i = 0; i < Object.keys(this1).length; i++){
                if(Object.keys(this1)[i] == Object.keys(this2)[i]){
                    let key1 = this1[Object.keys(this1)[i]];
                    console.log(key1);
                    let key2 = this2[Object.keys(this2)[i]]
                    //compare value of key
                    deepEqual(key1, key2);
                //key name at i is not equal in this1 and this2
                } else {
                    console.log("false returned at key name at i is not equal in this1 and this2")
                    return false;
                }
            }
        //both do not have same number of properties
        } else{
            console.log("false returned at both do not have same number of properties")
            return false;
        }
    //if both not objects compare primitive values
    } else if(this1 !== this2){
        console.log("false returned at if both not objects compare primitive values");
        return false;
    } else{
    console.log("true returned")
    }
return true;
}


let this1 = {
    atest: "barf",
    checknesct: 4,
    events: {noWay: 1,
            anway: "hiccup",
            bigDog: {
                abish: 55,
                thisbish: "nerbko"
            } 
        }
};

let this2 =  {
    atest: "barf",
    checknesct: 4,
    events: {noWay: 1,
            anway: "hiccup",
            bigDog: {
                abish: 55,
                thisbish: "nerbko"
            } 
    }
}

console.log("the result of this1, this2" + deepEqual(this1,this2));

let this3 =  {
    events: {noWay: 1,
            anway: "hiccup",
            bigDog: {
                abish: 55,
                thisbish: "nerbko"
            } 
    },
    atest: "barf",
    checknesct: 4
}

let this4 =  {
    events: {noWay: 1,
            anway: "hiccup",
            bigDog: {
                abish: 55,
                thisbish: "nerbko"
            } 
    },
    atest: "barf",
    checknesct: 5
}

console.log("the result of this3, this4" + deepEqual(this3,this4))