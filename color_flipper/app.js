const colors = ["red", "blue", "green"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function onClick() {
  var randomNumber = Math.floor(Math.random() * (colors.length - 0) + 0);
  console.log(`The random number is ${randomNumber}`);
  var newColor = colors[randomNumber];
  console.log(`The new color is ${newColor}`);
  document.body.style.backgroundColor = newColor;
  color.textContent = newColor;
}

btn.addEventListener("click", onClick);
