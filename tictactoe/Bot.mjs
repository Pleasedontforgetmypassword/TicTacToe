export default class Bot{
    constructor(Grid){
        this.Grid = Grid
    }
    Random_Play(Board, Moves, Player){
        let Location = Moves[Math.floor(Math.random() * Moves.length)]
        Board[Location[0]][Location[1]] = Player
    }


}

