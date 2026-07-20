// ◉ insertBefore()
// insertBefore Syntax => parentElement.insertBefore(newNode, ReferenceNode);

let parentElement = document.querySelector("#list");
let Mango = document.querySelector("#mango"); // location
// console.log(parent);
// ParentElement.insertBefore("apka banaya hua new Element","Jiske bhi refrence mein add karna hein uski location")
const newElement = document.createElement("li");
newElement.textContent = "Papaya";
console.log(newElement);

parentElement.insertBefore(newElement, Mango);
// console.log(newElement);

// console.log(parentElement.children.length);

// let Element = (parentElement.children[3].style.fontSize = "36px");
// console.log(parentElement.children[3]);

// body k background color ko change kar do lekin bini selector Method k

// console.log((document.children[0].children[1].style.backgroundColor = "black"));

let heading2 = document.querySelector("#heading2");
console.log(heading2.parentElement.parentElement);

// heading2.parentElement.style.backgroundColor = "red";
