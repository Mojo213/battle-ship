const Gameboard = require('../src/gameboard'); 

function player(name, isComputer = false) {
    let board = Gameboard();
    let attacks = new Set();
    return {
        name,
        placeShip: (ship, row, column, orientation) => board.placeShipOnBoard(ship, row, column, orientation),
        attack: (opponent, row, column) => {
            if (isComputer) {
                let attackCord;
                do {
                    row = rowGenerator();
                    column = columnGenerator();
                    attackCord = `${row},${column}`;  
                } while (attacks.has(attackCord));  
                
                attacks.add(attackCord); 
                return opponent.getBoard().receiveAttack(row, column);
            } else {
                return opponent.getBoard().receiveAttack(row, column);  
            }
        }, 
        getBoard: () => board,
    };
}

function rowGenerator (){
let hitRow = Math.floor(Math.random() * 10); 
return hitRow
}

function columnGenerator (){
let hitColumn = Math.floor(Math.random() * 10);
return hitColumn;
}

module.exports = player;