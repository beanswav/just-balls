import { Game } from "../models/game";

class Games {
    games: Game[];
    private static instance: Games | null;

    constructor() {
        this.games = [];
    }

    createGame(startTime: Date, location: string): Game[] {
        this.games.push({
            startTime,
            location,
            players: []
        });
    
        return this.games;
    };

    static getInstance() {
        if (!this.instance) {
          this.instance = new Games();
        }
    
        return this.instance;
    }
}

export default Games;