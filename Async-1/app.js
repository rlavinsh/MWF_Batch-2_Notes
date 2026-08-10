// console.log("start");
// // console.log("Feteching the data ...");
// // console.log("Data Fetched");

// for (let i = 0; i < 1000; i++) {
//   console.log(i);
// }
// console.log("Task Done");
//sync : yeah apke main thread ko block kar deta hein
//async: yeah apke main thread ko block nahi karta hein

// console.log("start");

// setTimeout(() => {
//   for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
// }, 0);

// console.log();

// console.log("code Ends");

// console.log("function start ho raha hein");

// function greet() {
//   console.log("hello students");
// }

// setTimeout(callback fn, timing)
let apiId = setTimeout(() => {
  let data = fetch(`https://randomuser.me/api/`)
    .then((rawData) => {
      return rawData.json();
    })
    .then((result) => {
      console.log(result.results[0].email);
    })
    .catch((err) => {
      console.log("something went wrong");
    });
}, 2000);

console.log("setTimeoutId", apiId);
// clearTimeout(apiId);

// setInterval(callback,timing)

// setInterval(() => {
//   //   let randomNum = Math.floor(Math.random() * 100);
//   //   console.log(randomNum);
// //   let data = fetch(`https://randomuser.me/api/`)
// //     .then((rawData) => {
// //       return rawData.json();
// //     })
// //     .then((result) => {
// //       console.log(result.results[0].email);
// //     })
// //     .catch((err) => {
// //       console.log("something went wrong");
// //     });
// }, 2000);

let Reset = document.querySelector(".reset");
let hours = document.querySelector("#hours");
Reset.addEventListener("click", () => {
  hours.textContent = "00";
});

let randomId = setInterval(() => {
  //   console.log("hello");
  let randomNum = Math.floor(Math.random() * 400);
  console.log(randomNum);
}, 2000);

console.log("setInterval Id", randomId);

clearInterval(randomId);
