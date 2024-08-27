const placeShipOnBoard = require('../src/gameboard');

describe('gameBoard', () => {
test('place ship on board horizontally', () => {
    const rows = 10;
    const columns = 10;
    const arrayBoard = Array.from(Array(rows), () => new Array(columns));
    let row = 2;
    let column = 0
    let shipLength = 3;
    let orientation = 'horizontal'

    const expectedBoard = Array.from(Array(rows), () => new Array(columns));
    expectedBoard[2][0] = 'ship';
    expectedBoard[2][1] = 'ship';
    expectedBoard[2][2] = 'ship';

    placeShipOnBoard(arrayBoard, row, column, shipLength, orientation);
    expect(arrayBoard).toEqual(expectedBoard);
});
test('place ship on board vertically', () => {
    const rows = 10;
    const columns = 10;
    const arrayBoard = Array.from(Array(rows), () => new Array(columns));
    let row = 2;
    let column = 0
    let shipLength = 3;
    let orientation = 'vertical'

    const expectedBoard = Array.from(Array(rows), () => new Array(columns));
    expectedBoard[2][0] = 'ship';
    expectedBoard[3][0] = 'ship';
    expectedBoard[4][0] = 'ship';

    placeShipOnBoard(arrayBoard, row, column, shipLength, orientation);
    expect(arrayBoard).toEqual(expectedBoard);

});

})