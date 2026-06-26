// Functions
// 1. Function Declration
// 2 Function expression
// 3.Arrow Function
//4.IIFE(Immediate Invoked function expression)

//Invoke kar sakte ho

// Syntax
//  function FunctionName(){

//  }\

// function greet() {
//   console.log("Hello Students");
// }
// greet();

// with Parameters
// function calculateSum(num1, num2) {
//   console.log(num1 + num2);
// }

// calculateSum(10, 15);
// console.log("==========Output of 2 function calling==========");
// calculateSum(25, 26);
// calculateSum();

// Default Parameters
// function calculateSum(num1 = 10, num2 = 5) {
//   console.log(num1 + num2);
// }

// calculateSum()
// calculateSum(25);
// calculateSum(25,15);

// Return

function calculateSum(num1, num2) {
  console.log("Calcualting sum....");

  return num1 + num2;
  return num1; // Ignore
  return num2; // Ignore
  console.log("Hello"); // Ignore
}

let result = calculateSum(10, 20);
console.log(result);
