console.log("Welcome to Tic Tac Toe")
// let music = new Audio("")
// let audioturn = new Audio("")
// let gameover = new Audio("")
let turn = "X"

// Function to change turn
const changeturn = ()=>{
    return turn === "X"?"0": "X"
}

// Funtion to check for win
const checkwin = ()=>{

}

// Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innertext === ' '){
            boxtext.innertext = turn;
            changeturn();
            // audioturn.play;
            checkwin();
            document.getElementsByClassName("info")[0].innertext = "Turn for" + turn;
        }
    })
})