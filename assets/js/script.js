var timerCount = 75;
var body = document.body;

var instructions = document.querySelector(".instructions");
var h1El = document.createElement("h1");

var questions = document.querySelector(".questions");
var h2El = document.createElement("h2");

var score = document.querySelector(".score");

var timerElement = document.querySelector(".timer");

var button = document.createElement("button");
button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "palevioletred";
});
button.addEventListener("mouseout", () => {
  button.style.backgroundColor = "blueviolet";
});

var idx = 0;
var quiz = [
  {
    question: `Suppose that str is equal to the string "Mango Apple  Orange". What will str.split() return?`,
    choices: [
      `1. ["Mango", "Apple", "Orange"]`,
      `2. ["Mango", "Apple", "", "Orange"]`,
      `3. ["Mango Apple  Orange"]`,
      "4. None of the above.",
    ],
    answer: 3,
  },
  {
    question: "How to access the second element of the array arr = [3, 7, 10]?",
    choices: [
      "1. arr.indexOf(2)",
      "2. arr.indexOf(1)",
      "3. arr[2]",
      "4. arr[1]",
    ],
    answer: 4,
  },
  {
    question: "How to declare a variable in JavaScript?",
    choices: [
      "1. Using var",
      "2. Using declare",
      "3. Using dec",
      "4. Using variable",
    ],
    answer: 1,
  },
  {
    question:
      "Which of the following denotes the three functions in JavaScript that display dialog boxes?",
    choices: [
      "1. alert(), confirmation(), prompt()",
      "2. alert(), confirm(), prompt()",
      "3. alert(), error(), warning()",
      "4. alertDialog(), confirmDialog(), promptDialog()",
    ],
    answer: 2,
  },
];

function nextQuestion() {
  var btnResult;
  h2El.textContent = quiz[idx].question;
  questions.appendChild(h2El);
  for (var j = 0; j < quiz[idx].choices.length; j++) {
    button = document.createElement("button");

    btnResult = createButton(button, (j + 1).toLocaleString());
    questions.appendChild(btnResult);
    btnResult.addEventListener("click", questionResult);
    btnResult.textContent = quiz[idx].choices[j];
  }
}

function startQuiz() {
  instructions.innerHTML = "";
  score.textContent = "";

  startTimer();
  nextQuestion();
}

function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = "Time: " + timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      /*if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }*/
    }
    // Tests if time has run out
    if (timerCount == 0) {
      // Clears interval
      clearInterval(timer);
    }
  }, 1000);
}

function questionResult() {
  score.textContent = "";
  if (idx < 4) {
    var selection = Number(this.id);
    var result = quiz[idx].answer;
    score.style =
      "text-align: center; font-size: large; color:gray; border-top: 2px solid gray ;";
    if (selection == result) {
      score.textContent = "Correct";
    } else {
      score.textContent = "Incorrect";
      timerCount -= 15;
      if (timerCount < 0) {
        timerElement.textContent = "Time: 0";
      }
    }
    idx++;
    questions.innerHTML = "";
    nextQuestion();
  } else {
    questions.innerHTML = "";
    nextQuestion();
  }
}

function createButton(button, id) {
  var btn = button;
  btn.id = id;
  btn.style =
    "margin-bottom:5px; border-radius:8px; background-color:blueviolet; color:white;";

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
  var btnResult = createButton(button, "title");
  instructions.append(btnResult);
  btnResult.addEventListener("click", startQuiz);
  btnResult.textContent = "Start Quiz";
}

startPage();
