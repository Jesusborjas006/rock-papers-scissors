// Query Selectors
let playerScore = document.querySelector(".player-score");
let cpuScore = document.querySelector(".cpu-score");
let subHeading = document.querySelector(".sub-heading");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");


const game = new Game();

game.getCpuRandomIndex()
// game.getPlayerIndex()

console.log(game)

// Global Variables
let playerIndex;

// Event Listeners
rock.addEventListener('click', getRockInfo);
paper.addEventListener('click', getPaperInfo);
scissors.addEventListener('click', getScissorsInfo);


// Functions
function getRockInfo() {
  game.playerIndex = 1
  game.getWinner()
  if(game.cpuIndex === 1) {
    subHeading.innerText = `It's a Draw!`
    paper.src = "./images/rock.png"
    scissors.classList.add("hidden");
  } else if(game.cpuIndex === 2){
    scissors.classList.add("hidden");
    cpuScore.innerText = `Wins ${game.cpu.wins}`
    subHeading.innerText = `${game.winner} Won!`
  } else {
    paper.classList.add("hidden");
    playerScore.innerText = `Wins: ${game.player.wins}`
    subHeading.innerText = `${game.winner} Won!`
  }
}

function getPaperInfo() {
  game.playerIndex = 2
  game.getWinner()
  if(game.cpuIndex === 1) {
    scissors.src = "./images/rock.png"
    rock.classList.add("hidden")
    subHeading.innerText = `${game.winner} Won!`;
    playerScore.innerText = `Wins: ${game.player.wins}` 
  } else if(game.cpuIndex === 2) {
    rock.classList.add("hidden");
    scissors.src = "./images/post-it.png"
    subHeading.innerText = `It's a Draw!`
  } else {
    rock.classList.add("hidden")
    cpuScore.innerText = `Wins ${game.cpu.wins}`
    subHeading.innerText = `${game.winner} Won!`
  }
}

function getScissorsInfo() {
  game.playerIndex = 3
  game.getWinner();
  if(game.cpuIndex === 1) {
    paper.classList.add("hidden");
    rock.src = "./images/scissors copy.png";
    scissors.src = "./images/rock.png";
    cpuScore.innerText = `Wins ${game.cpu.wins}`;
    subHeading.innerText = `${game.winner} Won!`
  } else if(game.cpuIndex === 2) {
    rock.src = "./images/scissors copy.png"
    scissors.classList.add("hidden")
    playerScore.innerText = `Wins: ${game.player.wins}` 
    subHeading.innerText = `${game.winner} Won!`
  } else {
    rock.src = "./images/scissors copy.png";
    paper.classList.add("hidden");
    subHeading.innerText = `It's a Draw!`
  }
}

