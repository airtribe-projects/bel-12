// Has - A (Weak)
// Team and Player

class Player {
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log(`Player: ${this.name}`);
    }
    // ...
}


class Team {
    constructor(name, players) {
        this.name = name;
        this.players = players;
    }
    
    addPlayer(player) {
        this.players.push(player);
    }
    
    showTeam() {
        console.log(`Team: ${this.name}`);
        this.players.forEach(player => player.display());
    }
    
}

const player1 = new Player('Player 1'); 
const player2 = new Player('Player 2');

const team = new Team('Team A', [player1, player2]);

const player3 = new Player('Player 3');
team.addPlayer(player3);
team.showTeam();






