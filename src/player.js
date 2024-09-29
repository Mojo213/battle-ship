const Gameboard = require('../src/gameboard'); 

function player (name, opponent){
    let board = Gameboard()
    return{
        name, name,
        playerBoard: board.getBoard,
        playerAttack: 
        
    }
}

function rowGenerator () {
let  hitRow = Math.floor(Math.random() * 11); 

 return hitRow
}

function columnGenerator(){
    let hitColumn = Math.floor(Math.random() * 11);
    return hitColumn;
}

// create a player function that takes the players name in this instance computer or player and first 
// give them the ability to have their own board the abilty to be attacked the ability to place ships
// abilty the have access to their own gameboard and all the gameboards methods and functionality 