class Player {
  constructor(name, wins) {
    this.name = name;
    this.wins = wins || 0;
  }

  increaseWins() {
    this.wins++
  }
}