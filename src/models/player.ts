export enum Position {
    Setter,
    OutsideHitter,
    OppositeHitter,
    Libero,
    MiddleBlocker
}

type Player = {
    firstName: string;
    lastName: string;
    positions: Position[];
    winsCount: number;
    lossesCount: number;
};

export default Player;