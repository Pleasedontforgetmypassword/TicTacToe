import Game_board from "./Game_board.mjs";
import Image from "./Image.mjs";

let TicTacToe = new Game_board([[0, 0, 0],
                                [0, 0, 0],
                                [0, 0, 0]])

let Visual_Board = new Image(TicTacToe.Board)

const Update_Score = () => {
    document.getElementById("X").innerHTML = TicTacToe.Score["X"]
    document.getElementById("O").innerHTML = TicTacToe.Score["O"]
}


const Check = () => {
    if (TicTacToe.Check_Win()){
        TicTacToe.Score.Matches += 1
        if (TicTacToe.Check_Win()){
            if (!TicTacToe.Player_Turn){
                TicTacToe.Score.X += 1
            }else{
                TicTacToe.Score.O += 1
            }
        }
        TicTacToe.End = true
        Update_Score()
    }  
}


// Gets the image turn
const Switch_Turn = con => {
    if (con){
        return "../Players/X turn (2).png"
    }else{
        return "../Players/O turn (2).png"
    }
}

// Update the visual
const Update_Board = id => {
    // Get the value of the location 
     let Value = Visual_Board.Link()[id]
    // Switch the state
    document.getElementById(id).className = Visual_Board.State(Value)
}


// Get all the tiles that are empty
let Tiles = document.getElementsByClassName("Empty");
// Give all the tiles a event
for (let j = 0; j < Tiles.length; j++)
{
    let Identity = Tiles[j].id

    Tiles[j].addEventListener("click", () => {
        let Turn_Image;
        // Get location
        let Location = TicTacToe.Location[Identity]
        // Check if it is the players turn
        if (TicTacToe.Board[Location[0]][Location[1]] == 0 && TicTacToe.End == false){
            if (TicTacToe.Player_Turn){
                // Play the move
                TicTacToe.Play_Move(Location[0], Location[1], 1)
                // Update board
                Update_Board(Identity)
                // Passes the turn
                TicTacToe.Switch()
                Turn_Image = Switch_Turn(TicTacToe.Player_Turn)
            }else{
                // Play the move
                TicTacToe.Play_Move(Location[0], Location[1], 2)
                // Update board
                Update_Board(Identity)
                // Passes the turn
                TicTacToe.Switch()
                Turn_Image = Switch_Turn(TicTacToe.Player_Turn)
            }
            console.log(TicTacToe.Find_Moves())
            document.getElementById("Game_Turn").src = Turn_Image
            Check()
        }else{
            // DO nothing
        }
    })
}

document.getElementsByClassName("Resets")[0].addEventListener("click", () => {
    TicTacToe.Player_Turn = true
    TicTacToe.End = false
    TicTacToe.Reset()
    let Turn_Image = Switch_Turn(TicTacToe.Player_Turn)
    document.getElementById("Game_Turn").src = Turn_Image
    for (let j = 0; j < 9; j++){
        Update_Board(j+1)
    }
})