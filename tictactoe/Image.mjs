export default class Image{
    constructor(Grid){
        this.Grid = Grid
    }
    State(Number){
        let Action;
        switch(Number){
            case 0:
                Action = "Empty"
                break
            case 1:
                Action = "X"
                break
            case 2:
                Action = "O"
                break
        }
        return Action
    }
    Link(){
        let Connect = {
            "1": this.Grid[0][0],
            "2": this.Grid[0][1],
            "3": this.Grid[0][2],
            "4": this.Grid[1][0],
            "5": this.Grid[1][1],
            "6": this.Grid[1][2],
            "7": this.Grid[2][0],
            "8": this.Grid[2][1],
            "9": this.Grid[2][2]
        }
        return Connect
    }
}
