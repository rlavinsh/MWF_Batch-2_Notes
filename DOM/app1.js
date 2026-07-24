// ◉ insertBefore()
// insertBefore Syntax => parentElement.insertBefore(newNode, ReferenceNode);

// let parentElement = document.querySelector("#list");
// let Mango = document.querySelector("#mango"); // location
// console.log(parent);
// ParentElement.insertBefore("apka banaya hua new Element","Jiske bhi refrence mein add karna hein uski location")
// const newElement = document.createElement("li");
// newElement.textContent = "Papaya";
// console.log(newElement);

// parentElement.insertBefore(newElement, Mango);
// console.log(newElement);

// console.log(parentElement.children.length);

// let Element = (parentElement.children[3].style.fontSize = "36px");
// console.log(parentElement.children[3]);

// body k background color ko change kar do lekin bini selector Method k

// console.log((document.children[0].children[1].style.backgroundColor = "black"));

// let heading2 = document.querySelector("#heading2");
// console.log(heading2.parentElement.parentElement);

// heading2.parentElement.style.backgroundColor = "red";

// let parentEle = document.querySelector("#list");

// Agar mujhe kabhi kisi bhi parent ka first tag yha element access karna hoga toh mein use karunga firstElementChild
// parentEle.firstElementChild.style.backgroundColor = "red";
// Agar mujhe kabhi kisi bhi parent ka last tag yha element access karna hoga toh mein use karunga lastElementChild
// parentEle.lastElementChild.style.backgroundColor = "yellow";

// let apple = document.querySelector("#apple");
// console.log(apple);
// let apple1 = apple.nextElementSibling.style.backgroundColor = "yellow";

let grapes = document.querySelector("#grapes");
// grapes.previousElementSibling.previousElementSibling.style.backgroundColor =
//   "green";
// console.log(grapes);

// grapes.nextElementSibling.style.fontSize = "34px";

// console.log(val);
// let directJump = grapes.closest(".container");
// console.log(directJump);
// directJump.style.backgroundColor = "green"

// Agar mujhe kabhi bhi runtime par only class add karni hogi toh mein use karunga classList
//syntax:
//selectedElement.classList.add("class ka Name")
// let container = document.querySelector("div");
// console.log(container);
// container.classList.add("container", "container1");
// ========= class Remove k liye=====
// Agar mujhe kabhi bhi runtime par only class remove karni hogi toh mein use karunga classListla
//syntax:
//selectedElement.classList.remove("class ka Name")
// container.classList.remove("container");
// let container = document.querySelector("div");

// let changeTheme = document.querySelector(".dark");
// changeTheme.addEventListener("click", function () {
//   //   console.log("Theme change karna hein");
//   container.classList.toggle("container");
//   console.log(container);
// });

// container.classList.contains()

// Change Theme
// let btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//   document.body.classList.toggle("dark");

//   if (document.body.classList.contains("dark")) {
//     btn.textContent = "change to Light Theme";
//   } else {
//     btn.textContent = "Change to Dark Theme";
//   }
// });

// let div = document.querySelector("div");
// // console.log(div);
// div.setAttribute("id", "div1");
// console.log(div.getAttribute("class"));
// A
