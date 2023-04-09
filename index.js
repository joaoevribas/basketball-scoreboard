let boxScoreOne = document.getElementById("box-score-one");
let boxScoreTwo = document.getElementById("box-score-two");
let leftScore = 0;
let rightScore = 0;

function addOneLeft() {
  leftScore = leftScore + 1;
  boxScoreOne.textContent = leftScore;
}

function addTwoLeft() {
  leftScore = leftScore + 2;
  boxScoreOne.textContent = leftScore;
}

function addThreeLeft() {
  leftScore = leftScore + 3;
  boxScoreOne.textContent = leftScore;
}

function addOneRight() {
  rightScore = rightScore + 1;
  boxScoreTwo.textContent = rightScore;
}

function addTwoRight() {
  rightScore = rightScore + 2;
  boxScoreTwo.textContent = rightScore;
}

function addThreeRight() {
  rightScore = rightScore + 3;
  boxScoreTwo.textContent = rightScore;
}

function newGame() {
  leftScore = 0;
  rightScore = 0;
  boxScoreOne.textContent = 0;
  boxScoreTwo.textContent = 0;
}
