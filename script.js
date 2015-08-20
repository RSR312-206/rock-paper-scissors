var score = document.getElementById('score');
var loss = document.getElementById('losses');
var button  = document.querySelector('button');
var scissors = document.getElementById('scissors');
var paper = document.getElementById('paper');
var rock = document.getElementById('rock');
var divs = document.getElementById('alldivs');

var scoreTally = 0;
var lossTally = 0;

$('#alldivs').on('click', function(event) {
  console.log(event.target);
  if (event.target == paper) {
    return paperResults();
  } else if (event.target == rock) {
    return rockResults();
  } else if (event.target == scissors) {
   return scissorsResults();
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
  tallyUpdate();
}

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
  tallyUpdate();
}

function scissorsResults() {
  var computerAnswer = randomAnswer();
  if (computerAnswer == 'scissors') {
    alert('scissors. a tie zzz');
  } else if (computerAnswer == 'paper') {
    scoreTally += 1;
    alert('paper, you win zzz');
  } else if (computerAnswer == 'rock') {
    lossTally += 1;
    alert('rock. you lose zzzz');
  }
  tallyUpdate();

}

button.addEventListener("click", function() {
  scoreTally = 0;
  lossTally = 0;
  score.innerHTML = 'wins ' + scoreTally;
  loss.innerHTML = 'losses ' + lossTally;
});



//divs.addEventListener("click", playerClick);
// $('.box').on("click", function(event) {
//     if ($(this).children().length > 0) {
//       $(this).empty();
//     } else $(this).html('<img width = "90%" length = "90%" src=http://cdn.cutestpaw.com/wp-content/uploads/2012/02/Dachshund-puppy-wearing-a-sweater-l.jpg>');
//   });
// function playerClick(e) {
//   if (this.target == paper) {
//     paperResults();
//   } else if (this.target == rock) {
//     rockResults();
//   } else scissorsResults();
// }