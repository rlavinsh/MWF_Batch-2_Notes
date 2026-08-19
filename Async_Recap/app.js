// let prm = new Promise((resolve, reject) => {});
// console.log(prm);

//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//Humare pass yeah jo resolve aur reject hote hein inhe hum executor functions kehte hein

// Humare pass Promise ki 3 state hoti hein
// Pending , resolve ,reject

// Humare pass Promise ka result bhi 3 values mein hota hein
// undefined, null, value

// let prm = new Promise((resolve, reject) => {
//   let age = 19;
//   if (age >= 18) {
//     resolve("eligible");
//   } else {
//     reject("Not eligible");
//   }
// });

// console.log(prm);

// id: admin12@google.com
// password: "Admin@24"

// promises k handler
//.then() -> jab bhi apka promise resolve hoga toh toh uska result .then() handler k pass aata hein

// .catch() -> jab bhi apka promise reject hoga toh toh uska result .catch() handler k pass aata hein

// yeah hamesha yaad rakhna ki .then() or .catch() yeah humesha kaam karte hein promises k upar

// let prm = new Promise((resolve, reject) => {
//   let age = 15;
//   if (age >= 18) {
//     resolve("eligible");
//   } else {
//     reject("Not eligible");
//   }
// });

// prm
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// let heading = document.querySelector("h1");

// fetch(`https://dummyjson.com/products`)
//   .then((rawData) => {
//     return rawData.json();
//   })
//   .then((result) => {
//     heading.innerText = result.products[0].reviews[1].comment;
//     console.log(result.products[0].reviews[1].comment);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log("fetch wala");

// let result = fetch(`https://randomuser.me/api/`);
// console.log(result);

// console.log("================================================");
// console.log("khud ka banaya hua");

function abc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    //   resolve("chal gaya Promise");
    reject("hum promise poora nahi kar paye")
    }, 2000);
  });
}

abc()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// console.log(abc());
