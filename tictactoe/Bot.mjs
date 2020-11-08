export default class Bot{
    constructor(Grid){
        this.Grid = Grid
        this.score = {
            X: -10,
            O: 10,
            Tie: 0
        }
    }

    Random_Play(Board, Moves, Player){
        let Location = Moves[Math.floor(Math.random() * Moves.length)]
        Board[Location[0]][Location[1]] = Player
    }
    
    Play(Board, x, y, Player){
        Board[x][y] = Player
    }

    Search_Board(Board){
        let Moves = []
        for (let j = 0; j < Board.length; j++){
            for (let i = 0; i < Board[j].length; i++){
                if (Board[j][i] == 0){
                    Moves.push([j, i])
                }
            }
        }
        return Moves
    }

    Win(Board, Player){
        for (let k = 0; k < Board.length; k++){
            if ((Board[k][0] == Board[k][1]) &&( Board[k][1] == Board[k][2]) && (Board[k][1] == Player)){
                return true
            }
        }
        // Checks columns
        for (let l = 0; l < Board.length; l++){
            if ((Board[0][l] == Board[1][l]) && (Board[1][l] == Board[2][l]) && (Board[1][l] == Player)){
                return true
            }
        }
        // Checks the diagonal
        if ((Board[0][0] == Board[1][1]) && (Board[1][1] == Board[2][2]) && (Board[1][1] == Player)){
            return true
        }
        // Check the other diagonal
        if ((Board[2][0] == Board[1][1]) && (Board[1][1] == Board[0][2]) && (Board[1][1] == Player)){
            return true
        }
        return false;
    }
    Check(Board){
        if (this.Win(Board, 1)){
            return true
        }else if (this.Win(Board, 2)){
            return true
        }else{
            for (let i = 0; i < Board.length; i++){
                for (let j = 0; j < Board[i].length; j++){
                    if (Board[i][j] == 0){
                        return false
                    }
                }
            }
            return true
        }
    }
}
