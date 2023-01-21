class Game {
  constructor() {
    this.player = new Player("Player");
    this.cpu = new Player("CPU");
    this.winner = "";
    this.playerIndex = 0;
    this.cpuIndex = 0;
  }

  getCpuRandomIndex() {
    this.cpuIndex = Math.floor(Math.random() * 3) + 1;
  }

  getWinner() {
    if (this.playerIndex === 1 && this.cpuIndex === 3) {
      this.winner = this.player.name;
      this.player.increaseWins();
    } else if (this.playerIndex === 1 && this.cpuIndex === 2) {
      this.winner = this.cpu.name;
      this.cpu.increaseWins();
    } else if (this.playerIndex === 1 && this.cpuIndex === 1) {
      this.winner = "It's a draw!";
    } else if (this.playerIndex === 2 && this.cpuIndex === 1) {
      this.winner = this.player.name;
      this.player.increaseWins();
    } else if (this.playerIndex === 2 && this.cpuIndex === 3) {
      this.winner = this.cpu.name;
      this.cpu.increaseWins();
    } else if (this.playerIndex === 2 && this.cpuIndex === 2) {
      this.winner = "It's a draw!";
    } else if (this.playerIndex === 3 && this.cpuIndex === 2) {
      this.winner = this.player.name;
      this.player.increaseWins();
    } else if (this.playerIndex === 3 && this.cpuIndex === 1) {
      this.winner = this.cpu.name;
      this.cpu.increaseWins();
    } else if (this.playerIndex === 3 && this.cpuIndex === 3) {
      this.winner = "It's a draw!";
    }
  }
}
