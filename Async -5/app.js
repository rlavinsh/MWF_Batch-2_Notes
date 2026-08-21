const User = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("User aa gaya");
    reject("kuch nahi aaya");
  }, 4000);
});

const Post = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("post aa gayi");
    reject("data gayab hein");
  }, 3000);
});

const comment = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("comment aa gaya");
    reject("comment nahi aaya");
  }, 2000);
});

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

Promise.any([User, Post, comment])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });



  // emailid | status :  | score:
  
  // total emails ->5
  // sent -> 3
  // failed -> 2