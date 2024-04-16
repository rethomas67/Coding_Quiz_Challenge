var startButton = document.querySelector(".btn_start");
var instructions = document.querySelector(".instructions");

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  instructions.innerHTML = "";
}
