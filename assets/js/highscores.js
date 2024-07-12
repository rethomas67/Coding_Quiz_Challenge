//create the elements for the highscore page and initialize the viewscores array
var highScoresElement = document.querySelector(".high_scores");
var h2El = document.createElement("h2");
var paragraph;
var divElement = document.createElement("div");
var button = document.createElement("button");
var viewScores = [];

//add the id and css for a button
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

//go back to index.html
function goBack() {
  window.open("./index.html", "_self");
}
//clear the scores
function clearHighscores() {
  localStorage.clear();
}

function displayScores() {
  h2El.textContent = "Highscores";
  highScoresElement.appendChild(h2El);

  //display all of the scores in the array object
  for (var i = 0; i < viewScores.length; i++) {
    //create a pargraph for each score with the record, initials, and score
    paragraph = document.createElement("p");
    paragraph.textContent =
      viewScores[i].record +
      ".  " +
      viewScores[i].initials +
      " - " +
      viewScores[i].score;
    paragraph.style = "background-color :plum;";
    highScoresElement.appendChild(paragraph);
  }

  divElement.style =
    "margin-bottom:5px; text-align: center; font-size: medium; display: flex; justify-content: center; flex-direction: row;gap:20px";
  highScoresElement.appendChild(divElement);

  //create the goback to the main page button
  var btnResult = createButton(button, "back");
  divElement.appendChild(btnResult);
  btnResult.addEventListener("click", goBack);
  btnResult.textContent = "Go Back";
  divElement.appendChild(btnResult);
  //create a button to clear all of the scores
  button = document.createElement("button");
  var btnResult2 = createButton(button, "clear");
  divElement.appendChild(btnResult2);
  btnResult2.addEventListener("click", clearHighscores);
  btnResult2.textContent = "Clear Highscores";
}

//get all of the scores in localstorage
var viewScoresResult = JSON.parse(localStorage.getItem("viewScores"));
if (viewScoresResult) {
  viewScores = viewScoresResult;
}
//display the scores
displayScores();
