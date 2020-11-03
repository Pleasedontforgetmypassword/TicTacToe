export default class Game_board{
    constructor(Board){
        this.Board = Board;
        // X = X, 1 = x
        // O = y, 2 = o
        this.Score = {
            X: 0,
            O: 0,
            Matches: 0,
        }
        this.Location = {
            "1": [0, 0],
            "2": [0, 1],
            "3": [0, 2],
            "4": [1, 0],
            "5": [1, 1],
            "6": [1, 2],
            "7": [2, 0],
            "8": [2, 1],
            "9": [2, 2]
        }
        this.Player_Turn = true;
        this.End = false;
        this.Tie = this.Score.Matches - (this.Score.O + this.Score.X)
    }
    Find_Moves(){
        // Possible moves will be stored in this array
        let Moves = []
        for (let i = 0; i < this.Board.length; i++){
            for (let j = 0; j < this.Board[i].length; j++){
                // If the location is empty
                if (this.Board[i][j] == 0){
                    // Add the location of possible move onto the array
                    Moves.push([i, j])
                }
            }
        }
        // return the array
        return Moves
    }
    // Plays a move
    Play_Move(X, Y, Player){
        this.Board[X][Y] = Player;
    }
    // Check for a win
    Check_Win(){
        // Checks rows
        for (let k = 0; k < this.Board.length; k++){
            if ((this.Board[k][0] == this.Board[k][1]) &&( this.Board[k][1] == this.Board[k][2]) && (this.Board[k][1] != 0)){
                return true
            }
        }
        // Checks columns
        for (let l = 0; l < this.Board.length; l++){
            if ((this.Board[0][l] == this.Board[1][l]) && (this.Board[1][l] == this.Board[2][l]) && (this.Board[1][l] != 0)){
                return true
            }
        }
        // Checks the diagonal
        if ((this.Board[0][0] == this.Board[1][1]) && (this.Board[1][1] == this.Board[2][2]) && (this.Board[1][1] != 0)){
            return true
        }
        // Check the other diagonal
        if ((this.Board[2][0] == this.Board[1][1]) && (this.Board[1][1] == this.Board[0][2]) && (this.Board[1][1] != 0)){
            return true
        }
        return false;
    }
    // Check for a tie
    Check_Tie(){
        if (this.Find_Moves() == [] && this.Check_Win() == false){
            return true
        }else{
            return false
        }
    }
    // Reset Board
    Reset(){
        for (let m = 0; m < this.Board.length; m++){
            for (let n = 0; n < this.Board[m].length; n++){
                this.Board[m][n] = 0;
            }
        }
    }
    // Switch turns
    Switch(){
        if (this.Player_Turn == true){
            this.Player_Turn = false;
        }else{
            this.Player_Turn = true
        }
    }
}
// 0 empty
// 1 X
// 2 O
// 3 X win
// 4 O win


