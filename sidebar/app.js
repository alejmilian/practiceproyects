var toggleButtonElement = document.querySelector(".sidebar-toggle");

var closeButtonElement = document.querySelector(".close-btn");

var sidebarElement = document.querySelector(".sidebar");

function onClick() {
  sidebarElement.classList.toggle("show-sidebar");
}

toggleButtonElement.addEventListener("click", onClick);
closeButtonElement.addEventListener("click", onClick);
