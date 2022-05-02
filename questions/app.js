var questionsElement = document.querySelectorAll(".question");

questionsElement.forEach((question) => {
  var btn = question.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    questionsElement.forEach((otherQuestion) => {
      if (
        question != otherQuestion &&
        otherQuestion.classList.contains("show-text")
      ) {
        otherQuestion.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

// var btns = document.querySelectorAll(".question-btn");

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     e.currentTarget.parentElement.parentElement.classList.toggle("show-text");
//   });
// });
