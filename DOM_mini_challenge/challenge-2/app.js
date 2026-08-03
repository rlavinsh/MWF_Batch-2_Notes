let generateBtn = document.querySelector("#generateBtn");

function randomColor() {
  let letters = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * letters.length);
    color = color + letters[randomNumber];
  }
  return color;
}

// console.log(randomColor());

function createCard(colorCode) {
  let div = document.createElement("div");
  div.setAttribute("class", "color-card");
  div.style.backgroundColor = colorCode;
  //span
  let span = document.createElement("span");
  span.setAttribute("class", "color-code");
  span.textContent = colorCode;

  div.prepend(span);
  return div;
}

function generatePalette() {
  let colorPalette = document.querySelector("#colorPalette");
  colorPalette.innerHTML = "  ";
  for (let i = 0; i < 5; i++) {
    let colorCode = randomColor();
    const card = createCard(colorCode);
    colorPalette.append(card);
  }
}

generatePalette();

generateBtn.addEventListener("click", generatePalette);
