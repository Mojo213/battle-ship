const rows = 10;
const columns = 10;
const arrayBoard = Array.from(Array(rows), () => new Array(columns));

// let row = 2;
// let column = 0
// let shipLength = 3;
// let orientation = 'vertical'

function placeShipOnBoard(arrayBoard, ship, row, column, orientation) {
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
  
    if (cell && cell.ship) { 
        cell.ship.hit();
      arrayBoard[hitRow][hitColumn] = { ...cell, hit: true };  
      return 'ship has been hit';
    } else if (cell && cell.hit) {
      return 'This part of the ship has already been hit.';
    } else {
      return 'Missed the ship';
    }
  }
  
  module.exports = placeShipOnBoard;
    
  

  
