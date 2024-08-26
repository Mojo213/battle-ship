const rows = 10;
const columns = 10;
const arrayBoard = Array.from(Array(rows), () => new Array(columns));

// let row = 2;
// let column = 0
// let firstCoordinate = arrayBoard
// let shipLength = 3;
// let orientation = 'vertical'

function placeShipOnBoard(row, column, shipLength, orientation) {
  for (let i = 0; i < shipLength; i++) {
    if (orientation === 'horizontal') {
      if (column + i < columns) {  
        arrayBoard[row][column + i] = 'ship';
      } else {
        return "Ship can't be placed out of bounds!";
      }
    } else if (orientation === 'vertical') {
      if (row + i < rows) {
        arrayBoard[row + i][column] = 'ship';
      } else {
        return "Ship can't be placed out of bounds!";
      }
    }
  }
  return arrayBoard; 
}
