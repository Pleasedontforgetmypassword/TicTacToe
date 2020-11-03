import Game_board from "./Game_board.mjs";
import Image from "./Image.mjs";
import Bot from "./Bot.mjs"

let TicTacToe = new Game_board([[0, 0, 0],
                                [0, 0, 0],
                                [0, 0, 0]])

let Visual_Board = new Image(TicTacToe.Board)

let Robot = new Bot(TicTacToe.Board)

