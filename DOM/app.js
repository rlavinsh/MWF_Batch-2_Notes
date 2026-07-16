// const user = {
//   firstName: "Shivam",
//   lastName: "Gupta",
//   Age: 25,
// };
// console.log(user);

// console.log(user.firstName);
// console.dir(document.title);

// let box = document.getElementById("box1");
// // console.log(box);
// box.addEventListener("click", () => {
//   //   console.log("Box clicked");
//   box.style.backgroundColor = "yellow";
// });

// document ko hum root node kehte hein
// humare pass jitne bhi tag hote hein unhe hum element node kehte hein
// in tag k andar jo bhi text hota hein ushe hum text node kehte hein
// agar hum kisi bhi tag k andar koi attribute pass karte hein toh ushe attributeNode kehte hein

// hum access kaise kar sakte hein
// getElementsByTagName()
// let para = document.getElementsByTagName("p")
// console.log(para)

// getElementsByClassName()
// let heading = document.getElementsByClassName("heading");
// console.log(heading[0].textContent);
// heading[0].textContent = "neend se jaag jao";

//getElementById()
// let para = document.getElementById("para");
// console.log(para);
// para.textContent = "Hello Para";

// querySelector
// let tag = document.querySelector("h2")
// tag.textContent = "DOM"
// console.log(tag);

// let heading = document.querySelector(".heading")
// console.log(heading);

// let para = document.querySelector("#para")
// console.log(para);

//querySelectorAll()
let para = document.querySelectorAll("#para");
// console.log(para);
para.forEach((val) => {
  console.log(val);
});
