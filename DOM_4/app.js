// let submitform = document.querySelector("#submitform");

// submitform.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(event.target);

//   console.log("form submitted");
// });

// Event Bubbling
// let child = document.querySelector(".btn");
// let parent = document.querySelector("#parent");
// document.body.addEventListener("click", () => {
//   console.log("body clicked");
// });

// child.addEventListener("click", () => {
//   console.log("child clicked");
// });

// parent.addEventListener("click", (event) => {
//   console.log("Parent clicked");
//   event.stopPropagation();
// });

// Event Capturing

// let child = document.querySelector(".btn");
// let parent = document.querySelector("#parent");
// let grandParent = document.querySelector("#grandParent");
// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("body clicked");
//   },
//   true,
// );

// child.addEventListener("click", () => {
//   console.log("child clicked");
// });

// grandParent.addEventListener("click", (event) => {
//   console.log("🙏GrandParent Clicked");
//   // event.stopPropagation();
// },true);

// parent.addEventListener(
//   "click",
//   () => {
//     console.log("Parent clicked");
//   },
//   true,
// );
let container = document.querySelector(".container");

let card = document.querySelector(".card");

let addCard = document.querySelector(".btn1");

let allButtons = document.querySelectorAll(".btn");

container.addEventListener("click", (event) => {
  console.log(event.target);

  if (event.target.classList.contains("btn")) {
    event.target.parentElement.remove();
  }
});

// allButtons.forEach((btn) => {
//   btn.addEventListener("click", (event) => {
//     console.log(event.target.parentElement.remove());
//   });
// });

addCard.addEventListener("click", () => {
  const div = document.createElement("div");
  div.setAttribute("class", "card");
  div.innerHTML = ` <h2>Fruit${Math.floor(Math.random() * 200)}</h2>
        <button class="btn">Delete</button>`;
  console.log(div);

  container.append(div);
});

let parentDiv = document.querySelector(".parent");

let Buttons = document.querySelectorAll(".btns");

Buttons.forEach((Item) => {
  // console.log(Item);
  Item.addEventListener("click", (e) => {
    console.log(e.target);
  });
});
