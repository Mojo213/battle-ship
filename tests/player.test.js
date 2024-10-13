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
    let boardState = player2.getBoardState();
    expect(boardState[2][0]).toEqual({ ship: ship1, part: 0 });
});

test('player can attack successfully', () => {
    let player1 = player('Mojo');
    let player2 = player('Tom');
    player2.placeShip(ship1, 2, 0, 'vertical');
    player1.attack(player2, 3, 0);
    let boardState = player2.getBoardState();
    expect(boardState[3][0]).toEqual({ ship: ship1, part: 1, hit: true })
});

test('computer can attack', () => {
    let player1 = player('AI', true);
    let player2 = player('Mojo');
    player2.placeShip(ship1, 2, 0, 'vertical');
    player1.attack(player2);
    let player1BoardAttacks = player1.getAttacks();
    expect(player1BoardAttacks.size).toBeGreaterThan(0);
});

test('computer affects opponent\'s board', () => {
    let player1 = player('AI', true); 
    let player2 = player('Mojo');       
    player2.placeShip(ship1, 2, 0, 'vertical');
    player1.attack(player2);  
    let boardState = player2.getBoardState();  
    let player1Attacks = player1.getAttacks();
    let attackCoord = Array.from(player1Attacks)[0]; 
    let [row, column] = attackCoord.split(',').map(Number);  
    expect(boardState[row][column]).toBeDefined();  
});

});