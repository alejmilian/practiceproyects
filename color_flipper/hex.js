const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function onClick() {
  var hexColor = "#";
  for (let i = 0; i < 6; i++) hexColor += hex[getRandomNumber()];
  var newColor = hexColor;
  console.log(`The new color is ${newColor}`);
  document.body.style.backgroundColor = newColor;
  color.textContent = newColor;
}

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

btn.addEventListener("click", onClick);
