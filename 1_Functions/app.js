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

// function calculateSum(num1, num2) {
//   console.log("Calcualting sum....");

//   return num1 + num2;
//   return num1; // Ignore
//   return num2; // Ignore
//   console.log("Hello"); // Ignore
// }

// let result = calculateSum(10, 20);
// console.log(result);

// IIFE()

// Syntax:

// (function () {
// })();

function greet() {
  console.log("welcome");
}

// greet();

// (function () {
//   console.log("hello1");
// })();

// (function () {
//   console.log("hello2");
// })();

// "use strict";
// let public = 10;
// console.log(public);

function checkVowelConsonant(str) {
  let vowelCount = 0;
  let consonantCount = 0;
  for (let ch of str) {
    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
      vowelCount++;
    } else {
      consonantCount++;
    }
  }
  return { vowelCount, consonantCount };
}

let result = checkVowelConsonant("hello JavaScript");
console.log(`Total Vowels: ${result.vowelCount}`);
console.log(`Total Consonants: ${result.consonantCount}`);

// convert function to function expression
// const checkVowelConsonant = function (str) {
//   let vowelCount = 0;
//   let consonantCount = 0;
//   for (let ch of str) {
//     if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
//       vowelCount++;
//     } else {
//       consonantCount++;
//     }
//   }
//   return { vowelCount, consonantCount };
// };

// convert function to arrow function
// const checkVowelConsonant = (str) => {
//   let vowelCount = 0;
//   let consonantCount = 0;
//   for (let ch of str) {
//     if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
//       vowelCount++;
//     } else {
//       consonantCount++;
//     }
//   }
//   return { vowelCount, consonantCount };
// };
