// "Enter numerical grade: 90";
// "Letter grade: A";
// "Continue? (y/n): y";
// "Enter numerical grade: 88";
// "Letter grade: A";
// "Continue? (y/n): y";
// "Enter numerical grade: 80";
// "Letter grade: B";
// "Continue? (y/n): y";
// "Enter numerical grade: 67";
// "Letter grade: C";
// "Continue? (y/n): y";
// "Enter numerical grade: 59";
// "Letter grade: F";


// A 88-100
// B 80-87
// C 67-79
// D 60-67
// F &lt;60

const readline = require('readline-sync');
let grade = readline.question("Enter Numeric Grade: ");

let result = gradeCheck(grade);
console.log(result);

function gradeCheck(grade){
    if (grade > 87){
        return  ("Letter Grade: A");
    } else if( grade <= 87 && grade > 79){
        return("Letter Grade: B");
    } else if (grade <= 79 && grade > 66){
        return("Letter Grade: C");
    } else if (grade <= 66 && grade > 59){
        return "Letter Grade: D";
    } else{
        return "Letter Grade: F";
    }
}







