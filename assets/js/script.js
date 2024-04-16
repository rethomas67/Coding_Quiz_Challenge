var body = document.body;

var instructions = document.querySelector(".instructions");
var h1El = document.createElement("h1");

var questions = document.querySelector(".questions");
var h2El = document.createElement("h2");

var button = document.createElement("div");
//button.addEventListener("click", startQuiz);

//button.textContent = "Button One";
button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "palevioletred";
});
button.addEventListener("mouseout", () => {
  button.style.backgroundColor = "blueviolet";
});

var quiz = [
  {
    question: "What is question 1?",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    answer: 1,
  },
];

/*var startButton = document.createElement("button");
startButton.addEventListener("click", startQuiz);
startButton.style = "border-radius:8px; background-color:blueviolet; color:white";
startButton.textContent = "Button One";
startButton.addEventListener("mouseover", () => {
  buttonOne.style.backgroundColor = "palevioletred";
});
startButton.addEventListener("mouseout", () => {
  buttonOne.style.backgroundColor = "blueviolet";
});

//instructions.appendChild("startButton");
var buttonOne = document.createElement("button");
buttonOne.id = "1";
buttonOne.style = "border-radius:8px; background-color:blueviolet; color:white";
buttonOne.textContent = "Button One";
buttonOne.addEventListener("click", questionResultOne);
buttonOne.addEventListener("mouseover", () => {
  buttonOne.style.backgroundColor = "palevioletred";
});
buttonOne.addEventListener("mouseout", () => {
  buttonOne.style.backgroundColor = "blueviolet";
});*/

function startQuiz() {
  instructions.innerHTML = "";
  var btnResult;
  h2El.textContent = "This is question1!";
  questions.appendChild(h2El);
  for (var j = 0; j < quiz[0].choices.length; j++) {
    alert(j);
    button = document.createElement("button");

    btnResult = createButton(button, (j + 1).toLocaleString());
    questions.appendChild(btnResult);
    btnResult.addEventListener("click", questionResultOne);
    btnResult.textContent = quiz[0].choices[j];
  }
}

function questionResultOne() {
  alert(this.id);
}

function clearQuestions() {
  questions.innerHTML = "";
}

function createButton(button, id) {
  var btn = button;
  btn.id = id;
  btn.style = "border-radius:8px; background-color:blueviolet; color:white;";

  btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "palevioletred";
  });
  btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "blueviolet";
  });
  return btn;
}

function startPage() {
  instructions.innerHTML = "";
  h1El.textContent = "Coding Quiz Challenge";
  instructions.appendChild(h1El);
  //button.style =
  //"border-radius:8px; background-color:blueviolet; color:white display:flex justify-content:center flex-direction:column";
  var btnResult = createButton(button, "title");
  instructions.append(btnResult);
  btnResult.addEventListener("click", startQuiz);
  btnResult.textContent = "Start Quiz";
}

startPage();
