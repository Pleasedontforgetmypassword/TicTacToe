export default class Bot{
    constructor(Grid){
        this.Grid = Grid
    }
    Random_Choose(Moves){
        let Choice = Math.floor(Math.random() * Moves.length)
        Moves[Choice]
    }


}

