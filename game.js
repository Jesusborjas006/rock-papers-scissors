class Game {
  constructor() {
    this.player = new Player("Player");
    this.cpu = new Player("CPU"); 
    this.winner = '';
    this.playerIndex = 0;
    this.cpuIndex = 0;
  }

  getCpuRandomIndex() {
    this.cpuIndex = Math.floor(Math.random() * 3) + 1;
  }

  getPlayerIndex() {
    return this.playerIndex
  }

  getWinner() {
    if(this.playerIndex === 1 && this.cpuIndex === 3) {
      this.winner = this.player.name;
      console.log("Rock Beat Scissors")
      console.log("Player Won!")
      this.player.increaseWins()
    } else if(this.playerIndex === 1 && this.cpuIndex === 2) {
      this.winner = this.cpu.name;
      console.log("Rock Loses to paper")
      console.log("CPU Won!")
      this.cpu.increaseWins()
    } else if(this.playerIndex === 1 && this.cpuIndex === 1) {
      this.winner = "It's a draw!"
      console.log(this.winner)
    } else if(this.playerIndex === 2 && this.cpuIndex === 1) {
      this.winner = this.player.name
      console.log("Paper Beat Rock 2")
      console.log("Player Won!")
      this.player.increaseWins()
    } else if(this.playerIndex === 2 && this.cpuIndex === 3) {
      this.winner = this.cpu.name
      console.log("Paper loses to Scissors 2")
      console.log("CPU Won!")
      this.cpu.increaseWins()
    } else if(this.playerIndex === 2 && this.cpuIndex === 2) {
      this.winner = "It's a draw!"
      console.log(this.winner)
    } else if(this.playerIndex === 3 && this.cpuIndex === 2) {
      this.winner = this.player.name;
      console.log("Scissors Beat Paper 3")
      console.log("Player Won!")
      this.player.increaseWins()
    } else if(this.playerIndex === 3 && this.cpuIndex === 1) {
      this.winner = this.cpu.name;
      console.log("Scissors loses Rock 3");
      console.log("CPU Won!");
      this.cpu.increaseWins()
    } else if(this.playerIndex === 3 && this.cpuIndex === 3) {
      this.winner = "It's a draw!"
      console.log(this.winner)
    }
  }
}

// Rock === 1
// Paper === 2
// Scissors === 3