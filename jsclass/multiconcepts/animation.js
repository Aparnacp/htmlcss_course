// console.log("Aparna");
// let x = 5;
// let y = 10;
// console.log("The sum of x = ", x, "and y = ", y, "is", x + y);

// console.log(`The sum of x = ${x} and y = ${y} is ${x + y}`);

//arrow function

// function myName(fname) {
//   console.log(`My name is ${fname}`);
// }

// myName("Aparna");

// const myName = (fname) => console.log(`My name is ${fname}`);
//calling
// myName("Aparna");

// function addNumbers(x, y) {
//   var result = x + y;
//   console.log(result);
// }

// addNumbers(20, 40);

// const addNumbers = (x, y) => {
//   var result = x + y;
//   console.log(result);
// };
// addNumbers(20, 40);

//Ternary Operator
// let x = 20;
// if (x == 10) {
//   console.log("True");
// } else {
//   console.log("false");
// }

// x == 10 ? console.log("true") : console.log("false");
//(condition) ? (true) : (false);

let x = [225, 25, 49, 169];
let y = x.sort(myfunc);
function myfunc(num1, num2) {
  return num1 - num2;
}
console.log(y);

//FIXME TODO
//BUG
