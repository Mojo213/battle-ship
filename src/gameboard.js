function Gameboard() {
    const rows = 10;
    const columns = 10;
    let arrayBoard = Array.from(Array(rows), () => new Array(columns));
    let missedAttacks = [];
  
    function placeShipOnBoard(ship, row, column, orientation) {
      for (let i = 0; i < ship.length; i++) {
        if (orientation === 'horizontal') {
          if (column + i < columns) { 
            let cell = arrayBoard[row][column + i];
            if(!cell){
            arrayBoard[row][column + i] = { ship: ship, part: i };
            }else{return 'Ship already placed in coordinate'};
          } else {
            return "Ship can't be placed out of bounds!";
          }
        } else if (orientation === 'vertical') {
          if (row + i < rows) {
            let cell = arrayBoard[row + i][column];
            if(!cell){
            arrayBoard[row + i][column] = { ship: ship, part: i }
            }else{return 'Ship already placed in coordinate'};
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

        if (cell.ship.isSunk()) {
            return 'Ship has been sunk!';
        }
        
        return 'Ship has been hit';
      } else {
        missedAttacks.push({ hitRow, hitColumn });
        return 'Missed the ship';
      }
    }
  
    function areAllShipsSunk() {
      let ships = new Set();
      arrayBoard.flat().forEach((cell) => {
        if (cell && cell.ship) {
          ships.add(cell.ship);
        }
      });
      return [...ships].every(ship => ship.isSunk());
    }
  
    return {
      placeShipOnBoard,
      receiveAttack,
      areAllShipsSunk,
      getBoard: () => arrayBoard,
      getMissedAttacks: () => missedAttacks,
    };
  }
  
module.exports = Gameboard;
    
  

  
