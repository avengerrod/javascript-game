let humanScore = 0; let computerScore = 0;
function letsPlay() {
  let playChoice = prompt('Let\'s play Rock, Paper, Scissors. Type Yes or No', '');
  if (playChoice.toLowerCase() === 'yes') {
    playGame();
  }
  else if (playChoice.toLowerCase() === 'no'){
    alert('Maybe next time!');
  }
  else  {
    alert('Please type Yes or No to play the game.');
    letsPlay();
  }
}
letsPlay();
function getComputerChoice() {
  let comChoice = Math.floor(Math.random() * 3);
  if (comChoice == 0){
    return "rock";
  }
  if (comChoice == 1){
    return "paper";
  }
  if (comChoice == 2){
    return "scissors";
  }
}
function getHumanChoice() {
  let humanChoice = prompt('Choose: Rock\, Paper\, or Scissors\.', '');
  if (humanChoice == "rock"){
    return "rock";
  }
  if (humanChoice == "paper"){
    return "paper";
  }
  if (humanChoice == "scissors"){
    return "scissors";
  }
}
function playRound() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  if (
    (humanSelection === 'rock' && computerSelection === 'rock') ||
    (humanSelection === 'paper' && computerSelection === 'paper') ||
    (humanSelection === 'scissors' && computerSelection === 'scissors')
  ) {
    alert('It\'s a tie!');
  }
  else if (
    (humanSelection === 'rock' && computerSelection === 'scissors') ||
    (humanSelection === 'paper' && computerSelection === 'rock') ||
    (humanSelection === 'scissors' && computerSelection === 'paper')
  ) {
    humanScore++;
    alert('You win! ' + humanSelection + ' beats ' + computerSelection);
  } else {
    computerScore++;
    alert('You lose! ' + computerSelection + ' beats ' + humanSelection);
  }
  alert(`Score - You:` + humanScore + `,Computer:` + computerScore);
}
function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  if (humanScore > computerScore) {
    alert('You are the overall winner! Final Score - You: ' + humanScore + ' Computer: ' + computerScore);
  } else if (computerScore > humanScore) {
    alert('The computer is the overall winner! Final Score - You: ' + humanScore + ' Computer: ' + computerScore);
  } else {
    alert('The game is a tie! Final Score - You: ' + humanScore + ' Computer: ' + computerScore);
  }
}