const team = {
    _players: [
      {firstName: 'Jay', lastName: 'Lee', age: 31},
      {firstName: 'Liah', lastName: 'Lee', age: 32},
      {firstName: 'Mike', lastName: 'Jones', age: 39}
      ],
    _games: [
      {opponent: 'Eagles', teamPoint: 55, opponentPoints: 70},
      {opponent: 'Bills', teamPoint: 25, opponentPoints: 21},
      {opponent: 'Panthers', teamPoint: 35, opponentPoints: 40}
    ],
  
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge){
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this.games.push(game);
    }
  };
  
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  
  team.addGame('Titans', 100, 98)
  console.log(team.games);
  