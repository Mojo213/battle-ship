const Gameboard = require('../src/gameboard'); 
const player = require('../src/player');
const createShip = require('../src/ship');

describe('player', () => {
    let ship1;

    beforeEach(() => {
        ship1 = createShip(3);
    });

test('ship is placed correctly on the board', () => {
    let player2 = player('Mojo');
    player2.placeShip(ship1, 2, 0, 'horizontal');
    let boardState = player2.getBoard();
    expect(boardState[2][0]).toEqual({ ship: ship1, part: 0 });
});




// test('player can attack successfully', () => {

// });

});