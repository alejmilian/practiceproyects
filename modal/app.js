var buttonElement = document.querySelector(".modal-btn");
var modalButtonElement = document.querySelector(".close-btn");
var modalElement = document.querySelector(".modal-overlay");

function onClick() {
  modalElement.classList.toggle("open-modal");
}

buttonElement.addEventListener("click", onClick);
modalButtonElement.addEventListener("click", onClick);

window.addEventListener("click", (e) => {
  if (e.target == modalElement) {
    modalElement.classList.toggle("open-modal");
  }
});
