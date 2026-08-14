// function greet(cb) {
//   console.log("Hello");
//   cb();
// }

// function sayBye() {
//   console.log("Bye Bye");
// }

// greet(sayBye);

// function additon(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }

// function calculator(a, b, operation) {
//   console.log(operation(a, b));
// }

// calculator(10, 20, sub);

// console.log(additon(10, 20));
// console.log(sub(10, 20));

// console.log("price dekhenge");
// console.log("pizza order karenge");
// setTimeout(() => {
//   console.log("pizza ready hoga");
// }, 10000);
// console.log("Pizza table par aayega");
// console.log("pizza enjoy karenge");

// pyramid of doom || callback hell
// setTimeout(() => {
//   console.log("price dekhenge");
//   setTimeout(() => {
//     console.log("pizza order karenge");
//     setTimeout(() => {
//       console.log("pizza ready hoga");
//       setTimeout(() => {
//         console.log("Pizza table par aayega");
//         setTimeout(() => {
//           console.log("pizza enjoy karenge");
//         }, 2000);
//       }, 2000);
//     }, 10000);
//   }, 2000);
// }, 2000);

// user login karega
//user all post ko get karega
// post ki id se uske comment par jayega
// single comment lena hein

// function loginUser(userid, username, cb) {
//   console.log("user login ho raha hein");
//   setTimeout(() => {
//     cb({ userid, username });
//   }, 2000);
// }
// function getAllPost(userid, cb) {
//   console.log("Post fetch ki ja rahi hein");
//   setTimeout(() => {
//     cb([
//       { postId: 1, titlt: "KGF" },
//       { postId: 2, title: "Spider Man" },
//     ]);
//   }, 2000);
// }
// function getAllComments(postId, cb) {
//   console.log("all comments fetch ho rahe hein");
//   setTimeout(() => {
//     cb([
//       { commentId: 1, comment: "Fine" },
//       { commentId: 2, comment: "Awesome" },
//     ]);
//   }, 3000);
// }
// function getSingleComment(comments, cb) {
//   console.log("single comment aa raha hein");
//   setTimeout(() => {
//     cb(comments[0].comment);
//   }, 2000);
// }

// loginUser("1", "john@gmail.com", (userData) => {
//   console.log(userData);
//   console.log("user login ho gaya hein");
//   //   console.log(userData.userid);

//   getAllPost(userData.userid, (allPosts) => {
//     console.log(allPosts);
//     console.log("saari post aa gayi hein");
//     // console.log(allPosts[0].postId);

//     getAllComments(allPosts[0].postId, (allComments) => {
//       console.log(allComments);

//       console.log("sabhi comments aa gaye hein");
//       getSingleComment(allComments, (singleComment) => {
//         console.log(singleComment);
//         console.log("single comment bhi aa gaya");
//       });
//     });
//   });
// });


