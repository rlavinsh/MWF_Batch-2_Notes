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


