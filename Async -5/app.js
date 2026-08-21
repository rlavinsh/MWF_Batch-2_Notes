// const User = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("User aa gaya");
//     reject("kuch nahi aaya");
//   }, 4000);
// });

// const Post = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("post aa gayi");
//     reject("data gayab hein");
//   }, 3000);
// });

// const comment = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("comment aa gaya");
//     reject("comment nahi aaya");
//   }, 2000);
// });

//Promise.all -> agar ek bhi Promise fail hua toh apko keval uska result milega

// Promise.all([User, Post, comment])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.allSettled([])

// Promise.allSettled([User, Post, comment])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.race()

// Promise.race([User, Post, comment])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.any()

// Promise.any([User, Post, comment])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// emailid | status :  | score:
// total emails ->5
// sent -> 3
// failed -> 2

// let emails = [
//   "abc@gmail.com",
//   "hello1@gmail.com",
//   "hello2@gmail.com",
//   "hello3@gmail.com",
//   "hello4@gmail.com",
// ];

// function sendEmail(email) {
//   return new Promise((resolve, reject) => {
//     const creditScore = Math.floor(Math.random() * 800);
//     if (creditScore >= 400) {
//       resolve({
//         email,
//         creditScore,
//         message: "Email Sent",
//       });
//     } else {
//       reject({
//         email,
//         creditScore,
//         message: "Email Failed",
//       });
//     }
//   });
// }

// let allEmails = emails.map((email) => {
//   return sendEmail(email);
// });

// Promise.allSettled(allEmails).then((results) => {
//   // console.log(results);
//   let sentEmail = 0;
//   let failedEmail = 0;
//   results.forEach((result, index) => {
//     if (result.status === "fulfilled") {
//       console.log(
//         `index:${index} || ${result.value.email} || ${result.value.creditScore}`,
//       );
//       sentEmail++;
//     } else {
//       console.log(
//         `index:${index} || ${result.reason.email} || ${result.reason.creditScore}`,
//       );
//       failedEmail++;
//     }
//   });
//   console.log("Email Report");
//   console.log(`total email ${emails.length}`);
//   console.log(`sent Email ${sentEmail}`);
//   console.log(`Failed Email ${failedEmail}`);
// });

// sendEmail("abc@gmail.com")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Async and await
// promise k upar hi kaam karta hein
//Async -> apne apne statement ko bana diya asynchronous
// Await-> ki mera wait karo

// fetch(`https://randomuser.me/api/`)
//   .then((rawData) => {
//     return rawData.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .then((email) => {
//     console.log(email);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function getData() {
  try {
    const rawData = await fetch(`https://randomuser.me/api/`);
    const result = await rawData.json();
    const email = result.results[0].name.first;
    console.log(email);
  } catch (err) {
    console.log("something went wrong");
  }

  // console.log(rawData);
}

getData();
