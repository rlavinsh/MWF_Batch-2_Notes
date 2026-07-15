const students = [
  { id: 1, name: "Aman", marks: 75, age: 20, city: "Delhi" },
  { id: 2, name: "Riya", marks: 92, age: 21, city: "Mumbai" },
  { id: 3, name: "Karan", marks: 65, age: 22, city: "Delhi" },
  { id: 4, name: "Priya", marks: 88, age: 20, city: "Pune" },
   { id: 5, name: "Rahul", marks: 98, age: 19, city: "Mumbai" },
  { id: 6, name: "Neha", marks: 98, age: 22, city: "Delhi" },
];

// students.forEach((val)=>{
//   console.log(val);

// })

// 1. Sirf students ke names ka array banao.

// let newArray = students.map((val) => {
//   return val.name;
// });
// console.log(newArray);

// 2. 80+ marks wale students nikalo.
// let newArray = students.filter((val)=>{
//   return val.marks > 80
// }).map((val)=>{
//   return val.name
// })
// console.log(newArray);

//3. Sabhi students ke marks mein 5 grace marks add karke new array banao.

// let newArray = students.map((val) => {
//   return {
//     ...val,
//     marks: val.marks + 5,
//   };
// });
// console.log(students);

// console.log(newArray);

//4. Sabhi students ka total marks nikalo.
//5. Average marks calculate karo.
//6.Highest marks wala student nikalo.
let ans = students.reduce((highest, curr) => {
  if (curr.marks >= highest.marks) {
    return curr;
  }
  return highest;
});
console.log(ans);

//7.Lowest marks wala student nikalo.
//8.Delhi se belong karne wale students ke names nikalo.
//9.Pass students (marks >=70) ke names uppercase mein return karo.
