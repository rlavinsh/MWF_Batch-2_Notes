// let counter = document.querySelector("#counter");
// let count = 0;
// counter.textContent = count;
// function Incre() {
//   count++;
//   counter.textContent = count;
//   console.log(count);
// }

// function Decre() {
//   count--;
//   if (count >= 0) {
//     counter.textContent = count;
//   }

//   console.log(count);
// }

// Method-2
let count = 0;
let Incre = document.querySelector(".btn1");
let Decre = document.querySelector(".btn2");
let counter = document.querySelector("#counter");
counter.textContent = count;
// Agar aap kisi button par click kar k kuch task perform karna chahate ho toh app use karoge click event
// eshe use karne k liye humare pass ek addEventListner hota hein jo humse jo argumnet expect  karta hein
//1. konsa event hein matlab sir [click, dblclick,change eshe humare pass bahut saare event hote hein mdn check kar lena]
//2.ek function expect karta hein jisse hum callback function kehte hein

Incre.addEventListener("click", () => {
  //   console.log("Bhai value increase hui kya");
  count++;
  counter.textContent = count;
});
function Decrement(){
    count--;
    counter.textContent = count;
}
Decre.addEventListener("click", Decrement);
