let size = 12;

for(let i = 0 ; i <= size; i++){
    if(i % 2 ==0){
        let printStr = "";
        for (let j = 0; j <= size; j++){
            if (j % 2 == 0){
                printStr += " ";
            } else{
                printStr += "#";
            }
        }
        console.log(printStr);
    }
    if(i % 2 !=0){
        let printStr = "";
        for (let j = 0; j <= size; j++){
            if (j % 2 == 0){
                printStr += "#";
            } else{
                printStr += " ";
            }
        }
        console.log(printStr);
    }
}
