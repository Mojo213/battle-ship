const Gameboard = require('../src/gameboard'); 

function player(name) {
    let board = Gameboard();
    return {
        name,
        placeShip: (ship, row, column, orientation) => board.placeShipOnBoard(ship, row, column, orientation),
        attack: (opponent, row, column) => opponent.getBoard().receiveAttack(row, column), 
        getBoard: () => board,
    }
}





function rowGenerator (){
let hitRow = Math.floor(Math.random() * 10); 
return hitRow
}

function columnGenerator (){
let hitColumn = Math.floor(Math.random() * 10);
return hitColumn;
}

