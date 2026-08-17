// console.log("hello");
// agar apko ek promise create karna ho

// apke pass promise ki total 3 state hoti hein[pending,resolve,reject]

//lekin promise mein values bhi 3 hoti hein
// value
//undefined
//null

// let prm = new Promise((resolve, reject) => {
//   let age = 19;
//   if (age >= 18) {
//     resolve("success");
//   } else {
//     reject("Failed");
//   }
// });
// console.log(prm);

// Promise chaining
// .then()
//.catch()

// let prm1 = new Promise((resolve, reject) => {
//   let num = Math.floor(Math.random() * 10);
//   const user = [
//     {
//       name: "Hello",
//       age: 20,
//     },
//     {
//       name: "World",
//       age: 21,
//     },
//   ];

//   if (num <= 5) {
//     // resolve(`yeah number aa gaye ${num}`);
//     resolve(user);
//   } else {
//     reject(`yeah number aa gaye ${num}`);
//   }
// });

// prm1
//   .then((data) => {
//      data[1]
//   })
//   .then((singleUser) => {
//     console.log(singleUser);
//   })
//   .catch((err) => {
//     console.log("kuch toh error hein");
//   });

// console.log(prm1);
// fetch(`https://randomuser.me/api/`)
//   .then((rawdata) => {
//     return rawdata.json();
//   })
//   .then((data) => {
//     console.log(data.results[0].name.first);
//   })
//   .catch((err) => {
//     console.log("something went wrong");
//   });

// function abc(url) {
//   return new Promise((resolve, reject) => {
//     resolve(url)

//   });
// }

// console.log(abc());

function loginUser(userid, username) {
  console.log("user login ho raha hein");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userid, username });
    }, 2000);
  });
}

function getAllPost(userid) {
  console.log("Post fetch ki ja rahi hein");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { postId: 1, titlt: "KGF" },
        { postId: 2, title: "Spider Man" },
      ]);
    }, 2000);
  });
}
function getAllComments(postId) {
  console.log("all comments fetch ho rahe hein");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { commentId: 1, comment: "Fine" },
        { commentId: 2, comment: "Awesome" },
      ]);
    }, 3000);
  });
}
function getSingleComment(comments) {
  console.log("single comment aa raha hein");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(comments[0].comment);
    }, 2000);
  });
}

loginUser("1", "john@gmail.com")
  .then((data) => {
    console.log(data);
    console.log("user login ho gaya");
  })
  .catch((err) => {});
