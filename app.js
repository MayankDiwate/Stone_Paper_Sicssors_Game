let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-board");
const computerScore_span = document.getElementById("computer-board");
const headline_div = document.querySelector(".headline > p ");
const scoreBoard_div = document.querySelector(".score-board");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
var choices;
var randomnumber;
var computerChoice;
var userChoice;
var smalluser = "USER".fontsize(1).sub();
var smallcomp = "COMP".fontsize(1).sub();

function getComputerChoice() {
  choices = ["r", "p", "s"];
  randomnumber = Math.floor(Math.random() * 3);
  return choices[randomnumber];
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  headline_div.innerHTML = `${converter(userChoice)}${smalluser} 
     Beats  
    ${converter(computerChoice)}${smallcomp} 
   .You Win!`;
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  headline_div.innerHTML = `${converter(userChoice)}${smalluser} 
  Loses  
 ${converter(computerChoice)}${smallcomp} 
.You Lose!`;
}

function draw(userChoice, computerChoice) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  headline_div.innerHTML = `${converter(userChoice)}${smalluser} 
  Equals  
 ${converter(computerChoice)}${smallcomp} 
.It's Draw!`;
}

function game(userChoice) {
  computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function converter(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissors";
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });

  paper_div.addEventListener("click", function () {
    game("p");
  });

  scissors_div.addEventListener("click", function () {
    game("s");
  });
}

main();
