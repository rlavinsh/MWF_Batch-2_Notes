let btn = document.querySelector(".btn");

btn.addEventListener("click", randomColor);

function randomColor() {
  let letters = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * letters.length);
    color = color + letters[randomNumber];
  }
  document.body.style.backgroundColor = color;
}

