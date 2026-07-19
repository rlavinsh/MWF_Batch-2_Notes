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
// let para = document.querySelectorAll("#para");
// // console.log(para);
// para.forEach((val) => {
//   console.log(val);
// });

// let para = document.querySelector("p");
// console.log(para.textContent);
// console.log(para.innerText);
// console.log(para.innerHTML);
// let heading = document.querySelector("h1");
// console.log(heading);
// heading.textContent = "Hello world";
// heading.innerHTML = `<u>Hello world</u>`;
// document.body.style.backgroundColor = "yellow";
// let body = document.body;
// // body.innerText = "hello"
// let heading = document.createElement("h2");
// heading.textContent = "DOM Class";

// yeah mere document mein last mein add ho raha hein
// body.append(heading);
// lekin mujhe first mein add karna hein
// body.prepend(heading);
// console.log(heading);

// let parent = document.querySelector("#list")

// let list = document.createElement("li")
// list.innerText = "Papaya"
// parent.append(list)

// Example-1
// <h1 id="heading">Welcome</h1>

// Output

// Welcome to JavaScript DOM

// Example-2

// <p>HTML</p>
// <p>CSS</p>
// <p>JavaScript</p>
// <p>React</p>

// Requirements

// Sab paragraphs ko

// green color
// font size 24px
let allPara = document.getElementsByTagName("p");
console.log(allPara);
for (let i = 0; i < allPara.length; i++) {
  ((allPara[i].style.color = "green"), (allPara[i].style.fontSize = "24px"));
}

// Example-3
// <div class="student">Rahul</div>
// <div class="student">Priya</div>
// <div class="student">Aman</div>

// Requirements

// Sab cards par

// background : skyblue
// padding :20px
// margin :10px
// border radius :10px

// Example-4

// <h2 class="company">ABC Pvt Ltd</h2>

// Requirements

// Text

// Google India

// kar do.

// Color red

// Example-5

// <ul>
// <li>Home</li>
// <li>About</li>
// <li>Services</li>
// <li>Contact</li>
// </ul>

// Requirements
// Sab list items ko

// font-size :25px
// color :purple

// Example-6
// Body me dynamically

// Breaking News

// heading create karo.

// Uska

// background black
// text white
// padding 20px