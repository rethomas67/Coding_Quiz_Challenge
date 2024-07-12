//intialize the variables
var timerCount = 75;
var entries = 0;
var initials = "";
var viewScores = [];
var complete = false;
var body = document.body;

//retrieve needed DOM elements and create new elements for dynamic html
var instructions = document.querySelector(".instructions");
var h1El = document.createElement("h1");

var questions = document.querySelector(".questions");
var h2El = document.createElement("h2");

var score = document.querySelector(".score");
var submitScoreElement = document.querySelector(".submit_score");

var timerElement = document.querySelector(".timer");

var button = document.createElement("button");
//change the color of the button on mouseover
button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "palevioletred";
});
//change the color of the button on mouseout
button.addEventListener("mouseout", () => {
  button.style.backgroundColor = "blueviolet";
});

//create new elements for dynamic html
var paragraph = document.createElement("p");
var saveScore = document.createElement("div");
var labelTag = document.createElement("label");
labelTag.setAttribute("for", "initials");

var inputTag = document.createElement("input");
inputTag.type = "text";
inputTag.id = "initials";

var idx = 0;
//create the questions object arrays with the answers
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
  //display the question and append to the questions section
  h2El.textContent = quiz[idx].question;
  questions.appendChild(h2El);

  for (var j = 0; j < quiz[idx].choices.length; j++) {
    //create a button which displays the possible choices the user can select
    //and click to submit an answer
    button = document.createElement("button");

    //set the id of the button to the array index + 1
    btnResult = createButton(button, (j + 1).toLocaleString());
    questions.appendChild(btnResult);
    //create the button click event listener
    btnResult.addEventListener("click", questionResult);
    //display the text of the choice
    btnResult.textContent = quiz[idx].choices[j];
  }
}

//start the timer and prompt for the questions
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
      // Tests if quiz is complete
      if (complete) {
        // Clears interval and stops timer
        clearInterval(timer);
      }
    }
    // Tests if time has run out
    if (timerCount == 0) {
      // Clears interval
      clearInterval(timer);
    }
  }, 1000);
}

function questionResult() {
  if (idx < 3) {
    //retrieve the user's selection
    var selection = Number(this.id);
    //get the correct answer
    var result = quiz[idx].answer;
    score.style =
      "text-align: center; font-size: large; color:gray; border-top: 2px solid gray ;";
    //determine whether the user selected the correct answer
    if (selection == result) {
      score.textContent = "Correct";
    } else {
      //if the answer is incorrect subtract 15 seconds from the alloted time
      score.textContent = "Incorrect";
      timerCount -= 15;
      if (timerCount < 0) {
        timerElement.textContent = "Time: 0";
      }
    }
    idx++;
    questions.innerHTML = "";
    nextQuestion();
    //if all the questions have been answered display the score
  } else {
    complete = true;
    questions.innerHTML = "";
    submitScore();
  }
}

//set the buttons id and style
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
  //add the h1 text and append it to the section class referenced by instructions
  h1El.textContent = "Coding Quiz Challenge";
  instructions.appendChild(h1El);
  //create a new button to the page and append it to the section class referenced by instructions
  var btnResult = createButton(button, "title");
  instructions.append(btnResult);
  //create the buttons click event
  btnResult.addEventListener("click", startQuiz);
  btnResult.textContent = "Start Quiz";
}

function storeResult() {
  entries++;
  var initials = inputTag.value;
  //push the result to an array object with the new record value initials and time
  viewScores.push({ record: entries, initials: initials, score: timerCount });
  //store the results in localstorage
  localStorage.setItem("viewScores", JSON.stringify(viewScores));
  //display the highscores page
  window.open("./highscores.html", "_self");
}

function submitScore() {
  //display the current score for the quiz
  h2El.textContent = "All Done!";
  submitScoreElement.appendChild(h2El);
  paragraph.textContent = "Your final score is " + timerCount + ".";
  submitScoreElement.appendChild(paragraph);
  saveScore.style =
    "margin-bottom:5px; text-align: center; font-size: medium; display: flex; justify-content: center; flex-direction: row;gap:20px";
  submitScoreElement.appendChild(saveScore);
  //ask the user for their initials and save the score to local storage
  labelTag.textContent = "Enter Initials: ";
  saveScore.appendChild(labelTag);
  saveScore.appendChild(inputTag);
  var btnResult = createButton(button, "submit");
  saveScore.append(btnResult);
  btnResult.addEventListener("click", storeResult);
  btnResult.textContent = "Submit";
}

var viewScoresResult = JSON.parse(localStorage.getItem("viewScores"));
if (viewScoresResult) {
  viewScores = viewScoresResult;
  entries = viewScores.length;
}

//show the start page
startPage();
