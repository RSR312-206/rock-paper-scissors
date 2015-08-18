

var gameOptions = document.querySelector('gameoptions');
var scoreTally = 0;

var score = document.getElementById('score');
score.innerHTML = 'your current score is ' + scoreTally;


function randomAnswer() {
  var options = ['rock', 'paper', 'scissors', 'rock', 'paper', 'scissors'];
  var answer = options[Math.floor(Math.random()*options.length)];
   return answer;
 };

var rock = document.getElementById('rock');
rock.addEventListener("click", rockResults);


function rockResults() {
  var computerAnswer = randomAnswer();
  if (computerAnswer == 'paper') {
    alert('paper. you lost to a computer');
  } else if (computerAnswer  == 'scissors') {
    scoreTally += 1;
    alert('scissors, you won')
  } else if (computerAnswer  == 'rock') {
    alert('rock, a tie');
  }
score.innerHTML = 'your current score is ' + scoreTally;
}

var paper = document.getElementById('paper');
paper.addEventListener('click', paperResults);

function paperResults() {
  var computerAnswer = randomAnswer();
  if (computerAnswer == 'paper') {
    alert('paper. A tie');
  } else if (computerAnswer == 'scissors') {
    alert('scissors, you lost to a computer');
  } else if (computerAnswer == 'rock') {
    scoreTally += 1;
    alert('paper, you won');
  }
score.innerHTML = 'your current score is ' + scoreTally;
}


var scissors = document.getElementById('scissors');
scissors.addEventListener('click', scissorsResults);

function scissorsResults() {
  var computerAnswer = randomAnswer();
  if (computerAnswer == 'scissors') {
    alert('scissors. a tie');
  } else if (computerAnswer == 'paper') {
    scoreTally += 1
    alert('paper, you win');
  } else if (computerAnswer == 'rock') {
    alert('rock. you lose');
  }
score.innerHTML = 'your current score is ' + scoreTally;
}












// gameOptions.addEventListner("click", aTurn);

//   function aTurn(e) {
//     e.target.dataset.gameOptions;
//   }
