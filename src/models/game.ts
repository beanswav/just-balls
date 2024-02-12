import Player from "./player";

export type Game = {
    startTime: Date;
    players: Player[];
    location: string;
};

export type GameResult = {
    teamA: {
        players: Player[],
        score: number
    },
    teamB: {
        players: Player[],
        score: number
    }
};