const num1:number = 5; // Type assignment
const num2:number = 7; // no difference with 5.0
const num3 = 8; // Not using :number here. Typescript uses type inference here.
let num4:number;
num4 = 5; // When we use this type of assignment, its wiser to mention the type of the variable.

function add(a:number,b:number):number{
    return a+b;
}
console.log(add(num1,num2));