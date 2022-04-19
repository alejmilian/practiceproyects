var toggleButtonElement = document.querySelector(".nav-toggle");
var toggleMenuElement = document.querySelector(".links");

function onClickEvent() {
  toggleMenuElement.classList.toggle("show-links");
}

toggleButtonElement.addEventListener("click", onClickEvent);
