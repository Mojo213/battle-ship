const Gameboard = require('../src/gameboard'); 
const createShip = require('../src/ship'); 

describe('Gameboard', () => {
    let gameBoard;
    let ship;
    const row = 2;
    const column = 0;

    beforeEach(() => {
        gameBoard = Gameboard();
        ship = createShip(3);
    });

    test('place ship on board horizontally', () => {
        gameBoard.placeShipOnBoard(ship, row, column, 'horizontal');

        const expectedBoard = Array.from(Array(10), () =>  Array(10));
        expectedBoard[2][0] = { ship, part: 0 };
        expectedBoard[2][1] = { ship, part: 1 };
        expectedBoard[2][2] = { ship, part: 2 };

        expect(gameBoard.getBoard()).toEqual(expectedBoard);
    });

    test('place ship on board vertically', () => {
        gameBoard.placeShipOnBoard(ship, row, column, 'vertical');

        const expectedBoard = Array.from(Array(10), () =>  Array(10));
        expectedBoard[2][0] = { ship, part: 0 };
        expectedBoard[3][0] = { ship, part: 1 };
        expectedBoard[4][0] = { ship, part: 2 };

        expect(gameBoard.getBoard()).toEqual(expectedBoard);
    });

    test('ship has been hit', () => {
        gameBoard.placeShipOnBoard(ship, row, column, 'horizontal');
        gameBoard.receiveAttack(row, column);
        const cell = gameBoard.getBoard()[row][column];
        expect(cell).toEqual({ ship, part: 0, hit: true });
    });

    test('This part of the ship has already been hit.', () => {
        gameBoard.placeShipOnBoard(ship, row, column, 'horizontal');
        gameBoard.receiveAttack(row, column);
        const result = gameBoard.receiveAttack(row, column);
        expect(result).toBe('This part of the ship has already been hit.');
    });

    test('Missed the ship', () => {
        gameBoard.placeShipOnBoard(ship, row, column, 'horizontal');
        gameBoard.receiveAttack(1, 0);
        const result = gameBoard.receiveAttack(1, 0);
        expect(result).toBe('Missed the ship');
    });

    test('ships are not sunk', () => {
        let ship2 = createShip(3);
        gameBoard.placeShipOnBoard(ship, row, column, 'horizontal');
        gameBoard.placeShipOnBoard(ship2, 3, 0,'horizontal');
        gameBoard.receiveAttack(row, column);
        expect(gameBoard.areAllShipsSunk()).toBe(false);  
    });

    test('ship is not sunk after only one hit', () => {
        gameBoard.placeShipOnBoard(ship, row, column, 'horizontal');
        gameBoard.receiveAttack(row, column); 
        expect(ship.isSunk()).toBe(false); 
    });
    

    test('all ships are sunk after full attack', () => {
        gameBoard.placeShipOnBoard(ship, row, column, 'horizontal');
        gameBoard.receiveAttack(row, column);
        gameBoard.receiveAttack(row, column + 1);
        gameBoard.receiveAttack(row, column + 2);
        expect(gameBoard.areAllShipsSunk()).toBe(true); 
    });

    test('some ships are sunk', () => {
        let ship2 = createShip(4);
        gameBoard.placeShipOnBoard(ship, row, column, 'horizontal');
        gameBoard.placeShipOnBoard(ship2, 3, 0,'horizontal');
        gameBoard.receiveAttack(3, 0);
        gameBoard.receiveAttack(3, 1);
        gameBoard.receiveAttack(3, 2);
        gameBoard.receiveAttack(3, 3);
        expect(gameBoard.areAllShipsSunk()).toBe(false);
    });
 
    test('show coordinates of missed attack', () => {
        gameBoard.placeShipOnBoard(ship, row, column, 'horizontal');
        gameBoard.receiveAttack(1, 1);
        expect(gameBoard.getMissedAttacks()).toEqual([{"hitColumn": 1, "hitRow": 1}]);
    });

    test('check ships are not overlapping', () => {
        gameBoard.placeShipOnBoard(ship, row, column, 'horizontal');
        expect(gameBoard.placeShipOnBoard(ship,row, column, 'horizontal')).toBe('Ship already placed in coordinate');
    });
});
