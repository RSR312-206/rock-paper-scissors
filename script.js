var score = document.getElementById('score');
var loss = document.getElementById('losses');
var button  = document.querySelector('button');
var scoreTally = 0;
var lossTally = 0;

$('#allDivs').on('click', 'div', function(event) {
  console.log(event.target.id);
  if (this.id === 'paper') {
    paperResults();
  } else if (this.id === 'rock') {
    rockResults();
  } else if (this.id === 'scissors') {
    scissorsResults();
  }

});

function randomAnswer() {
  var options = ['rock', 'paper', 'scissors', 'rock', 'paper', 'scissors'];
  var answer = options[Math.floor(Math.random()*options.length)];
  return answer;
}

function tallyUpdate() {
  score.innerHTML = 'wins ' + scoreTally;
  loss.innerHTML = 'losses ' + lossTally;
}

function rockResults() {
  console.log('I made it rock!');
  var computerAnswer = randomAnswer();
  if (computerAnswer == 'paper') {
    lossTally += 1;
    alert('paper. you lost to a computer ');
  } else if (computerAnswer  == 'scissors') {
    scoreTally += 1;
    alert('scissors, you won ');
  } else if (computerAnswer  == 'rock') {
    alert('rock, a tie ');
  }
  tallyUpdate();
}

function paperResults() {
  console.log('I made it paper!');
  var computerAnswer = randomAnswer();
  if (computerAnswer == 'paper') {
    alert('paper. A tie ');
  } else if (computerAnswer == 'scissors') {
    lossTally += 1;
    alert('scissors, you lost to a computer ');
  } else if (computerAnswer == 'rock') {
    scoreTally += 1;
    alert('paper, you won ');
  }
  tallyUpdate();
}

function scissorsResults() {
  console.log('I made it scissors!')
  var computerAnswer = randomAnswer();
  if (computerAnswer == 'scissors') {
    alert('scissors. a tie ');
  } else if (computerAnswer == 'paper') {
    scoreTally += 1;
    alert('paper, you win ');
  } else if (computerAnswer == 'rock') {
    lossTally += 1;
    alert('rock. you lose ');
  }
  tallyUpdate();

}

button.addEventListener("click", function() {
  scoreTally = 0;
  lossTally = 0;
  score.innerHTML = 'wins ' + scoreTally;
  loss.innerHTML = 'losses ' + lossTally;
});

