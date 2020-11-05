import Game_board from "./Game_board.mjs";
import Image from "./Image.mjs";
import Bot from "./Bot.mjs"


let TicTacToe = new Game_board([[0, 0, 0],
                                [0, 0, 0],
                                [0, 0, 0]])


let Visual_Board = new Image(TicTacToe.Board)

let Robot = new Bot(TicTacToe.Board)


const Pass = () => {
    let Turn = document.getElementById("Game_Turn")

    if (TicTacToe.Player_Turn){

        Turn.className = "X-Turn"

    }else{

        Turn.className = "O-Turn"

    }
}


const End = () => {
    if (TicTacToe.Check_Win() || !TicTacToe.Empty()){
        return true
    }
    return false
}


const Score = () => {

    document.getElementById("X").innerHTML = TicTacToe.Score["X"]

    document.getElementById("O").innerHTML = TicTacToe.Score["O"]

    document.getElementById("Matches").innerHTML = TicTacToe.Score["Matches"]

    document.getElementById("Tie").innerHTML = TicTacToe.Score["Matches"] - (TicTacToe.Score["X"] + TicTacToe.Score["O"])

    document.getElementById("X-Rate").innerHTML = `${((TicTacToe.Score["X"]/TicTacToe.Score["Matches"])*100).toFixed(2)}%`

    document.getElementById("O-Rate").innerHTML = `${((TicTacToe.Score["O"]/TicTacToe.Score["Matches"])*100).toFixed(2)}%`
}


const Check = () => {

    if (End()){

        TicTacToe.Score["Matches"] += 1

        if (TicTacToe.Check_Win()){

            if (!TicTacToe.Player_Turn){

                TicTacToe.Score["X"] += 1

            }else{

                TicTacToe.Score["O"] += 1
            }

        }

        TicTacToe.End = true

        Score()
    }
}


const Update = (id) => {

    let Value = Visual_Board.Link()[id]

    document.getElementById(id).className = Visual_Board.State(Value)
}


const Refresh = () => {

    for (let o = 1; o < 10; o++){

        Update(o)
    }
}


let Tiles = document.getElementsByClassName("Empty");


for (let r = 0; r < Tiles.length; r++){

    let Identity = Tiles[r].id

    Tiles[r].addEventListener("click", () => {

        let Locat = TicTacToe.Location[Identity]

        if (TicTacToe.Board[Locat[0]][Locat[1]] == 0 && TicTacToe.End == false){

            if (TicTacToe.Player_Turn){

                TicTacToe.Play_Move(Locat[0], Locat[1], 1)

                Update(Identity)

                TicTacToe.Switch()

                Pass()

                Check()

                if (TicTacToe.End == false && !TicTacToe.Player_Turn){

                    Robot.Random_Play(TicTacToe.Board, TicTacToe.Find_Moves(), 2)

                    Refresh()

                    TicTacToe.Switch()

                    Pass()

                    Check()

                }
            }
        }

    })
}


document.getElementsByClassName("Resets")[0].addEventListener("click", () => {

    TicTacToe.Player_Turn = true

    TicTacToe.End = false

    TicTacToe.Reset()

    Pass()

    Refresh()
})

