var counter = 0;

var buttons = document.querySelectorAll(".btn");

var valueSpanElement = document.getElementById("value");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.currentTarget.classList[1]) {
      case "decrease":
        counter -= 1;
        valueSpanElement.style.color = "red";
        break;
      case "reset":
        counter = 0;
        valueSpanElement.style.color = "#222";
        break;
      case "increase":
        counter += 1;
        valueSpanElement.style.color = "green";
        break;
    }
    valueSpanElement.textContent = counter;
  });
});
