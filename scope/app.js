// Global Scope
// Functional Scope
// Block Scope
// Module Scope

// const a = 10;

// function greet(){
//     console.log(a);
// }
// greet()

// function greet(){
//     const a = 10;
// }

// function greet1(){
//     console.log(a);

// }

// greet()
// greet1()

// Block level
// {
//   let a = 10;
// }
// console.log(a);

// scope chaining
// let b = 20;
// function one() {
// //   let b = 20;
//   function two() {
//     let c = 30;
//     console.log(c);
//     console.log(b);
//     // console.log(a);
//   }
//   two()
// }
// one()

// variabel shadowing
// let city = "Bhopal"
// function greet(){
//     let city = "Indore"
//     console.log(city);

// }
// greet()
// console.log(city);

//forEach

let nums = [10, 20, 30, 40];

let nums1 = nums.forEach((val, idx) => {
  return val;
});
console.log(nums1);


// Map
let num2 = nums.map((val, idx) => {
  return val+5;
});
console.log(num2);

// filter
let nums3 =  nums.filter((val)=>{
    return val>20;
})

console.log(nums3);

let ans = nums.reduce((acc,curr)=>{
    return acc = acc+curr;
},0)
console.log(ans);



