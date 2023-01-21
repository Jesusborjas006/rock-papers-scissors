// Query Selectors
let playerScore = document.querySelector(".player-score");
let cpuScore = document.querySelector(".cpu-score");
let subHeading = document.querySelector(".sub-heading");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const resetBtn = document.querySelector(".reset-btn");

const game = new Game();
game.getCpuRandomIndex();

// Global Variables
let playerIndex;

// Event Listeners
rock.addEventListener("click", getRockInfo);
paper.addEventListener("click", getPaperInfo);
scissors.addEventListener("click", getScissorsInfo);
resetBtn.addEventListener("click", resetGame);

// Functions
function getRockInfo() {
  game.playerIndex = 1;
  game.getWinner();
  if (game.cpuIndex === 1) {
    subHeading.innerText = `It's a Draw!`;
    paper.src = "./images/rock.png";
    scissors.classList.add("hidden");
  } else if (game.cpuIndex === 2) {
    scissors.classList.add("hidden");
    cpuScore.innerText = `Wins ${game.cpu.wins}`;
    subHeading.innerText = `${game.winner} Won!`;
  } else {
    paper.classList.add("hidden");
    playerScore.innerText = `Wins: ${game.player.wins}`;
    subHeading.innerText = `${game.winner} Won!`;
  }
  getRockTimeOut();
}

function getPaperInfo() {
  game.playerIndex = 2;
  game.getWinner();
  if (game.cpuIndex === 1) {
    scissors.src = "./images/rock.png";
    rock.classList.add("hidden");
    subHeading.innerText = `${game.winner} Won!`;
    playerScore.innerText = `Wins: ${game.player.wins}`;
  } else if (game.cpuIndex === 2) {
    rock.classList.add("hidden");
    scissors.src = "./images/post-it.png";
    subHeading.innerText = `It's a Draw!`;
  } else {
    rock.classList.add("hidden");
    cpuScore.innerText = `Wins ${game.cpu.wins}`;
    subHeading.innerText = `${game.winner} Won!`;
  }
  getPaperTimeOut();
}

function getScissorsInfo() {
  game.playerIndex = 3;
  game.getWinner();
  if (game.cpuIndex === 1) {
    paper.classList.add("hidden");
    rock.src = "./images/scissors copy.png";
    scissors.src = "./images/rock.png";
    cpuScore.innerText = `Wins ${game.cpu.wins}`;
    subHeading.innerText = `${game.winner} Won!`;
  } else if (game.cpuIndex === 2) {
    rock.src = "./images/scissors copy.png";
    scissors.classList.add("hidden");
    playerScore.innerText = `Wins: ${game.player.wins}`;
    subHeading.innerText = `${game.winner} Won!`;
  } else {
    rock.src = "./images/scissors copy.png";
    paper.classList.add("hidden");
    subHeading.innerText = `It's a Draw!`;
  }
  getScissorsTimeOut();
}

function resetGame() {
  game.cpu.wins = 0;
  cpuScore.innerText = `Wins ${(game.cpu.wins = 0)}`;
  game.player.wins = 0;
  playerScore.innerText = `Wins: ${(game.player.wins = 0)}`;
}

// setTimeOut Functions
function getRockTimeOut() {
  setTimeout(() => {
    subHeading.innerText = "Choose a fighter!";
    if (game.cpuIndex === 1) {
      paper.src = "./images/post-it.png";
      scissors.classList.remove("hidden");
    }
    rock.classList.remove("hidden");
    paper.classList.remove("hidden");
    scissors.classList.remove("hidden");
    game.getCpuRandomIndex();
  }, 1500);
}

function getPaperTimeOut() {
  setTimeout(() => {
    subHeading.innerText = "Choose a fighter!";
    if (game.cpuIndex === 1) {
      paper.src = "./images/post-it.png";
      scissors.src = "./images/scissors copy.png";
    } else if (game.cpuIndex === 2) {
      scissors.src = "./images/scissors copy.png";
    }
    rock.classList.remove("hidden");
    paper.classList.remove("hidden");
    scissors.classList.remove("hidden");
    game.getCpuRandomIndex();
  }, 1500);
}

// Create set time out for Scissors
function getScissorsTimeOut() {
  setTimeout(() => {
    if (game.cpuIndex === 1) {
      rock.src = "./images/rock.png";
      scissors.src = "./images/scissors copy.png";
    } else if (game.cpuIndex === 2) {
      rock.src = "./images/rock.png";
    } else {
      rock.src = "./images/rock.png";
    }
    subHeading.innerText = "Choose a fighter!";
    rock.classList.remove("hidden");
    paper.classList.remove("hidden");
    scissors.classList.remove("hidden");
    game.getCpuRandomIndex();
  }, 1500);
}
