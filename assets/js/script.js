var body = document.body;
var startButton = document.querySelector(".btn_start");
var instructions = document.querySelector(".instructions");
var questions = document.querySelector(".questions");

var question = document.createElement("h2");
var buttonOne = document.createElement("button");
buttonOne.id = "1";
buttonOne.style = "border-radius:8px; background-color:blueviolet; color:white";
buttonOne.textContent = "Button One";

startButton.addEventListener("click", startQuiz);
buttonOne.addEventListener("click", questionResultOne);
buttonOne.addEventListener("mouseover", () => {
  buttonOne.style.backgroundColor = "palevioletred";
});
buttonOne.addEventListener("mouseout", () => {
  buttonOne.style.backgroundColor = "blueviolet";
});
function startQuiz() {
  instructions.innerHTML = "";
  question.textContent = "This is question1!";
  questions.appendChild(question);

  questions.appendChild(buttonOne);
}

function questionResultOne() {
  alert(this.id);
}

function clearQuestions() {
  questions.innerHTML = "";
}

clearQuestions();
