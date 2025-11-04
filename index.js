const choice = document.querySelector('#choice');
let results = document.querySelector('.results');
const result = document.createElement("li");
const score = document.createElement("li");
const winner = document.createElement("li");
const button1 = document.createElement("button");
const button2 = document.createElement("button");
const thanks = document.createElement("li");
results.appendChild(result);
results.appendChild(score);
results.appendChild(winner);
button1.textContent = "Play Again";
button2.textContent = "Stop";
thanks.textContent = "Game Over: Thanks For Playing";
const moveChoice = ['rock', 'paper', 'scissors'];
let comMove = ""; const playerChoice = moveChoice;
let humanScore = 0; let computerScore = 0;
score.textContent = `Score - You:` + humanScore + `,Computer:` + computerScore;
choice.addEventListener('click', (event) => {
  let button = event.target;
  event.preventDefault();
  playRound(button.value);
});
button1.addEventListener('click', (event) => {
  event.preventDefault();
  results.removeChild(button1);
  results.removeChild(button2);
  results.removeChild(winner);
  humanScore = 0; computerScore = 0;
  score.textContent = `Score - You:` + humanScore + `,Computer:` + computerScore;
  showChoice();
});
button2.addEventListener('click', (event) => {
  event.preventDefault();
  results.removeChild(button1);
  results.removeChild(button2);
  results.appendChild(thanks);
});
function getComputerChoice() {
  let random = Math.floor(Math.random() * moveChoice.length);
  let comChoice = moveChoice[random];
  switch(comChoice) {
    case 'rock':
      comMove = 'rock';
      break;
    case 'paper':
      comMove = 'paper';
      break;
    case 'scissors':
      comMove = 'scissors';
      break;
  }
  return comMove;
}
function getHumanChoice(playerChoice) {
  switch(playerChoice) {
    case 'rock':
      playerChoice = "rock";
      break;
    case 'paper':
      playerChoice = "paper";
      break;
    case 'scissors':
      playerChoice = "scissors";
      break;
  }
  return playerChoice;
}
function checkWinner() {
  if (humanScore == 4  && computerScore == 4) {
    winner.textContent = 'The game is a tie! Final Score - You: ' + humanScore + ' Computer: ' + computerScore;
    hideChoice();
    playAgain();
    console.log('The game is a tie! Final Score - You: ' + humanScore + ' Computer: ' + computerScore);
  }
  else if (humanScore === 5) {
    winner.textContent = 'You are the overall winner! Final Score - You: ' + humanScore + ' Computer: ' + computerScore;
    hideChoice();
    playAgain();
    console.log('You are the overall winner! Final Score - You: ' + humanScore + ' Computer: ' + computerScore);
  }
  else if (computerScore === 5) {
    winner.textContent = 'The computer is the overall winner! Final Score - You: ' + humanScore + ' Computer: ' + computerScore;
    hideChoice();
    playAgain();
    console.log('The computer is the overall winner! Final Score - You: ' + humanScore + ' Computer: ' + computerScore);
  }
}
function hideChoice(){
  let hideChoice = choice;
  hideChoice = choice.style.visibility = "hidden";
}
function showChoice(){
  let showChoice = choice;
  showChoice.style.visibility = "visible";
}
function playAgain() {
  results.appendChild(button1);
  results.appendChild(button2);
}
function playRound(playerChoice) {
  const humanSelection = getHumanChoice(playerChoice);
  const computerSelection = getComputerChoice();
  if (
    (humanSelection === 'rock' && computerSelection === 'rock') ||
    (humanSelection === 'paper' && computerSelection === 'paper') ||
    (humanSelection === 'scissors' && computerSelection === 'scissors')
  )
  {
    result.textContent = 'It\'s a tie!';
    console.log('It\'s a tie!');
  }
  else if (
    (humanSelection === 'rock' && computerSelection === 'scissors') ||
    (humanSelection === 'paper' && computerSelection === 'rock') ||
    (humanSelection === 'scissors' && computerSelection === 'paper')
  )
  {
    humanScore++;
    result.textContent = 'You win! ' + humanSelection + ' beats ' + computerSelection;
    console.log('You win! ' + humanSelection + ' beats ' + computerSelection);
  }
  else {
    computerScore++;
    result.textContent = 'You lose! ' + computerSelection + ' beats ' + humanSelection
    console.log('You lose! ' + computerSelection + ' beats ' + humanSelection);
  }
  score.textContent = `Score - You:` + humanScore + `,Computer:` + computerScore;
  checkWinner();
}
