

var scoreTally = 0;
var lossTally = 0;

var score = document.getElementById('score');
score.innerHTML = 'wins ' + scoreTally;

var loss = document.getElementById('losses');
loss.innerHTML = 'losses ' + lossTally;

function randomAnswer() {
  var options = ['rock', 'paper', 'scissors', 'rock', 'paper', 'scissors'];
  var answer = options[Math.floor(Math.random()*options.length)];
   return answer;
 }


var rock = document.getElementById('rock');
rock.addEventListener("click", rockResults);

function rockResults() {
  var computerAnswer = randomAnswer();
  if (computerAnswer == 'paper') {
    lossTally += 1;
    alert('paper. you lost to a computer');
  } else if (computerAnswer  == 'scissors') {
    scoreTally += 1;
    alert('scissors, you won');
  } else if (computerAnswer  == 'rock') {
    alert('rock, a tie');
  }
score.innerHTML = 'wins ' + scoreTally;
loss.innerHTML = 'losses ' + lossTally;

}

var paper = document.getElementById('paper');
paper.addEventListener('click', paperResults);

function paperResults() {
  var computerAnswer = randomAnswer();
  if (computerAnswer == 'paper') {
    alert('paper. A tie');
  } else if (computerAnswer == 'scissors') {
    lossTally += 1;
    alert('scissors, you lost to a computer');
  } else if (computerAnswer == 'rock') {
    scoreTally += 1;
    alert('paper, you won');
  }
score.innerHTML = 'wins ' + scoreTally;
loss.innerHTML = 'losses ' + lossTally;
}


var scissors = document.getElementById('scissors');
scissors.addEventListener('click', scissorsResults);

function scissorsResults() {
  var computerAnswer = randomAnswer();
  if (computerAnswer == 'scissors') {
    alert('scissors. a tie');
  } else if (computerAnswer == 'paper') {
    scoreTally += 1;
    alert('paper, you win');
  } else if (computerAnswer == 'rock') {
    lossTally += 1;
    alert('rock. you lose');
  }
score.innerHTML = 'wins ' + scoreTally;
loss.innerHTML = 'losses ' + lossTally;
}


var button  = document.querySelector('button');
button.addEventListener("click", function() {
  scoreTally = 0;
  lossTally = 0;
  score.innerHTML = 'wins ' + scoreTally;
  loss.innerHTML = 'losses ' + lossTally;
  });