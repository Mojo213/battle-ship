function Gameboard() {
    const rows = 10;
    const columns = 10;
    let arrayBoard = Array.from(Array(rows), () => new Array(columns));
    let missedAttacks = [];

    function placeShipOnBoard(ship, row, column, orientation) {
        for (let i = 0; i < ship.length; i++) {
            if (orientation === 'horizontal') {
                if (column + i < columns) {
                    arrayBoard[row][column + i] = { ship: ship, part: i };
                } else {
                    return "Ship can't be placed out of bounds!";
                }
            } else if (orientation === 'vertical') {
                if (row + i < rows) {
                    arrayBoard[row + i][column] = { ship: ship, part: i };
                } else {
                    return "Ship can't be placed out of bounds!";
                }
            }
        }
        return arrayBoard;
    }

    function receiveAttack(hitRow, hitColumn) {
        let cell = arrayBoard[hitRow][hitColumn];

        if (cell && cell.hit) {
            return 'This part of the ship has already been hit.';
        }
        if (cell && cell.ship) {
            cell.ship.hit();
            arrayBoard[hitRow][hitColumn] = { ...cell, hit: true };
            return 'Ship has been hit';
        } else {
            missedAttacks.push({ hitRow, hitColumn });
            return 'Missed the ship';
        }
    }

    function getMissedAttacks() {
        return missedAttacks;
    }

    function getBoard() {
        return arrayBoard;
    }

    return {
        placeShipOnBoard,
        receiveAttack,
        getMissedAttacks,
        getBoard
    };
}



module.exports = Gameboard;
    
  

  
