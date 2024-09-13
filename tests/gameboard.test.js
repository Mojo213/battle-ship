const {placeShipOnBoard, receiveAttack } = require('../src/gameboard');
const createShip = require('../src/ship');


describe('gameBoard', () => {
    const rows = 10;
    const columns = 10;
    let arrayBoard;
    let row = 2;
    let column = 0;
    let ship = createShip(3); 

    beforeEach(() => {
        arrayBoard = Array.from(Array(rows), () => new Array(columns)); 
    });

    test('place ship on board horizontally', () => {
        let orientation = 'horizontal';

        const expectedBoard = Array.from(Array(rows), () => new Array(columns));
        expectedBoard[2][0] = { ship, part: 0 };
        expectedBoard[2][1] = { ship, part: 1 };
        expectedBoard[2][2] = { ship, part: 2 };

        placeShipOnBoard(arrayBoard, ship, row, column, orientation);
        expect(arrayBoard).toEqual(expectedBoard);
    });

    test('place ship on board vertically', () => {
        let orientation = 'vertical';

        const expectedBoard = Array.from(Array(rows), () => new Array(columns));
        expectedBoard[2][0] = { ship, part: 0 };
        expectedBoard[3][0] = { ship, part: 1 };
        expectedBoard[4][0] = { ship, part: 2 };

        placeShipOnBoard(arrayBoard, ship, row, column, orientation);
        expect(arrayBoard).toEqual(expectedBoard);
    });

    test('ship has been hit', () =>{
        placeShipOnBoard(arrayBoard, ship, row, column, 'horizontal')
        receiveAttack(arrayBoard, row, column);
        let cell = arrayBoard[row][column];
        expect(cell).toEqual({...cell, hit: true});
    })
    test('This part of the ship has already been hit.', () =>{
        placeShipOnBoard(arrayBoard, ship, row, column, 'horizontal');
        receiveAttack(arrayBoard, row, column);
        let result = receiveAttack(arrayBoard, row, column);
        expect(result).toBe('This part of the ship has already been hit.');
    })

    test('Missed the ship', () =>{
        placeShipOnBoard(arrayBoard, ship, row, column, 'horizontal');
        receiveAttack(arrayBoard, 1, 0);
        let result = receiveAttack(arrayBoard, 1, 0);
        expect(result).toBe('Missed the ship');
    })

});